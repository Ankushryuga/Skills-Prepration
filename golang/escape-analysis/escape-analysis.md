Go is garbage collected and memory sage, anything we create in a function call is sage to use even after the call returns. To make this possible, Go compiler performs **escape analysis**, it determines which things created in a function might be referenced outside the function;
only things which the compiler knows for sure will not escape the call in which they are created get stack allocated; everything else is heap allocated.

For example, it is dangerous in a C function to return a pointer to a local variable because the pointed-to-variable no longer exists after the call returns. In Go, however, this is no problem: the compiler detects that the local variable may be used beyond its scope, and so the compiler will allocate the variable on the heap.
