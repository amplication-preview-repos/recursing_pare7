import * as graphql from "@nestjs/graphql";
import { CommentAnalysisResolverBase } from "./base/commentAnalysis.resolver.base";
import { CommentAnalysis } from "./base/CommentAnalysis";
import { CommentAnalysisService } from "./commentAnalysis.service";

@graphql.Resolver(() => CommentAnalysis)
export class CommentAnalysisResolver extends CommentAnalysisResolverBase {
  constructor(protected readonly service: CommentAnalysisService) {
    super(service);
  }
}
