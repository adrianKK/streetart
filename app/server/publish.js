

Meteor.publish('foo_bar',function(name){


    return Rabbit.find({name:name});
});


Meteor.publish('images',function(page, sort_by){
    if(!page) {
        page = 1;
    }

    var limit = 1;
    var skip = page-1;
    var sortBy = {uploadedAt:-1};
    if(sort_by) {
        sortBy = {}
        sortBy[sort_by] = -1
    }

    return Images.find({},{
        skip:skip,
        limit:1,
        sort:sortBy
        })
});

Meteor.publish('images_by_userId',function(userId){

    return Images.find({'metadata.owner':userId},{
        sort:{uploadedAt:-1}

    })
});


Meteor.publish('set_counts', function() {

    Counts.publish(this, 'image_counts', Images.find());
    
    return undefined;
    
});
