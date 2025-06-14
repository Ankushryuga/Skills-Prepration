# It restricts the instantiation of a class and ensures that only one instance of the class exists in the jvm, 

# Approaches of singleton pattern:
1. Eager initialization: instance of the singleton class is created at the time of class loading.
2. Static block initialization: similar to eager, except that instance of the class is created in static block that provides exception handling.
       =>
          package com.journaldev.singleton;
          
          public class StaticBlockSingleton {
          
              private static StaticBlockSingleton instance;
          
              private StaticBlockSingleton(){}
          
              // static block initialization for exception handling
              static {
                  try {
                      instance = new StaticBlockSingleton();
                  } catch (Exception e) {
                      throw new RuntimeException("Exception occurred in creating singleton instance");
                  }
              }
          
              public static StaticBlockSingleton getInstance() {
                  return instance;
              }
          }

3. Lazy Initialization:  It implement the singleton pattern creates the instance in the global access method.
        =>
      package com.journaldev.singleton;

      public class LazyInitializedSingleton {
      
          private static LazyInitializedSingleton instance;
      
          private LazyInitializedSingleton(){}
      
          public static LazyInitializedSingleton getInstance() {
              if (instance == null) {
                  instance = new LazyInitializedSingleton();
              }
              return instance;
          }
      }

4. Thread Safe Singleton:A simple way to create a thread-safe singleton class is to make the global access method synchronized so that only one thread can execute this method at a time.
         =>
       package com.journaldev.singleton;
        public class ThreadSafeSingleton {
        
            private static ThreadSafeSingleton instance;
        
            private ThreadSafeSingleton(){}
        
            public static synchronized ThreadSafeSingleton getInstance() {
                if (instance == null) {
                    instance = new ThreadSafeSingleton();
                }
                return instance;
            }
        }

5. Bill Pugh Singleton Implementation
6. Using Reflection to destroy singleton pattern
7. Enum Singleton
8. Serialization and Singleton
