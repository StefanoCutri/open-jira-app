import { formatDistanceToNow } from "date-fns";

export const getDateFormatFromNow = (date: number) => {
  const dateFromNow = formatDistanceToNow(date);
  return dateFromNow;
};
