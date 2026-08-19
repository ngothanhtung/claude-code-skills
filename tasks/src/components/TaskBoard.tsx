"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { CheckCircle2, Eye, Inbox, LoaderCircle, type LucideIcon } from "lucide-react";
import { STATUSES, type Priority, type Status, type Task } from "@/lib/types";
import { isDueWithinTwoDays } from "@/lib/task-utils";
import Header from "./Header";
import StatsBar from "./StatsBar";
import FilterBar from "./FilterBar";
import Column from "./Column";
import TaskFormModal from "./TaskFormModal";

const COLUMN_META: Record<Status, { label: string; icon: LucideIcon; iconClassName?: string }> = {
  "Cần làm": { label: "Cần làm", icon: Inbox },
  "Đang làm": { label: "Đang làm", icon: LoaderCircle },
  "Chờ duyệt": { label: "Chờ duyệt", icon: Eye },
  "Hoàn thành": { label: "Hoàn thành", icon: CheckCircle2, iconClassName: "text-ledger" },
};

let taskIdCounter = 24;

export default function TaskBoard({ initialTasks }: { initialTasks: Task[] }) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [search, setSearch] = useState("");
  const [priorityFilter, setPriorityFilter] = useState<"all" | Priority>("all");
  const [assigneeFilter, setAssigneeFilter] = useState<"all" | string>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTaskId, setNewTaskId] = useState<string | null>(null);

  const draggingIdRef = useRef<string | null>(null);

  const tasksByStatus = useMemo(() => {
    const query = search.trim().toLowerCase();
    const grouped = new Map<Status, Task[]>(STATUSES.map((s) => [s, []]));
    for (const task of tasks) {
      const matchesQuery = !query || task.title.toLowerCase().includes(query);
      const matchesPriority = priorityFilter === "all" || task.priority === priorityFilter;
      const matchesAssignee = assigneeFilter === "all" || task.assignee === assigneeFilter;
      if (matchesQuery && matchesPriority && matchesAssignee) {
        grouped.get(task.status)!.push(task);
      }
    }
    return grouped;
  }, [tasks, search, priorityFilter, assigneeFilter]);

  const stats = useMemo(() => {
    let doing = 0;
    let done = 0;
    let soon = 0;
    for (const task of tasks) {
      if (task.status === "Đang làm") doing++;
      if (task.status === "Hoàn thành") done++;
      if (isDueWithinTwoDays(task.due, task.status)) soon++;
    }
    return { total: tasks.length, doing, done, soon };
  }, [tasks]);

  const handleAddTask = useCallback((input: Omit<Task, "id" | "status">) => {
    taskIdCounter += 1;
    const id = `CV-${taskIdCounter}`;
    setTasks((prev) => [{ ...input, id, status: "Cần làm" }, ...prev]);
    setNewTaskId(id);
    setIsModalOpen(false);
  }, []);

  const handleDeleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const handleToggleDone = useCallback((id: string) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status: "Hoàn thành" } : t)));
  }, []);

  const handleDragStart = useCallback((id: string) => {
    draggingIdRef.current = id;
  }, []);

  const handleDragEnd = useCallback(() => {
    draggingIdRef.current = null;
  }, []);

  const handleDrop = useCallback((status: Status) => {
    const id = draggingIdRef.current;
    if (!id) return;
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
    draggingIdRef.current = null;
  }, []);

  const handleEnterAnimationEnd = useCallback((id: string) => {
    setNewTaskId((current) => (current === id ? null : current));
  }, []);

  return (
    <>
      <Header search={search} onSearchChange={setSearch} onOpenModal={() => setIsModalOpen(true)} />

      <main className="max-w-[1400px] mx-auto px-5 md:px-8 py-8 flex-1 w-full">
        <StatsBar total={stats.total} doing={stats.doing} soon={stats.soon} done={stats.done} />

        <FilterBar
          priorityFilter={priorityFilter}
          assigneeFilter={assigneeFilter}
          onPriorityChange={setPriorityFilter}
          onAssigneeChange={setAssigneeFilter}
        />

        <section aria-label="Bảng công việc" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {STATUSES.map((status) => {
            const meta = COLUMN_META[status];
            return (
              <Column
                key={status}
                status={status}
                label={meta.label}
                icon={meta.icon}
                iconClassName={meta.iconClassName}
                tasks={tasksByStatus.get(status) ?? []}
                newTaskId={newTaskId}
                onDelete={handleDeleteTask}
                onToggleDone={handleToggleDone}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDrop={handleDrop}
                onEnterAnimationEnd={handleEnterAnimationEnd}
              />
            );
          })}
        </section>
      </main>

      <TaskFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleAddTask} />
    </>
  );
}
