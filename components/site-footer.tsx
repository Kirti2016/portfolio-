import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl px-4 py-6 flex flex-col md:flex-row items-center justify-centre gap-6">
        {/* Made by ❤️ Kirti text */}
        <p className="text-sm text-muted-foreground">
          Made by <span className="text-red-400 text-lg">❤️</span> Kirti
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <Link
            aria-label="GitHub"
            href="https://github.com/Kirti2016"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-foreground"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/kirti-yadav-369942275"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-foreground"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Email"
            href="mailto:kirti40.yadav@gmail.com"
            className="text-foreground/80 hover:text-foreground"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
