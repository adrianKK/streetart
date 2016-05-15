Rabbit = new Mongo.Collection('rabbit');



Rabbit.allow({
    insert: function (userId, doc) {
        return false;
    },
    update: function (userId, doc, fields, modifier) {
        return false;
    },
    remove: function (userId, doc) {
        return false;
    }
});



var imageStore = new FS.Store.GridFS("images", {
    mongoUrl: 'mongodb://127.0.0.1:3001/meteor/'
});

Images = new FS.Collection("images", {
    stores: [imageStore]
});





Images.allow({
    insert: function (userId, doc) {
        if(userId) {
            if(!doc.metadata || doc.metadata.owner !== userId) {
                return false;
            }
            
            var currentUploads = Images.find({
                'metadata.owner': userId,
                uploadedAt: {$gt: new Date(moment().format('MM.DD.YYYY'))}
            }).count();

            if(currentUploads >= 100) {
                return false;
            }

            return true
        }
    },
    update: function (userId, doc, fields, modifier) {
        return true;
    },
    remove: function (userId, doc) {
        return false;
    },
    download:function(userId){
        return true;
    }
});
