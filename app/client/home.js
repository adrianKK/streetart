import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


var template = Template.home;

template.onCreated(function helloOnCreated() {
    // counter starts at 0
});

template.helpers({
});

template.events({
    'change #upload-image': function(event) {
        var files = event.target.files;
        for (var i = 0, ln = files.length; i < ln; i++) {
            Images.insert(files[i], function (err, fileObj) {
                console.log(err,fileObj);
            });
        }
    }

});


template.onRendered(function(){




});
