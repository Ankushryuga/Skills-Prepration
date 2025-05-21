# 1. What is apache kafka?
    => its a distributed streaming platform that allows for publishing. subscribing to, storing, and processing streams of records in real-time, its designed to handle high-throughput, fault-tolerant, and scalable data pipelines.

    Note: Kafka runs on port: 9092

# 2. Key components of Kafka?
    => a. **Poducer**:    Publishes messages to kafka topics.
      b. **Consumer**:   Subscribes to topics and processes the published messages.
      c. **Broker**:     A kafka server that stores and manages topics.
      d. **ZooKeeper**:  Manages and coordinates kafka brokers.
      e. **Topic**:      A category of feed name to which records are published.
      f. **Parition**:   Topics are divided into partitions for scalability.


# 3. Topic in Kafka?
    => Its category or feed name to which records are published. Topics in kafka are always multi-subscriber; that is, a topic can have zero, one or many consumers that subscribe to the data written to it. Topics are split into partitions for improved scalability and parallel processing.


# 4. What is a partition in Kafka?
    => Its an ordered, immutable sequence of records that is continually append to. Each partition is a structured commit log, and records in the partitions are each assigned a sequential id number called the offset. Partitions allow kafka to scale horizontally and provide parallel processing capabilites.


# 5. What is the role of Zookeeper in Kafka?
    => Zooker is used for managing and coordinating kafka brokers. It serves as a centralized service for maintaining configuration information, naming, providing distributed synchronization, and providing group services, Zookeeper keeps track of the status of Kafka cluster nodes, Kafka topics and partitions.

    => Zooker Runs on port 2181.


# 6. What is a broker in kafka?
    => broker is a kafka server that runs in a kafka cluster, it recevies messages from producers, assigns offsets to them, and commits the messages to storage on disk. It also services consumers, responding to fetch requests for partitions and responding with the messages that have been published.


# 7. How does kafka ensure fault tolerance?
    => Kafka ensures fault tolerance through data replication. Each partition is replicated across a configurable number of servers for fault tolerance. One of the server is designated as the leader. Which handles all read and write requests for the partition, while the others are followers that +vely replicates the leader.


# 8. What is the difference b/w a kafka consumer and consumer group?
    => A kafka consumer is an application that reads data from kafka topics. A consumer group is a set of consumers that work together to consume data from one or more topics. The key difference is that each subscribing consumer group. This allows for parallel processing and load balancing of topic consumption.


# 9. What is the purpose of the offset in Kafka?
    => The offset is a unique identifier of a record within a partition. It denotes the position of the consumer in the partition. Kafka maintains this offset per partition, per consumer group, allowing each consumer group to read from a different position in the partition. This enables kafka to provide both queue and publish-subscibe messaging models.


# 10. How does kafka handle message delivery semantics?
    => kafka supports 3 message delivery semantics:
       1. At most once: Messages may be lost but are never redelivered.
       2. At least once: Messages are never lost but may be redelivered.
       3. Exactly once: Each message is delivered once and only once. The choice depends on the specific use case and can be configured through producer and consumer settings.

# 11. What is the role of the kafka producer API?
    => It is used to publish streams of records to kafka topics. It handles partitioning of messages, compression, and load balancing across multiple brokers. The producer is also responsible for retrying failed publish attempts and can be configured for different levels of delivery guarantees.


#
