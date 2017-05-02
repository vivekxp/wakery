angular.module("cakes.service", [])
    .service("CakesService", function ($http) {
        var SERVER_URI = "http://52.31.91.48:5000/api/cakes";
        var serviceMethods = {
            list: function () {
                return $http({ method: 'GET', url: SERVER_URI });
            },
            create: function (cake) {
                return $http({ method: 'POST', url: SERVER_URI, data: cake });
            },
        };
        return serviceMethods;
    });