export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {currentYear} Built with passion for robotics and engineering
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm font-mono">
              Designed & Developed by Omer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
