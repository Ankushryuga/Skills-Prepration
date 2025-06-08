## Build the images
    => docker compose build

## Start the containers
    => docker compose start

## Stop the containers
    => docker compose stop

## Build and Start 
    => docker compose up -d

## List what's running
    => docker compose ps

## Remove from memory
    => docker compose rm

## Stop and remove
    => docker compose down

## get the logs
    => docker compose logs

## Run a command in a container
    => docker compose exec [container] bash




## docker compose is located in folder, if you run
  **docker compose up -d** it will launch the application, if you run again, it wont do anything
  if you want to create 2nd instance of your application then
  **docker compose -p test2 up -d**



## Docker compose v2 commands:
    => Run an instance as a project
    1. docker compose --project-name test1 up -d  
    => Shortcut
    1. docker compose -p test2 up -d
    => List running projects
    1. docker compose ls
    => Copy files from the container
    1. docker compose cp [container ID]:[src_path] [dest_path]  
    => Copy files to the container
    1. docker compose cp [SRC_PATH] [containerId]:[DEST_PATH]




# Docker compose:
    => build the service
    1. docker compose build
    => build, (re)creates, starts, attaches to containers for a service
    1. docker compose up
    => list the services
    1. docker compose ps
    => bring down what was created by up.
    1. docker compose down



