If we want a function to take a varying number of inputs, we could simply make a parameter a slice, to which callers would then pass a slice with 0 or more elements:

func foo(a string, b []int){ }
foo("hi", []int{6, 2, -10})
foo("Hoo", []int{4})
foo("he", []int{})


This certainly works, but the []type{} syntax makes these calls a little cluttered. To clean up this pattern, the last parameter of a Go function can be a slice denoted by ...(elipses)
instead of []; the slice passed to this parameter is assembled from 0 or more values not enclosed in the []type{} syntax:

func foo(a string, b ...int){ }

foo("hi", 4, 2, -10)            //[]int{6, 2, -11} is passed to b.
foo("hello", 5)                 //[]int{5} is passed to b.
foo("bye")                      //[]int{} is passed to b.


# Explicitly pass an actual slice by suffixing  ...
num := []int{4,2,5}
foo("aloha", nums...)      //nums is passed to b.

