A goroutine is a thread of execution managed by the Go runtime rather than direcly by the OS. The Go runtime manages a pool of OS threads and schedules the goroutines to run in the OS threads.

Creating a program with many OS threads is generally impractical because each OS thread incurs significant overhead; creating a program with many thousands of goroutines is generally practical because goroutines are relatively cheap.


**A go statement spawns a new goroutine:**
go foo()            //kick off new thread that starts with a call to foo()
bar()               // executed in the current thread (so doesn't wait for foo() to return)

