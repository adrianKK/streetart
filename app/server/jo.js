Images.find().observe({

    added:function(doc){
        console.log('new IMAGE!!!');

        console.log(doc)
    }
});

process.env.MAIL_URL="smtp://operator6000%40gmail.com:yyyyy@smtp.gmail.com:465/";

function sendEmails (excludeIds, doc){

    Meteor.users.find({
        _id:{$ne: excludeIds}
    }).forEach(function(user){


        Emails.send({
            to: user.email,
            subject:'new Image!',
            txt:'we got a new image!!! checkout http://streetart.com/images/id/'+doc._id,
            from:'info@streetart.com'
        })
    })
}
