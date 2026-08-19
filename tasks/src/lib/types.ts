export type Priority = "cao" | "trung" | "thap";

export type Status = "Cần làm" | "Đang làm" | "Chờ duyệt" | "Hoàn thành";

export interface Task {
  id: string;
  title: string;
  desc: string;
  assignee: string;
  due: string;
  priority: Priority;
  status: Status;
}

export const STATUSES: Status[] = [
  "Cần làm",
  "Đang làm",
  "Chờ duyệt",
  "Hoàn thành",
];

export const ASSIGNEES = [
  "Lan Anh",
  "Minh Quân",
  "Thu Hà",
  "Đức Anh",
  "Ngọc Mai",
] as const;

export const PRIORITY_META: Record<Priority, { label: string; color: string }> = {
  cao: { label: "Cao", color: "#B7472A" },
  trung: { label: "Trung bình", color: "#C08A2E" },
  thap: { label: "Thấp", color: "#3F6B4A" },
};

export const AVATAR_COLORS: Record<string, string> = {
  "Lan Anh": "#B7472A",
  "Minh Quân": "#1F2A3C",
  "Thu Hà": "#3F6B4A",
  "Đức Anh": "#C08A2E",
  "Ngọc Mai": "#1F2A3C",
};
