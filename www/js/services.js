angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('Controllo', function(){
function is_numeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

this.is_int=function(n){
  if (!is_numeric(n)) return false
  else return (n % 1 == 0);
}

this.is_float=function(n){
  if (!is_numeric(n)) return false
  else return (n % 1 != 0);
}
});