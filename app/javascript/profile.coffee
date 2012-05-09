window.Profile_view = class Profile extends Backbone.View
	
	events:
		'click button#save' : 'save_profile'

	initialize: ->
		_.bindAll @
	
	render: ->
		@template = _.template($('#profile_template').html())
		$(@el).html(@template(@model.toJSON()))
		
		#go through collection of fields and set values from model to form
	save_profile: ->
		#serialize form values to JSON
		# @model.set( json)
		# save to local storage @model.save()

window.Profile_model = class Profile extends Backbone.Model
	defaults:
		name: 'joe bob'
		location: '51 W 5th st , Columbus, OH 43202'
		passion: 'coffee'
