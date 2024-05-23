import { PostView as TPostView } from "../api/postView/PostView";

export const POSTVIEW_TITLE_FIELD = "id";

export const PostViewTitle = (record: TPostView): string => {
  return record.id?.toString() || String(record.id);
};
