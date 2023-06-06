//Class: Classes are a template for creating objects. They encapsulate data with code to work on that data.
//Classes are in fact "special functions", and just as you can define function expressions and function declarations, a class can be defined in two ways: a class expression or a class declaration.

//Class Declaration
class Cat {
    constructor(name,colour, tail) {//name,colour and tail are properties
        this.name = name
        this.colour = colour
        this.tail = tail
        this.legs = 4
      }
    speak(){
        console.log("meow")
      }
    lookForMouse(mousePresent) {
        if (mousePresent) {
            console.log(`${this.name} has caught a mouse`)
        } else {
            console.log("no mouse today")
        }
    }
    jump(agile) {
        if (agile) {
            console.log(`${this.name}, landed on his ${this.legs} legs`)
        }else{
            console.log("not agile")

        }
    } 
}
// Methods are defined on the prototype of each class instance and are shared by all instances. 
//Methods can be plain functions, async functions, generator functions, or async generator functions.
// Methods -If-else and Boolean
//  catsColour = (cat) => {
//     const  typeOfCat = "nice","grumpy",
// }




//Instances --instantiate means to create - calling the method in a console.log

const kitty = new Cat("kitty", "white", "curly")
const tomVariable = new Cat("tom", "blue","striaght")
const jerry = new Cat("jerry","gray","no tail")
// tomVariable.lookForMouse(false)
// tomVariable.jump(true)
console.log(kitty)
kitty.speak()
kitty.lookForMouse(true)
kitty.jump(false)

console.log(tomVariable)
tomVariable.speak()
tomVariable.lookForMouse(true)
tomVariable.jump(true)

console.log(jerry)
jerry.speak()
jerry.lookForMouse(false)
jerry.jump(false)

