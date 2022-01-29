'use strict';

// ResourceNamespace allows you to create nested resources, i.e. `stripe.issuing.cards`.
// It also works recursively, so you could do i.e. `stripe.billing.invoicing.pay`.

function Namespace(walio, resources) {
  for (const name in resources) {
    const camelCaseName = name[0].toLowerCase() + name.substring(1);

    const resource = new resources[name](walio);

    this[camelCaseName] = resource;
  }
}

module.exports = function(namespace, resources) {
  return function(walio) {
    return new Namespace(walio, resources);
  };
};

module.exports.Namespace = Namespace;