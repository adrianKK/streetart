import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


var template = Template.images;

template.onCreated(function helloOnCreated() {
    // counter starts at 0
});

template.helpers({
    getLikes(){
      if(this.likes) {
          return this.likes.length
      }else {
          return 0;
      }
    },
    paginatorOptions(){
        return {
            routeName: 'images',
            itemsPerPage:1,
            counts: Counts.get('image_counts')
        }
    }
});

template.events({

    'click .like-image'(event, instance) {
        Meteor.call('image.like',this._id,function(e,r){
            console.log(e,r)
        })
    },
});


template.onRendered(function(){




});
