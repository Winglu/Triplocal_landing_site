PrelanuchClient.Router.map(function () {
  // Add your routes here
  this.resource('index' , { path: '/index' });
  this.resource('index' , { path: '/' });
  this.route('welcome' , { path: '/welcome/:id' });
  
  //this.route("index", { path: "/index" });
  //this.route("welcome", { path: "/welcome" });
});
