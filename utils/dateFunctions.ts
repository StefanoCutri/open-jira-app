import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";

export const getDateFormatFromNow = (date: number) => {
  const dateFromNow = formatDistanceToNow(date, {locale: enUS});
  return `${dateFromNow} ago`;
};
