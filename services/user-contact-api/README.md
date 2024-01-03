# Go Barber backend
Backend of barber shop application

## Setup

### Create docker container to run postgres

```docker run --name user-contact-local -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres```

### Download dependencies

```yarn install```

### Setup orm

Rename the file `ormconfig.example.json` to `ormconfig.json`. Run:

```yarn typeorm migration:run```

If you created your databases with another configuration, you have to update this file. 
