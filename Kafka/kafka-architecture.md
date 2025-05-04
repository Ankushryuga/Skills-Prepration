**Kafka Broker** : its essentially a server that store and deliver messages to consumers. it runs the kafka and manages all the topics.

PORT: 9092 kafka exposes internal port.

Inside kafka broker: there are **Kafka Topic**, and kafka topics are categorized channels where messages stored and exchange, basically kafka topic is used to hold events that matches certain categories.
and event are single piece of message or data that stored on kafka topic and sent from **Kafka Producer**, and event are specifically stored in JSON or protobuf.

**Kafka Producer**: its some kind of code that lives in service, used to send events or message on to specific kafka topic, and any data that any of consumer need to inorder to do busines logice.


**Kafka Consumer**: its also some kind of code that lives in service, used to read message from **kafka topic**, as new kafka consumer joins, they can join easily **subscribe** to existing **kafka topic** as consumers or produce message to relevant topic.


Any producer can send a message to any topic that it wants to and any consumer can consume message from any topic it wants to as well.


## Docker command to run kafka without zookeeper:

docker run -d \
--name kafka-container \
-p 9092:9092 \
-p 9094:9094 \
-e KAFKA_CFG_ADVERTISED_LISTENERS=PLAINTEXT://kafka-container:9092,EXTERNAL://localhost:9094 \
-e KAFKA_CFG_LISTENER_SECURITY_PROTOCOL_MAP=CONTROLLER:PLAINTEXT,EXTERNAL:PLAINTEXT,PLAINTEXT:PLAINTEXT \
-e KAFKA_CFG_LISTENERS=PLAINTEXT://0.0.0.0:9092,CONTROLLER://0.0.0.0:9093,EXTERNAL://0.0.0.0:9094 \
-e KAFKA_CFG_CONTROLLER_LISTENER_NAMES=CONTROLLER \
-e KAFKA_CFG_CONTROLLER_QUORUM_VOTERS=0@kafka-container:9093 \
-e KAFKA_CFG_NODE_ID=0 \
-e KAFKA_CFG_PROCESS_ROLES=controller,broker \
--network patient-net \
bitnami/kafka:latest




✅ After Running
To test Kafka:

## Produce a message:

**docker exec -it kafka-container kafka-console-producer.sh \
  --bootstrap-server localhost:9092 --topic test**

## Consume it:

**docker exec -it kafka-container kafka-console-consumer.sh \
  --bootstrap-server localhost:9092 --topic test --from-beginning**



