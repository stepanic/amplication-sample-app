import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProbaService } from "./proba.service";
import { ProbaControllerBase } from "./base/proba.controller.base";

@swagger.ApiTags("probas")
@common.Controller("probas")
export class ProbaController extends ProbaControllerBase {
  constructor(
    protected readonly service: ProbaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
