**Kafka Broker** : its essentially a server that store and deliver messages to consumers.


Inside kafka broker: there are **Kafka Topic**, and kafka topics are categorized channels where messages stored and exchange, basically kafka topic is used to hold events that matches certain categories.
and event are single piece of message or data that stored on kafka topic and sent from **Kafka Producer**, and event are specifically stored in JSON or protobuf.

**Kafka Producer**: its some kind of code that lives in service, used to send events or message on to specific kafka topic, and any data that any of consumer need to inorder to do busines logice.


**Kafka Consumer**: its also some kind of code that lives in service, used to read message from **kafka topic**.
