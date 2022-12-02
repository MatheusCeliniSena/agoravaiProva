import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

/*
export const AppDataSource = new DataSource({
    
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
*/

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "faculdade",
    entities: [User],
    synchronize: true,
    logging:false
    
})