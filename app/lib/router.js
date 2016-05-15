Router.configure({
    layoutTemplate: 'homeLayout'
});



Router.route('/', {
    name:'home',
    action:function(){
        this.render('home')
    }
});



Router.route('/test', {
    name:'test',
    action:function(){
        this.render('test')
    }
});


Router.route('/user/:_id', {
    name:'user',
    waitOn:function(){
        return [
            Meteor.subscribe('images_by_userId', this.params._id)
        ]
    },
    action:function(){
        var images=  Images.find({'metadata.owner': this.params._id},{sort:{uploadedAt:-1}}).fetch();
        this.render('user_profile',{
            data:{
                images:images
            }
        })
    }
});
Router.route('/images/:page?', {
    name:'images',
    waitOn:function(){
        var query = Router.current().params.query;
        return [
            Meteor.subscribe('set_counts'),
            Meteor.subscribe('images', parseInt(this.params.page) || 1, query.sort_by)
        ]
    },
    action:function(){
        this.render('images',{
            data: {
                image: Images.findOne()
            }
        })
    }
});
