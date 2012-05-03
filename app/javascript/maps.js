(function() {
  var Map;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.Map = Map = (function() {

    __extends(Map, Backbone.View);

    function Map() {
      Map.__super__.constructor.apply(this, arguments);
    }

    Map.prototype.initialize = function() {
      _.bindAll(this);
      $('#wherebutton').click(this.find_location);
      this.geocoder = new google.maps.Geocoder();
      return navigator.geolocation.getCurrentPosition(this.geocode_success_callback, this.geo_error);
    };

    Map.prototype.geocode_success_callback = function(location) {
      console.log(location);
      this.location = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
      return this.render();
    };

    Map.prototype.geo_error = function(error) {
      return alert(error);
    };

    Map.prototype.dispose = function() {
      this.$el.hide();
      return console.log('cleaned up maps, goodbye!');
    };

    Map.prototype.render = function() {
      var myOptions;
      this.$el.show();
      myOptions = {
        zoom: 10,
        center: this.location,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      return this.map = new google.maps.Map(document.getElementById('map_area'), myOptions);
    };

    Map.prototype.find_location = function(eve) {
      var address_string, self;
      eve.preventDefault();
      address_string = $('#where_box').val();
      self = this;
      return this.geocoder.geocode({
        'address': address_string
      }, function(results, status) {
        var marker;
        if (status === google.maps.GeocoderStatus.OK) {
          self.map.setCenter(results[0].geometry.location);
          return marker = new google.maps.Marker({
            map: self.map,
            position: results[0].geometry.location
          });
        } else {
          return alert("Geocode was not successful for the following reason: " + status);
        }
      });
    };

    return Map;

  })();

}).call(this);
