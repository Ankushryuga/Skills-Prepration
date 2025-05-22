# 1. What is docker?
    => Its open-source containerization platform that is used for building, deploying, and running applications. Docker allows you to decouple the application/software from underlying infrastrcture.

# 2. What is a container?
    => A container is a standard unit of software bundled with dependencies so that applications can be deployed fast and reliably b/w different computing platforms.

# 3. How many Docker components are there?
    => There are 3 docker components, they are - Docker client, Docker Host, and Docker Repository.
     
  ![image](https://github.com/user-attachments/assets/dac1964c-9ed8-406d-baf3-4e99ae8b392a)

    =>  1. Docker client: It perform "build", "pull" and "run" operations for the purpose of opening communication with the docker host.
        2. Docker Host:   This component has the main **docker daemon** and hosts containers and their associated images. The daemon establishes a connection with docker registry.
        3. Docker Registry: This component stores the docker images. There can be a publich registry or a private one. The most famous public registries are Docker Hub and Docker Cloud.

#  4. What are docker images?
    => They are executable packages (bundled with application code & dependencies, s/w packages, etc). for the purpose of creating containers. Docker images can be deployed to any docker environment and containers can be spun up there to run the application.

# 5. What is DockerFile?
    => it is a text file that has all commands which need to be run for building a given image.
    => How docker containers are created?
    
                  Build            Run
      DockerFile  => Docker Image  => Docker Container.

# 6. What is the functionality of a hypervisor?
    => its a s/w that makes virtualization happen because of which is sometimes referred to as the virtual machine monitor. This divides the resources of the host system and allocates them to each guest environment installed.
  ![image](https://github.com/user-attachments/assets/4d7e6022-9b6e-46de-a56b-cecb9be2b4fd)
    
    => There are 2 types of hypervisor:
    1. Native Hypervisor:   Bare-Metal Hypervisor and runs directly on the underlying Host systems.
    2. Hosted Hypervisor:  This type makes use of the underlying host OS system which has the existing OS installed.

# 7. What is Docker Compose?
    => Its a YAML file consisting of all the details regarding various services, networks, and volume that are needed for setting up the docker-based application. So **docker-compose** is used for
      creating multiple containers, host them and establish communication b/w them. For the purpose of communication amongst the containers, ports ares exposed by each and every container.

# 8. What is docker namespace?
    => A namespace is basically a linux feature that ensures OS resources partition in a mutually exclusive manner. This forms the core concept behind conttainerization as namespaces introduce a layer of isolation amongst the containers.
      => in docker, the namespaces ensure that the containers are portable and they don't affect the underlying host. 
        example of docker namespace: PID, Mount, User, Network, IPC.

# 9. What is docker image registry?
    => A docker image registry, in simple terms, is an area where docker images are stored. Instead of converting the applications to containers each and every time, a developer can directly use the images stored in the registry.
    => THis image registry can either be public or private and Docker hub is the most popular and famous public registry available.

# 10. What is docker container?
    => 
    1. it consist of applications and all their dependencies.
    2. They share the kernal and system resources with other containers and run as isolated systems in the host OS.
    3. The main aim of docker container is to get rid of infrastrcture dependency while deploying and running applications. This means that any containerized application can run on any platform irrespective of the infrastructure being used beneath.

# 11. What is Docker Hub?
    => it public cloud based registry provided by docker for storing public images of the containers along with the provision of finding and sharing.


# 12. What command can you run to export a docker image as an archive?
    => using docker save command:
      Syntax: docker save -o <exported_name>.tar <container-name>

# 13. What command can be run to import a pre-exported Docker image into another Docker host?
    =>  using Docker load command:
      Syntax: docker load -i <export_image_name>.tar.

# 14. Can a paused container be removed from Docker?
    => No its impossible, first stop the container then can only be removed.

# 15. What is the way to establish communication b/w docker host and linux host?
    => it can be done using networking by identifying **ipconfig** on the docker host. This command ensures that an ethernet adapter is created as long as the docker is present in the host.

# 16. What is purpose of the volume parameter in a docker run command?
    => 
    1. The synax of docker run when using the volume is: docker run -v host_path:docker_path <container_name>
    2. The volume parameter is used for syncing a directory of a container with any of the host directories. exmaple: docker run -v /data/app:usr/src/app myApp, this command mounts the directory /data/app in the host to the usr/src/app directory. we can sync the container with the data files from the host without having need to restrart it.

# 17. Where are docker volumes stored in docker?
    => Volumes are created and managed by Docker and cannot be accessed by non-docker entities, they are stored at /var/lib/docker/volumens/


# 18. What does the docker info command do?
    => it gets detailed infromation about Docker installed on the host system. The information can be like what is the number of containers or images and in that state they are running and hardware specifications etc.


# 19. pupose of up, run and start commands of docker compose? 
    => up command:     for keeping docker-compose up (ideally at all times), 
       run command:    here the service name has to be provided and docker starts only that specific service and also the other services to which the target service is dependent, this command is helpful for testing the container and also performing tasks such as adding or removing data to the container volumes etc.
       start command:  only those containers can be restarted which were already created and then stopped

# 20. List the most commonly used instructions in Dockerfile?
    => 
    1. FROM:     this is used to set the base for upcoming instructions. A docker file is considered to be valid if its starts with the FROM instruction.
    2. LABEL:    this is used for the image organization based on projects, modules, or licensing. It also helps in automation as we specify a key-value pair while defining a label that can be later accesses and handled programmatically.
    3. RUN:      this is used to execute instructions following it on the top of the current image in a new layer. RUN command execution, we add layers on top of the image and then use that in subsequent steps.
    4. CMD:      this is used to provide default values of an executing container. IN cases of multiple CMD commands the last instruction would be considered.


# 21. Daemon Logging vs Container Logging?
    => 
    1. Daemon Level Logging:      This has 4 levels  - > Debug, Info, Error and Fatal.
    2. Container Level Logging:   This can be done using **sudo docker run -it <container_name> /bin/bash, in order to check the container level logs, we can run sudo docker logs <container_id>

# 22. Docker Image vs Layer?
    => Image: is built up from a series of read-only layers of instructions. An image corresponds to the docker container and is used for speedy operation due to the caching mechanism of each step.

    => Layer: is instructions of image's Dockerfile. in other words, layer is also an image but it is the image of instructions run.

# 23. CMD vs ENTRYPOINT?
    => CMD command provides executable defaults for an executing container, in case executable has to be ommited then the usage of ENTRYPOINT instruction along with the JSO array format has to be incorporated.
       ENTRYPOINT specifies that the instruction within it will always be run when the container starts.


# 24. Virualization vs Containerization?
    => virtualization:     it allows developers to run and host multiple OS on the hardware of a single physical server.
    => Containerization:   it helps developers to deploy muliple applications using the same OS on a single virtual machine or server.


# 25. COPY VS ADD commands in Dockerfile?
    => both are same functionality, but COPY is preferred because it provides higher transparency.
    

# 26. Can a container restart by itself?
    =>  Yes, it is possible only while certain docker-defined policies while using the docker run command.
        1. Off: container won't restart in case it's stopped or its fails.
        2. On-Failure: restart ifself on failures.
        3. unless-stopped: restart itself and only stop when user executed stop command. 
        4. Always: always gets restarted.


# 27. Can we use JSON instead of YAML while developing docker-compose file?
    => Yes it can be used, in order to run docker-compose with JSON, **docker-compose -f docker-compose.json up** can be used.


# 28. How many containers you can run in docker and what are the factors influencing this limit?
    => There is no clearly defined limit to the number of containers that can run within docker, but it all depends on the limitations - more specifically hardware restrictions. 


# 29. Describe the lifecyle of Docker container?
    => From the start to end are called docker container life cycle.
    
    => 1. Created       : This state where the container has been created new but not started yet.
       2. Running       : This state, the container would be running with all its associated processes.
       3. Paused        : This state, when the running contianer has been paused.
       4. Stopped       : This state happens when the running container has been stopped.
       5. Deleted       : This, the container is in dead state.


    
# 30. How to ensure that a container 1 runs before container 2 while using docker compose? 
    => docker-compose doesn't wait for any container to be ready, before going ahead with the next containers.
    But to apply order of execution, we can use "depends_on", 

    




