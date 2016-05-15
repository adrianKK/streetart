

Meteor.publish('foo_bar',function(name){


    return Rabbit.find({name:name});
});


Meteor.publish('images',function(){

    return Images.find()
})
