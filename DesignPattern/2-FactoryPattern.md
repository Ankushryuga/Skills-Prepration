# Factory Pattern:  
    => It is used when we have a superclass with multiple subclasses and based on input, we need to return one of the subclasses.
       This pattern takes out the responsibility of the instantiation of a class from the client to the factory class.
       we can apply a singleton pattern on the factory class or make that factory method static.


# Factory Design Pattern Super classes.
    => it can be an interface, abstract class or a normal java class.
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

# Factory Design pattern sub classes:
    => classes are extending Computer super class.
    
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


# Factory Class.
      =>
      package com.journaldev.design.factory;

      import com.journaldev.design.model.Computer;
      import com.journaldev.design.model.PC;
      import com.journaldev.design.model.Server;
      
      public class ComputerFactory {
      
      	public static Computer getComputer(String type, String ram, String hdd, String cpu){
      		if("PC".equalsIgnoreCase(type)) return new PC(ram, hdd, cpu);
      		else if("Server".equalsIgnoreCase(type)) return new Server(ram, hdd, cpu);
      		
      		return null;
      	}
      }
