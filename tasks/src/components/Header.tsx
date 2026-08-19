import { Bell, ClipboardCheck, Search, Stamp } from "lucide-react";

interface HeaderProps {
  search: string;
  onSearchChange: (value: string) => void;
  onOpenModal: () => void;
}

export default function Header({ search, onSearchChange, onOpenModal }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-paper/95 backdrop-blur rule-double">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-4 flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full border-2 border-ink flex items-center justify-center">
            <ClipboardCheck className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-display font-bold text-xl wordmark leading-none">SỔ GIAO VIỆC</h1>
            <p className="font-mono text-[10px] tracking-widest text-ink/60 uppercase mt-1">
              Quản lý · Giao việc · Theo dõi
            </p>
          </div>
        </div>

        <div className="flex-1 min-w-[180px] max-w-md ml-2">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-ink/50" />
            <input
              type="text"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Tìm việc theo tên…"
              className="w-full field-underline border-b-2 pl-9 pr-3 py-2 text-sm font-body placeholder:text-ink/40"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 ml-auto">
          <button
            type="button"
            aria-label="Thông báo"
            className="w-10 h-10 rounded-full border border-ink/25 flex items-center justify-center hover:bg-manila transition-colors"
          >
            <Bell className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onOpenModal}
            className="stamp-btn rounded-md px-4 py-2.5 flex items-center gap-2 font-display font-semibold text-sm"
          >
            <Stamp className="w-4 h-4" />
            Giao việc mới
          </button>
          <div
            className="w-10 h-10 rounded-full bg-ink text-paper flex items-center justify-center font-mono text-xs font-semibold"
            title="Quản lý: Bạn"
          >
            QL
          </div>
        </div>
      </div>
    </header>
  );
}
