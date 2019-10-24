angular.module('app.listagem', ['ngRoute']).controller('UfListagemController', ['$scope', '$http', '$location', 'urls', '$filter', function (scope, http, location, urls, filter) {

    scope.vm = {};
    scope.errorMessage = '';
    scope.successMessage = '';

    scope.inicializar = () => {
        scope.vm.ufs = [];
        scope.vm.uf = {};
        findAll();
    };

    scope.salvar = (uf) => {
        scope.reset();
        http.post(urls.USER_SERVICE_API, uf).then(() => {
            findAll();
            scope.successMessage = uf.id ? 'Unidade Federativa Alterada' : 'Unidade Federativa Cadastrada';
        }).catch(response => {
            scope.errorMessage = response.data.errors.toString();
            console.log(response);
        });
    };

    function findAll(){
        http.get(urls.USER_SERVICE_API + "findAll").then((retorno) => {
            scope.vm.ufs = retorno.data;
        });
    }

    scope.editUf = (id) => {
        http.get(urls.USER_SERVICE_API + id).then((retorno) => {
            scope.vm.uf = retorno.data;
            scope.vm.uf.dataHora =  new Date(retorno.data.dataHora);
        });
    };


    scope.delete = (id) => {
        http.delete(urls.USER_SERVICE_API + id).then(() => {
            findAll();
            scope.successMessage = 'Unidade Federativa Removida';
        });
    };

    scope.reset = () => {
       scope.vm.uf = {};
       scope.errorMessage = '';
       scope.successMessage = '';
    }
}]);