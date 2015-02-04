Session.setDefault('itemsLimit', config.ITEMS_INCREMENT);
Deps.autorun(function () {
  Meteor.subscribe('items', Session.get('itemsLimit'));
});