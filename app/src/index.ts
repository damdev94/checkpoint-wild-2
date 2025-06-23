import { ApolloServer } from "@apollo/server";
import "reflect-metadata";
import { startStandaloneServer } from "@apollo/server/standalone"
import { buildSchema } from "type-graphql";
import CountryResolver from "./resolvers/country.resolver";
import { AppDataSource } from "./lib/datasource";
import { seedCountries } from "./fixtures";



async function main() {
  await AppDataSource.initialize();

  await seedCountries();

  const schema = await buildSchema({
    resolvers: [CountryResolver],
  });

  const server = new ApolloServer({schema});

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });


  console.log(`Server ready at ${url}`);
}

main();