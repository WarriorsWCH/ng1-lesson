
angular.module('app').controller('homeCtr',['$scope','$state',function($scope,$state){
	console.log(1);
	$scope.goNext = function(){
		console.log('next');
		$state.go('detail');
	}
}])
angular.module('app').controller('gameCtr',['$scope',function($scope){
	console.log(2)
}])
angular.module('app').controller('someCtr',['$scope',function($scope){
	console.log(3)
}])
angular.module('app').controller('myCtr',['$scope',function($scope){
	console.log(4)
}])

angular.module('app').controller('detailCtr',['$scope',function($scope){
	console.log(5)
}])











