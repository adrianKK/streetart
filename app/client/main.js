import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

var template = Template.hello;

template.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  
  Meteor.subscribe('foo_bar', 'peterTheRabbit');
  Meteor.subscribe('images')
});

template.helpers({
  images(){
      return Images.find()
  },
  rabbits:function(){
      return Rabbit.find();
  },
  counter() {
    return Template.instance().counter.get();
  },
});

template.events({
  'change #upload-image': function(event) {
    var files = event.target.files;
    for (var i = 0, ln = files.length; i < ln; i++) {
      Images.insert(files[i], function (err, fileObj) {
        console.log(err,fileObj);
      });
    }
  },

  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});


template.onRendered(function(){
  
  
  
  
});
