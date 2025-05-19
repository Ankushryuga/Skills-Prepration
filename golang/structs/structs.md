# A struct (short for structure) is a programmer-defined data type made up of other types:

type Cat struct {
  Lives int
  Age float32
  Weight float32
  Name String
}

var c Cat             //fields start out as 'zero' values.
c.Name="Mittens"
c.Lives=19,
c.Age=5.2

**NOTE**: Structs cannot be directly recursive:
type Cat struct {
  Lives int
  Age float32
  Weight float32
  Name string
  Mother Cat      //compile error! every cat would contain an infinite number of other cats..
}

**A struct can however be indirectly recursive throught some kind of reference**:
type Cat struct {
  Lives int
  Age float32
  Weight float32
  Name String
  Mother *Cat        // a pointer to Cat is OK!
}
