app.controller("myctrl",['$scope','myfactory',(scope,factory)=>{
    scope.item={};
    scope.items=[];
    scope.itemLen=0;
    scope.isTrue=true;
    scope.marked=0;
    scope.unmarked=0;
    scope.addItem=() => {
        scope.items=factory.add(scope.item);
        scope.itemLen=factory.length();
        scope.unmarked=scope.itemLen-scope.marked;
    };
    scope.mark=(id) => {
        factory.markItem(id);
        scope.marked=factory.marked();
        scope.unmarked=scope.itemLen-scope.marked;
    };
    scope.deleteItem=() => {
        scope.items=factory.delete();
        scope.itemLen=factory.length();
        scope.marked=factory.marked();
        scope.unmarked=scope.itemLen-scope.marked;
    };
    scope.updateItem=()=> {
        scope.items=factory.edit(scope.item);
        scope.itemLen=factory.length();
        scope.marked=factory.marked();
        scope.unmarked=scope.itemLen-scope.marked;
    };
}]);