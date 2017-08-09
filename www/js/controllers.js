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

        .controller('aggiungiProdottoCtrl', ['$scope', '$stateParams', '$http', '$ionicPopup', 'Controllo', '$location', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams, $http, $ionicPopup, Controllo, $location) {
                $scope.aggiungi = function ()
                {
                    if (!$scope.prodotto) {
                        $ionicPopup.alert({
                            title: 'S.P.E.C. Srl',
                            template: 'Inserire un prodotto'
                        });
                    } else if (!Controllo.is_int($scope.numero)) {
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

        .controller('modificaProdottoCtrl', ['$scope', '$stateParams', '$ionicPopup', '$http', 'Controllo', '$location', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams, $ionicPopup, $http, Controllo, $location) {
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
                        }).error(function ()
                {
                    $ionicPopup.alert({
                        title: 'S.P.E.C. Srl',
                        template: 'Problemi con il server...Riprovare piu&#8216; tardi'
                    });
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
                    } else if (!Controllo.is_int($scope.numero)) {
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
                                    } else {
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
                    } else {
                        $http.get("http://bobbumbs.altervista.org/cancella.php?nome=" + $scope.nome)
                                .success(function (data)
                                {
                                    if (data == "true") {
                                        $ionicPopup.alert({
                                            title: 'S.P.E.C. Srl',
                                            template: 'Prodotto e&#8216 stato cancellato dal database'
                                        });
                                        $location.path('/page6');
                                    } else {
                                        $ionicPopup.alert({
                                            title: 'S.P.E.C. Srl',
                                            template: 'Prodotto non e&#8216; presente nel database'
                                        });
                                    }
                                })
                    }
                }

            }])

        .controller('listaProdottiCtrl', ['$scope', '$stateParams', '$http', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams, $http, $ionicPopup) {

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
                                if (item.numero == 0)
                                    $scope.zero.push(item);
                                else
                                    $scope.sospesi.push(item);
                            }
                        }).error(function ()
                {
                    $ionicPopup.alert({
                        title: 'S.P.E.C. Srl',
                        template: 'Problemi con il server...Riprovare piu&#8216; tardi'
                    });
                });
            }])

        .controller('listaOrdiniCtrl', ['$scope', '$stateParams', '$http', '$ionicPopup', '$cookies', '$location', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams, $http, $ionicPopup, $cookies, $location) {
                $scope.sospesi = new Array();
                $http.post("http://bobbumbs.altervista.org/listaordini.php")
                        .success(function (data)
                        {
                            for (i = 0; i < data.length; i++) {
                                var item = {};
                                item.ordine = data[i];
                                item.stato = data[i + 1];
                                item.utente = data[i + 2];
                                item.info = data[i + 3];
                                i = i + 3;
                                if (item.stato == 0)
                                    $scope.sospesi.push(item);
                            }
                        }).error(function ()
                {
                    $ionicPopup.alert({
                        title: 'S.P.E.C. Srl',
                        template: 'Problemi con il server...Riprovare piu&#8216; tardi'
                    });
                });
                $scope.selected = function (data) {
                    $cookies.putObject('ordine', data);
                    $location.path('/page20');
                }

            }])

        .controller('ordineCtrl', ['$scope', '$stateParams', '$http', '$ionicPopup', '$cookies', '$location', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams, $http, $ionicPopup, $cookies, $location) {
                $scope.utente = $cookies.getObject('ordine').utente;
                $scope.ordine = $cookies.getObject('ordine').ordine;
                $scope.info = $cookies.getObject('ordine').info;
                $scope.stato = $cookies.getObject('ordine').stato;
                $scope.type = $cookies.getObject('account').type;
                $scope.sospesi = new Array();
                $http.post("http://bobbumbs.altervista.org/listaMagazzino.php?utente=" + $cookies.getObject('ordine').utente + "&ordine=" + $cookies.getObject('ordine').ordine)
                        .success(function (data)
                        {
                            for (i = 0; i < data.length; i++) {
                                var item = {};
                                item.prodotto = data[i];
                                item.quantita = data[i + 1];
                                i = i + 1;
                                $scope.sospesi.push(item);
                            }
                        }).error(function ()
                {
                    $ionicPopup.alert({
                        title: 'S.P.E.C. Srl',
                        template: 'Problemi con il server...Riprovare piu&#8216; tardi'
                    });
                });
                $scope.archivia = function () {
                    $http.get("http://bobbumbs.altervista.org/modificaordine.php?utente=" + $cookies.getObject('ordine').utente + "&ordine=" + $cookies.getObject('ordine').ordine)
                            .success(function (data)
                            {
                                if (data == "true") {
                                    $ionicPopup.alert({
                                        title: 'S.P.E.C. Srl',
                                        template: 'Ordine e&#8216 stato archiviato'
                                    });
                                    $location.path('/page7');
                                } else {
                                    $ionicPopup.alert({
                                        title: 'S.P.E.C. Srl',
                                        template: 'Ordine non e&#8216; presente nel database '
                                    });
                                }
                            })
                }
            }])

        .controller('ordiniArchiviatiCtrl', ['$scope', '$stateParams', '$http', '$ionicPopup', '$cookies', '$location', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams, $http, $ionicPopup, $cookies, $location) {
                $scope.sospesi = new Array();
                $http.post("http://bobbumbs.altervista.org/listaordini.php")
                        .success(function (data)
                        {
                            for (i = 0; i < data.length; i++) {
                                var item = {};
                                item.ordine = data[i];
                                item.stato = data[i + 1];
                                item.utente = data[i + 2];
                                item.info = data[i + 3];
                                i = i + 3;
                                if (item.stato == 1)
                                    $scope.sospesi.push(item);
                            }
                        }).error(function ()
                {
                    $ionicPopup.alert({
                        title: 'S.P.E.C. Srl',
                        template: 'Problemi con il server...Riprovare piu&#8216; tardi'
                    });
                });
                $scope.selected = function (data) {
                    $cookies.putObject('ordine', data);
                    $location.path('/page20');
                }

            }])

        .controller('effettuaOrdineCtrl', ['$scope', '$stateParams', '$ionicPopup', '$http', 'Controllo', '$location', '$cookies', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams, $ionicPopup, $http, Controllo, $location, $cookies) {
                $scope.sospesi = new Array();
                $scope.selezionati = new Array();
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
                        }).error(function ()
                {
                    $ionicPopup.alert({
                        title: 'S.P.E.C. Srl',
                        template: 'Problemi con il server...Riprovare piu&#8216; tardi'
                    });
                });
                $scope.selected = function (data) {
                    if ($scope.selezionati.indexOf(data) == -1)
                        $scope.selezionati.push(data);
                }
                $scope.elimina = function (data) {
                    $scope.selezionati.pop(data);
                }

                $scope.effettua = function () {
                    $scope.valid = true;
                    $scope.selezionati.forEach(function (record) {
                        if (!Controllo.is_int(record.values)) {
                            $scope.valid = false;
                            $ionicPopup.alert({
                                title: 'S.P.E.C. Srl',
                                template: 'Inserire un numero'
                            });
                        }
                    })
                    if ($scope.valid) {
                        $http.get("http://bobbumbs.altervista.org/effettuaordine.php?utente=" + $cookies.getObject('account').username + "&info=" + $scope.selezionati.info)
                                .success(function (data)
                                {
                                    $scope.selezionati.forEach(function (record) {
                                        $http.get("http://bobbumbs.altervista.org/effettuaordine2.php?utente=" + $cookies.getObject('account').username + "&quantita=" + record.values + "&prodotto=" + record.nome)
                                                .success(function (data)
                                                {

                                                })
                                    })
                                    $ionicPopup.alert({
                                        title: 'S.P.E.C. Srl',
                                        template: 'Ordine e&#8216 stato inviato'
                                    });
                                    $location.path('/side-menu21/page4');
                                })
                    }
                }
            }])

        .controller('statoOrdineCtrl', ['$scope', '$stateParams', '$location', '$http', '$ionicPopup', '$cookies', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams, $location, $http, $ionicPopup, $cookies) {
                $scope.sospesi = new Array();
                $scope.completati = new Array();
                $http.post("http://bobbumbs.altervista.org/listaordini.php")
                        .success(function (data)
                        {
                            for (i = 0; i < data.length; i++) {
                                var item = {};
                                item.ordine = data[i];
                                item.stato = data[i + 1];
                                item.utente = data[i + 2];
                                item.info = data[i + 3];
                                i = i + 3;
                                if (item.utente == $cookies.getObject('account').username) {
                                    if (item.stato == 1) {
                                        $scope.sospesi.push(item);
                                    } else {
                                        $scope.completati.push(item);
                                    }
                                }
                            }
                        }).error(function ()
                {
                    $ionicPopup.alert({
                        title: 'S.P.E.C. Srl',
                        template: 'Problemi con il server...Riprovare piu&#8216; tardi'
                    });
                });
                $scope.selected = function (data) {
                    $cookies.putObject('ordine', data);
                    $location.path('/page20');
                }

            }])

        .controller('registrazioneCtrl', ['$scope', '$stateParams', '$location', '$http', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams, $location, $http, $ionicPopup, ) {

                $scope.effettua = function () {
                    if ($scope.username && $scope.indirizzo && $scope.email && $scope.password) {
                        $http.get("http://bobbumbs.altervista.org/registrazione.php?username=" + $scope.username + "&indirizzo=" + $scope.indirizzo + "&email=" + $scope.email + "&password=" + $scope.password)
                                .success(function (data)
                                {

                                    if (data == "true") {
                                        $ionicPopup.alert({
                                            title: 'S.P.E.C. Srl',
                                            template: 'Registrazione avvenuta con successo'
                                        });
                                        $location.path('/page1');
                                    } else {
                                        $ionicPopup.alert({
                                            title: 'S.P.E.C. Srl',
                                            template: 'username gia presente '
                                        });
                                    }

                                })
                    } else {
                        $ionicPopup.alert({
                            title: 'S.P.E.C. Srl',
                            template: 'riempi i campi vuoti '});
                    }
                }

            }])

        .controller('profiloCtrl', ['$scope', '$stateParams', '$cookies', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams, $cookies) {
                $scope.username = $cookies.getObject('account').username;
                $scope.indirizzo = $cookies.getObject('account').indirizzo;
                $scope.email = $cookies.getObject('account').email;
            }])

        .controller('recuperaPasswordCtrl', ['$scope', '$stateParams','$http','$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams,$http,$ionicPopup) {
 $scope.recupera= function()
    {     
        $http.get("http://bobbumbs.altervista.org/recuperapassword.php?email="+ $scope.email.toLowerCase())
            .success(function(data)
            {
                if(data == "false")
                {
                    $ionicPopup.alert({
                    title: 'S.P.E.C. Srl',
                    template: 'Non esiste un account associato all\'email inserita.'
                    });
                }
                else if(data == "true")
                {
                    $ionicPopup.alert({
                    title: 'S.P.E.C. Srl',
                    template: 'Password inviata'
                    });
                }
            })
            .error(function()
            {
                $ionicPopup.alert({
                title: 'ListenCheck',
                template: "Problemi con il server...Riprovare più tardi"
                });
            });
    };

            }])

        .controller('profilo2Ctrl', ['$scope', '$stateParams', '$cookies', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams, $cookies) {

                $scope.type = $cookies.getObject('account').type;
            }]
                )
 