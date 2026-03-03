export default function Footer() {
  return (
    <footer className="border-t border-indigo-100 bg-brand-dark py-12 px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <p className="text-sm font-extrabold text-white">
          Women in Marketing
        </p>
        <div className="flex gap-6 text-sm text-indigo-300">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#events" className="hover:text-white transition-colors">
            Events
          </a>
          <a href="#community" className="hover:text-white transition-colors">
            Community
          </a>
        </div>
        <p className="text-xs text-indigo-400">
          &copy; {new Date().getFullYear()} Women in Marketing. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
