## Database configurations:

1. PostgreSQL: in **application.properties** file of Spring web server.

   spring.datasource.url=jdbc:postgresql://ipaddress:5432/database_name    // normally postgres run on 5432 but it can be modified.
   spring.datasource.username=postgres
   spring.datasource.password=1234
   spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
   spring.jpa.hibernate.ddl-auto=update
   spring.sql.init.mode=always

   
