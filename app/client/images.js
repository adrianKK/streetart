import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


var template = Template.images;

template.onCreated(function helloOnCreated() {
    // counter starts at 0
});

template.helpers({
    paginatorOptions(){
        return {
            routeName: 'images'
        }
    }
});

template.events({

    'click button'(event, instance) {
    },
});


template.onRendered(function(){




});
