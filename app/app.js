(function() {
	var app = angular.module('myApp', []);
	app.controller('appCtrl', function($scope){
	
	

	$scope.saved = localStorage.getItem('todos');
	$scope.items = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [ {text: 'First item with custom name', done: false,comments:[{body:'dsaddsadasda',color:'#fff343'},{body:'dsaddsadasda',color:'#fff3'}]}];
	localStorage.setItem('todos', JSON.stringify($scope.items));
	//console.log($scope.saved);

	$scope.idItem=0;

    $scope.selectItem = function(setItem){
       //return setItem;
      $scope.idItem=setItem;  
       
    };

    $scope.isSelected = function(checkTab){
      return $scope.idItem === checkTab;
    };

	$scope.addTodo = function() {
		$scope.items.push({
			text: $scope.todoText,
			done: false,
			comments:[]
		});
		$scope.todoText = ''; //clear the input after adding
		localStorage.setItem('todos', JSON.stringify($scope.items));
	};

	$scope.addComm = function() {
		var id=$scope.idItem, clrComment;
		clrComment=($scope.items[id].comments.length%2)?'#ff8a00':'#47568c';

		$scope.items[id].comments.push({
			body: $scope.commText,
			color: clrComment
		});
		$scope.commText = ''; //clear the input after adding
		localStorage.setItem('todos', JSON.stringify($scope.items));
	};
	

	$scope.archive = function(ind) {
		var oldTodos = $scope.items;
		console.log(oldTodos[ind]);
		oldTodos[ind].done=true;
		$scope.items = [];
		angular.forEach(oldTodos, function(todo){
			if (!todo.done)
				$scope.items.push(todo);
		});
		localStorage.setItem('todos', JSON.stringify($scope.items));
	};
	
	});
	
})();



