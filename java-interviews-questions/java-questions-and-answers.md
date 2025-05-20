1. What is Java?
   => Java is a platform-independent high-level programming language, it is platform-independent because its bytes codes can run on any system regardless of its OS.

2. Features of Java?
   => 1. OOPs concepts, 2. Platform Independent, 3. High Performance, 4. Multi-Threaded

3. What are the OOPs Concepts?
   => 1. Inheritance, 2. Encapsulation, 3. Polymorphism, 4. Abstraction, 5. Interface.

4. what is Data Encapsulation, and why is it useful?
   => Encapsulation is a concept in OOPs for combining properties and methods in a single unit. Encapsulation helps developers follow a modular approach for S/W development because each object has its own set of methods and variables and serves its functions independent of other objects, encapsulation serves Data hiding purpose.

5. What is polymorphism and what are the types of polymorphism, and how do they differ?
   => Its one interface with many implementations, This characteristic allows you to assign a different meaning or usage to something in different context. For exampl, you can use polymorphims to enable more than one form for entities, such as variables, functions, or objects.
   => There are 2 types of polymorphism: 1. Compile-time polymorphism is method overloading, 2. Run - time polymorphism uses inheritance and interface.

6. What does an interface in jave refer to?
   => An interface as it relates to java is a blueprint of a class or a collection of abstract methods and static constants.
   => Each methods is public and abstract, but it does not contain any constructor.

7. What are constructors in java?
   => In java, a constructor refers to a block of code used to initialize an object. In addition:
   => constructors must have the same name as that of the class.
   => constructors have no return type.
   => Creating an object will call a constructor automatically.

8. Name and explain the types of constructors in Java.
   => The 2 types of constructors in java are the **Default Constructor** and **Parameterized Constructor**.
   1. Default Constructor:
      a. Does not take any inputs.
      b. Main Purpose is to initialize the instance variables with the default values.
      c. Widely used for object creation.
   2. Parameterized Constructor:
      a. Capable of initializing the instance variables with the provided values.
      b. These constructors take the arguments.

9. What is JDK?
    => a. JDK stands for Java development kit.
       b. It can compile, document, and package programs.
       c. It contains both JRE and development tools.

10. What is JVM?
    => a. JVM stands for Java virtual machine.
       b. It is an abstract machine that provides a run-time environment that allows programmers to execute Java bytecode.
       c. JVM follows specification, implementation, and runtime instance notations.

11. What is JRE?
    => a. JRE stands for Java runtime environment.
       b. JRE refers to a runtime environmentthat allows programmers to execute byte code.
       c. JRE is a physical implementation of the JVM.

12. In Java, what are the differences b/w Head and stack memory?
    => **Memory**:
          a. **Stack memory** is used only by one thread of execution.
          b. All the parts of the application use **heap memory**. 
    => **Access**:
          a. Other threads can't access **stack memory**.
          b. Objects stored in the **heap are globally accessible**.
    => **Memory Management**:
          a. **Stack follows the LIFO** manner to free memory.
          b. Memory management for heap stems from generation associated with each object.
    => **Lifetime**:
          a. **Stack** exists until the end of the execution of the thread.
          b. **Heap memory** lives from the start till the end of application execution.
    => **Usage**:
          a. **stack memory** only contains local primitive and reference variables to objects in heap space.
          b. Whenever you create an object, it is always stored away in the heap space.

13. What is a JIT Compiler?
    => A JIT compiler runs after the program is executed and compiles the code into a faster form, hosting the CPU's native instructing set.

14. How does a JIT compiler differ from a standard compiler?
    => JIT can access dynamic runtime information, and a standard compiler does not. Therefore, JIT can better optimize frequently used inlining functinos.

    





