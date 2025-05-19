## Go Pointers are basically just like C pointers except Go has no pointer arithmetic. A pointer represents a typed address, e.g. an address of an int, an address of a string, an addess of a byte, etc. we can get a pointer to a variable using & (the reference operator) using & on a variable of type X returns an X pointer.

var i int
var b byte
var ip *int                //variable ip stores int pointers
var bp *byte               //variable ip stores byte pointers
ip = &i                    //assign ip the address of i.
bp = &b                    //assign bp the address of b.
ip = &b                    //compile error! &b returns a byte pointer, not an int pointer.


## We can also use & to get a pointer to a struct field:
var c Cat
var fp *float32
fp = &c.Age

## We can get the value pointed to by a pointer using * (the dereference operator), and we can modify the storage pointed to by a pointer using * on the target assignment:

var f float32 = 8.2
var fp *float32  = &f
*fp                    //8.2
*fp = 14.6             // assign 14.6 to storage pointed to by fp.
f                      // 14.6


**The zero-value of a pointer is nill. Dereferncing a nill pointer trigger a panic.**

we can create pointers of any type, even pointers to pointer. However, multi-degree pointers tend to be used  much less in Go code than in C code, largely because slices and interfaces fill many of the same use cases as pointers.

