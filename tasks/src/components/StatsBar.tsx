import { AlarmClock, CheckCircle2, Layers, LoaderCircle } from "lucide-react";

interface StatsBarProps {
  total: number;
  doing: number;
  soon: number;
  done: number;
}

export default function StatsBar({ total, doing, soon, done }: StatsBarProps) {
  return (
    <section aria-label="Tổng quan" className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-8 border border-ink/15">
      <div className="stub p-5">
        <div className="flex items-center justify-between">
          <Layers className="w-4 h-4 text-ink/60" />
          <span className="font-mono text-[10px] text-ink/50">TỔNG SỐ</span>
        </div>
        <p className="font-display text-3xl font-bold mt-3">{total}</p>
        <p className="text-xs text-ink/60 mt-1">công việc đang theo dõi</p>
      </div>
      <div className="stub p-5">
        <div className="flex items-center justify-between">
          <LoaderCircle className="w-4 h-4 text-ink/60" />
          <span className="font-mono text-[10px] text-ink/50">ĐANG LÀM</span>
        </div>
        <p className="font-display text-3xl font-bold mt-3">{doing}</p>
        <p className="text-xs text-ink/60 mt-1">việc đang triển khai</p>
      </div>
      <div className="stub p-5">
        <div className="flex items-center justify-between">
          <AlarmClock className="w-4 h-4 text-stamp" />
          <span className="font-mono text-[10px] text-ink/50">SẮP ĐẾN HẠN</span>
        </div>
        <p className="font-display text-3xl font-bold mt-3 text-stamp">{soon}</p>
        <p className="text-xs text-ink/60 mt-1">trong 2 ngày tới</p>
      </div>
      <div className="stub p-5">
        <div className="flex items-center justify-between">
          <CheckCircle2 className="w-4 h-4 text-ledger" />
          <span className="font-mono text-[10px] text-ink/50">HOÀN THÀNH</span>
        </div>
        <p className="font-display text-3xl font-bold mt-3 text-ledger">{done}</p>
        <p className="text-xs text-ink/60 mt-1">trong tháng này</p>
      </div>
    </section>
  );
}
