app.service('InfinityScrollService', function ($http) {
    this.GetTableData = function (page) {
        var response = $http({
            method: 'GET',
            url: '/Test/GetSampleData',
            params: { 'page': page },
        });
        return response;
    }
});