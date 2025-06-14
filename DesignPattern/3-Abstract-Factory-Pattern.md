# Abstract Factory Pattern:
      =>
      Similar to Factory Patterns, but without if-else block and have a factory class for each subclass and then
      and abstract factory class that will return the subclass bases on the input factory class.

      =>
      # computer.java
      package com.journaldev.design.model;
 
      public abstract class Computer {
           
          public abstract String getRAM();
          public abstract String getHDD();
          public abstract String getCPU();
           
          @Override
          public String toString(){
              return "RAM= "+this.getRAM()+", HDD="+this.getHDD()+", CPU="+this.getCPU();
          }
      }

      #PC.java
      package com.journaldev.design.model;
 
      public class PC extends Computer {
       
          private String ram;
          private String hdd;
          private String cpu;
           
          public PC(String ram, String hdd, String cpu){
              this.ram=ram;
              this.hdd=hdd;
              this.cpu=cpu;
          }
          @Override
          public String getRAM() {
              return this.ram;
          }
       
          @Override
          public String getHDD() {
              return this.hdd;
          }
       
          @Override
          public String getCPU() {
              return this.cpu;
          }
        }

      # Server.java
      package com.journaldev.design.model;
      public class Server extends Computer {
       
          private String ram;
          private String hdd;
          private String cpu;
           
          public Server(String ram, String hdd, String cpu){
              this.ram=ram;
              this.hdd=hdd;
              this.cpu=cpu;
          }
          @Override
          public String getRAM() {
              return this.ram;
          }
       
          @Override
          public String getHDD() {
              return this.hdd;
          }
       
          @Override
          public String getCPU() {
              return this.cpu;
          }
       
      }


  # Factory class for each subclass:
      => We need to create a abstract factory interface or abstract class.
      
      package com.journaldev.design.abstractfactory;
      
      import com.journaldev.design.model.Computer;
      
      public interface ComputerAbstractFactory {
      
      	public Computer createComputer();
      
      }
