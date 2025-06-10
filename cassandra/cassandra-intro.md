# All about cassandra and Cassandra with Java Spring Boot.

# Cassandra Ports:
    => Cassandra, by default, uses port 9042 for client connections using native protocol. 
       It also uses port 7000 for inter-node communication within the cluster, 
       and port 7001 for inter-node communication when TLS is enabled
       7199: Java Management Extensions.
    

# Intro:
    => Cassandra, its a highly scalable, distributed NoSQL database designed to handle large amounts of data across many commodity servers, 
       providing high availability with no single point of failure

# Core Features:
    => 
      1. Distributed Architecture:   Data is distributed across nodes using consistent hashing, with no master node.
      2. High Availability & Fault Tolerance:  Supports replication across multiple datacenters.
      3. Scalability:  Easily Scales horizontally by adding more nodes without downtime.
      4. Write-optimized:  Excellent performance for write-heavy workloads.
      5. Tunable consistency:  You can configure the consistency level per operation (E.g., ONE, QUORUM, ALL).

# Data Model:
    =>
      1. Column-family based
      2. Each table has a primary key consisting of a partition key (which determines the node where data is stored) and optional clustering columns (which sort the data within the partition).
      3. Denormalized, query-driven schema design is encouraged.


# Query Language:
    =>
      uses CQL (Cassandra Query Language), which resembles SQL but is more limited (e.g, no joins, or subqueries)


# Use Cases:
    => 
    1. Time-Series Data.
    2. Real-Time analytics
    3. IOT Applications.
    4. Recommendation engines.


# Modeling Approach In Cassandra:
    =>    Application    ->     Model    ->    Data.


# Partition Key:
    =>    
    
