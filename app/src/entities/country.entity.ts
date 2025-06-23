import { Field, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@ObjectType()
@Entity({name: "country"})
export class CountryEntity extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Field()
    @Column()
    code!: string;

    @Field()
    @Column()
    name!: string;

    @Field()
    @Column()
    emoji!: string;

    @Field()
    @Column()
    continent!: string;
}