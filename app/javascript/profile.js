(function() {
  var Profile;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.Profile_view = Profile = (function() {

    __extends(Profile, Backbone.View);

    function Profile() {
      Profile.__super__.constructor.apply(this, arguments);
    }

    Profile.prototype.events = {
      'click button#save': 'save_profile'
    };

    Profile.prototype.initialize = function() {
      _.bindAll(this);
      this.render();
      return 'blah';
    };

    Profile.prototype.render = function() {
      console.log('AAAAAAAAAAAAAAA');
      this.template = _.template($('#profile_template').html());
      return $(this.el).html(this.template({}));
    };

    Profile.prototype.save_profile = function(eve) {
      console.log('save save!!');
      return eve.preventDefault();
    };

    return Profile;

  })();

  window.Profile_model = Profile = (function() {

    __extends(Profile, Backbone.Model);

    function Profile() {
      Profile.__super__.constructor.apply(this, arguments);
    }

    Profile.prototype.defaults = {
      name: 'joe bob',
      location: '51 W 5th st , Columbus, OH 43202',
      passion: 'coffee'
    };

    return Profile;

  })();

}).call(this);
