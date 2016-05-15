import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


var template = Template.paginator;

template.onCreated(function helloOnCreated() {
  // counter starts at 0
});

template.helpers({
});

template.events({
  'click .next-page'(event, instance) {
    event.preventDefault();
      var currentRouter = Router.current();
      var currentPage = currentRouter.params.page;
      Router.go(this.options.routeName, {
        page:currentPage+1
      })
  },
  'click .prev-page'(event, instance) {
    event.preventDefault();

    var currentRouter = Router.current();
    var currentPage = currentRouter.params.page;

    Router.go(this.options.routeName, {
      page:currentPage-1
    })
  }
});


template.onRendered(function(){
  
  
  
  
});
