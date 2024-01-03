# User contact API
API to manage user contacts

## Setup

### Download dependencies

```yarn install```

### Environment variables

Set your `.env` file based in `.env.example`

### Create docker container to run postgres

```  docker run --name user-contact-local -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres```
### Create database

```bash
  docker exec -it user-contact-local bash
  psql -h localhost -U postgres
  CREATE DATABASE user_contact_local;
```

### Run migrations

```yarn typeorm migrations:run```

### Create redis container
This project uses Redis with rate limiter to avoid ddos attacks

```docker run --name redis -p 6379:6379 -d -t redis```

## Start

```yarn dev:server```
