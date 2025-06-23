import { DataSource } from "typeorm";
import  {CountryEntity}  from "../entities/country.entity";


export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "app/src/database/database.sqlite",
  synchronize: true,
  logging: false,
  entities: [CountryEntity],
});