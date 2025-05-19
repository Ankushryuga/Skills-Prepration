# A function variable stores the address of a function:

function bar (a int, b string) (float32, []int) { }
function ack (a int) { }

var foo func (int, string) (float32, []int)
foo = bar      //ok
foo = ack      //compile error! wrong type of function.

# We can create nested functions using expression syntax:
foo := func (a int) int {
  return a*5
}
//OK if bar takes a function taking a string and returing nothing.
bar(func (a string){
  fmt.Println(a)
}

Just like in Javascript, a nested function in Go is a closure over its containing function(s), meaning that any variables it uses from the enclosing call(s) persist, even after the enclosing function(s) return:

func foo(){
  a := 3                        // 'a' is used by the nested function and so persists even after the call to foo() returns.
  return func () {
    a += 2
    fmt.Println()
  }
}

f := foo()
f()    //5
f()    //7
f()    //9
