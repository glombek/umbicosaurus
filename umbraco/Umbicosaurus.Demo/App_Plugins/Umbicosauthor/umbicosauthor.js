function UmbicosauthorDashboardController($scope, $controller, $http) {
    var vm = this;

    vm.thesaurus = undefined;
    vm.sorted = undefined;

    vm.idx = 0;
    vm.currentIcon = null;

    $http.get('/App_Plugins/Umbicosaurus/thesaurus.json')
        .then(function (data) {
            vm.thesaurus = data.data;

            vm.sorted = [];
            for (const key in vm.thesaurus) {
                if (key[0] != '$') {
                    vm.sorted.push({ name: key, info: vm.thesaurus[key] });
                }
            }
            vm.sorted = vm.sorted.sort(function (a, b) {
                return (a.info.thesaurus.length + Math.random() + (a.info.group != '')) - (b.info.thesaurus.length + Math.random() + (b.info.group != ''));
            });

            pickIcon();
        });

    $http.get('/App_Plugins/Umbicosauthor/thesaurus.schema.json')
        .then(function (data) {
            vm.schema = data.data;
        });

    //$scope.$watch('vm.thesaurus', function () {
        
    //    console.log(vm.sorted);
    //});

    function pickIcon() {
        vm.currentIcon = vm.sorted[vm.idx];
        vm.category = vm.currentIcon.info.group;
        vm.thesaurusEntries = vm.currentIcon.info.thesaurus.join('\n');
    }

    vm.save = function () {
        vm.currentIcon.info.thesaurus = vm.thesaurusEntries.split('\n')
        vm.currentIcon.info.group = vm.category;
        vm.thesaurus[vm.currentIcon.name] = vm.currentIcon.info;

        vm.idx++;
        pickIcon();
    };

    vm.export = function () {
        var filename = 'thesaurus.json'
        var blob = new Blob([angular.toJson(vm.thesaurus, true, 2)], { type: 'text/plain' });
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, filename);
        } else {
            var e = document.createEvent('MouseEvents'),
                a = document.createElement('a');
            a.download = filename;
            a.href = window.URL.createObjectURL(blob);
            a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
            e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
            // window.URL.revokeObjectURL(a.href); // clean the url.createObjectURL resource
        }
    }
}

angular.module('umbraco').controller('Umbicosaurus.Dashboards.UmbicosauthorDashboardController', UmbicosauthorDashboardController);