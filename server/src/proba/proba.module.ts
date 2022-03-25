import { Module } from "@nestjs/common";
import { ProbaModuleBase } from "./base/proba.module.base";
import { ProbaService } from "./proba.service";
import { ProbaController } from "./proba.controller";
import { ProbaResolver } from "./proba.resolver";

@Module({
  imports: [ProbaModuleBase],
  controllers: [ProbaController],
  providers: [ProbaService, ProbaResolver],
  exports: [ProbaService],
})
export class ProbaModule {}
