window.Map = class Map extends Backbone.View
	
	initialize: ->
		_.bindAll @
		
		#not part of @el. maybe refactor this..
		$('#wherebutton').click @find_location

		@geocoder = new google.maps.Geocoder();
		navigator.geolocation.getCurrentPosition @geocode_success_callback, @geo_error
		#show like a little gif or something while location is determined.

	geocode_success_callback: (location) ->
		@location = new google.maps.LatLng location.coords.latitude, location.coords.longitude
		@render()

	geo_error: (error) ->
		alert error
	
	render: ->
		@$el.show()
		myOptions =
			zoom: 10,
			center: @location,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		@map = new google.maps.Map(document.getElementById('goog_map') , myOptions);

	#use this stuff later to geocode and center on an address. Pretty cool! :)
	find_location: (eve) ->
		eve.preventDefault()
		address_string = $('#where_box').val()

		self = @ # beware @ within the geocoder context refers to window obj
		@geocoder.geocode('address': address_string, (results, status) ->
			if status == google.maps.GeocoderStatus.OK
				self.map.setCenter(results[0].geometry.location)
				marker = new google.maps.Marker(map: self.map, position: results[0].geometry.location)
			else
				#make a better alert mechanism for this ..
				alert("Geocode was not successful for the following reason: " + status)
		)
