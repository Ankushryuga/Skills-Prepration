# Dockerfile vs docker-compose.yml  
    =>
    Purpose: 
        Dockerfile: Defines how to build a single image,
        docker-compose.yml: Defines how to run and connect multiple containers.

    Build instructions:
        Dockerfile: YES - sets up environment, install deps, etc.
        docker-compose.yml: - No - it just uses the Dockerfile to build/run containers.

    Multiple Containers:
        Dockerfile: Only 1 container per Dockerfile
        docker-compose.yml: - Supports multiple services (frontend, backend, db, etc).

    Testing/Staging/production:
        Dockerfile: Needs manual config per env
        docker-compose.yml: Easier with profiles, overrides, and volume mapping.

    Volumes & Networking:
        Dockerfile: Manual via docker run
        docker-compose: built-in (volumes, networks, depends-on, etc)

    Local Dev (Hot reload):
        Dockerfile: Not convenient alone
        docker-compose: Great with volumes for live code updates

    Integreation with CI/CD:
        Dockerfile: Standard
        docker-compose: very useful for multi-service testing.



✅ Use Dockerfile when:

    You want to build and distribute an image (e.g. docker build, push to DockerHub).
    
    You're deploying to Kubernetes, AWS ECS, or other orchestrators.
    
    You just need a single service (like a React frontend).

✅ Use docker-compose.yml when:

    You need to run multiple services (frontend + backend + DB).
    
    You want easy local development with shared volumes.
    
    You want to simulate a real microservice environment locally.
    
    You want to run tests, dev, and prod configs from one file.

🚀 How they work together
Typically:

    Dockerfile defines how to build the image.

    docker-compose.yml tells Docker how to run the image(s), map ports, mount volumes, set env vars, etc.

