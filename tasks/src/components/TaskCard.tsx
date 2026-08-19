import { memo, type DragEvent } from "react";
import { AlarmClock, Calendar, Trash2, TriangleAlert } from "lucide-react";
import { AVATAR_COLORS, PRIORITY_META, type Task } from "@/lib/types";
import { formatDue, getDueUrgency, getInitials } from "@/lib/task-utils";

interface TaskCardProps {
  task: Task;
  isNew: boolean;
  onDelete: (id: string) => void;
  onToggleDone: (id: string) => void;
  onDragStart: (id: string) => void;
  onDragEnd: () => void;
  onEnterAnimationEnd: (id: string) => void;
}

function TaskCard({
  task,
  isNew,
  onDelete,
  onToggleDone,
  onDragStart,
  onDragEnd,
  onEnterAnimationEnd,
}: TaskCardProps) {
  const urgency = getDueUrgency(task.due, task.status);
  const isDone = task.status === "Hoàn thành";

  const handleDragStart = (e: DragEvent<HTMLElement>) => {
    e.currentTarget.classList.add("dragging");
    onDragStart(task.id);
  };

  const handleDragEnd = (e: DragEvent<HTMLElement>) => {
    e.currentTarget.classList.remove("dragging");
    onDragEnd();
  };

  return (
    <article
      className={`ticket-card rounded-md pl-5 pr-4 py-4 relative${isDone ? " stamped" : ""}${isNew ? " card-enter" : ""}`}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onAnimationEnd={() => {
        if (isNew) onEnterAnimationEnd(task.id);
      }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="priority-dot" style={{ background: PRIORITY_META[task.priority].color }} />
          <span className="font-mono text-[10px] text-ink/50">{task.id}</span>
        </div>
        <button
          type="button"
          onClick={() => onDelete(task.id)}
          aria-label="Xoá công việc"
          className="text-ink/30 hover:text-stamp transition-colors"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>

      <h3 className="font-display font-semibold text-[15px] leading-snug mt-2">{task.title}</h3>
      <p className="text-xs text-ink/60 mt-1.5 leading-relaxed">{task.desc}</p>

      {urgency && (
        <div className="mt-2">
          {urgency === "late" ? (
            <span className="inline-flex items-center gap-1 font-mono text-[10px] bg-stamp/10 text-stamp px-2 py-0.5 rounded">
              <TriangleAlert className="w-3 h-3" />
              Trễ hạn
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 font-mono text-[10px] bg-seal/10 text-seal px-2 py-0.5 rounded">
              <AlarmClock className="w-3 h-3" />
              Sắp đến hạn
            </span>
          )}
        </div>
      )}

      <div className="flex items-center justify-between mt-3 pt-3 border-t border-dashed border-ink/20">
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center font-mono text-[10px] font-semibold text-manila"
            style={{ background: AVATAR_COLORS[task.assignee] ?? "#1F2A3C" }}
          >
            {getInitials(task.assignee)}
          </div>
          <span className="text-xs text-ink/70">{task.assignee}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] text-ink/60 flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {formatDue(task.due)}
          </span>
          <button
            type="button"
            onClick={() => onToggleDone(task.id)}
            aria-label="Đánh dấu hoàn thành"
            className={`checkbox-stamp${isDone ? " done" : ""}`}
          />
        </div>
      </div>

      <span className="stamp-mark">ĐÃ XONG</span>
    </article>
  );
}

export default memo(TaskCard);
