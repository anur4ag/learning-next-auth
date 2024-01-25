import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40  backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 md:flex">
          <nav className="flex items-center gap-6 text-sm">
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/auth/login"
            >
              Login
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
