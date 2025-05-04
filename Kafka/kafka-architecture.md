**Kafka Broker** : its essentially a server that store and deliver messages to consumers. it runs the kafka and manages all the topics.

PORT: 9092 kafka exposes internal port.

Inside kafka broker: there are **Kafka Topic**, and kafka topics are categorized channels where messages stored and exchange, basically kafka topic is used to hold events that matches certain categories.
and event are single piece of message or data that stored on kafka topic and sent from **Kafka Producer**, and event are specifically stored in JSON or protobuf.

**Kafka Producer**: its some kind of code that lives in service, used to send events or message on to specific kafka topic, and any data that any of consumer need to inorder to do busines logice.


**Kafka Consumer**: its also some kind of code that lives in service, used to read message from **kafka topic**, as new kafka consumer joins, they can join easily **subscribe** to existing **kafka topic** as consumers or produce message to relevant topic.


Any producer can send a message to any topic that it wants to and any consumer can consume message from any topic it wants to as well.


