import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


var template = Template.paginator;

template.onCreated(function helloOnCreated() {
  // counter starts at 0
});

template.helpers({
  pages(){
    var i = this.options.counts/this.options.itemsPerPage;
    console.log(i)
    console.log(this)
    var pages = [];
    while(i) {
      pages.unshift(i);
      i--
    }
    return pages;

  }
});

template.events({
  'click .page'(event){
    event.preventDefault();
    Router.go('images', {
      page:this.toString()
    });
  },
  'click .next-page'(event, instance) {
    event.preventDefault();
    var currentRouter = Router.current();

    Router.go(this.options.routeName, {
      page:getNextPage()
    },{
      query:currentRouter.params.query
    })
  },
  'click .prev-page'(event, instance) {
    event.preventDefault();
    var currentRouter = Router.current();
    Router.go(this.options.routeName, {
      page:getPrevPage()
    },{
      query:currentRouter.params.query
    })
  }
});


function getPrevPage() {

  var currentPage = getCurrentPage();
  var prevPage = currentPage-1;
  if(currentPage <= 1) {
    prevPage = Counts.get('image_counts')
  }

  return prevPage;

}
function getNextPage() {

  var currentPage = getCurrentPage();
  var nextPage = currentPage+1;
  if(currentPage >= Counts.get('image_counts')) {
    nextPage = 1
  }

  return nextPage;

}

function getCurrentPage() {
  var currentRouter = Router.current();
  var currentPage = currentRouter.params.page || 1;
  currentPage = parseInt(currentPage);

  return currentPage;
}


template.onRendered(function(){
  
  
  
  
});
