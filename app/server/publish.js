

Meteor.publish('foo_bar',function(name){


    return Rabbit.find({name:name});
});


Meteor.publish('images',function(page){
    if(!page) {
        page = 1;
    }

    var limit = 1;
    var skip = page-1;

    return Images.find({},{
        skip:skip,
        limit:1
        })
});
