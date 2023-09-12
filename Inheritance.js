class iOS{

    setName(name){
        this.name = name;
    }

    setColor(color){
        console.log ('Phone color for '+this.name+' is '+color);
    }

    setPercent(percent){
        console.log ('Battery percent for '+this.name+' is '+percent);
    }

    startCharging(){
        console.log ('Charger plugged for '+this.name)
    }

}

class Iphone extends iOS{
      
     fullBattery(battery){
        console.log ('full battery for '+this.name+' is '+battery);

     }
}

let iphone = new Iphone();
iphone.setName('ipone13');
iphone.setColor('Gold');
iphone.setPercent('99%');
iphone.startCharging();
iphone.fullBattery('100%');


