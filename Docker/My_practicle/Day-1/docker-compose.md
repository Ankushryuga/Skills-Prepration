## docker-compose:
    => 
    1. Define and run multi-containers applications
    2. Define using YAML files
    3. Run using the docker CLI with the compose plugin
      a. Docker compose
    4. Compose specs
      a. http://compose-spec.io


## example of docker compose:
    =>
    version: '3.9'

    services:
      webapi1:    # container 1, define the hostname or network for this container
        image: academy.azurect.io/webapi1      # image selection
        ports:
          -  '8081:80'            # Listening port
          restart: always

      webapi2:    # container 2, define the hostname or network for this container
        image: academy.azurecr.io/webapi2
        ports:
          -  '8082:80'
          restart: always

      apigateway:  # container 3, define the hostname or network for this container
        image: academy.azurecr.io/apigateway
        ports:
          -  '80:80'
          restart: always
          
## running inside containers, services can use hostname or network for commincation b/w each container.



## Docker compose - use cases:
    =>
    1. workloads that don't require a full orchestrator
    2. Development and tests
    3. Use of a service that can run Docker Compose file
      3.1. Azure App Service
      3.2. AWS ECS
      3.3. Virtual Machines

