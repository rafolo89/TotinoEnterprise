angular.module('app.controllers', [])


        /*$ionicPopup.alert({
         title: 'S.P.E.C. Srl',
         template: "Problemi con il server...Riprovare più tardi"
         });
         var values={
         "email": paziente,
         "type": tipo,
         "state": stato,
         "nome": nome,
         "cognome": cognome
         };
         $cookies.putObject('account', data);
         $cookies.getObject('account').email
         **/

        .controller('SPECSrlCtrl', ['$scope', '$stateParams', '$http', '$ionicPopup', '$cookies', '$location',
            function ($scope, $stateParams, $http, $ionicPopup, $cookies, $location) {

                $scope.accedi = function ()
                {
                    $http.get("http://bobbumbs.altervista.org/connessione.php?username=" + $scope.username + "&password=" + $scope.password)
                            .success(function (data)
                            {
                                if (data != 0) {
                                    var values = {
                                        "username": data[0],
                                        "password": data[1],
                                        "email": data[2],
                                        "indirizzo": data[3],
                                        "type": data[4]
                                    };
                                    $cookies.putObject('account', values);
                                    if (values.type == 1)
                                        $location.path('/side-menu21/page3');
                                    else
                                        $location.path('/side-menu21/page4');
                                } else {
                                    $ionicPopup.alert({
                                        title: 'S.P.E.C. Srl',
                                        template: 'Dati errati'
                                    });
                                }
                            })
                            .error(function ()
                            {
                                $ionicPopup.alert({
                                    title: 'S.P.E.C. Srl',
                                    template: 'Problemi con il server...Riprovare più tardi'
                                });
                            });
                }
            }])

        .controller('magazzinoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams) {


            }])

        .controller('gestioneProdottiCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams) {


            }])

        .controller('gestioneOrdiniCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams) {


            }])

        .controller('cantiereCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams) {


            }])

        .controller('aggiungiProdottoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams) {


            }])

        .controller('modificaProdottoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams) {


            }])

        .controller('listaProdottiCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams) {


            }])

        .controller('listaOrdiniCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams) {


            }])

        .controller('ordineCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams) {


            }])

        .controller('ordiniArchiviatiCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams) {


            }])

        .controller('effettuaOrdineCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams) {


            }])

        .controller('statoOrdineCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams) {


            }])

        .controller('registrazioneCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams) {


            }])

        .controller('profiloCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams) {


            }])

        .controller('recuperaPasswordCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams) {


            }])

        .controller('profilo2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams) {


            }])
 