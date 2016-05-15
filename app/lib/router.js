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
Router.route('/images/:page?', {
    name:'images',
    waitOn:function(){
        return [
            Meteor.subscribe('images', parseInt(this.params.page) || 1)
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
