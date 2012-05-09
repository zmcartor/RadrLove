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
      return _.bindAll(this);
    };

    Profile.prototype.render = function() {
      this.template = _.template($('#profile_template').html());
      return $(this.el).html(this.template(this.model.toJSON()));
    };

    Profile.prototype.save_profile = function() {};

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
