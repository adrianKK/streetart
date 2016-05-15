

Meteor.startup(function(){


    var rabbitsData = Rabbit.find({}).fetch();

    console.log(rabbitsData)

});
