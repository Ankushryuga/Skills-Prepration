# Array in Go are fixed in size and homogenous(consisting of parts of members that are all the same or very similar):

var foo [4]int              // local variable foo is an array of 4 ints
var bar [8+2]float32        // local variable bar is an array of 10 floats.
foo[0]=24
bar[4]=-4.24
var i int=foo[2]            // assign 0 to i (the uninitialized elements of an array start out as zero-values).


The size must be specified by a constant expression.(For dynamically-size arrays, use **slices**).

Arrays of the same element type but different sizes are considered different types of array.

**Arrays of same type can be assigned to each othe and compared with == and !=**

var foo [4]int
var bar [4]int
foo = bar                        // copy all values of bar to foo
foo == bar                       // true if all respective elements are equal.



## An array can be created as a literal:
//an array with 3 ints: 8, 900, -21.
[3]int{8, 900, -21}

**//an array with 7 ints (... tells the compiler to infer the size from number of elements)
[...]int{1,2,3,4,5,6,7}**


## These array literals are most commonly passed directly to other functions or assigned to array variables.
foo([3]byte{9,100,30})        // pass an array of 3 bytes to foo().
bar := [5]int{1,2,3,4,5}      // create [5]int variable bar with initial elements 1,2,3,4,5.



# We can create arrays of any type, including arrays of arrays, Multi-dimensional arrays have a special literal syntax:

var foo [3][2]int
foo=[3][2]int{{1, 2}, {3, 4}, {5, 6}}




