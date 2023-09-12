class Country{

    constructor(name){
        this.name = name
    }
    african(){
        console.log (this.name+ ' is an african country');
    }
}
let country = new Country ('Nigeria');
country.african();

class World extends Country{
    european(){
        super.african();
        console.log (this.name+ ' is an european country');
    }
}

let america = new World('America');
america.european();

