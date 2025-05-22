## Interview question for spring-boot/mvc/security etc.
**References:**

1. https://www.geeksforgeeks.org/spring-boot-interview-questions-and-answers/
2. https://www.interviewbit.com/spring-boot-interview-questions/
3. https://medium.com/@sharmapraveen91/30-advanced-spring-boot-interview-questions-for-experienced-professionals-3574173472c1



# 1. **How do you optimize the startup time of a spring boot applicatino in a production env?**
      =>
         1. **Lazy Initialization**: Use **spring.main.lazy-initialization=true** to delay bean initialization until needed.
         2. **Profile-Specific Configuration**: Separate configurations per env to avoid unnecessary loading.
         3. **Component Scanning**: Restrict the scope of component scanning using **@ComponentScan** to only include essential packages.
         4. **Reduce Bean Creation**: Avoid creating unnecessary beans during startup, especially for time-intensive services.
      
      ==> By reducing the number of beans initialized upfront, you can significantly speed up application startup.
   

# 2. **Explain the concept of Spring Boot's **@ConfigurationProperties** with complex objects. How would you handle nested configurations?**
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

# 3. **What are the main challenges with distributed tracing in Spring Boot microservices, and how do you implement it?

      => **Distributed tracing** allows tracking requests across multiple microservices. The challenges include latency, proper correlation of requests, and aggregating trace data across services.
      **Solution**:
      1. **Spring Cloud Sleuth**: Automatically instruments Spring Boot applications for distributed tracing.
      2. **Integration with Zipkin or Jaeger**: Use Sleuth with tools like Zipkin for trace visualization and monitoring.
      3. **Correlation**: Propagate **TraceId** and **SpandId** headers for cross-service correlation, ensuring traceability.
   
      => By adopting distributed tracing, you can gain deeper visibility into service communication and identify performance bottlenecks.

# 4. **How would you implement a robust custom health check in Spring Boot for a production environment?**
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


# 5. **How do you handle service discovery in a Spring Boot microservice architecture?**
      => Service discovery is essential for managing dynamic microservices instances. **Eureka** from Spring Cloud is widely used for service registration and discovery.
   
      1. Spring Cloud Eureka: Enable **@EnableEurekaClient** to register services with Eureka, making it easy to discover and interact with microservices dynamically.
      2. Load Balancing: Use Spring Cloud Load Balancer or Ribbon for client-side load balancing.
   
      => With service discovery in place, the system can dynamically handle changes in service availability without requiring manual configuration updates.

# 6. What is Spring Boot's **@Retryable** annotation, and how do you fine-tune it for microservices reliability.
      => The @Retryable annotation in Spring Boot allows retrying a method call in case of failure. This is essential for improving the reliability of services that might experience transient failures(e.g Network timeouts or database issues)
   
      @Retryable(value={IOException.class}, maxAttemps=5, backoff=@Backoff(delay=2000))
      public String fetchData(){
   
      }

# 7. How can you implement and manage custom security policies in spring boot for fine-grained access control?
      => Spring security provides robust mechanisms to implement fine-grained access control in your application. You can use annotations like **@PreAuthorize**, **@Secured**, and **@RolesAllowed** to secure methods at the business logic level.
      @PreAuthorize("hasRole('ADMIN')")
      public String performAdminTask(){}

      For custom authentication and authorization, you can extend **AuthenticationProvider** to integrate specific security protocols or external identity providers, ensuring tight control over who can access what wihin the application.

# 8. How to implement event-driven microservices with kafka or RabbitMQ in springboot?
      => Event-driven architecture enables asynchronous communication b/w microservices, oftern powered by message brokers like Kafka or RabbitMQ.
      => Kafka Integreation: Spring Kafka simplifies the production and consumption of kafka messages with **@KafkaListener** annotations.

      @KafkaListener(topic="mytopic", groupId="group_id")
      public void listen(String message){
         System.out.println("Received Message:"+message);
      }
      
      => This approach facilitates loosely coupled services, enabling scalability and resilience in your microservices.


# 9. How do you handle versioning in Spring Boot APIs?
      => API versioning is crucial for mainting backward compatibility as your services evoleve. Common Strategies include:
         1. URI versioning:            /api/v1/resource
         2. Parameter Versioning:      /api/resource?version=1
         3. Header-based Versioning    Through custom headers like API-Version.

# 10. How do you implement multi-tenancy in Spring Boot applications?
      => Multi-tenancy allows a single instance of an application to serve multiple tenants, each with its own data. This can be achieved via:
      1. Database-per-Tenant: Use dynamic routing to select the correct database based on tenant information.
      2. Schema-per-Tenant: Use a single database but separate schemas for each tenant.
      
      => you can implement multi-tenancy by dynamically changing the data source or schema at runtime based on the tenant context, 

# 11. How would you implement a custom Spring Boot starter module?
      => Custom starters allow you to bundle a set of dependencies and configuration for easy reuse. A starter is essentially a Spring Boot auto-configuration class, along with the necessary dependencies.
      1. Create the auto-configuration class: This class will contain the configuration logic for your starter.
      2. Create the META-INF/spring.factories File: Register your auto-configuration class here.
      3. Package the starter: Package your starter as a JAR and share it with applications.

      => Example:
      @Configuration
      @ConditionalOnClass(DataSource.class)
      public class MyStarterAutoConfiguration {
          @Bean
          public DataSource myDataSource() {
              return new DriverManagerDataSource();
          }
      }


# 12. How do you manage external configurations in a Spring Boot application across multiple environments?
      => Spring boot allows you to manage external configurations with:
         1. Profile: use **@Profile** to define beans for specific environments (e.g., @Profile("prod"))
         2. application.properties or YAML: use application-prod.properties for production-specific configurations.
         3. Spring Cloud Config: For distributed systems, use Spring Cloud Config Server to manage configurations centerally.

         => Example:
            spring.datasource.url=jdbc:mysql://localhost:3306/mydb
            spring.profile.active=prod


# 13. What are some strategies for debugging a spring boot application in production?
      => 1. Spring Boot Actuator: Provides insights into health, metrics, and environment information.
         2. Loggin: Use Structured logging with **SLF4J** or **Logback** for better traceability.
         3. Remote Debuggin: Enable remote debugging via the JVM by passing -agentlib:jdwp parameters.
         4. Heap Dumps & Thread Dumps: Capture heap dumps and thread dumps during application issues.


# 14. How would you implement Spring Boot Security with OAuth 2.0 for a microservices-based system?
      => OAuth 2.0 provides authorization by using access tokens. For Spring Boot, you can use Spring Security OAuth2 for managing authentication.
      1. OAuth2 Authorization Server: Use Spring Security OAuth to configure an OAuth2 Authorization server for issuing tokens.
      2. OAuth2 Resource Server: Use **@EnableResourceServer** to secure resources by validating incoming OAuth2 tokens.

      =>Example:
      @Configuration
      @EnableOAuth2Sso
      public class OAuth2Config{
      
      }


# 15. What are some common performance bottlenecks in Spring Boot applications and how do you resolve them?
      => 
      1. Database Access: Optimize queries, use pagination, and consider connection pooling (e.g., HikariCP).
      2. Memory Leaks: Use tools like VisualVM to monitor memory usage and avoid memory leaks.
      3. Thread Pooling: Properly size thread pools for handling HTTP requests and background tasks.
      4. Caching: Use Spring's caching abstraction(@Cachable) to reduce the load on databases.


# 16. How do you handle asynchronous processing in Spring boot?
      => Using 
      1. **@Async** annotation: This is used for executing methods asynchrnously.
      2. **Executor**: Use Executor beans to control the threading model for asynchrnous tasks.
      
      Example=>
      @Async
      public FutureTask<String> processAsyncTask() {
         return FutureTask.futureTask("Task COmpleted");
      }


# 17. How would you implement caching in a Spring Boot application?
      => Through annotations like @Cacheable, @CachePut, & @CacheEvict.
      1. Enable Caching: Annotate your configuration class with @EnableCaching.
      2. Define Cache Manager: you can use **ConcurrentMapCacheManager** or integrate with external cache like Redis or Ehcache.
      => Example:
      @Cacheable("items")
      public List<Item> getItems(){
         return itemRepository.findAll();
      }

# 18. How do you configure and manage Spring Boot Loggin in Production?
      => 
      1. Logback: Default logging Framework; use logback-spring.xml for configuration.
      2. External Logging: Integrate with logging solutions like ElasticSearch, Logstash, Kibana etc for centralizing logs.
      3. Log Levels: Set different log level per environment(e.g., INFO for production, DEBUG for development).

      => Example:
      logging.level.org.springframework=DEBUG


# 19. How would you implement API Gateway using Spring Cloud Gateway in a Spring Boot-based microservices architecture?
      => 
      Spring Cloud Gateway is a great tool for routing requests to various microservices and handling cross-cutting concerns like authentication, rate-limiting, and logging.
      1. Configure Route: Define routes that matches URLs and forward requests to downstream services.
      2. Filters: use filters for custom logic, like authentication or request modification.

      Example:
      @Bean
      public RouteLocator customRouteLocator (RouteLocatorBuilder, builder){
         return builder.routes().route(-> r.path("/myService/**").uri("lb://MY-SERVICE").id("myServiceRoute)).build();
      }

# 
