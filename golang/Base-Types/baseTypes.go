#Base Types:

int8                                     // 8-bit signed int
int16                                     // 16-bit signed int
int32                                     // 32-bit signed int
int64                                     // 64-bit signed int

uint8                                     // 8-bit unsigned int
uint16                                     // 16-bit signed int
uint32                                     // 32-bit signed int
uint64                                     // 64-bit signed int

float32                                     // 32-bit float
float64                                     // 64-bit float

complex64                                     // two 32-bit floats 
complex128                                     // two 64-bit floats

int                                     // 32- or 64-bit signed int (depends upon compilation target)
uint                                     // 32- or 64-bit unsigned int(depends upon compilation taregt)

uintptr                                     // unsigned int large enough to store an address on comilation target.

string                                     // a string value is an address referencing UTF-8 data elsewhere in memory pool.
bool                                     // boolean 

byte                                     // alias for uint8
rune                                     // alias for int 32 (used for representing Unicode code points).
