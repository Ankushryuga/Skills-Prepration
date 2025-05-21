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


# 10. How does kafka handle message delivery semantics? or How does kafka handle message delivery guarantees?
    => kafka supports 3 message delivery semantics:
       1. At most once: Messages may be lost but are never redelivered.
       2. At least once: Messages are never lost but may be redelivered.
       3. Exactly once: Each message is delivered once and only once. The choice depends on the specific use case and can be configured through producer and consumer settings.

# 11. What is the role of the kafka producer API?
    => It is used to publish streams of records to kafka topics. It handles partitioning of messages, compression, and load balancing across multiple brokers. The producer is also responsible for retrying failed publish attempts and can be configured for different levels of delivery guarantees.


# 12. How does kafka support scalability?
    => Through partitioning and distributed processing, topics can be partitioned across multiple brokers, allowing for parallel processing. Consumers can be grouped to read from multiple partitions simultaneously. Brokers can be added to a cluster to increase capacity, and the cluster can be scaled without downtime.

    
# 13. How does kafka handle message ordering?
    => Kafka guarantees order within a partition. Messages sent by a producer to a particular topic partition will be appended in the order they are sent.

# 14. What is the significance of the acks paramater in Kafka Producers?
    => The acks parameter in kafka producers controls the number of acknowledgements the producer requires the leader to have received before considering a request complete.
    => It affects the durability of records and can be set to: 
    0: No acknowledgement 
    1: Leader acknowledgement.

# 15. How does kafka handle data retention?
    => Through retention policies, these can be based on time or size, After the retention limit is reached, old messages are discarded. Kafka also supports log compaction for topics where only the latest value for each key is needed.

# 16. What is the purpose of kafka connect API?
    => its a tool for scalably and reliably streaming data b/w kafka and other data systems. It makes it simple to quickly define connectors that move large collections of data into and out of kafka, this can be used to connect kafka with databases.


# 17. How does kafka ensure High availability?
    => Through
    1. Replection of partitions across multiple brokers.
    2. Automatic leader election when a broker fails.
    3. Ability to add brokers to a cluster without downtime.
    4. Configurable number of in-sync replicas for durability.
    5. Zookeeper for distributed coordination and broker management.


# 18. what is Kafka Stream API?
    => Its a client library for building applications and microservices, where input and output data are stored in kafka clusters, it is tightly integrated with kafka.


# 19. How does kafka handle message compression?
    => Compression can be configured at the producer level, and kafka supports several compression types including gzip, snappy, lz4, and zstd. The broker can be configured to decompress messages to validate and convert them to the message format version on the broker.

# 20. How does kafka handle message size limit?
    => Kafka has configurable message size limits, the default maximum message size is 1MB, but this can be increased by changing the **message.max.bytes** configuration on the broker and the **max.request.size** on the producer. However, very large messages can impact performance and memory usage, so it's generally recommended to keep messages relatively small.

# 21. role of group coordinator in kafka?
    => its responsible for managing consumer groups. it handles consumer group memberships, assigns partitions to consumers within a group.

# 22. How  does kafka handle data replication?
    => Kafka replicates data by maintaining multiple copies of each partition across different brokers. One broker is designated as the leader for a partion, handling all read and write requests, while other follows leader's data. if leader fails then one of the followers become the new leader and the process continues.


# 23. What is purpose of the Idempotent Producer in Kafka?
    => It ensures that messages are delivered exactly once to a partition, even in the case of retries.


# 24. How does kafka handle consumer offsets?
    => kafka maintains offsets for each consumer group per partition, These offsets represent the position of the consumer in the partition log.

# 25. What is the purpose of the kafka Mirror Maker?
    => this tool is used for replicating data b/w kafka clusters, acros different data centers, it works by consuming from one kafka cluster and producing to another. This is useful for mainting a backup of your data.

# 26. What is the role of the controller in a kafka cluster?
    => to manage overall state of the cluster. Its responsible for electing partition leaders, managing the distribution of partitions across brokers, and handling administrative operations like adding or removing topics.

# 27. How does Kafka ensure data consistency?
    => through: 
    1. Replication: Each partition is replicated across multiple brokers.
    2. In-Sync Replicas (ISR): Only replicas that are up-to-date with the leader can be part of the ISR.
    3. Acknowledgments: Producers can be configured to wait for acknowledgements from the leader and ISRs.
    4. Atomic writes: writes to a partition are atomic and ordered.
    5. Idempotent producers: Prevent duplicate messages in case of retries.

# 28. How does kafka handle message timestamps?
    => 
    1. CreateTime: The time the producer created the message.
    2. LogAppendTime: The time the broker received the message


# 29. How does kafka handle message acknowledgements?
    => Kafka producers can be configured to require acknowledgements when sending messages. There are 3 settings.
    1. acks = 0 (No acknowledgement(fire and forget).
    2. acks = 1 (Leader acknowledgement only).
    3. acks = all (Full ISR (in-sync replica) acknowledgement the choice affect the trade-off b/w latency and durability, Higher levevls of acknowledgment provide stronger durability gurantees but increase latency.


# 30. How does kafka handle message serialization and deserialization?
    => Kafka itself treats message data as **opaque** byte arrays and doesn't perform any serialization or deserialization, however kafka producers and consumers can be configured with serializers and deserializers for key and values.

# 31. What is purpose of kafka schema registry?
    => it provides a serving layer for metadata. It provides a RESTful interface for storing and retriving AVRO schemas its used in conjunction with kafka to ensure that producers and consumers use compatiable schemas.

# 32. How does kafka handle topic deletion?
    => When a topic gets deleted in kafak, following steps occurs:
    1. Topic is marked for deletion in zookeeper.
    2. Kafka Stops serving data for that topic.
    3. The actual log segments on disk are asynchronously deleted This process ensures that topic deletion doesn't impact the performance of other operations.

# 33. Purpose of kafka consumer heartbeat thread?
    => Kafka consumer heartbeat thread is responsible for sending period heartbeats to the kafka broker, These heartbeats indicates that the consumer is alive and still part of the consumer group. If a consumer fails to send heartbeats for a configurable period, It's considered dead, and the group coordinator will a trigger a rebalance to reassign it partitions to other consumers in the group.

# 34. How does kafka handle message ordering across multiple partitions?
    =>  Kafka, only guarantees message ordering within a single partition. Across multiple partitions, there is no guarantee of message ordering. If global ordering is required, its typically achived by using a single partition for the topic, but this limits scalability.


# 35. How kafka handle Consumer lag?
    => Consumer lag in kafka referes to the difference b/w the offset of the latest produced message and the offset of the last consumed message, kafka provides tools and APIs to monitor consumer lag.

# 36. What is the purpose of kafka producer's Partitioner Interface?
    => partitioner interface in kafka's producer API determine which partition in the topic a message will be sent to. 

# 37. How does kafka handle message delivery timeouts?
    => Kafka producers can be configured with delivery timeout, if a message cannot successfully acknowledged within this timeout period, the producer will consider the send failed and may retry (depending on configuration). On the consumer side, there's a **max.poll.intervals.ms** setting that controls how long a consumer can go without pooling before its considered failed and a rebalance is triggered.

# 38. Purpose of Kafka Streams DSL?
    => it provides High level API for stream processing operations. It allows developers to express complex processing logic filtering, transforming, aggregating and joining streams of data.

# 39. How does kafka handle message validation?
    => kafka itself doesn't perform message validation beyound ensuring that messages don't exceed the configured maximum size. Message validation is typically handled at the producer or consumer level., producer can implement validation logic before sending messages, while consumer can validate message after receving them.


# 40. How does kafka handle message retention across multiple data centers?
    => MirrorMaker is responsible for message retention accorss multiple data centers, it is stand-alone tool for copying data b/w kafka clusters.

# 41. How does kafka handle message consumption patterns?
    => it supports 2 main consumption patterns:
        1. Queue: Each message is processed by one consumer within a consumer group. This is achived by having multiple consumers in a group, each reading from exclusive partitions.
        2. Publish-Subscribe: All messages are processed by all consumers. This is achived by having each consumer in its own consumer group, allowing all consumers to read all messages. These patterns can be combined and customized to fiz various use cases.
        
