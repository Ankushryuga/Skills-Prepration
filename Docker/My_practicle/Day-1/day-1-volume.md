## since containers are ephemerous so persistent data is not possible.

## Volume Commands:
    =>
    1. docker create volume  [volumeName]    //create a new volume.
    2. docker volume ls                      //list the volumes.
    3. docker volume inspect  [volumeName]   //Display the volume info
    4. docker volume rm [volumeName]         //Deletes a volume
    5. docker volume prune                   //Delete all volumes not mounted.



## Mapping a volume:
    =>
    1. Create a volume:
      docker volume create myvol
    2. inspect the volume:
      docker volume inspect myvol
    3. list the volumes
      docker volume ls
    4. run a container with a volume
      docker run -d --name devtest -v myvol:/app nginx:latest (v flag for volume, myvol is volume and app is logical folder).



## Mapping to a local folder for development or testing:
    =>
    1. run a container with a volume:
      => docker run -d --name devtest -v d:/test:/app nginx:latest

    2. Inspect the container
      => docker inspect devtest


## data inside the volume will persist untill unless you do cleanup 
    => remove container that is using that volume
    docker volume rm myvol
    => stop the myvol
    docker stop myvol
    => remove the volume
    docker rm myvol



