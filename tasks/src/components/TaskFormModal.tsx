"use client";

import { useEffect, useState, type FormEvent, type MouseEvent } from "react";
import { Stamp, X } from "lucide-react";
import { ASSIGNEES, type Priority, type Task } from "@/lib/types";

interface TaskFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (input: Omit<Task, "id" | "status">) => void;
}

const DEFAULT_DUE = "2026-08-30";

const PRIORITY_OPTIONS: Array<{ value: Priority; label: string; activeClass: string }> = [
  { value: "cao", label: "Cao", activeClass: "peer-checked:bg-stamp peer-checked:border-stamp" },
  { value: "trung", label: "Trung bình", activeClass: "peer-checked:bg-seal peer-checked:border-seal" },
  { value: "thap", label: "Thấp", activeClass: "peer-checked:bg-ledger peer-checked:border-ledger" },
];

export default function TaskFormModal({ isOpen, onClose, onSubmit }: TaskFormModalProps) {
  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState<string>(ASSIGNEES[0]);
  const [due, setDue] = useState("");
  const [priority, setPriority] = useState<Priority>("trung");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const resetForm = () => {
    setTitle("");
    setAssignee(ASSIGNEES[0]);
    setDue("");
    setPriority("trung");
    setDesc("");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;
    onSubmit({
      title: trimmedTitle,
      assignee,
      due: due || DEFAULT_DUE,
      priority,
      desc: desc.trim() || "Chưa có mô tả chi tiết.",
    });
    resetForm();
  };

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-ink/50 z-40 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-paper max-w-lg w-full border-2 border-ink relative"
        style={{ boxShadow: "6px 6px 0 rgba(31,42,60,0.15)" }}
      >
        <div className="border-b-2 border-ink px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="font-display font-bold text-lg uppercase tracking-wide">Phiếu giao việc</h2>
            <p className="font-mono text-[10px] text-ink/50">Điền đầy đủ thông tin bên dưới</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng"
            className="w-8 h-8 rounded-full border border-ink/30 flex items-center justify-center hover:bg-manila"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-5 flex flex-col gap-5">
          <div>
            <label htmlFor="taskTitle" className="block font-mono text-[10px] uppercase tracking-widest text-ink/60 mb-1.5">
              Tên công việc
            </label>
            <input
              required
              id="taskTitle"
              type="text"
              autoFocus
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ví dụ: Soạn báo cáo doanh thu tháng 9"
              className="field-underline border-b-2 w-full py-2 text-sm font-body"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="taskAssignee" className="block font-mono text-[10px] uppercase tracking-widest text-ink/60 mb-1.5">
                Người phụ trách
              </label>
              <select
                id="taskAssignee"
                value={assignee}
                onChange={(e) => setAssignee(e.target.value)}
                className="field-underline border-b-2 w-full py-2 text-sm font-body bg-transparent"
              >
                {ASSIGNEES.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="taskDue" className="block font-mono text-[10px] uppercase tracking-widest text-ink/60 mb-1.5">
                Hạn hoàn thành
              </label>
              <input
                required
                id="taskDue"
                type="date"
                value={due}
                onChange={(e) => setDue(e.target.value)}
                className="field-underline border-b-2 w-full py-2 text-sm font-body"
              />
            </div>
          </div>

          <div>
            <span className="block font-mono text-[10px] uppercase tracking-widest text-ink/60 mb-1.5">
              Mức độ ưu tiên
            </span>
            <div className="flex gap-2">
              {PRIORITY_OPTIONS.map((opt) => (
                <label key={opt.value} className="flex-1 cursor-pointer">
                  <input
                    type="radio"
                    name="priority"
                    value={opt.value}
                    checked={priority === opt.value}
                    onChange={() => setPriority(opt.value)}
                    className="sr-only peer"
                  />
                  <span
                    className={`block text-center py-2 rounded-md border border-ink/25 text-xs font-medium peer-checked:text-manila transition-colors ${opt.activeClass}`}
                  >
                    {opt.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="taskDesc" className="block font-mono text-[10px] uppercase tracking-widest text-ink/60 mb-1.5">
              Mô tả công việc
            </label>
            <textarea
              id="taskDesc"
              rows={3}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Chi tiết yêu cầu, kết quả mong đợi…"
              className="lined-textarea w-full text-sm font-body bg-transparent resize-none focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="stamp-btn rounded-md py-3 flex items-center justify-center gap-2 font-display font-semibold text-sm mt-1"
          >
            <Stamp className="w-4 h-4" />
            Đóng dấu giao việc
          </button>
        </form>
      </div>
    </div>
  );
}
