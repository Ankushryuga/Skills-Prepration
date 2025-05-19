A slice is a value representing a logical range of indices of an array. for example, given an array of 10 ints, a slice of ints could represent the range from index 3 up to (and including) index 8; this slice would have a length of 5 and a capacity of 6 (because there are 6 elements in the array from index 3 of the array to its end).

Each slice value is made up of 3 components:
1. a reference to a starting element within an array.
2. a length (the number of elements represented by the slice).
3. a capacity (length + the remaining number of elements in the array)


A slice's type is determind just by the type of its elements, not by its length or capacity.

var foo []int              // a variable foo that stores int slice values
var bar []string           // a variable bar that stores string slice values

Given an X array, we can create an X slice with the slice operator. we can get the length and capacity of slices with the built-in len() and cap() functions:

foo := [7]int{1,2,3,4,5,6,7}
var bar []int
bar = foo[2:5]        // a slice representing index 2 up to (but not including) index 5.

len(bar)      //3
cap(bar)      //5


foo[2]      //3
bar[0]      //3

foo[5]=6
**bar[3]         // panic! exceed bounds of the slice.**

# Create a slice from a slice:
ack := bar[1:3]
len(ack)
cap(ack)
ack[0]


# The ranges represented by ack and bar overlap in memory.
ack[0] = 41
bar[1]                  //41
bar[1] = 42
ack[0]                  //42.
//Changes through the slice modify the underlying array.
foo[3]                  //42.
// assign the slice value (reference, length, capacity) of ack to the variable bar 
bar = ack.
in the slice operator, the number before the colon defaults to 0, and the number after the colon defaults to the length of array of slice. Effectively, foo[:] returns  a slice representing the whol range of foo

The special built-in function **make()** returns a slice with new underlying array:
**make[]int, 7,10)**              // create an int array of size 10 and return a slice of indexs 0:7 of this new array.

**make()** takes a type as its first argument, so it is clearly not an ordinary function.

