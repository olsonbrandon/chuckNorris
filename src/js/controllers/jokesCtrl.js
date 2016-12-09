(function(){
  angular.module('ChuckNorris')
  .controller('JokesController', jokesCtrl);

  function jokesCtrl(Joke, firstJoke){
    var vm = this;

    vm.joke = firstJoke;
    vm.newJoke = newJoke;

    function newJoke(){
      Joke.getJoke()
          .then(function(response){
              vm.joke = response.data.value.joke;
          });
    }
  }
})();
