A go method is like a function but with special receiver parameter. Only named types and pointers to named types can be method receivers. Each of these types has its own table of methods (and effectively its own namespace of methods).

type alice int 

// 'a' is the receiver
func (a alice) foo() int {
  return int(a) + 3
}

a := alice(5)
a.foo()      //8.


**if a named type has a method foo, the pointer to that named type cannot have its own method foo, and vice versa: either type X has a method foo, or *X has a method foo, but never both.**


we can invoke methods of *X on instances of X, in which case the reference with & is implicit:
func (x *X) foo() {/* body */}
var bar X
bar.foo()  //(&bar).foo()

# Likewise, we can invoke methods of X on pointers to X, in which cases the dereference with *is implicit:
func (x X) foo() {/* body */}
var bar *X
bar.foo()        // (*bar).foo()
