﻿app.controller('InfinityScrollController', function ($scope, InfinityScrollService) {
    $scope.CurrentPage = 1;
    $scope.TotalPage = 0;
    $scope.EmployeeList = [];
    
    function GetEmployeeData(page) {
        InfinityScrollService.GetTableData(page).then(function (response) {
            angular.forEach(response.data.List, function (value) {
                $scope.EmployeeList.push(value);
            });
            $scope.IsLoading = false;
            $scope.TotalPage = response.data.totalPage;
        }, function () {
            $scope.IsLoading = false;
        });
    }

    GetEmployeeData($scope.CurrentPage);

    $scope.NextPage = function () {
        if ($scope.CurrentPage < $scope.TotalPage) {
            $scope.CurrentPage += 1;
            GetEmployeeData($scope.CurrentPage);
        }
    }
});

app.directive('infinityscroll', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('scroll', function () {
                if ((element[0].scrollTop + element[0].offsetHeight) == element[0].scrollHeight) {
                    scope.$apply(attrs.infinityscroll);
                }
            });
        }
    }
});