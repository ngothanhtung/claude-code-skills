import type { Status } from "./types";

export const TODAY = new Date("2026-08-19");

const MS_PER_DAY = 86400000;

export function formatDue(dateStr: string): string {
  const d = new Date(dateStr);
  return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}`;
}

export type DueUrgency = "late" | "soon" | null;

export function getDueUrgency(dateStr: string, status: Status): DueUrgency {
  if (status === "Hoàn thành") return null;
  const diffDays = Math.round((new Date(dateStr).getTime() - TODAY.getTime()) / MS_PER_DAY);
  if (diffDays < 0) return "late";
  if (diffDays <= 2) return "soon";
  return null;
}

export function isDueWithinTwoDays(dateStr: string, status: Status): boolean {
  if (status === "Hoàn thành") return false;
  const diffDays = Math.round((new Date(dateStr).getTime() - TODAY.getTime()) / MS_PER_DAY);
  return diffDays <= 2;
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(-2)
    .join("")
    .toUpperCase();
}
