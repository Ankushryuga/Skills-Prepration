## we can define our own types with a type statement. 

type alice int    // create a new type "alice" which is represented as an int.

These new types are not aliases: The compiler considers them to be separate, non-interchangeable types. 
we can however explicitly cast b/w a named type and the type it is based on without distoring the value (because the types have the same underlying representation as bits):

var x int = 3          // an int variable called 'x'
var y alice            // an alice variable called 'y'
y=5                    // OK! integer literals are considered to have no specific type, and so 5 is a valid alice value 
**y=x                    // Compiler error! an alice variable cannot be assigned an int value, even though an alice is really just an int..**

y=alice(x)             // OK! cast the int value to an alice value.
x=int(y)               // OK! cast the alice value to an int.


