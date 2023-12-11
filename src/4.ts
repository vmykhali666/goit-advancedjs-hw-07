class Key {
    private code: number;
  
    constructor() {
      this.code = Math.random();
    }
  
    getCode(): number {
      return this.code;
    }
  }
  
  class Person {
    private key: Key;
  
    constructor(key: Key) {
      this.key = key;
    }
  
    getKey(): Key {
      return this.key;
    }
  }
  
  abstract class House {
    protected isDoorOpened: boolean;
    protected key: Key;
    protected members: Person[] = [];
  
    constructor(key: Key) {
      this.isDoorOpened = false;
      this.key = key;
    }
  
    abstract openDoor(key: Key): void;

    abstract comeIn(persone : Person): void;
  }
  
  class MyHouse extends House {
    openDoor(key: Key): void {
      if (key.getCode() === this.key.getCode()) {
        this.isDoorOpened = true;
        console.log('Nice, you opened the door');
      } else {
        console.log('Door is closed, window is a good option for you');
      }
    }

    comeIn(person: Person): void {
        if (this.isDoorOpened) {
          this.members.push(person);
          console.log("Welcome home");
        } else {
          console.log("Sorry, the door is closed, use your key code, or try come in from the window");
        }
    }
  }
  

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};