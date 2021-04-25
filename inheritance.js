class SmartDevice {

    constructor(name, price) {
        this.name = name;
        this.price = price;

    }
    charging() {
        console.log("i am eating electrons...they yum...");
    }
}

class Phone extends SmartDevice {
    constructor(name, price, camera) {
        super(name,price)
        this.camera = camera;
    }

    sendSms(){

        console.log('I am sending text to my gf/bf');
    }

}

class Watch extends SmartDevice{
    constructor(name, price, distance) {
        super(name,price)
        this.distance = distance;
    }

}

class Tablet extends SmartDevice {
    constructor(name, price, isWifi) {
        super(name,price)
        this.isWifi = isWifi;
    }
}


const samsung = new Phone('Samsung',60000,'32GB');
samsung.sendSms()

const ipad = new Tablet('Apple',45000,true)
