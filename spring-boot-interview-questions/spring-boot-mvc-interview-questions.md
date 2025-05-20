## Interview question for spring-boot/mvc/security etc.
**References:**

1. https://www.geeksforgeeks.org/spring-boot-interview-questions-and-answers/
2. https://www.interviewbit.com/spring-boot-interview-questions/
3. https://medium.com/@sharmapraveen91/30-advanced-spring-boot-interview-questions-for-experienced-professionals-3574173472c1



1. **How do you optimize the startup time of a spring boot applicatino in a production env?**
   =>
   1. **Lazy Initialization**: Use **spring.main.lazy-initialization=true** to delay bean initialization until needed.
   2. **Profile-Specific Configuration**: Separate configurations per env to avoid unnecessary loading.
   3. **Component Scanning**: Restrict the scope of component scanning using **@ComponentScan** to only include essential packages.
   4. **Reduce Bean Creation**: Avoid creating unnecessary beans during startup, especially for time-intensive services.

==> By reducing the number of beans initialized upfront, you can significantly speed up application startup.


2. **Explain the concept of Spring Boot's **@ConfigurationProperties** with complex objects. How would you handle nested configurations?**
   =>
   The @Configurations annotation is a powerful way to map external configuration properties into java objects. For complex, nested configurations, spring boot can handle hierarchical properties through nested classes.
   
   @ConfigurationProperties(prefix="app")
   public class AppConfig{
      private Database batabase;
      private List<Service> services;
      public static class Database {
         private String url;
         private String username;
         private String password;
      }
      public static class Service{
         private String name;
         private int timeout;
      }
   }
   This approach cleanly binds configuration files to java objects, allowing for easy management of complex properties.

3. **What are the main challenges with distributed tracing in Spring Boot microservices, and how do you implement it?**
   => **Distributed tracing** allows tracking requests across multiple microservices. The challenges include latency, proper correlation of requests, and aggregating trace data across services.
   **Solution**:
   1. **Spring Cloud Sleuth**: Automatically instruments Spring Boot applications for distributed tracing.
   2. **Integration with Zipkin or Jaeger**: Use Sleuth with tools like Zipkin for trace visualization and monitoring.
   3. **Correlation**: Propagate **TraceId** and **SpandId** headers for cross-service correlation, ensuring traceability.

   => By adopting distributed tracing, you can gain deeper visibility into service communication and identify performance bottlenecks.

4. **How would you implement a robust custom health check in Spring Boot for a production environment?**
   => Spring Boot's **Actuator** allows creating custom health checks for monitoring application health. Implementing a custom **HealthIndicator** ensure that you can check specific resources like databases, external services, or file systems.

# Code.

@Component
public class MyCustomHealthIndicator extends AbstractHealthIndicator{
      @Override
      protected void doHealthCheck(Health.Builder Builder) throws Exception {
         boolean isHealthy = checkDatabaseConnection();
         if(isHealthy){
            builder.up().withDetail("Database", "Available");
         }else{
            builder.down().withDetail("Database", "Not Available");
         }
      }
}
   
==> Custom health indicators help ensure that all critical depndencies are monitored, improving the system's reliability.


5. **How do you handle service discovery in a Spring Boot microservice architecture?**
   => Service discovery is essential for managing dynamic microservices instances. **Eureka** from Spring Cloud is widely used for service registration and discovery.

   1. Spring Cloud Eureka: Enable **@EnableEurekaClient** to register services with Eureka, making it easy to discover and interact with microservices dynamically.
   2. Load Balancing: Use Spring Cloud Load Balancer or Ribbon for client-side load balancing.

   => With service discovery in place, the system can dynamically handle changes in service availability without requiring manual configuration updates.

6. 
