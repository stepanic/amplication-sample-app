/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProbaWhereInput } from "./ProbaWhereInput";
import { Type } from "class-transformer";
import { ProbaOrderByInput } from "./ProbaOrderByInput";

@ArgsType()
class ProbaFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProbaWhereInput,
  })
  @Field(() => ProbaWhereInput, { nullable: true })
  @Type(() => ProbaWhereInput)
  where?: ProbaWhereInput;

  @ApiProperty({
    required: false,
    type: [ProbaOrderByInput],
  })
  @Field(() => [ProbaOrderByInput], { nullable: true })
  @Type(() => ProbaOrderByInput)
  orderBy?: Array<ProbaOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ProbaFindManyArgs };
