import { Module } from "@nestjs/common";
import { CommentAnalysisModuleBase } from "./base/commentAnalysis.module.base";
import { CommentAnalysisService } from "./commentAnalysis.service";
import { CommentAnalysisController } from "./commentAnalysis.controller";
import { CommentAnalysisResolver } from "./commentAnalysis.resolver";

@Module({
  imports: [CommentAnalysisModuleBase],
  controllers: [CommentAnalysisController],
  providers: [CommentAnalysisService, CommentAnalysisResolver],
  exports: [CommentAnalysisService],
})
export class CommentAnalysisModule {}
