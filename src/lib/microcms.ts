import type { MicroCMSQueries, MicroCMSListContent } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// 型定義
export type Schedule = {
  title: string;
  content: string;
} & MicroCMSListContent;

// APIの呼び出し
export const getSchedules = async (queries?: MicroCMSQueries) => {
  return await client.getList<Schedule>({ endpoint: "schedules", queries });
};

export const getScheduleDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Schedule>({
    endpoint: "schedules",
    contentId,
    queries,
  });
};
