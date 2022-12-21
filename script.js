var app=angular.module('Service',[]);
app.controller('myCtrl',function($scope,$http){
    $http.get("data.json")
    .then(function(response) {
        $scope.datas=response.data;
    })
});