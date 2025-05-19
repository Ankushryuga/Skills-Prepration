# A map is a hashmap of key-value pairs, the values can be any type; the keys cannot be functions, slices, or maps.

A map variable is just a reference. To create an actual map, use **make()**

var foo map[string]int
foo = make(map(string]int)      // create a new empty map.
foo["hello"]=10                 // assign value 10 to key "hello".

# we can create a map wih literal syntax:
foo := map[string]int{"hi":9, "bye":10}

The built-in delete() removes a key from a map:
foo := map[string]int{"hi":9, "bye":10}
delete(foo, "hi")    //remove the key "hi".


