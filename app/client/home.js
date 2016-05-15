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
        FS.Utility.eachFile(event, function(file) {
            var fileObj = new FS.File(file);
            fileObj.metadata = { owner: Meteor.userId() };
            Images.insert(fileObj,function(err,r){

                if(err) {
                    swal({   title: "Error!",   text: err,   type: "error",   confirmButtonText: ":-(" });
                }else {
                    swal({   title: "Success!",   text: 'uploaded!!!',   type: "success",   confirmButtonText: "cool" });

                }

            });
        });
    }

});


template.onRendered(function(){




});
