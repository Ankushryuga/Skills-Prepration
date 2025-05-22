# 1. **What is Java?**
      => Java is a platform-independent high-level programming language, it is platform-independent because its bytes codes can run on any system regardless of its OS.

# 2. **Features of Java?**
      => 1. OOPs concepts, 2. Platform Independent, 3. High Performance, 4. Multi-Threaded

# 3. **What are the OOPs Concepts?**
      => 1. Inheritance, 2. Encapsulation, 3. Polymorphism, 4. Abstraction, 5. Interface.

# 4. **what is Data Encapsulation, and why is it useful?**
      => Encapsulation is a concept in OOPs for combining properties and methods in a single unit. Encapsulation helps developers follow a modular approach for S/W development because each object has its own set of methods and variables and serves its functions independent of other objects, encapsulation serves Data hiding purpose.

# 5. **What is polymorphism and what are the types of polymorphism, and how do they differ?**
      => Its one interface with many implementations, This characteristic allows you to assign a different meaning or usage to something in different context. For example, you can use polymorphims to enable more than one form for entities, such as variables, functions, or objects.
      => There are 2 types of polymorphism: 1. Compile-time polymorphism is method overloading, 2. Run - time polymorphism uses inheritance and interface.

# 6. **What does an interface in jave refer to?**
      => An interface as it relates to java is a blueprint of a class or a collection of abstract methods and static constants.
      => Each methods is public and abstract, but it does not contain any constructor.

# 7. **What are constructors in java?**
      => In java, a constructor refers to a block of code used to initialize an object. In addition:
      => constructors must have the same name as that of the class.
      => constructors have no return type.
      => Creating an object will call a constructor automatically.

# 8. **Name and explain the types of constructors in Java.**
      => The 2 types of constructors in java are the **Default Constructor** and **Parameterized Constructor**.
      1. Default Constructor:
      a. Does not take any inputs.
      b. Main Purpose is to initialize the instance variables with the default values.
      c. Widely used for object creation.
      2. Parameterized Constructor:
      a. Capable of initializing the instance variables with the provided values.
      b. These constructors take the arguments.

# 9. **What is JDK?**
    => a. JDK stands for Java development kit.
       b. It can compile, document, and package programs.
       c. It contains both JRE and development tools.

# 10. **What is JVM?**
    => a. JVM stands for Java virtual machine.
       b. It is an abstract machine that provides a run-time environment that allows programmers to execute Java bytecode.
       c. JVM follows specification, implementation, and runtime instance notations.

# 11. **What is JRE?**
    => a. JRE stands for Java runtime environment.
       b. JRE refers to a runtime environmentthat allows programmers to execute byte code.
       c. JRE is a physical implementation of the JVM.

# 12. **In Java, what are the differences b/w Heap and stack memory?**
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

# 13. **What is a JIT Compiler?**
    => A JIT compiler runs after the program is executed and compiles the code into a faster form, hosting the CPU's native instructing set.

# 14. **How does a JIT compiler differ from a standard compiler?**
    => JIT can access dynamic runtime information, and a standard compiler does not. Therefore, JIT can better optimize frequently used inlining functinos.

# 15. **What is an inner class?**
    => An inner class is a class that is nested within another class. An inner class has access rights for the class that is nesting it, and it can access all variables and methods defined in the outer class.

# 16. **What is a subclass?**
    => A subclass is a class that inherits from another class called the superclass. Subclass can access all public and protected methods and fields of its superclass.

# 17. **What is a package in java?**
    => In java, packages are the collection of related classes and interfaces which bundle together.

# 18. **How can developers use packages in Java?**
    => Packages in java allow developers to modularize the code and optimize its reuse easily. In addition, developers can use other classes to import and reuse the code within the packages.

# 19. **What are the advantages of packages in Java?**
    => 1. Packages help developers avoid name clashes.
       2. Packages provide easier access control.
       3. Packages can also contain hidden classes that are not visible to the outer classes and are only used within the package.
       4. Packages create a standardized hierarchical structure, making it easier to locate related classes.

      ## Java class, variable, objects, and argument questions.
    
# 20. **What is a class in Java?**
    => All java codes are defined in a class, it has variables and methods.

# 21. **What is a variable within Java?**
    => variables are attributes that define the state of a class.

# 22. **How do you use a method in java?**
    => Methods are the place where the exact business logic has to be done. Methods contain a set of statements or instructions that satisfy specified requirements.
    
# 23. **What is a Java Object?**
    => An object is an instance of a class. The object has a state and behavior.

# 24. **What is a singleton class, and how can it be used?**
    => A singleton class in java can have only one instance. Therefore, all its methods and variables belong to this instance. The singleton class concept is useful when the developer needs to limit the number of objects for a class.

# 25. **What is a constructor in java?**
    => The sole purpose of using Constructors in java is to create an instance of a class. Creating an object of a class will invoke them. Some key features of java constructors include:
    a. Constructors can be public, private, or protected.
    b. If a class already defines a Constructors with arguments, you can no longer use a default no-argument constructor - you have to write one.
    c. Instantiating a class will only call them once.
    d. They must have the same name as the class itself.
    e. They do not return a value, and you do not have to specify the keyword void.
    f. If you do not create a constructor for the class, java helps you by using a so-called default no-argument Constructor.
    
# 26. **What does the term Constructor overloading mean?**
    => Constructor overloading indicates passing different numbers and type of variables as arguments, all of which are private variables of the class.

# 27. **How are non-primitive variables used in java?**
    => Non-primitive variables always refer to objects in java.

# 28. **In Java, what is a static variable?**
    => A static variable is associated with a class and not objects of that class.

# 29. **What are java data types, and how are they grouped?**
    => In java, a variable must be specified data type such as an integer, floating-point number, character Boolean, or string. The 2 groups of data types are:
    1. **Primitive Data Types**: which include byte, short, int, long, float, double, boolean, and char.
    2. **Non-Primitive Data Types**: Which include String, arrays, and classes.
   
# 30. **How do you define primitve data types and describe each by size and description?**
    a. byte is 1 byte in size. It stores whole numbers from -128 to 127.
    b. short is 2 byte in size. It stores whole numbers from -32,768 to 32,767.
    c. int is 4 bytes in size. It stores whole numbers from -2,147,483,648 to 2,147,483,647.
    d. long is 8 bytes in size.
    e. float is 4 bytes in size.
    f. double is 8 bytes in size.
    g. char is 2 bytes in size.

# 31. **What do the terms autoboxing and unboxing mean in java?**
    a. **Autoboxing** represents the java compiler that automatically transforms primitve data types into object equivalents or wrapper types to ease compilation.
    b. **Unboxing** is the automatic transformation of wrapper types into their primitive equivalent.

# 32. **What are wrapper classes in Java?**
    a. Every primitive data type has a class dedicated to it, known as wraper classes.
    b. we call them wrapper classes b/c they "wrap" the primitive data type into an object of that class.
    c. Wrapper classes convert the java primitives into reference types (objects).


# 33. **What are the differences b/w Methods and constructors?**
    =>
    **Methods**:
    a. Used to represent the behavior of an object.
    b. Must have a return type.
    c. Needs to be invoked explicitly.
    d. The compiler does not provide a default method.                             
    e. Method name may or may not be the same as class name.

    **Constructors**:
    a. Used to initialize the state of an object.
    b. Does not have a return type.
    c. Invoked implicitly.
    d. The compiler provides a default constructor if the class has none.
    e. Constructor name must always be the same as the class name.

# 34. **Can you override a private method or static method in Java?**
    => You cannot override a private or static method in Java. You cannot override a private method in subclass because it's not accessible there.

# 35. **What is method hiding?**
    => Method hiding is an alternative to overriding a private or static method, which occurs when you hide the superclass method, you create a similar method with the same return type and same method arguments in child class. For example, you can create another private method with the same name in the child class.

# 36. **What is the difference b/w equals() and == in Java?**    
      =>
      a. **Equals()** method:
             1. Is defined in object class in java.
             2. Used for checking the equality of 2 objects defined by business logic.
      b. **==** (equality operator):
             1. A binary operator provided by Java programming language and used to compare primitives and objects.
             2. public boolean equals(object o) is the method provided by the Object class.
             3. Default uses == operator to compare 2 objects. For example, you can override a method like string class. equals() method is used to compare the values of 2 objects.

# 37. **Can you write multiple catch blocks under a single try block?**
      => Yes, you can have multiple catch blocks under a single try block, your approach should be from specific to general.

# 38. **What is a local variable?**
    => Local variables are defined in the method and scope of the variables that exist inside the method itself.

# 39. **What is an instance variable?**
    => An instance variable is defined inside the class and outside the method. The scope of the variables exists throughout the class.

# 40. **How do you use final keywords and final variables in java?**
    =>
    1. final keywords with a variable of primitive data types, they cannot change the variable's value.
    2. When you use final with non-primitive variables, you cannot change the members of that referred object.

# 41. **What is inheritance in Java?**
    => Inhertitance in java is the concept where the properties of one class can be inherited by the other. It helps to reuse the code and establish a relationship b/w different classes.

# 42. **In Java, what types of classes perform inheritance?**
    => Parent and Child class.

# 43. **What types of inheritance does java support?**
    =>
    a. Single Inheritance.
    b. Multiple Inheritance
    c. Hierarchical inheritance.
    d. Hybrid Inheritance.

# 44. **What is Java exception handling?**
    => In java, exceptions are object. When you throw an exception, you throw an object. However, you can't throw just any object as an exception - only those objects whose classes **descend from throwable**. **Throwable** serves as the base class for an entire family of classes, declared in **java.long**, that your program can instantiate and throw.

# 45. **What are the differences b/w unchecked exception, checked exception, and errors?**
    =>
    a. **An unchecked exception**: inherits from **RuntimeException** (which extends from exception). The JVM treats RuntimeException differently as there is no requirement for the application code to deal with them explicitly.
    b. **A Checked exception**: inherits from **exception class**. The client code has to handle the checked exceptions either in a try-catch clause or has to be thrown for the super-class to catch the same. A checked exception throw by a lower class (sub-class) enforces a contract on the invoking class (super-class) to catch or throw it.
    c. **Errors**(members of the error family) ususally appear for more serious problems, such as **OutOfMemoryError(OOM)**, that may not be so easy to handle.

# 46. **What is the entry point in Java, and how is it written?**
    =>
    a. main() in java is the entry point for any java program.
    b. main() is always written as public static void main(string args).

# 47. **In Java, what are public static void main string args?**:
    => public static void main string args, also known ar public static void main(String[] args), means:
    a. **Public** is an access modifier used to specify who can access this method. Also, this method is accessible by any class.
    b. **Static** is a keyword in java that identifies when it is class-based. main() is made static in java to access it without creating the instance of a class. If main is not made static, the compiler will throw an error as main() is called by the JVM before creating any objects. It can only invoke static methods directly via the class.
    c. **void** is the return type of the method that defines the method. That method does not return a value.
    d. **Main** is the name of the method searched by JVM as a starting point for an appplication (with a particular signature only). It is also the method where the main execution occurs.
    e. **String args[]** is the parameter that passes to the main method.


# 48. **What's the purpose of static methods and static variables?**
      =>
      Static keyword to make a method or variable shared for all objects when there is a requirement to share a method or a variable multiple objects of a class. This is used instead of creating separate copies for each object.


# 49. **How do you use, call, and access a static method in java?**
    =>
    1. You must use the static keyword before the method name.
    2. Call a static method using the class (className.methodName).
    3. Static methods cannot access any non-static instance variables or methods.


# 50. **How do you use, call, and access a non-static method in java?**
    =>
    1. You do not need to use the static keyword before the method name.
    2. Call a non-static method like any general method.
    3. Non-static methods can access any static method or static variables without creating an instance of the class.


# 51. **What are this() and super(), and where are you required to use them?**
    =>
    In java, super() and this() are special keywords used to call the constructor. When using this() and super(), they must be the first line of a block.


# 52. **What does this() represent, and how is it used in java?**
    => this() represents the current instance of a class.
    => used to:
       1. Call the defult constructor of the same class.
       2. Access methods of the current class.
       3. Point to the current class instance.
################################################################################################
# :❣️ 53. **Stream In Java:**
    => stream API, is used to process collections of objects. A stream in java is a sequence of objects that supports various methods that can be pipelined to produce the desired result.
## use of stream in java:
      ==> 
      1. Stream API is a way to express and process collections of objects.
      2. Enable us to perform operations like **filtering, mapping, reducing, and sorting**.

## How to create a java stream?
      => Java stream creation is one of the most basic steps before considering the functionalities of java stream.
      **Syntax**:
         Stream<T> stream;      // T is either a class, object, or data type depending upon the declaration.
      
      **Java Stream Features**:
      1. A stream is not a data structure; instead, it takes input from the collections, Arrays, or I/O channels.
      2. Streams don't change the original data structure, they only provide the result as per the pipelined methods.
      3. Each intermediate operation is lazily executed and returns a stream as a result, hence, various intermediate operations can be pipelined. Terminal operations mark the end of the stream and return the result.
      
      **Different Operations on Streams**: there are 2 types of operations in streams
      1. Intermediate Operations.
      2. Terminal Operations.
      

:❣️
###### Intermediate Operations:   #######
![image](https://github.com/user-attachments/assets/c6dcd3e8-d072-4032-8747-fe8e2e652dce)

Intermediate operations are the types of operations in which multiple methods are chained in a row.
# Characteristics of Intermediate Operations:
      1. Methods are chained together.
      2. Intermediate operations transform a stream into another stream.
      3. It enables the concept of filtering where one method filters data and passes it to another method after processing.

◼️
## Benefit of Java Stream:
      1. No Storage
      2. Pipleline of Functions.
      3. Laziness.
      4. Can be infinite.
      5. Can be parallelized.
      6. Can be created from Collections, array, Files Lines, Methods in Stream.

◼️
## Important Intermediate Operations:
      1. map(): The map method is used to return a stream consisting of the results of applying the given function to the elements of this stream.
      
      **Syntax**:
      <R> Stream<R> map(Function<?super T, ? extends R> mapper)
      
      2. filter(): The filter method is used to select elements as per the Predicate passed as an argument.
      
      **Syntax**:
      Stream<T> filter(Predicate<?super T> predicate)
      
      3. sorted(): The sorted method is used to sort the stream.
      
      **Syntax**: 
      Stream<T> sorted()
      Stream<T> sorted(Comparator<? super T> comparator)
      
      4. flatMap(): The flatMap operation in Java streams is used to flatten a stream of collections into a single stream of elements.
      
      **Syntax**:
      <R> Stream<R> flatMap(Function<? super T, ? extends Stream<? extends R>> mapper).
      
      5. distinct(): Removes duplicate elements. It returns a stream consisting of the distinct elements (according to Object.equals(Object)).
      
      **Syntax**:
      Stream<T> distinct()
      
      6. peek(): Performs an action on each element without modifying the stream. It returns a stream consisting of the elements of this stream, additionally performing the provided action on each element as elements are consumed from the resulting stream.
      
      **Syntax**:
      Stream<T> peek(Consumer<? super T> action)


###### Example on Streams:
      import java.util.Arrays;
      import java.util.HashSet;
      import java.util.List;
      import java.util.Set;
      import java.util.stream.Collectors;
      
      public class StreamIntermediateOperationsExample {
         public static void main(String[] args){
            //List of list of names.
            List<List<String>> listOfLists=Arrays.asList(
            Arrays.asList("Reflextion", "Collection", "Stream"),
            Arrays.asList("Structre", "State", "FLow"),
            Arrays.asList("sorting", "flating", "sls")
            );
            Set<String> intermediateResults=new HashSet<>();
            // stream pipleline demonstrating various intermediate..
            List<String> result=listOfLists.stream().flatMap(List::stream)      //Flatten the list of lists into a single stream.
            .filter(s->s.startsWith("S))      //Filter elements starting with "S".
            .map(String::toUpperCase)         // Transform each element to uppercase.
            .distinct()                       //remove duplicate.
            .sorted()                         //sort elements.
            .peek(s->intermediateResults.add(s))      //perform an action (add to set) on each element.
            .collect(Collectors.toList());      //collect the final result into a list.

      System.out.println("Intermediate Results");
      intermediateResults.forEach(System.out::println);

      //final result
      System.out.println("Final Result:");
      result.forEach(System.out::println);
         }
      }





:❣️
###### Terminal Operations:   #######
      => Terminal operations are the type of operations that return the result. These Operations are not processed further just return a final result value.

# Important Terminal Operations:
      1. collect(): The collect method is used to return the result of the intermediate operations performed on the stream.
      **Syntax**:
      <R, A> R collect(Collector<? super T, A, R> collector)
      
      2. forEach(): The forEach method is used to iterate through every element of the stream.
      **Syntax**:
      void forEach(Consumer<? super T> action)
      
      3. reduce(): The reduce method is used to reduce the elements of a stream to a single value. The reduce method takes a **BinaryOperator** as a parameter.
      **Syntax**:
      T reduce(T identity, BinaryOperator<T> accumulator)
      Optional<T> reduce(BinaryOperator<T> accumulator)
      
      4. count(): Returns the count of the elements in the stream.
      **Syntax**:
      long count()
      
      5. findFirst(): Returns the first element of the stream, if present.
      **Syntax**:
      Optional<T> findFirst()
      
      6. allMatch(): Checks if all elements of the stream match a given predicate.
      **Syntax**:
      boolean allMatch(Predicate<? super T> predicate)
      
      7. anyMatch(): Check if any element of the stream matches a given predicate.
      **Syntax**:
      boolean anyMatch(Predicate<? super T> predicate)

🚩
**Note**:::::::::::::::::::::::::::::
Intermediate Operations are running based on the concept of Lazy Evaluation, which ensures that every method returns a fixed value (Terminal Operation) before moving to the next round.

## Terminal Operations Example:
      import java.util.*;
      import java.util.stream.Collectors;
      
      public class StreamTerminalOperations{
         public static void main(String[] args){
            List<String> names=Arrays.asList(
            "Reflect", "Collections","Hello"
            );
            names.stream().forEach(System.out::println);
            //Collect: Collect names starting with 'S' into a list.
            List<String> sNames=names.stream().filter(name -> name.startsWith("S")).collect(Collectors.toList());            //Collect names.
      
            String concatenateNames=names.stream().reduce("", (partialString, element) -> partialString + " " + element);         //reduced names.
      
         Optional<String> firstName=names.stream().findFirst();      //Findthe first name.
            
         }
      }




# 54: Volatile vs Transient variable in java?
![image](https://github.com/user-attachments/assets/0c47adf1-db3c-4e45-9f91-4ee06c6cc55a)

      => 
      1. Volatile Variable:  used agains the variable indicates that content of the variable is stored in the main memory and every read of the variable should be done from the main memory and not the CPU cache and every write should be written to the main memory and not just to the CPU cache.

        Transient Variable: its used when we do not want the variable to be serialised ( converting to byte stram).

      2. volatile ensures that the JVM does not re-order the variables and ensures that the synchronoization issues are avoided.
      Transient: provides flexibility and control over the attributes of objects from being serialized.
      3. Volatile variables: don't have any default values, transient variables are initialized with default value corresponding to the data type at the time of deserialization
      

      # Access modifier:
      Comparison Table of Access Modifiers in Java
      When to Use Each Access Modifier in Real-World Projects
      Private: This is used for encapsulating sensitive data and internal helper methods that should not be accessed outside the class.
      Example: Private fields in a model class with getter and setter methods.
      Default (Package-Private): This is suitable for classes and methods that should only be accessible within the same package, often used in package-scoped utilities or helper classes.
      Protected: This is ideal for methods and fields that should be accessible within the same package and subclasses, commonly used in inheritance-based designs like framework extensions.
      Public: This is used for classes, methods, or fields meant to be accessible from anywhere, such as API endpoints, service classes, or utility methods shared across different parts of an application.
