class Router extends Backbone.Router
	routes:
		'settings' : 'settings'
		'profile' : 'profile'
		'maps' : 'maps'
		'places': 'places'

	initialize: ->
		console.log 'starting up the router'
		#setup our nav links at the bottom to point to various router funcs
		self = @
		
		#make these just links, duhh. REFACTOR DUDE
		$('#settings').on 'click' ,() -> self.settings()
		$('#map').on 'click' , () -> self.maps()
		$('#stalk').on 'click' , () -> self.places()
		$('#profile').on 'click' , () -> self.profile()
	

	#between each route, clean up screens.
	prepare_route: (name) ->
		#based on the template name
		$('.main_window').empty();
		$('.main_window').append($('#'+name+'_template').html())

	settings: ->
		@prepare_route('settings')
		
	maps: ->
		@prepare_route('maps')
		@goog_map = new Map(el: $('#map_area'))
	
	places: ->
		@prepare_route('places')
		console.log 'showing some places'

	profile: ->
		@prepare_route('no_thanks')
		#read from LS
		my_profile = new Profile_model
		pv = new Profile_view(el:$('.main_window'), model:my_profile)

window.App = {}
window.start_router = ->
	window.App.Router = new Router();
	Backbone.history.start(pushState: true);
	true
