## Kafka Producer:
    => @Configuration
        public class KafkaProducersConfig{
          @Bean
          public ProducerFactor<String, String> produceFactory(){
            Map<String, Object> config=new HashMap<>();
            config.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092"
          }
        }
