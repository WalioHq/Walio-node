# Walio Node.js Client Library
Start integrating the Walio API into your node.js applications more easily 
with the Walio Client Library written in server-side Javascript.

## Documentation

For full API reference documentation, see the [**Walio API docs**](https://docs.walio.io);

## Requirements

Node 8, 10 or higher.

## Installation

Install the Walio client with:

```sh
npm install walio
# or
yarn add walio
```

## Usage

The Walio client needs to be configured with your merchant account's secret key, that can be found in your [**Walio Dashboard Developers sections**](https://walio.io). Require it with the key's value:

<!-- prettier-ignore -->
```js
const walio = require('walio')('sk_test_...');

walio.customers.create({
  name: 'John Smith',
  email: 'customer@example.com',
})
  .then(customer => console.log(customer.id))
  .catch(error => console.error(error));
```
### Using the `expand` feature

[**Expandable**](https://docs.walio.io/reference/expanding-responses) fields should be provided as an array of strings, and passed in to the options object for any of the functions. E.g.,


```js
// will return an invoice with the customer, discounts, tax_rates and last_payment fields exapanded:
const invoice = await walio.invoices.retrieve('inv_1Ada...Uqm4g',
{
  expand: [
    'customer',
    'discounts',
    'tax_rates',
    'last_payment'
  ]
}
```

You can also have fields expanded during Create or Update requests:

```js
// will return a newly created invoice with the customer field exapanded:
const invoice = await walio.invoices.create({
  customer: 'cus_1Aabc...UqmT1',
  currency: 'gbp',
  crypto_payment_currencies: ['BTC', 'BNB', 'ETH'],
  discounts: [ {discount: 'discount_1bT04B...ijS9Cie'} ],
  tax_rates: [ 'tax_1aab32...bb4Uup2' ],
  description: 'First invoice'
},
{
  expand: ['customer']
}
```

### Using Promises

You can create chainable promises for each method, instead of a regular callback:

```js
// Create a new customer and then create an invoice item then invoice it:
walio.customers
  .create({
    name: 'John Smith',
    email: 'customer@example.com',
  })
  .then((customer) => {
    // have access to the customer object
    return walio.invoiceItems
      .create({ // creates a pending invoice item for the customer
        customer: customer.id, // set the customer id
        amount: 2500, // £25.00
        currency: 'gbp',
        description: 'A one-time setup fee',
      })
      .then((invoiceItem) => {
        return walio.invoices.create({
          customer: customer.id,
          currency: 'gbp',
          crypto_payment_currencies: ['BTC', 'BNB', 'ETH'],
          description: 'First invoice',
          include_pending_items: true
        });
      })
      .then((invoice) => {
        // The new invoice created for the new customer
      })
      .catch((err) => {
        // Handle any errors
      });
  });
```

## Configuration

### Initializing with a config object

The Walio Client package can be initialized with several options:

```js
const walio = require('walio')('sk_test_...', {
  apiVersion: 'v1', // currently defaults to 'v1'
  timeout: 1000,
  livemode: true,
  host: 'api.example.com',
});

```

| Option              | Default            | Description                                                                                                                                                                                                                                       |
| ------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `apiVersion`        | `null`             | The Walio API version to be used. If none is set, the default version 'v1' will be used.                                                                                                                                                                                                                                                     |
| `timeout`           | 80000              | [Maximum time each request can take in ms.](#configuring-timeout)                                                                 
| `livemode`              | false                | If you are using the Client in a Production of Sandbox enviornment. It will affacet the default `host` that will be used.                                                                                                                    |
| `host`              | `'sandbox.walio.com'` or `'api.walio.io'` depending on the `livemode` value | The Walio host that requests are made to. When `livemode` is defined, if set to `true` will default to `'api.walio.io`' otherwise will default to `'sandbox.walio.io'`                                                                       

### Configuring Timeout

Timeout can be set globally via the config object:

```js
const walio = require('walio')('sk_test_...', {
  timeout: 1000,
});

```

And overridden on a per-request basis:

```js
walio.invoices.create(
  {
    customer: 'cus_...',
    currency: 'gbp',
  },
  {
    timeout: 1000, // 1 second
  }
);
```

### Examining Responses

Information about the response that was received from a method call is available
with the `lastResponse` property:

```js
invoice.lastResponse.requestId; // see: https://docs.walio.io/reference/request-ids
invoice.lastResponse.statusCode;
```

### Webhook signing

Walio creates a cryptographic signature for every webhook events it sends to your endpoint. This allows you to validate that they were not sent by a third-party. You can read more about it [here](https://docs.walio.io/reference/webhook-endpoints).

The Walio Client provides an easy Utility function to validate these webhook event signatures. E.g.:

```js

const webhookSecret = process.env.WH_SECRET;

const webhookEndpoint = (request, response) => {
  try {
    const event = request.body;
    const headers = request.headers;

    // will return a boolean value if the webhook event is legitimate.
    const verified = walio.utils.verifyWebhook(webhookSecret, headers, event);
  } catch (error) {
		// Handle the error
  }
}

```

Please note that you must pass the _raw_ request body, exactly as received from Walio, this will not work with a parsed (i.e., JSON) request body.


### Utility Tools

The Walio Client also provides some utility tools that may be useful to use within your application.

They include:

#### `format`

To format cryptocurrency and fiat values into the appropriate format for Walio. E.g.:

```js

const bitcoinValue = 0.05280000;
const walioCryptoValue = walio.utils.format('crypto', bitcoinValue);

console.log(walioCryptoValue) // will print 5280000

// With Fiat usage:
const usdPrice = 245.50 // $245.50
const walioFiatValue = walio.utils.format('fiat', usdPrice, 'usd');

console.log(walioFiatValue) // will print 24550

```

#### `unformat`

To unformat cryptocurrency and fiat values from the Walio used format back to their original format. E.g.:

```js

const walioBitcoinValue = 5280000;
const cryptoValue = walio.utils.unformat('crypto', walioBitcoinValue);

console.log(cryptoValue) // will print 0.05280000

// With Fiat usage:
const walioValue = 24550
const usdValue = walio.utils.unformat('fiat', walioValue, 'usd');

console.log(walioValue) // will print 245.50

```