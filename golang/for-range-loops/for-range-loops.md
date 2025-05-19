A **for-range** loop is Go's equivalent of for-in/foreach in other languages.

for i := range arr {
        //i iterates from 0 up to (but not includinng) len(arr)
}

//when range is assigned to 2 variables, the first is the index, the second is the value
for i, v := range arr {
    // i is the index, v is the value.
}

# we can use for-range to iterate through the elements of a map:
//the iteration order is random.
for k := range m{
    // k is a key from m.
}

for k, v := range m{
  //k is a key from m and v is its corresponding value.
}
