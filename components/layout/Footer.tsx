import { theme } from "@/lib/theme";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-7 text-center text-sm text-white/40">
      © 2026 {theme.brandName} — {theme.footerText}
    </footer>
  );
}