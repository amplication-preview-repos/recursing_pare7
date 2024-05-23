import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CommentAnalysisService } from "./commentAnalysis.service";
import { CommentAnalysisControllerBase } from "./base/commentAnalysis.controller.base";

@swagger.ApiTags("commentAnalyses")
@common.Controller("commentAnalyses")
export class CommentAnalysisController extends CommentAnalysisControllerBase {
  constructor(protected readonly service: CommentAnalysisService) {
    super(service);
  }
}
