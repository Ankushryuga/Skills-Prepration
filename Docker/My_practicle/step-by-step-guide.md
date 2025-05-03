## Pull a image from.

1. docker pull postgres:latest

## Set up custom conainer with port binding and bind mounts (its not neccessary to add all the command in one big command i added for practice)

2. docker run -d \                                                                                            # running in detected mode (means in background)
> --name patient-service-db \                                                                                 # name of container
> -p 5000:5432 \                                                                                              # binding host_port(5000) to Container_port(5432)
> -v /Users/ankushraj/Docker_Mount_Data/patient-service-db:/var/lib/postgres/data \                           # Mounting container data to host system so that data stays
> -e POSTGRES_USER=postgres \                                                                                 # Setting up enviornment variables
> -e POSTGRES_PASSWORD=1234 \                                                                             # Setting up enviornment variables
> -e POSTGRES_DB=db \                                                                                         # Setting up enviornment variables
> postgres:latest                                                                                             # Specifying Docker image.


## Verify Data persistence with bind mount.

sudo chown -R 999:999 /Users/ankushraj/Docker_Mount_Data/patient-service-db                                ## giving all access

docker exec -it patient-service-db psql -U postgres                            # Connect to postgresql.


## Added --network flag to above command making it to run in "patient-net" network by default its run in "bridge" 
docker run -d \                  
--name patient-service-db \
--network patient-net \
-p 5000:5432 \
-v /Users/ankushraj/Docker_Mount_Data/patient-service-db:/var/lib/postgres/data \
-e POSTGRES_USER=postgres \
-e POSTGRES_PASSWORD=1234 \
-e POSTGRES_DB=db \


## To inspect docker:
3. docker inspect container-name or container-id
4. docker logs container-name or container-id



## Show containers connected to a network:
5. docker network inspect patient-net







##    ******************************      CONTAINERISING IMAGE    *******************

## SAMPLE DOCKERFILE...

# Stage 1: Build the application using Maven
FROM maven:3.9.9-eclipse-temurin-21 AS builder

WORKDIR /app

# Copy pom.xml and download dependencies first for better caching
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy the source code
COPY src ./src

# Package the application
RUN mvn clean package -DskipTests

# Stage 2: Run the built application using a lightweight JDK
FROM openjdk:21-jdk-slim AS runner

WORKDIR /app

# Copy only the built jar from the builder stage
COPY --from=builder /app/target/patient-service-0.0.1-SNAPSHOT.jar ./app.jar

# Expose port the application will run on
EXPOSE 4000

# Default command
ENTRYPOINT ["java", "-jar", "app.jar"]



## Build the docker image of Dockerfile.
**docker build -t patient-service:latest .**                            ## **docker build** is for building new image from Dockerfile, and -t patient-service:latest is tag with name patient-service and version as latest


Note: if everything is correct you will get o/p like this
Successfully built 7d3ca7f80983
Successfully tagged patient-service:latest

else some error in that use the following command to remove those errors.

## If you got some error while building the image:
**docker rmi image-id**


## to run the container:
docker run -d \
--name patient-service \
--network patient-net \
-p 4000:4000 \
-e SPRING_DATASOURCE_URL=jdbc:postgresql://patient-service-db:5432/db \
-e SPRING_DATASOURCE_USERNAME=postgres \
-e SPRING_DATASOURCE_PASSWORD=1234 \
-e SPRING_JPA_HIBERNATE_DDL_AUTO=update \
-e SPRING_SQL_INIT_MODE=always \
patient-service:latest




