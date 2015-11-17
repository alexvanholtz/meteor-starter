Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundtemplate: 'notFound',
  waitOn: function() {
   
  }
});

Router.map(function(){

  this.route('main', {
    path: '/',
    template: 'main' 
  });


});