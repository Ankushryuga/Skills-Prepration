## Kafka Producer: KafkaProducerConfig.java.

    => @Configuration
        public class KafkaProducersConfig{
          @Bean
          public ProducerFactor<String, String> produceFactory(){
            Map<String, Object> config=new HashMap<>();
            config.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
            config.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
            config.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
            return new DefaultKafkaProducerFactory<>(config);
          }
          
          @Bean
          public KafkaProducer<String, String> kafkaProducer(){
              return new KafkaProducer<>(ProducerFactory());
          }
        }

## Message Producer: MessageProducer.java

    => @Service
        public class MessageProducer {
            @Autowired
            private KafkaProducer<String, String> kafkaProducer;

            public void sendMessage(String message){
                kafkaProducer.send("demo-text", message);
            }
        }


## Message Controller: MessageController.java

    ==> @RestController
        @RequestMapping("/publish")
        public class MessageController {
            @Autowired
            private MessageProducer producer;

            @PostMapping
            public ResponseEntity<String> sendMessage(@RequestBody String message){
                producer.sendMessage(message);
                return ResponseEntity.ok("Message sent to kafka");
            }
        }


## Kafka Consumer: KafkaConsumerConfig.java
    
    ==> @Configuration
        @EnableKafka
        public class KafkaConsumerConfig {
            @Bean
            public ConsumerFactory<String, String> consumerFactor(){
                Map<String, Object> config=new HashMap<>();
                config.put(ConsumerConfig.BOOTSTRAP_SERVICES_CONFIG, "localhost:9092");
                config.put(ConsumerConfig.GROUP_ID_CONFIG, "demo-group");
                config.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
                config.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
                return new DefaultKafkaConsumerFactory<>(config);
            }

            @Bean
            public ConcurrentKafkaListenerContainerFactor<String, String> kafkaListenerContainerFactory(){
            var factory=new ConcurrentKafkaListenerContainerFactor<String, String>();
            factory.setConsumerFactory(consumerFactory());
            return factory;
            }
        }


## MessageConsumer: MessageConsumer.java.
    ==> @Service 
        public class MessageConsumer {
            @KafkaListener (topics="demo-text", groupId="demo-group)
            public void listen(String message){
                System.out.println("Received: " + message);
            }
        }


# Test:
    1. Start Kafka and zookeeper:
    ==> docker-compose up -d

    2. Run the consumer application:
    3. Run the producer appliaction:
    4. Send a text message:
        curl -X POST http://localhost:8080/publish -H "Content-Type: text/plain" -d "Hello Kafka!"
    5. Verify the consumer output.
