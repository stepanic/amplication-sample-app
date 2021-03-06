/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Proba } from "@prisma/client";

export class ProbaServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ProbaFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProbaFindManyArgs>
  ): Promise<number> {
    return this.prisma.proba.count(args);
  }

  async findMany<T extends Prisma.ProbaFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProbaFindManyArgs>
  ): Promise<Proba[]> {
    return this.prisma.proba.findMany(args);
  }
  async findOne<T extends Prisma.ProbaFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProbaFindUniqueArgs>
  ): Promise<Proba | null> {
    return this.prisma.proba.findUnique(args);
  }
  async create<T extends Prisma.ProbaCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProbaCreateArgs>
  ): Promise<Proba> {
    return this.prisma.proba.create<T>(args);
  }
  async update<T extends Prisma.ProbaUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProbaUpdateArgs>
  ): Promise<Proba> {
    return this.prisma.proba.update<T>(args);
  }
  async delete<T extends Prisma.ProbaDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProbaDeleteArgs>
  ): Promise<Proba> {
    return this.prisma.proba.delete(args);
  }
}
