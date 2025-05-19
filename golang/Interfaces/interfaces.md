Go interfaces are very much like java, an interface is a type defined by a set of method signatures rather than any concrete code or data.

Unlike in java and C#, which types **implement** which interfaces is not stated by the programmer explicitly: if a type has methods matching all the signatures listed in an interface, that type implicitly implements the interface:


If an interface method is implmented on X, then *X is considered to implement the interface method as well. Effectively, *X is considered to implement an interface if the methods are all implemented on X, or on *X, or some mix thereof. 
However, X is considered to implement an interface only if the methods are all implemented on X itself.

**An Interface value is made up of 2 references:**
1. A reference to a value of a type implementing the interface.
2. A reference to the type of the value itself (the type is represented in memory as the type's table of methods)


All types which implement an interface are considered valid subtypes of the interface. so given 2 types Cat and Dog which both implement interface Animal, we can assign Dog and Cat values to an Animal variable:


var c Cat
var d Dog
var a Animal
a = c        // OK!
a = d        // OK!

No matter what type of value we assign to the Animal variable, we can only use that variable as an Animal, not as a Dog or Cat:

var d Dog
var a Animal = d
a.sleep()            // OK (assuming sleep is method of Animal)
b.bark()             // Compile error! (assuming bark is not a method of Animal)
var f float32 = a.get  //compile error! (interfaces do not have fields).

We can branch over the possible types of an interface value with a type switch:

var x Animal;
// ... assume x is assigned a concrete type of Animal.
switch v := x.(type)  {
  case Cat:      //if x references a Cat.
        //v is of type Cat.
  case Dog:      //if x references a Dog
        //v is of type Dog.
  default:
        //v is of type Animal.
}
