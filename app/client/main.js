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
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});


template.onRendered(function(){
  
  
  
  
});
