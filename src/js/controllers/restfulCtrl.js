(function(){
    angular.module('ChuckNorris')
    .controller('RestfulController', restfulCtrl);

    function restfulCtrl(Item, toDos){
        var vm = this;
        // Item.list()
        //     .then(function(response){
        //         vm.listItems = response.data;
        //     });

        //BOUND FUNCTION DECLARATIONS
        vm.add = add;
        vm.remove = remove;
        vm.setEdit = setEdit;
        vm.saveEdit = saveEdit;

        //BOUND VALUES
        vm.editMode = null;
        vm.listItems = toDos;
        vm.currentItem = null;

        //BOUND FUNCTION IMPLEMENTATIONS
        function add(){
            Item.add(vm.myItem)
                .then(function(response){
                    vm.myItem.id = response.data;
                    vm.listItems.push(vm.myItem);
                    console.log(vm.listItems);
                });
        }
        function remove(id){
            Item.remove(id)
                .then(function(response){
                    for(var i = 0; i < vm.listItems.length; i++){
                        if(vm.listItems[i].id === id){
                            vm.listItems.splice(i, 1);
                        }
                    }

                });
        }
        function setEdit(item){
            vm.editMode = item.id;
            vm.currentItem = {
                title: item.title,
                description: item.description,
                id: item.id
            };
        }
        function saveEdit(){
            Item.edit(vm.currentItem)
                .then(function(response){
                    for(var i= 0; i < vm.listItems.length; i++){
                        if(vm.listItems[i].id === vm.currentItem.id){
                            vm.listItems.splice(i, 1, vm.currentItem);
                        }
                    }
                    vm.editMode = null;
                })
        }

        //HELPER FUNCTIONS

    }
})();
