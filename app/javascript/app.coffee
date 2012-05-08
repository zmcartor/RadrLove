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
		this.bind('route' , (e) ->
			console.log 'fired!' , e
		)
		
		#make these just links, duhh. REFACTOR DUDE
		$('#settings').on 'click' ,() -> self.settings()
		$('#map').on 'click' , () -> self.maps()
		$('#stalk').on 'click' , () -> self.places()
		$('#profile').on 'click' , () -> self.profile()
	

	#between each route, clean up screens.
	prepare_route: (name) ->
		#based on the template name
		$('.main_window').empty();
		$('.main_window').append($(name+'_template').html())

	settings: ->
		@prepare_route('settings')
		
	maps: ->
		@prepare_route('maps')
		@goog_map = new Map(el: $('#map_area'))
	
	places: ->
		console.log 'showing some places'

	profile: ->
		console.log "profile!!"

window.App = {}
window.start_router = ->
	window.App.Router = new Router();
	Backbone.history.start(pushState: true);
	true
