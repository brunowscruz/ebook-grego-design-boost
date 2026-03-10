import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Users, Flame } from "lucide-react";

function getTimeUntilNext12() {
  const now = new Date();
  const target = new Date(now);
  target.setHours(12, 0, 0, 0);
  if (now.getHours() >= 12) {
    target.setDate(target.getDate() + 1);
  }
  return Math.max(0, target.getTime() - now.getTime());
}

function formatTime(ms: number) {
  const totalSecs = Math.floor(ms / 1000);
  const h = Math.floor(totalSecs / 3600);
  const m = Math.floor((totalSecs % 3600) / 60);
  const s = totalSecs % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

const UrgencyBar = () => {
  const [remaining, setRemaining] = useState(getTimeUntilNext12());
  const [buyers, setBuyers] = useState(() => Math.floor(Math.random() * 8) + 12);
  const [showBuyerPop, setShowBuyerPop] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining(getTimeUntilNext12());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBuyers((prev) => prev + Math.floor(Math.random() * 3) + 1);
      setShowBuyerPop(true);
      setTimeout(() => setShowBuyerPop(false), 3000);
    }, Math.random() * 15000 + 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Sticky top bar */}
      <div className="sticky top-0 z-50 bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-8 text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-accent animate-pulse" />
            <span className="font-semibold">OFERTA POR TEMPO LIMITADO</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-accent" />
            <span>Expira em: </span>
            <span className="font-mono font-bold text-accent text-sm md:text-base tracking-wider">
              {formatTime(remaining)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-accent" />
            <span>
              <strong>{buyers}</strong> pessoas compraram hoje
            </span>
          </div>
        </div>
      </div>

      {/* Floating buyer notification */}
      <AnimatePresence>
        {showBuyerPop && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed bottom-6 left-6 z-50 flex items-center gap-3 rounded-xl px-4 py-3 shadow-lg border border-border bg-card max-w-xs"
          >
            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
              <Users className="w-4 h-4 text-accent-foreground" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Alguém acabou de comprar!</p>
              <p className="text-xs text-muted-foreground">há poucos segundos atrás</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UrgencyBar;
