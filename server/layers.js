Layers = new Meteor.Collection('layers');
Meteor.publish("layers", function () {
  return Layers.find();
});
