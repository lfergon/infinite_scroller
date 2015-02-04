Meteor.publish('items', function (limit) {
  return items.find({}, { limit: limit });
});  