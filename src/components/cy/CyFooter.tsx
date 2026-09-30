export default function CyFooter() {
  return (
    <footer className="relative border-t border-[var(--cy-line)] px-4 py-8 font-mono text-xs text-[var(--cy-dim)] sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
        <span>© {new Date().getFullYear()} Omer Mohammed</span>
        <span className="uppercase tracking-widest">
          <span className="text-[var(--cy-steel)]">sys</span> {"//"} learn by building
        </span>
      </div>
    </footer>
  );
}
