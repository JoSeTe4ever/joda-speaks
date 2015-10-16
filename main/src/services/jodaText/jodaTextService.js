services.factory("jodaTextService" , ["jodaTextResource" , function(jodaTextResource) {
	// exposed API
	return {
		jodaTalks : jodaTalks
	};

	 function jodaTalks(text) {
		return jodaTextResource.jodaTalks(text);
	};

}]);