import { createConnection} from 'typeorm';
import {ConnectionOptions} from "typeorm";
import config from "./ormconfig";

createConnection(config as ConnectionOptions);
