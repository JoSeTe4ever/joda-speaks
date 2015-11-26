

describe("angularController", function() {
	var createAngularController, $scope, jodaTextService;

	beforeEach(module("angularApp","jodaTextService.mock"));

	beforeEach(inject(["$controller", "$rootScope", "jodaTextService",
		function($controller, $rootScope_, jodaTextService_) {

			$scope = $rootScope_.$new();
			jodaTextService = jodaTextService_;
			console.log("estoy aqui");
			createAngularController = function() {
				var controller = $controller('angularController', {
					$scope: $scope
				});
				$scope.$apply();
				return controller;
			};
		}
	]));


	describe("$scope", function() {
		describe("getJodaText", function() {
			it("must be filled with the data returned by jodaTextService", function() {
				// Arrange
				var responseMock = {
					data: "Test, hi this is.  ",
					status: 200,
					config: {},
					statusText: "OK"
				}

				//Act 


				//Assert

			});

			it("must be an empty object if the jodaTextService returns an error", function() {
				// Arrange

				//Act 


				//Assert

			});


		});
	});
});