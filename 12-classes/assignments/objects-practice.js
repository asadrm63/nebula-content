
/* Question 1
Write a class that creates an animal
The animal class should have the following properties:
  - name
  - noise
  - eats
  - lives
The animal class should have the following methods:
  - makeNoise
  - eatsWhat
  - livesWhere
Initialize 3 animals with your class & log a sentence to the console, ex:
`Dogs live in peoples houses, they bark and are carnivorous.`
*/

class Animal {
    constructor(name,noise,eats,lives){
        this.name = name
        this.noise = noise
        this.eats = eats
        this.lives= lives
    }
    makeNoise(){
        return `${this.noise}`
    }

    eatsWhat(){
        return `${this.eats}`
    }
    livesWhere(){
         return `${this.lives}`
    }
   
}
    
const lion = new Animal('Lion',"roar",'meat','jungle')
const whale = new Animal('Whale',"clicks, whistles",'fish','ocean')
const eagle = new Animal('Eagle'," high-pitched whistling",'small animals','forest')
console.log(lion)

console.log(lion.makeNoise())

console.log(`${lion.name}s live in the ${lion.lives}, they ${lion.noise} and eat ${lion.eats}.`);
console.log(`${whale.name}s live in the ${whale.lives}, they ${whale.noise} and eat ${whale.eats}.`);
console.log(`${eagle.name}s live in the ${eagle.lives}, they ${eagle.noise} and eat ${eagle.eats}.`);



/* Question 2
Write a class that creates shoes
The shoe should have the following properties:
  - size
  - color
  - type
  - age
Initialize 3 shoes with your class & log a sentence to the console:
  ex: `My flipflops are yellow, size 9, and 6 years old.`
*/

class Shoe {
  constructor (size,color,type,age){
  this.size = size
  this.color = color
  this.type = type
  this.age = age

}
}

const sneaker = new Shoe (11,"black","sneakers","2 months")
const boot = new Shoe (13,"brown","boots","3 years")
const sandal = new Shoe (10,"white","sandals","1 week")

console.log(` My ${sneaker.type} are ${sneaker.color}, size ${sneaker.size} and ${sneaker.age} old. `)
console.log(` My ${boot.type} are ${boot.color}, size ${boot.size} and ${boot.age} old.`)
console.log(` My ${sandal.type} are ${sandal.color}, size ${sandal.size} and ${sandal.age} old.`)

//Question 3: Use Inheritance to create parent and child classes
// Reference Automobile -> Coupe example in lesson

// ex: Person -> teacher -> math teacher
//  Animal -> mammal -> land/sea


class Mammal extends Animal {
  constructor(name,noise,eats,lives,type,lifespan){
    super(name,noise,eats,lives);
    this.type= type;
    this.lifespan = lifespan;
  }
}

const wolf= new Mammal ("Wolf","barks","deer","plains","land","10-12 years")

console.log(wolf)

class Sea extends Mammal{
  constructor(name,noise,eats,lives,type,lifespan,size,weight){
    super(name,noise,eats,lives,type,lifespan);
    this.size = size;
    this.weight = weight;
  }
}

const seal = new Sea("Seals","grunts,whistles","fish","coastal waters","sea","15-25 years","7-8 feet ","230-6,000lbs" )
console.log(seal)