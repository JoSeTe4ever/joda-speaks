angularApp.controller('angularController', ['$scope', 'jodaTextService', function($scope, jodaTextService) {
	

	$scope.text = {
		speech: "",
		jodaSpeech: ""
	};

	$scope.getJodaText = function(text) {
		jodaTextService.jodaTalks(text).then(function(response) {
			// the response looks like this  {data: "Test, hi this is.  ", status: 200, config: Object, statusText: "OK"}
			$scope.text.jodaSpeech = response.data;
		});

	};

}]);