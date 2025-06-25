import type { MicroCMSQueries, MicroCMSListContent } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// 型定義
// スケジュールの型
export type Schedule = {
  title: string;
  content: string;
} & MicroCMSListContent;

// カテゴリの型
export type Category = {
  name: string;
} & MicroCMSListContent;

// APIの呼び出し
// スケジュール一覧を取得
export const getSchedules = async (queries?: MicroCMSQueries) => {
  return await client.getList<Schedule>({ endpoint: "schedules", queries });
};

// カテゴリ一覧を取得
export const getCategories = async (queries?: MicroCMSQueries) => {
  return await client.getList<Category>({ endpoint: "categories", queries });
};

export const getScheduleDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  return await client.getListDetail<Schedule>({
    endpoint: "schedules",
    contentId,
    queries,
  });
};
