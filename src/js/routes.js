"use strict";
(function(){
  angular.module('ChuckNorris')
  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider
    .otherwise('/todo');

    $stateProvider
      .state({
        name: 'toDo',
        url: '/todo',
        templateUrl:'/views/todo.html',
        controller: 'RestfulController as rc',
        resolve: {
          toDos: function(Item){
            return Item.list().then(function(result){
              return result.data;
            });
          }
        }
      })
      .state({
        name: 'jokes',
        url: '/jokes',
        templateUrl:'/views/jokes.html',
        controller: 'JokesController as jc',
        resolve: {
          firstJoke: function(Joke){
            return Joke.getJoke().then(function(result){
              return result.data.value.joke;
            });
          }
        }
      });
  });
})();
