## Pull a image from.

1. docker pull postgres:latest

## Set up custom conainer with port binding and bind mounts (its not neccessary to add all the command in one big command i added for practice)

2. docker run -d \                                                                                            # running in detected mode (means in background)
> --name patient-service-db \                                                                                 # name of container
> -p 5000:5432 \                                                                                              # binding host_port(5000) to Container_port(5432)
> -v /Users/ankushraj/Docker_Mount_Data/patient-service-db:/var/lib/postgres/data \                           # Mounting container data to host system so that data stays
> -e POSTGRES_USER=postgres \                                                                                 # Setting up enviornment variables
> -e POSTGRES_PASSWORD=password \                                                                             # Setting up enviornment variables
> -e POSTGRES_DB=db \                                                                                         # Setting up enviornment variables
> postgres:latest                                                                                             # Specifying Docker image.


## Verify Data persistence with bind mount.

sudo chown -R 999:999 /Users/ankushraj/Docker_Mount_Data/patient-service-db                                ## giving all access

docker exec -it patient-service-db psql -U postgres                            # Connect to postgresql.



