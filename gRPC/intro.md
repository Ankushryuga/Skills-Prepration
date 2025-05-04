## gRPC introduction
gRPC uses HTTP under the hood..



NOTE: 
gRPC and REST are synchronous --- Good for only 1-1 microservice communication.

But not good for 1 - to - many microservice communication, because if we only use gRPC and REST without kafka it will reduce the perfomance significantly and also stop the other process untill one finishes.

