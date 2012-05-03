(function() {
  var Router;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Router = (function() {

    __extends(Router, Backbone.Router);

    function Router() {
      Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.routes = {
      'settings': 'settings',
      'profile': 'profile',
      'maps': 'maps',
      'places': 'places'
    };

    Router.prototype.initialize = function() {
      var self;
      console.log('starting up the router');
      self = this;
      $('#settings').on('click', function() {
        return self.settings();
      });
      $('#map').on('click', function() {
        return self.maps();
      });
      $('#stalk').on('click', function() {
        return self.places();
      });
      return $('#profile').on('click', function() {
        return self.profile();
      });
    };

    Router.prototype.settings = function() {
      console.log("settings!");
      return this.goog_map.dispose();
    };

    Router.prototype.maps = function() {
      return this.goog_map = new Map({
        el: $('#map_area')
      });
    };

    Router.prototype.places = function() {
      return console.log('showing some places');
    };

    Router.prototype.profile = function() {
      return console.log("profile!!");
    };

    return Router;

  })();

  window.App = {};

  window.start_router = function() {
    window.App.Router = new Router();
    Backbone.history.start({
      pushState: true
    });
    return true;
  };

}).call(this);
