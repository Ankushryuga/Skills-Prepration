# Understand the question carefully.
# VVI_NOTE:::: Think Loud for other person can follow up with you.

https://blog.algomaster.io/p/how-to-answer-a-system-design-interview-problem
https://github.com/PacktPublishing/Learn-Spring-Boot-in-100-Steps---Beginner-to-Expert

![image](https://github.com/user-attachments/assets/e43bc064-aa74-4865-bff1-4eaa8967ccee)


# Step 1:   Clarify Requirement (Because question will be vague, its your responsibility to ask question don't assume anything (very important)).
        => Understand the problem statement, clarify any ambiguities and gather as much information as possible about the system's you're being asked to design.
        => There are 2 types of requirements (1. Functional, 2. Non-Functional).

        => Functional Requirements:
            1. Users can view:
                a. Live scores.
                b. Ball-by-ball commentry.
                c. Upcoming matches.    
                d. Match Results.
                e. Player and team statistics.
            
            2. Admin can:
                a. Feed live scores (via external score or manual input).
                b. Upload match commentry and event logs.
        
        => Non-Functional Requirements:
            1. High availability.
            2. Low latency for live score updates (real-time feel).
            3. Horizontal scalability (millions of concurrent users).
            4. Global Read performance.

# Step 2: Capacity Estimation
![image](https://github.com/user-attachments/assets/5f974903-164f-4eab-a581-a2fce7fbf9e0)

        => After clarifying the requirements, you can do some calculations to estimate the 
           capacity of the system you are going to design.
        => get at least rough idea of the number of requests and storage requirements.
        => This includes things like expected daily/montly users, read/write requests per second,
           data storage and network bandwidth needs.
        => users: Estimate the number of daily users and maximum concurrent users during peak hours.
        => traffic: Calculate expected read/write per second. consider peak traffic periods and potential spikes in usage.
        => Storage: Consider the different types of data (structured, unstrctured, multimedia) and estimate
           the total amount of storage required (and its growth rate).
        => Memory: Evaluate the potential benefits of caching to reduce latency and improve performance. Estimate
           how much memory you might need to store frequently accessed data.
        => Networ:  Estimate bandwidth requirements based on the estimated traffic volume and data transfer sizes.

# Step 3: High-Level Design
        => with the requirements and expected capacity in mind, start designing the high-level architecture of the system.
        => Break down the system into major components or modules, such as the frontend, backend, databases, caches, and external services.
        => Draw a simple block diagram that outlines the major system components and the high-level flow of data and requests through the system, 
           from the client to the backend and back.
![image](https://github.com/user-attachments/assets/c83d07d7-82fb-460e-a02f-196f9bedcfb2)
        
        => What to include in your diagram?
        1. Client Applications: Indicates how users will interact with the system (web browser, mobile app, desktop etc).
        2. Web Servers: Servers that handle incoming request from clients.
        3. Load Balancer: Used to evenly distribute traffic to servers to handle significant traffic.
        4. Application services: The backend logic layer where the core functionalities of the system are implemented.
        5. Databases: Specify the type of databases: SQL vs NoSQL and explain why?
        6. Caching layer: If you are using any caching like Redis, memcached etc) to reduce load on the database.
        7. Message Queues: If using asynchronous communication.
        8. External Services: If the system relias on 3rd party APIs.
        
        NOTE: For every component, make sure to consider trade-offs and justify why you picked specific 
        technologies or architectures (e.g., we need strong consistency, so a relational database is a good fit).
    
        # Tips to approach Drawing HLD:
        1. Keep simple and clean.
        2. Use appropriate notations and symbols to represent the components, their interactions, and the data flow.
        3. Use different colors, line styles, or symbols to differentiate b/w various types of components or interactions.
        4. Stick with simple boxes representing components and arrows showing directional data flow.
        5. Show how data flow through the system, from input to storage and retrival using arrows.
        6. Avoid cluttering the diagram with too much details or unnecessary elements.
        7. Don't overthink the minor details, this is about the big picture.

# Step 4: Database Design: 
        => This steps involes modeling the data, choosing the right storage for the system, designing the database schema
           and optimizing the storage and retrieval of data based on the access patterns.
        => Data Modeling:
        1. Identify the main data entries or object that system needs to store and manage (e.g, users, products, orders etc.).
        2. Consider the relationships b/w these entities and how they interact with each other.
        3. Determine the attributes or properties asscoiated with each entity (e.g, a user has an email, name, address etc).
        4. Identify any unique identifiers or primary keys for each entity.
        5. Consider normalization techniques to ensure data integrity and minimize redundancy.
    
        => Choose the Right Storage:
![image](https://github.com/user-attachments/assets/1d236757-3fe6-41d2-904b-2f3ad88ac76e)

        1. Evaluate the requirements and characteristics of the data to determine the most suitable database type.
        2. Consider factors such as data structure, scalability, performance, consistency, and query patterns.
        3. Relational databases (e.g, MySQL, PostgreSQL) are suitable for structured data and complex relationships and ACID properties.
        4. NoSQL databses (e.g, MongoDB, Cassandra) are suitable for unstrcutred or semi-strcutred data, high scalability, and eventual consistency.
        5. Consider using a combination of databases if different data subsets have distinct requirements.
        
        => Design the database schema:
![image](https://github.com/user-attachments/assets/f0681778-a7f3-4f0d-beb3-30de3f573e62)
        
        1. Define the tables, columns, and data types, and relationships based on the chosen database type.
        2. Specify the primary key, foreign key, and any necessary indexes to optimize query performance.
        3. Consider denormalization techniques, such as duplication or pre-aggregation, to improve read performance if needed.

        => Define Data access patterns: 
        1. Identify the common data access patterns and queries that system will perform.
        2. Optimize the database schema and indexes based on these access patterns to ensure efficient data retrieval.
        3. Use appropriate caching mechanisms to store frequently accessed data and recuce databse load.
        4. For scalability, consider partitioning or sharding your data across multiple databases or tables.

# Step 5: API Design
        =>
        Designing the API (Application Programming Interface) and communication protocols defines how different components of the 
        system interact with each other and how external clients can access the system's functionality.

        # Identify the API Requirements:
        1. Determine the main functionalities and services that the system needs to expose through the API.
        2. Consider the different types of clients (e.g., web, mobile, third-party services) that will interact with the API.
        3. Identify the data inputs, outputs, and any specific requirements for each API endpoint.

        # Choose the API Style:
        1. Select an appropriate API style based on the system's requirements and the clients' needs.
        2. RESTful APIs (Representational State Transfer) are commonly used for web-based systems and provide a uniform interface for resource manipulation.
        3. GraphQL APIs offer a flexible and efficient approach for clients to query and retrieve specific data fields.
        4. RPC (Remote Procedure Call) APIs are suitable for systems with well-defined procedures or functions.

        # Define the API Endpoints:

        1. Design clear and intuitive API endpoints based on the system's functionalities and data model.
        2.Use appropriate HTTP methods (e.g., GET, POST, PUT, DELETE) for each endpoint to indicate the desired action.

        # Specify the Data Formats:
        1. Choose the data formats for the API requests and responses.
        2. Common formats include JSON (JavaScript Object Notation) and XML (eXtensible Markup Language).

        # Consider factors such as readability, parsing efficiency, and compatibility with the clients and system components.

        # Choose Communication Protocols:
        1. HTTPS: Commonly used for RESTful APIs and web-based communication.
        2. WebSockets: Useful for real-time, bidirectional communication between clients and servers (e.g., chat applications).
        3. gRPC (gRPC Remote Procedure Call): Efficient for inter-service communication in microservices architectures.
        4. Messaging Protocols: AMQP, MQTT for asynchronous messaging (often used with message queues).


# Step 6: Dive into key components
        => Common areas for deep dives:
        1. Databases: How would you handle a massive increase in data volume? Discuss sharding (splitting data across multiple databases), replication (read/write replicas).
        2. Web Servers/Application Servers: How do you add more servers behind the load balancer for increased traffic?
        3. Load Balancers: Which Load Balancing techniques and algorithms to use (e.g., round-robin, least connections).
        4. Caching: Where do you add more cache layers (in front of web servers? in the application layer?), and how do you deal with cache invalidation?
        5. Single Points of Failure: Identify components whose failure would take down the system and discuss how to address it.
        6. Authentication/Authorization: How do you manage user access and permissions securely?
        7. Rate Limiting: How do you prevent excessive use or abuse of your APIs?


# Step 7: Address Key Issues: Scalability, Reliability.
        => This step involves identifying and addressing the core challenges that your system design is likely to encounter.
        These challenges can range from scalablity and performance to reliablity, security, and cost concerns.
        # Addressing scalability and performance concerns.
![image](https://github.com/user-attachments/assets/2d64d902-6c11-4177-bc2c-e3b5ba2c7582)

        1. Scale horizontally (Scale-out) by adding more nodes and use load balancers to evenly distribute the traffic among the nodes.
        2. Scale vertically (Scale-up) by increasing the capacity of individual resources (e.g., CPU, memory, storage).
        3. Implement caching to reduce the load on backend systems and improve response times.
        4. Select efficient data structures and algorithms for critical operations.
        5. Optimize database queries and indexes.
        6. Denormalize data when necessary to reduce join operations.
        7. Use database partitioning and sharding for improved query performance.
        8. Implement content delivery networks (CDNs) to serve static assets from geographically distributed servers.
        9. Utilize asynchronous programming models to handle concurrent requests efficiently.

        # Addressing Reliablity:
        Reliability refers to a system's ability to function correctly and consistently, even in the presence of failures or errors.

![image](https://github.com/user-attachments/assets/a01877e3-f9f1-4442-90c3-ea960009b0c1)
        
        => Here are some key considerations for making our system more reliable:
        
        1. Analyze the system architecture and identify potential single point of failures. 
        2. Design redundancy into the system components (multiple load balancers, database replicas) to eliminate single points of failure.
        3. Consider geographical redundancy to protect against regional failures or disasters.
        4. Implement data replication strategies to ensure data availability and durability.
        5. Implement circuit breaker patterns to prevent cascading failures and protect the system from overload.
        6. Implement retry mechanisms with exponential backoff to handle temporary failures and prevent overwhelming the system during recovery.
        7. Implement comprehensive monitoring and alerting systems to detect failures, performance issues, and anomalies.

Remember, the goal is not to provide a flawless solution but to showcase your ability to break down problems, make well-reasoned design decisions, and communicate your thought process clearly.

These 7 steps should guide you to remain on track and cover all the different aspects when answering a system design interview problem.
