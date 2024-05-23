import { CommentAnalysisWhereInput } from "./CommentAnalysisWhereInput";
import { CommentAnalysisOrderByInput } from "./CommentAnalysisOrderByInput";

export type CommentAnalysisFindManyArgs = {
  where?: CommentAnalysisWhereInput;
  orderBy?: Array<CommentAnalysisOrderByInput>;
  skip?: number;
  take?: number;
};
