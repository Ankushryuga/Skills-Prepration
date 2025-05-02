# makefile for docker.
#  variable of database variable.
DATABASE_URL:=postgres://postgres:1234@localhost:5432/postgres

.PHONY: run-postgres
run-postgres:
    @echo Starting postgres container
    -docker run \
            -e POSTGRES_PASSWORD=1234 \
            -v pgdata:/var/lib/postgresql/data \    # volume where data is located.
            -p 5432:5432 \
            postgres:15.1-alpine

.PHONY: run-api-node
run-api-node:
    @echo Starting node api
    cd api-node && \
            DATABASE_URL=${DATABASE_URL}  \
            npm run dev

.PHONY: run-api-golang
run-api-golang:
      @echo Starting golang API
      cd api-golang && \
            DATABASE_URL=${DATABASE_URL}  \
            go run main.go

.PHONY: run-client-react
run-client-react:
      @echo Starting react client
      cd client-react && \
          npm run dev


