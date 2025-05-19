# Go Type Casting:
1. a variable can only be assigned values of the exact same type.
2. each argument to a function must exactly match the corresponding parameter's type
3. the operand types of a binary operation must exactly match.

The only place where types need not match exactly is when using interface types.

Cast B/W certain types:
var x int=35
var y float32=float32(x)  //cast int to float32.

Casting b/w som types preserves the precise value; in other cases, a cast may distort the original value, e.g, casts from floats to integers.

