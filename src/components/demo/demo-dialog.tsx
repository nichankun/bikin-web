"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DemoInstansi } from "./demo-instansi";
import { DemoCafe } from "./demo-cafe";
import { DemoTopup } from "./demo-topup";

interface DemoDialogProps {
  activeDemo: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export function DemoDialog({ activeDemo, isOpen, onClose }: DemoDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-7xl w-full h-[95vh] p-0 overflow-hidden flex flex-col bg-slate-100 border-slate-800">
        <DialogHeader className="h-16 bg-slate-950 flex flex-row items-center justify-between px-6 border-b border-slate-800 shadow-lg shrink-0 m-0 space-y-0">
          <div className="flex items-center gap-3 text-white">
            <i className="fas fa-lock text-brand-400 text-sm"></i>
            <DialogTitle className="font-bold text-sm tracking-wide font-mono text-white m-0">
              {activeDemo === "demo-instansi" && "preview.local/e-notulen-app"}
              {activeDemo === "demo-cafe" && "preview.local/the-artisan-cafe"}
              {activeDemo === "demo-topup" && "voucherstore.id/topup"}
            </DialogTitle>
          </div>
          <Button
            onClick={onClose}
            variant="destructive"
            className="bg-red-500/10 text-red-500 border border-red-500/30 hover:bg-red-500 hover:text-white"
            size="sm"
          >
            <i className="fas fa-times mr-2"></i> Tutup Demo
          </Button>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto relative">
          {activeDemo === "demo-instansi" && <DemoInstansi />}
          {activeDemo === "demo-cafe" && <DemoCafe />}
          {activeDemo === "demo-topup" && <DemoTopup />}
        </div>
      </DialogContent>
    </Dialog>
  );
}
