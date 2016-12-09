(function(){
    angular.module('ChuckNorris')
    .factory('Item', item);

    function item($http){
        var service = {
            list: list,
            add: add,
            remove: remove,
            edit: edit
        };
        return service;

        function list(){
            return $http.get('http://secret-escarpment-99471.herokuapp.com/item');
        }
        function add(myItem){
            return $http.post('http://secret-escarpment-99471.herokuapp.com/item',myItem);
        }
        function remove(id){
            return $http.delete('http://secret-escarpment-99471.herokuapp.com/item/' + id);
        }
        function edit(myItem){
            return $http.put('http://secret-escarpment-99471.herokuapp.com/item/' + myItem.id, myItem);
        }
    }

})();
