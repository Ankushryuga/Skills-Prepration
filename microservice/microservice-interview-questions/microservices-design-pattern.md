# Microservice system design pattern:

# 1. What is microservices?
      => It refer to an architectural approach, where an application is structured as a collection of loosely coupled, independently deployable services. Each service focuses on a specific business function and can operate autonomously, allowing for greater flexibility and scalability.
      This modulare design enables developers to build, test, and deploy services independently.
      => This autonomy enhances the resilience of the overall system, as the failure of one service does not necessarily impact others.
      => Microservice faciliate continuous integration and delivery, enabling faster updates and innovation.

# 🔴 VVI:
# 2. Core Design Patterns of Microservices:
     => a. API Gateway Pattern.
        b. Database per service pattern.
        c. Circuit Breaker Pattern.
        d. Service Discovery Pattern.
        e. Event Sourcing Pattern.
        f. CQRS pattern.
        g. Saga Pattern.
        h. Strangler Fig Pattern.
        i. Bulkhead Pattern.
        j. Sidecar Pattern.


      a. **API Gateway Pattern**: An API Gateway acts as a single entry point for all clients (web, mobile, 3rd party etc), routing requests to the appropriate microservices. It can handle cross-cutting concerns such as authentication, logging, rate limiting, and load balancing.

     Best Suited For: ***A large e-commerce platform where multiple clients(web, mobile, 3rd party) need to interact with various services (Catalog, user management, orders). The API Gateway simplifies client communication by providing a unified interface and handling complexities like security and routing.***

      b. **Database per service Pattern**: Each microservice has its own database, ensuring loose coupling and independent data management. This pattern avoids a single point of failure and allows services to use different types of database suited to their needs.
        
        Best Suited For: ***A SaaS application with multiple microservices such as billing, user management, and analytics. Each service requires different database technologies***
        
      c. **Circuit Breaker Pattern**: This pattern prevents service failure by providing a fallback mechanism when a service is unreachable or fails. It monitors service calls and "breaks" the circuit to prevent further calls when failures exceed a threshold.
        
        Best Suited For: ***A travel booking system where multiple external services (airline, hotel, car rental) are integrated. If one service is slow or fails, the circuit breaker prevents cascading failures and provides a default response to maintain system stability***
      
      d. **Service Discovery Pattern**: Service discovery allows microservices to find and communicate with each other dynamically. It involves a service registry where services register themselves and look up other services.
        
        Best Suited For: ***A microservices-based application deployed in a cloud env, where instances of services start and stop frequently. Service discovery ensures that services can locate each other without manual configuration, eabling auto scaling and resilience.****
        
      e. **Event Sourcing Pattern**: This pattern captures changes to an application state as a sequence of events. Instead of storing just the current state, it stores the state changes (events), allowing the system to reconstruct past states and audit trails.
        
        Best Suited For: ***A financial application managing transactions and accounts. By using event sourcing, the system can reconstruct  account histories, track every transaction, and provide audit trails for regulatory compliance.***
        
      f. **CQRS(Command Query Responsibility Segregation) Pattern**: CQRS separates the read and write operations of a data store. Commands (write operations) update the state, while queries (read operations) fetch data from a different model optimized for reads.
        
        Best Suited For: ***An online retail application where the product catalog requires frequent updates and fast queries. Using CQRS, the write model ensures consistency when updating product information, while the read model provides quick responses for customer queries.***
        
      g. **Saga Pattern**: Saga manages distributed transactions acros multiple microservices by coordinating a sequence of local transactions, Each service performs its transaction and publishes an event triggering the next service's transaction. If a transaction fails, compensating transactions undo the changes.
        
        Best Suited For: ***An order processing system where placing an order involves multiple services (Payment, inventory, shipping). The saga pattern ensures that all steps are completed successfully, and if any step fails, compensating actions roll back the previous steps.***
        
      h. **Strangler Fig Pattern**: This pattern incrementally replaces a legacy system with a microservices architecture. The new system gradually takes over the functionality of the old system untill the legacy system is entirely replaced.
        
        Best Suited For: ***Migrating a monolithic application to a microservices architecure. The strangler fig pattern allows the new microservices to take over functionalies one by one, reducing the risk and complexity associated with big-bang migrations.****
      
      i. **Bulkhead Pattern**: Bulkhead isolates different parts of a system to prevent failure in one component from affecting others. Each service or group of services operates in its own "Compartment", like bulkheads in a ship.
        
        Best Suited For: ***A straming service with different microservices for user management, video playback, and recommendations, using bulkheads ensures that a failure in the recommendation service doesn't impact video playback or user management, maintaining overall system stability.
      
      j. **Sidecar Pattern**: The sidecar pattern deploys helper components (Sidecars) alongside the main microservices. These sidecars handle cross-cutting concerns like logging, monitoring and configuration management, allowing the main services to focus on business logic.
        
        Best Suited For: ***An application running in a kubernetes cluster, where each microservice is accompanies by a sidecar for logging and monitoring. This pattern centralizes these concerns and simplifies the main service's codebase.***
        




1. 
############# API GATEWAY PATTERN #############
#. Tech Stack: Spring Cloud Gateway + Eureka (Service Discovery).
# Explanations: A central gateway handles requests and routes them to proper services.
      Example:
      **application.yml** For API Gateway.
      => 
      spring:
         cloud:
            gateway:
               routes:
                  - id: user-service
                     uri: lb://USER-SERVICE
                     predicates:
                        - Path=/users/**
                  - id: order-service
                     uri: lb://ORDER-SERVICE
                     predicates:
                        - Path=/orders/**
      
      
      ## Gateway Main Class.
      @SpringBootApplication
      @EnableDiscoveryClient
      public class ApiGatewayApplication {
         public static void main(String[] args){
            SpringApplication.run(ApiGatewayApplication.class, args);
         }
      }
         
# End.

2. 
############# SERVICE DISCOVERY #############
# Tech Stack: Eureka Server + Eureka Client.
      @SpringBootApplication
      @EnableEurekaServer
      public class EurekaServerApplication{
         public static void main(String[] args){
            SpringApplication.run(EurekaServerApplciation.class, args);
         }
      }
      
      
      **application.yml** for service discovery.
      => 
      server:
         port: 8761
      
      eureka:
         client:
            register-with-eureka: false
            fetch-registry: false


# End.

# 3. ############# DATABASE PER SERVICE PATTERN. #############
         # Each service has its own DB and schema.
         ==> UserService - User Entity + Repo.
         @Entity
         public class User {
            @Id @GeneretedValue
            private Long id;
            private String name;
         }
         @Repository
         public interface UserRepository extends JPARepository<User, Long>{}
         
         ==> OrderService -> order entity + Repo.
         @Entity
         public class Order {
             @Id @GeneratedValue
             private Long id;
             private Long userId;
             private String product;
         }
         @Repository
         public interface OrderRepository extends JpaRepository<Order, Long> {}
         

# End.



# 4. ############# Circuit Breaker Pattern: #############
         =>
         Tech Stack=>  Resilience4j
      
         //Calling another service with a fallback.
         @CircuitBreaker(name="orderService", fallbackMethod="fallbackOrder")
         public Order getOrder(Long userId){
            return restTemplate.getForObject("http://ORDER-SERVICE/orders/user/" + userId, Order.class);
         }
         
         public Order fallbackOrder(Long userId, Throwable t){
            return new Order(OL, userId, "Fallback Order");
         }
      
      ## application.yml.
      resilience4j.circuitbreaker.instances.orderService:
         registerHealthIndicator: true
         slidingWindowSize: 5
         failureRateThreshold: 50



# 5. ############# Saga Pattern (Choreography style). #############
      => Use events to coordinate actions b/w microservies.
   
      Order Service - Send Event.
      public void placeOrder(Order order){
         orderRepository.save(order);
         kafkaTemplate.send("order-created", order);
      }
   
      Inventory Service - listen and reduce stock.
      @KafkaListener(topics = "order-created")
      public void reduceStock(Order order){
         inventoryService.reduce(order.getProductId(), order.getQuantity());
      }



# 6. ############# Centralized Logging & Tracing: #############
         => Tech stack: Sleuth + Zipkin.
         <dependency>
          <groupId>org.springframework.cloud</groupId>
          <artifactId>spring-cloud-starter-sleuth</artifactId>
      </dependency>
      <dependency>
          <groupId>org.springframework.cloud</groupId>
          <artifactId>spring-cloud-starter-zipkin</artifactId>
      </dependency>
      
      
      => application.yml
      spring:
         zipkin:
            base-url: http://localhost:6533
         sleuth:
            sampler:
               probability: 1.0


# End.


# 7. ############# Security With OAuth2 + JWT. #############
      #Tech Stack: Keyclock + Spring Security
      # Resource Server Config
   
      @EnableWebSecurity
      public class SecurityConfig extends WebSecurityConfigurerAdapter{
         @Override
         protected void configure(HttpSecurity http) throws Exception {
            http
            .authorizeRequest()
            .antMatchers("/orders/**").hasRole("User")
            .anyRequest().authenticated()
            .and()
            .oauth2ResourceServer().jwt();
         }
      }
      
