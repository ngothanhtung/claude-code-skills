import { ASSIGNEES, PRIORITY_META, type Priority } from "@/lib/types";

interface FilterBarProps {
  priorityFilter: "all" | Priority;
  assigneeFilter: "all" | string;
  onPriorityChange: (value: "all" | Priority) => void;
  onAssigneeChange: (value: "all" | string) => void;
}

const PRIORITY_OPTIONS: Array<{ value: Priority; label: string }> = [
  { value: "cao", label: "Ưu tiên cao" },
  { value: "trung", label: "Trung bình" },
  { value: "thap", label: "Thấp" },
];

export default function FilterBar({
  priorityFilter,
  assigneeFilter,
  onPriorityChange,
  onAssigneeChange,
}: FilterBarProps) {
  return (
    <section aria-label="Bộ lọc" className="flex flex-wrap items-center gap-2 mb-6">
      <span className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mr-1">Lọc theo:</span>

      <button
        type="button"
        className="chip rounded-full px-3 py-1.5 text-xs font-medium"
        data-active={priorityFilter === "all"}
        onClick={() => onPriorityChange("all")}
      >
        Tất cả mức độ
      </button>
      {PRIORITY_OPTIONS.map((opt) => (
        <button
          key={opt.value}
          type="button"
          className="chip rounded-full px-3 py-1.5 text-xs font-medium flex items-center gap-1.5"
          data-active={priorityFilter === opt.value}
          onClick={() => onPriorityChange(opt.value)}
        >
          <span className="priority-dot" style={{ background: PRIORITY_META[opt.value].color }} />
          {opt.label}
        </button>
      ))}

      <span className="w-px h-5 bg-ink/15 mx-2 hidden sm:block" />

      <button
        type="button"
        className="chip rounded-full px-3 py-1.5 text-xs font-medium"
        data-active={assigneeFilter === "all"}
        onClick={() => onAssigneeChange("all")}
      >
        Tất cả người phụ trách
      </button>
      {ASSIGNEES.map((name) => (
        <button
          key={name}
          type="button"
          className="chip rounded-full px-3 py-1.5 text-xs font-medium"
          data-active={assigneeFilter === name}
          onClick={() => onAssigneeChange(name)}
        >
          {name}
        </button>
      ))}
    </section>
  );
}
