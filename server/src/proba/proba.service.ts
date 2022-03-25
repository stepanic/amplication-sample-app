import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ProbaServiceBase } from "./base/proba.service.base";

@Injectable()
export class ProbaService extends ProbaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
