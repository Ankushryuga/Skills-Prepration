# To append ints to an int slice no matter its capacity, we can define an append function:

func append(s1 []int, vals ...int) []int {
  newLen := len(s1)+len(s2)
  if cap(s1) >= newLen {
    //original underlying array was large enough for appending the new values
    copy(vals, s1[len(s1):cap(s1)])
    return sl[:newLen]      //same slice range, but extended..
  }else{
    //original underlying array was not large enough.
    newSl := make([]int, newLen)              // create new, larger underlying array.
    copy(sl, newSl)                           // copy existing values.
    copy(vals, newSl(len(sl):])               // append the new values.
    return newSl
  }
}

Go has no mechanism for defining generic functions, but a few generic functions are provided as built-ins. The built-in append() is generic: it takes slice of any type and returns the slice type passed to it, e.g. passing a slice of bytes to append() returns a slie of bytes.

