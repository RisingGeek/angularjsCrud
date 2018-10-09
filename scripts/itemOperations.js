app2.factory("myfactory",()=>{
    const itemOperations = {
        items:[],
        add(itemObject) {
            if(this.items.find((it) => itemObject.id===it.id)) {
                alert('This ID already exists');
                return this.items;
            }
            var item=new Item(itemObject.id,itemObject.name,itemObject.branch);
            this.items.push(item);
            return this.items;
        },
        markItem(id) {
            var item=this.items.find((it)=>it.id===id);
            item.toggle();
        },
        delete() {
            this.items=this.items.filter((it)=>it.isMarked==false);
            return this.items;
        },
        edit(id) {
            
        },
        length() {
            return this.items.length;
        },
        marked() {
            return this.items.filter((it)=>it.isMarked).length;
        }
    };
    return itemOperations;
});