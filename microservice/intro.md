## Resource: for monolythic and microservice architecture:
https://earthly.dev/blog/monorepo-vs-polyrepo/

## Microservice introduction
Microservices is a software architectural style that structures an application as a collection of loosely coupled, small, independently deployable services.
Each service focuses on a specific business function and can be developed, deployed, and scaled independently. This architecture promotes modularity, scalability and resilience.


## Microservices Architecture?
## Microservices and Infrastructure:
Microservices architecture places a significant focus on infrastructure, as the way microservices are deployed and managed directly impacts the effectiveness and scalabity of the system.

Microservices architecture addresses infrastructure considerations:
1. Containerization: Microservices are often packaged as container, like **Docker** that encapsuate an application and its dependencies, ensuring consistency b/ development, testing and production environments. **Containerization** simplifies deployment and makes it easier to manage infrastructure resources.

2. Orchestration: Microservices are typically deployed and managed using container orchestration platform like **Kubernetes**. kubernetes automates the deployment, scaling, and management of containerized applications. It ensures that microservices are distributed across infrastructure nodes efficienyly and can recover from failures.

3. Service Discovery: Microservices need to discover and communicate with each other dynamically. **Service Discovery**. tool like **etcd, consul** or kubernetes built-in service discovery mechanisms help locate and connect to microservices running on different nodes within the infrastructure.

4. Scalability: Microservice architecture emphasizes horizonal scaling, where additioal microservice instances can be added as needed to handle increasd workloads. Infrastructure must support the dynamic allocation and scaling of resources based on demand.


## How to build a microservice?
First step in building a microservice is breaking down an application into a set of services. Breaking a monolithic application into microservices involves a process of decompoition where you identify discrete functionalities within the monolith and refactor them into separate, independent microservice.

NOTE: this process requries careful planning and consideration of various factors, as discussed below.

NOTE: VVI.
1. **Analyze the Monolith**: Understand the existing monolithic application thoroughly, including its architecture, dependencies, and funcitonality.

2. **Identify Business Capabilities**: Determine the monolith's distinct business capabilities or functionalities. These could be features, modules, or services that can be separated logically.

3. **Define Service Boundaries**: Establish clear boundaries for each microservice. Identify what each microservice will be responsible for and ensure that these responsibilites are cohesive and well-defined.

4. **Data Decoupling**: Examine data dependencies and decide how data will be shared b/w microservices. you may need to introduce **data replication**, **data Syncronization**, and separate databases for each microservice.

5. **Communication Protocols**: Define communication protocols and APIs b/w microservices. **RESTful APIs**, **gRPC**, or message queues are commanly used for **inter-service communication**.

6. **Separate Codebases**: Create different codebases for each microservice. This may involve extracting relevant code and functionality from monolith into **Individual repository or as packages in a monorepo strategy**.

7. **Decomponse the database**: If the monolithic application relies on a single database, you may need to split the database into smaller databases or schema within a database for each microservice.

8. **Implement Service Logic**: Develop the business logic for each microservice. Ensure that each microservice can function independently and handle its specific responsibilites.

9. **Integration and Testing**: Create thorough intergration tests to ensure that the microservices can communicate and work together as expected. Use Continous Integration (CI) and automatd testing to maintain code quality.

10. **Documentation**: Maintain comprehensive documentation for each microservice, including API documentation and usage guidelines for developers who will interact with the services.

After you've broken down your services, its important to establish correct standards for how your microservices will communicate.



## How do microservices communicate with each other?
Communication across services is an important aspect to consider when building microservices.
And **Communication is made to be efficient and robust**.


## There are 2 main categories of microservices-based communication:

1. **Inter-service communication**
2. **Intra-service communication**

1. **Inter-Service communication**: Inter-service communication in microservices refers to how individual microservices communicate and interact within a microservices architecture. 
Microservices can employ 2 fundamental messaging approaches to interact with other microservices in **Inter-service communication**.
## Synchronous Communication:
in this approach where a service invokes another service through protocols like HTTP or gRPC and waits untill the service responds with a response.
![image](https://github.com/user-attachments/assets/8be0a16d-773d-49a4-928d-faf79555f9fe)
## Asynchronous Messaging Passing:
In this a service dispatches a message without waiting for an immediate response.
subsequently, asynchronously, one or more service process the message at their own pace..
![image](https://github.com/user-attachments/assets/5050c271-4a86-4a83-aede-36ae0a94a4fd)

## End Inter-service communication.



## Intra-service communication:
Intra-service communication in microservices refers to the interactions and communciation within a single microservice, encompassing the various components, modules, and layers that make up that microservice.

Simply put- unlike inter-service communication, which involves communication b/w different microservices, intra-service communication focuses on the internal working of a single microservice.

NOTE:
**But, with either approach you adapt, you have to make sure that you create the perfect balance of communication to ensure that you don't have excessive communication happening in your microservices. If so, this could lead to "chatty microservices"**.



## What is chattiness in microservices communications?
"Chattiness" refers to a situation where there is excessive or frequent communication b/w microservices.

**It implies that microservices are making many network requests or API calls to each other, which can have several implications and challenges, such as performance overhead, increased complexity, scalability issues, and network traffic.**

![image](https://github.com/user-attachments/assets/582c0a5d-5cf8-41ca-99a2-d4743d1f0ab5)


## What is the usage of middleware in microservices?
Middleware plays a crucial role in microservices architecure by providing services, tools, and components that facilitate communication, intergration, and management of microservice.



## Inter-service communication:: 
Middleware provides communication channels and products that enable microservices to communicate with each other. This can include message brokers like **RabbitMQ**, **Apache Kafka**, **RPC framework like gRPC, or RESTFUL Apis**.


## Service Discovery:
Service discovery middleware helps microservices locate and connect to other microservices dynamically, especially in dynamic or containerized enviroments. Tool like **Consul, etcd, or Kubernetes service discovery** features aid in this proces.. 


## API Gateway:
An API gateway is a middleware component that serves as an entry point for external clients to access microservices. it can handle authentication, authorization, request routing, and aggregation of responses from multiple microservices.


## Security and Authentication:
Middleware components often provide security features like authentication, authorization and encryption to ensure secure communication b/w microservices. **Tools like OAuth2, JWT, and API security gateways** are used to enhance security.

## Distributed Tracing: 
Middleware for distributed tracing like **Jaeger** and **Zipkin** helps monitor and trace requests as they flow through multiple microservices, aiding in debugging, performance optimization, and understanding the system's behavior.

## Monitoring and Logging:
Middleware often includes monitoring and logging components like **ELK Stack**, **Prometheus**, and **Grafana** to track the health, performance, and behavior of microservices. This aids in troubleshooting and performance optimization.


