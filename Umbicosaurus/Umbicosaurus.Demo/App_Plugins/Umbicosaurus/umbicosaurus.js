function UmbicosaurusPickerController($scope, $controller, $http) {
    var vm = this;

vm.base = $controller('Umbraco.Editors.IconPickerController', { $scope });

angular.extend(vm, vm.base);

$scope.$watch("vm.base", function (newValue, oldValue) {
    if (newValue.loading != oldValue.loading) {
        vm.loading = newValue.loading;
    }
    if (newValue.icons != oldValue.icons) {
        vm.icons = newValue.icons;
        supplementData();
    }
}, true);

vm.thesaurus = undefined;

function supplementData() {
    if (!vm.thesaurus || !vm.icons || vm.icons.length === 0) {
        //we're not ready yet
        return;
    }

    vm.icons.forEach(function (e) {
        angular.extend(e, vm.thesaurus[e.name]);

        //this slows filtering significantly and isn't used here
        delete e.SvgString;

        //stops this icon showing up in searches for related icons
        delete e.related;
    });
}

$http.get('/App_Plugins/Umbicosaurus/thesaurus.json')
    .then(function (data) {
        vm.thesaurus = data.data;
        supplementData();
    });

console.log(vm);
}

angular.module('umbraco').controller('Umbicosaurus.Editors.IconPickerController', UmbicosaurusPickerController);

angular.module('umbraco.services').config([
'$httpProvider',
function ($httpProvider) {

    $httpProvider.interceptors.push(['$q', '$injector', 'notificationsService', function ($q, $injector, notificationsService) {
        return {
            'request': function (request) {

                // Redirect any requests to built in icon picker to our custom icon picker
                if (request.url.indexOf("views/common/infiniteeditors/iconpicker/iconpicker.html") === 0) {
                    request.url = '/App_Plugins/Umbicosaurus/umbicosaurus.iconpicker.html';
                }

                return request || $q.when(request);
            }
        };
    }]);

}]);