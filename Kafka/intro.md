## kafka cheat shit
**What is kafka?** When it comes to enabling communication b/w producers and consumers using message-based topics. Apache kafka is fast, scalable, fault-tolerant, publish-subscribe messaging system. Basically, it designs a platform for high-end new generation distributed applications. Also, it allows a large number of permanent or ad-hoc consumers. One of the best features of Kafka is, it is highly available and resilient to node failures and supports automatic recovery. This feature makes Apache Kafka ideal for communication and integration b/w components of large-scale data systems in real-world data systems.

## This technology replaces the conventional message brokers, with the ability to give higher throughput, reliability, and replication like JMS, AMQP and many more.
## Core abstraction of kafka:
1. **Kafka Broker**: its a node on the **kafka cluster**, its use is to persist and replicate the data
2. **Kafka Producer**: it pushes the message into the message container called the **kafka topic** 
3. **Kafka Consumer**: it pulls the message from kafka topic.

## Messaging System in Kafka:
when we transfer data from one application to another, we use the messaging system. It results as, without worrying about how to share data, applications can focus on data only. On the concept of reliable message queuing, distributed messaging is based. Although, messages are asynchronously queued b/w client applications and messaging system.

There are 2 types of messaging patterns available, i.e, **Point to point** and **Publish-Subscibe (pub-sub)** messaging system. However, most of the messaging patterns follows pub-sub.
![image](https://github.com/user-attachments/assets/01910d32-d2d8-483c-811f-e4d2cfe7a3e9)


**Point to Point Messaging System**: in this messages are persisted in a queue. Although, a particular message can be consumed by a maximum of one consumer only, even if one or more consumers can consume the messages in the queue. Also, it makes sure that as soon as a consumer reads a message in the queue, it disappears from that queue.


**Publish-Subscribe Messaging System**: 


**Kafka Architecture**:
