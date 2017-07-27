angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

  .state('SPECSrl', {
	url: '/page1',
    templateUrl: 'templates/SPECSrl.html',
    controller: 'SPECSrlCtrl'  
  })

  .state('magazzino', {
    url: '/page3',
	  views: {
      'side-menu21': {
		templateUrl: 'templates/magazzino.html',
		controller: 'magazzinoCtrl'
	  }
	}
  })

  .state('gestioneProdotti', {
    url: '/page6',
    templateUrl: 'templates/gestioneProdotti.html',
    controller: 'gestioneProdottiCtrl'
  })

  .state('gestioneOrdini', {
    url: '/page7',
    templateUrl: 'templates/gestioneOrdini.html',
    controller: 'gestioneOrdiniCtrl' 
  })

  .state('cantiere', {
    url: '/page4',
	 views: {
      'side-menu21': {
		templateUrl: 'templates/cantiere.html',
		controller: 'cantiereCtrl'
	  }
	 }
  })

  .state('aggiungiProdotto', {
    url: '/page8',
    templateUrl: 'templates/aggiungiProdotto.html',
    controller: 'aggiungiProdottoCtrl'
  })

  .state('modificaProdotto', {
    url: '/page15',
    templateUrl: 'templates/modificaProdotto.html',
    controller: 'modificaProdottoCtrl'
  })

  .state('listaProdotti', {
    url: '/page10',
    templateUrl: 'templates/listaProdotti.html',
    controller: 'listaProdottiCtrl'
  })

  .state('listaOrdini', {
    url: '/page11',
    templateUrl: 'templates/listaOrdini.html',
    controller: 'listaOrdiniCtrl'
  })

  .state('ordine', {
    url: '/page20',
    templateUrl: 'templates/ordine.html',
    controller: 'ordineCtrl'
  })

  .state('ordiniArchiviati', {
    url: '/page12',
    templateUrl: 'templates/ordiniArchiviati.html',
    controller: 'ordiniArchiviatiCtrl'
  })

  .state('effettuaOrdine', {
    url: '/page13',
    templateUrl: 'templates/effettuaOrdine.html',
    controller: 'effettuaOrdineCtrl'
  })

  .state('statoOrdine', {
    url: '/page14',
    templateUrl: 'templates/statoOrdine.html',
    controller: 'statoOrdineCtrl'
  })

  .state('registrazione', {
    url: '/page16',
    templateUrl: 'templates/registrazione.html',
    controller: 'registrazioneCtrl'
  })

  .state('profilo2.profilo', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/profilo.html',
        controller: 'profiloCtrl'
      }
    }
  })

  .state('recuperaPassword', {
    url: '/page19',
    templateUrl: 'templates/recuperaPassword.html',
    controller: 'recuperaPasswordCtrl'
  })

  .state('profilo2', {
    url: '/side-menu21',
    templateUrl: 'templates/profilo2.html',
    controller: 'profilo2Ctrl'
  })

$urlRouterProvider.otherwise('/page1')


});