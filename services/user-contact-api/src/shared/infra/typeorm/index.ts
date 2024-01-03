import {createConnection} from 'typeorm';
import * as config from '@config/database';

createConnection({
  name: 'default',
  type: "postgres",
  database: config.default.database,
  host: config.default.host,
  port: Number(config.default.port),
  username: config.default.username,
  password: config.default.password,
  entities: ["./src/modules/**/infra/typeorm/entities/*.ts"],
  migrations: [
    "./src/shared/infra/typeorm/migrations/*.ts"
  ],
  cli: {
    migrationsDir: "./src/shared/infra/typeorm/migrations"
  }
});
