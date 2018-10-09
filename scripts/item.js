class Item {
    constructor(id,name,branch) {
        this.id=id;
        this.name=name;
        this.branch=branch;
        this.isMarked=false;
    }
    toggle() {
        this.isMarked=!this.isMarked;
    }
}