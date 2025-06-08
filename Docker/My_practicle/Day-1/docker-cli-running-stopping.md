## docker pull [imageName]
    => Pull an image from a registry

## docker run [imageName]
    => Run containers

## docker run -d [imageName] 
    => Detached mode.

## docker start [containerName]
    => start stopped containers

## docker ps
    => List running containers

## docker ps -a
    => List running and stopped containers

## docker stop [containerName]
    => Stop containers

## docker kill [containerName]
    => kill containers

## docker image inspect  [imageName]
    => Get image info

**docker set memory**

## docker run --memory="256m" nginx        
    // Max memory

## docker run --cpus ".5" nginx
    // Max CPU


## pull and run an nginx server:
    =>
    docker run --publish 80:80 --name webserver nginx   //webserver==> container name, nginx==> container image in the docker registry, Maps the host port to the container listening port.

## List the running containers:
    => docker ps

## stop the container
    => docker stop webserver

## remove the container
    => docker rm webserver

**Docker CLI Attach Shell**

## docker run -it nginx -- /bin/bash
    //Attach shell.

## docker run -it --microsoft/powershell:nanoserver
    //Attach powershell.

## docker container exec -it [containerName] -- bash    
    //Attach to a running container.


**Docker CLI Cleanup commands:**

## docker rm [containerName]    
    => Remove stopped containers

## docker rm $(docker ps -a -q)
    => Remove all stopped containers

## docker images
    => List images

## docker system prune -a    
    => Remove all images not in use by any containers.



    
