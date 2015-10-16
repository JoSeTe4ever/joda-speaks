services.factory("jodaTextResource", ["$http", function($http) {

    // it returns an exposed API.
    var FINAL_API_URL = 'https://yoda.p.mashape.com/yoda?sentence=';
    return {
        jodaTalks: jodaTalks
    };

    function jodaTalks(encodedText) {
        var configHeaders = {
            headers: {
                'Accept': 'v',
                'X-Mashape-Key': 'M1KccTAioumshASRIvSyBSmSVvNMp1bYAU9jsn5uMoQOEcPzA9' // this is a key provided by mashape API 
            }

        };

        return $http.get(FINAL_API_URL + encodedText, configHeaders).then(function(jodaSpeech) {
            return jodaSpeech;
        }, function() {
            throw new Error("Error Retrieving the joda speech");
        });
    }

}]);