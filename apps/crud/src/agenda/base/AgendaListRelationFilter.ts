/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AgendaWhereInput } from "./AgendaWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AgendaListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AgendaWhereInput,
  })
  @ValidateNested()
  @Type(() => AgendaWhereInput)
  @IsOptional()
  @Field(() => AgendaWhereInput, {
    nullable: true,
  })
  every?: AgendaWhereInput;

  @ApiProperty({
    required: false,
    type: () => AgendaWhereInput,
  })
  @ValidateNested()
  @Type(() => AgendaWhereInput)
  @IsOptional()
  @Field(() => AgendaWhereInput, {
    nullable: true,
  })
  some?: AgendaWhereInput;

  @ApiProperty({
    required: false,
    type: () => AgendaWhereInput,
  })
  @ValidateNested()
  @Type(() => AgendaWhereInput)
  @IsOptional()
  @Field(() => AgendaWhereInput, {
    nullable: true,
  })
  none?: AgendaWhereInput;
}
export { AgendaListRelationFilter as AgendaListRelationFilter };
