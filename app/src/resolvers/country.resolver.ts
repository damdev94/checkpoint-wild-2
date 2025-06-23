import { Resolver, Query, Mutation, Arg } from "type-graphql";
import {CountryEntity} from "../entities/country.entity";

@Resolver(() => CountryEntity)
export default class CountryResolver {
  @Query(() => [CountryEntity])
  async countries(): Promise<CountryEntity[]> {
    return CountryEntity.find();
  }

  @Query(() => CountryEntity)
  async country(@Arg("code") code: string): Promise<CountryEntity | null> {
    return CountryEntity.findOne({ where: { code } });
  }

  @Query(() => [CountryEntity])
  async countryByContinent(
    @Arg("continent") continent: string
  ): Promise<CountryEntity[]> {
    return await CountryEntity.find({
      where: { continent },
    });
  }

  @Mutation(() => CountryEntity)
  async createCountry(
    @Arg("code") code: string,
    @Arg("name") name: string,
    @Arg("emoji") emoji: string,
    @Arg("continent") continent: string
  ): Promise<CountryEntity> {
    const country = CountryEntity.create({ code, name, emoji , continent});
    return await country.save();
  }
}