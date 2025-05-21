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
