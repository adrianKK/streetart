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
    Router.go(this.options.routeName, {
      page:getCurrentPage()+1
    })
  },
  'click .prev-page'(event, instance) {
    event.preventDefault();
    Router.go(this.options.routeName, {
      page:getCurrentPage()-1
    })
  }
});

function getCurrentPage() {
  var currentRouter = Router.current();
  var currentPage = currentRouter.params.page || 1;
  currentPage = parseInt(currentPage);

  return currentPage;
}


template.onRendered(function(){
  
  
  
  
});
