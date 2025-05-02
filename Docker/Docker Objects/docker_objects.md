**Images, Containers, Volumes, Networks** these are the main docker objects.


## Create image of Dockerfile:
**docker build -t new-image - < Dockerfile** for creating image..  


## Docker Network:
By default all the docker network runs in **bridge** network.

==> **docker network connect my-network container_id**   //we can use connect tag to make container with given container_id run in **my-network**.

