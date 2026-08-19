import { useState, type DragEvent } from "react";
import type { LucideIcon } from "lucide-react";
import type { Status, Task } from "@/lib/types";
import TaskCard from "./TaskCard";

interface ColumnProps {
  status: Status;
  label: string;
  icon: LucideIcon;
  iconClassName?: string;
  tasks: Task[];
  newTaskId: string | null;
  onDelete: (id: string) => void;
  onToggleDone: (id: string) => void;
  onDragStart: (id: string) => void;
  onDragEnd: () => void;
  onDrop: (status: Status) => void;
  onEnterAnimationEnd: (id: string) => void;
}

export default function Column({
  status,
  label,
  icon: Icon,
  iconClassName,
  tasks,
  newTaskId,
  onDelete,
  onToggleDone,
  onDragStart,
  onDragEnd,
  onDrop,
  onEnterAnimationEnd,
}: ColumnProps) {
  const [isOver, setIsOver] = useState(false);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(true);
  };

  const handleDrop = () => {
    setIsOver(false);
    onDrop(status);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 pb-3 mb-3 border-b-2 border-ink/20">
        <Icon className={`w-4 h-4 ${iconClassName ?? ""}`} />
        <h2 className="font-display font-semibold text-sm uppercase tracking-wide">{label}</h2>
        <span className="ml-auto font-mono text-xs bg-ink text-paper rounded-full px-2 py-0.5">
          {tasks.length}
        </span>
      </div>
      <div
        className={`column-scroll flex flex-col gap-3 min-h-[120px] pb-2 overflow-y-auto max-h-[70vh] rounded-md${isOver ? " drop-zone" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={() => setIsOver(false)}
        onDrop={handleDrop}
      >
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            isNew={task.id === newTaskId}
            onDelete={onDelete}
            onToggleDone={onToggleDone}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onEnterAnimationEnd={onEnterAnimationEnd}
          />
        ))}
      </div>
    </div>
  );
}
