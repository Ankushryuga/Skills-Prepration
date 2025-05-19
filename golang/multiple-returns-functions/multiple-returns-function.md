# A Go function can return multiple values, the return types are listed in parens:

// a function with no params returning an int, a byte, and a string.
func foo() (int, byte, string){
    return 300, 4, "hello"
}

A multiple-return function can only be called as a stand-alone statement or as the value of an assignement with the right number of variables.

foo()                        // return values are discarded.
a, b, c := foo()               // assign 300 to a, 4 to b, and "hello" to c.
a, b := foo()                 // compile error! no receiver for the returned string.
bar(foo())                    // compile error! cannot call multi-return function in single-value context.


# If you don't want to use one or more returned values, you can assign them to the special blank identifier (a single underscore):

a, _, b, _ = ack()          // ack returns 4 values, but we only want first and third.


# Be careful using := with multiple return: any target variables which don't already exists in the current scope will be implicitly declared:
var x int
{
  x, y := foo()      //create a new x in this scope rather than assign x of the enclosing scope.
}

# Avoiding this gotcha requires explicitly declaring the variable ith var:

var x int {
    var y int
    x, y = foo()                                  // assign to x of enclosing scope and y of this scope.
}
