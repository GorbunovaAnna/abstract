// создать класс Transport у него должны быть методы
// + ride(from, to, distance)
// refillFuel(amount) // заправка топливом
// setCargo(amount) // погрузить товары, засетать нельлья больше чем максимум
// были поля
// + cargo: number // сколько загружено на текущий момент
// + fuel: number
// + speed: number
// + type: string

// создать класс AirTransport 
// + у которого speed = 1000
// + собственное поле govId: number // номер борта
// + максимальный груз static maxCargo = 1000
// + дальность полета static destinationLength = 10000

// создать класс GroundTransport 
// + у которого speed = 150
// + собственное поле parkingNo: number
// + static maxCargo = 30000 
// + дальность eзды static destinationLength = 1500

interface StartProcess {
    speed: number;
    type: string;
    ride: (from: string, to: string, distance: number) => void;

}

abstract class  Transport {
    
    constructor(public cargo: number, public fuel: number) {}

    refillFuel(amount: number) {}

    setCargo(amount: number) {
        console.log(`Cargo seted amount ${amount}`);
        
    }
}

class AirTransport extends Transport implements StartProcess{
    static maxCargo = 1000;
    static destinationLength = 10000;
    public speed = 1000;
    public type = 'air';

    constructor(private govId: number, cargo: number, fuel: number) {
        super (cargo, fuel);
    }

    ride(from: string, to: string, distance: number) {
        console.log(`This ${this.type} transport flies from ${from} to ${to}, overcomes the distance ${distance}`);
    }
}

class GroundTransport extends Transport {
    static maxCargo = 30000;
    static destinationLength = 1500;
    public speed = 150;
    public type = 'ground';

    constructor(public parkingNo: number, cargo: number, fuel: number) {
        super(cargo, fuel);
    }

    ride(from: string, to: string, distance: number) {
        console.log(`This ${this.type} transport rides from ${from} to ${to}, overcomes the distance ${distance}`);
    }
}
