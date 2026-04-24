import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer-desktop border-t border-au-border bg-au-secondary py-6 px-8">
      <div className="max-w-4xl flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-au-muted-foreground">
          <a
            href="https://github.com/Fernando-Ligabue/alpineui"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-au-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <span className="text-au-border">|</span>
          <span>MIT License</span>
        </div>
        <div className="flex items-center gap-1.5 text-sm text-au-muted-foreground">
          <span>Made by FDWeb</span>
        </div>
      </div>
    </footer>
  );
}
