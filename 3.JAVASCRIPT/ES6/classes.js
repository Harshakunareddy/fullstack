class className {
    constructor(name) {
        this.brand = name ;
    }
    funName(){
        return 'I have a '+ this.brand
    }
}

const objName = className("Ford")
objName.funName();