import React from "react";
import { ThemeToggle } from "../componenets/ThemeToggle";
import { StarBackground } from "../componenets/StarBackground";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background */}
      <StarBackground />

      {/* Nav */}

      {/* Main */}

      {/* Footer */}
    </div>
  );
};
