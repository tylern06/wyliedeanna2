myAppModule.controller('mainCtrl', function($scope, mainFactory, $location, $sce) {
	$scope.images = [];
	mainFactory.getImages(function(data){
		console.log("All images:", data );
		$scope.images = data;
	})

	//add for html src
	// for (var i = 0; i < $scope.images.length; i++) {
	// 	$scope.images[i] = $sce.trustAsResourceUrl($scope.images[i]);
	// }
})

myAppModule.directive('lightgallery', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      if (scope.$last) {
				console.log('enter lightGallery directive');
        // ng-repeat is completed
				// element.justifiedGallery();
				// element.parent().justifiedGallery();
        element.parent().lightGallery();

        setTimeout(function(){
          element.parent().justifiedGallery({
            border: 6,
            rowHeight: 150,
            margins: 10
          });
        }, 100);

      }
    }
  };
});

// myAppModule.directive('repeatDone', [function () {
//   return {
//     restrict: 'A',
//      link: function (scope, element, iAttrs) {
//           var parentScope = element.parent().scope();
//           if (scope.$last){
//                parentScope.$last = true;
//           }
//         }
//       };
// }]);
