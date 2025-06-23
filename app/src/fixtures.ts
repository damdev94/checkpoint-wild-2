import { CountryEntity } from "./entities/country.entity";

export const seedCountries = async () => {
  const existing = await CountryEntity.find();
  if (existing.length > 0) return;

  const countries = [
    { code: "FR", name: "France", emoji: "🇫🇷", continent: "EU" },
    { code: "ES", name: "Espagne", emoji: "🇪🇸", continent: "EU" },
    { code: "AU", name: "Australie", emoji: "🇦🇺", continent: "OC" },
    { code: "JP", name: "Japon", emoji: "🇯🇵", continent: "AS" },
    { code: "US", name: "États-Unis", emoji: "🇺🇸", continent: "NA" },
    { code: "CA", name: "Canada", emoji: "🇨🇦", continent: "NA" },
    { code: "KH", name: "Cambodge", emoji: "🇰🇭", continent: "AS" },
  ];

    const countryEntities = countries.map((data) =>
    CountryEntity.create(data as Partial<CountryEntity>)
    );
  await CountryEntity.save(countryEntities);

  console.log("Fixtures injectées !");
};