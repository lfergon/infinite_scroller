// generate dummy content
Meteor.startup(function () {
  if (items.find().count() === 0) {
    for (i = 0; i <= 5000; i++) {
      items.insert({
        name: Fake.sentence(6),
        desc: Fake.paragraph(3)
      });
    }
  }
});