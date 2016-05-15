


Accounts.onCreateUser(function(options, user) {

    user.email = getUsersEmail(user);

    var currentUser = Meteor.users.findOne({email: user.email});

    if(currentUser && !currentUser.services.facebook) {
        currentUser.services.facebook = user.services.facebook;
        Meteor.users.remove({_id: currentUser._id})
        user = currentUser;
    }




    return user;
});



function getUsersEmail (user) {

    if(user.emails && user.emails.length) {
        return user.emails[0].address;
    }

    if(user.services.facebook && user.services.facebook) {
        return user.services.facebook.email
    }






}
