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
                                    template: 'Problemi con il server...Riprovare piu&#8216; tardi'
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

        .controller('aggiungiProdottoCtrl', ['$scope', '$stateParams', '$http', '$ionicPopup', 'Controllo','$location', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams, $http, $ionicPopup, Controllo,$location) {
                $scope.aggiungi = function ()
                {
                    if (!$scope.prodotto) {
                        $ionicPopup.alert({
                            title: 'S.P.E.C. Srl',
                            template: 'Inserire un prodotto'
                        });
                    }else if (!Controllo.is_int($scope.numero)) {
                        $ionicPopup.alert({
                            title: 'S.P.E.C. Srl',
                            template: 'Inserire un numero'
                        });
                    } else {
                        $http.get("http://bobbumbs.altervista.org/aggiungi.php?nome=" + $scope.prodotto + "&numero=" + $scope.numero)
                                .success(function (data)
                                {
                                    if (data == "true") {
                                        $ionicPopup.alert({
                                            title: 'S.P.E.C. Srl',
                                            template: 'Prodotto e&#8216 stato inserito nel database'
                                        });
                                                                                                                        $location.path('/page6');

                                    } else {
                                        $ionicPopup.alert({
                                            title: 'S.P.E.C. Srl',
                                            template: 'Prodotto gia&#8216; presente nel database per aggiornare la quantita&#8216; bisogna utilizzare la funzionalita&#8216; &#34; modifica prodotto&#34;'
                                        });
                                    }
                                })
                                .error(function ()
                                {
                                    $ionicPopup.alert({
                                        title: 'S.P.E.C. Srl',
                                        template: 'Problemi con il server...Riprovare piu&#8216; tardi'
                                    });
                                });
                    }
                }



            }])

        .controller('modificaProdottoCtrl', ['$scope', '$stateParams', '$ionicPopup', '$http','Controllo','$location', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams, $ionicPopup, $http,Controllo,$location) {
                $scope.sospesi = new Array();

                $http.post("http://bobbumbs.altervista.org/lista.php")
                        .success(function (data)
                        {
                            for (i = 0; i < data.length; i++) {
                                var item = {};
                                item.numero = data[i + 1];
                                item.nome = data[i];
                                i++;
                                $scope.sospesi.push(item);
                            }
                        }).error(function (c)
                {
                    alert(c);
                });

                $scope.selected = function (data) {
                    $scope.nome = data.nome;
                    $scope.numero = data.numero;
                }
                 $scope.modifica = function (data) {
                      if (!$scope.nome) {
                        $ionicPopup.alert({
                            title: 'S.P.E.C. Srl',
                            template: 'Inserire un prodotto'
                        });
                    }else if (!Controllo.is_int($scope.numero)) {
                        $ionicPopup.alert({
                            title: 'S.P.E.C. Srl',
                            template: 'Inserire un numero'
                        });
                    } else {
                        $http.get("http://bobbumbs.altervista.org/modifica.php?nome=" + $scope.nome + "&numero=" + $scope.numero)
                                .success(function (data)
                                {
                                    if (data == "true") {
                                        $ionicPopup.alert({
                                            title: 'S.P.E.C. Srl',
                                            template: 'Prodotto e&#8216 stato modificato nel database'
                                        });
                                                                                $location.path('/page6');

                                    }else {
                                        $ionicPopup.alert({
                                            title: 'S.P.E.C. Srl',
                                            template: 'Prodotto non e&#8216; presente nel database per inserire un nuovo prodotto bisogna utilizzare la funzionalita&#8216; &#34; aggiungi prodotto&#34;'
                                        });
                                    }
                                })
                    }
                }
                $scope.cancella = function (data) {
                      if (!$scope.nome) {
                        $ionicPopup.alert({
                            title: 'S.P.E.C. Srl',
                            template: 'Inserire un prodotto'
                        });
                    }else {
                        $http.get("http://bobbumbs.altervista.org/cancella.php?nome=" + $scope.nome)
                                .success(function (data)
                                {
                                    if (data == "true") {
                                        $ionicPopup.alert({
                                            title: 'S.P.E.C. Srl',
                                            template: 'Prodotto e&#8216 stato cancellato dal database'
                                        });
                                                                                $location.path('/page6');

                                    }else {
                                        $ionicPopup.alert({
                                            title: 'S.P.E.C. Srl',
                                            template: 'Prodotto non e&#8216; presente nel database'
                                        });
                                    }
                                })
                    }
                }

            }])

        .controller('listaProdottiCtrl', ['$scope', '$stateParams','$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams,$http) {
                
                $scope.sospesi = new Array();
                $scope.zero = new Array();

                $http.post("http://bobbumbs.altervista.org/lista.php")
                        .success(function (data)
                        {
                            for (i = 0; i < data.length; i++) {
                                var item = {};
                                item.numero = data[i + 1];
                                item.nome = data[i];
                                i++;
                                if(item.numero==0)
                                $scope.zero.push(item);
                            else
                                $scope.sospesi.push(item);
                            }
                        }).error(function (c)
                {
                    alert(c);
                });
               /* <ion-item class="item-icon-right assertive" id="listaProdotti-list-item14" style="">Item 1
        <i class="icon ion-android-alert"></i>
      </ion-item>
      <ion-item id="listaProdotti-list-item15" style="">Item 2</ion-item>*/


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
 