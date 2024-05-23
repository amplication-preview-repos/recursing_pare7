import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CommentAnalysisServiceBase } from "./base/commentAnalysis.service.base";

@Injectable()
export class CommentAnalysisService extends CommentAnalysisServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
