## Variable Declarations and type interface.
The full syntax for declaring a variable:
=> var NAME TYPE;                            // declare without initialization.
=> var NAME TYPE = EXPRESSION                // declare with initialization.

An uninitialized variable defaults to the **zero value** for its type. The zero values are:

1. numbers:0
2. strings:""
3. bools:false
4. pointers:nil
5. structs: (each element is the zero value of its type)
6. arrays: (each element is the zero value of its type)
7. slices: (a null reference with capacity 0 and length 0)
8. interface: nil

# When a declaration is initialized, we can leave the type inferred from value's type:
var foo="hello"        // foo inferred to be a stirng variable.
var bar=ack()          // bar inferred to be whatever type ack() is declared to return.

# Go operations and functions returns a fixed type, so the compiler always know the type of every expression.
Shorthand for inferred declarations:
1. foo := "hello"      // declare foo, which is inferred to be a string variable.
2. bar := ack()        // declare bar, which is inferred to be whatever type ack() is declared to return..
3. 

