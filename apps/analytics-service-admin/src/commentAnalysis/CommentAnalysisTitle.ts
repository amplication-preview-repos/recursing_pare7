import { CommentAnalysis as TCommentAnalysis } from "../api/commentAnalysis/CommentAnalysis";

export const COMMENTANALYSIS_TITLE_FIELD = "id";

export const CommentAnalysisTitle = (record: TCommentAnalysis): string => {
  return record.id?.toString() || String(record.id);
};
