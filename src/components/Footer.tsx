export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-card/30 border-t-4 border-primary/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-primary text-sm md:text-base mb-4 pixel-text">
              COPPERCRAFT SMP
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              BUILDING COMMUNITIES, ONE BLOCK AT A TIME.
            </p>
            <a 
              href="https://coppercraftsmp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:text-primary/70 transition-colors inline-block"
            >
              🌐 VISIT OUR WEBSITE
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary text-sm md:text-base mb-4 pixel-text">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li className="hover:text-primary transition-colors">
                <a href="#about">ABOUT</a>
              </li>
              <li className="hover:text-primary transition-colors">
                <a href="#features">FEATURES</a>
              </li>
              <li className="hover:text-primary transition-colors">
                <a href="#rules">RULES</a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-primary text-sm md:text-base mb-4 pixel-text">
              JOIN US
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              FILL OUT THE APPLICATION FORM TO GET ACCESS TO THE REALM!
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfM3nP_OrfXfZJqKGird0AbsEEmoPOGZsqO4TqpHqW8tXow1g/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="minecraft-button text-xs inline-block"
            >
              APPLY NOW
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary/20 pt-8 text-center space-y-2">
          <p className="text-xs text-muted-foreground">
            © 2025 COPPERCRAFT SMP. NOT AFFILIATED WITH MOJANG OR MICROSOFT.
          </p>
          <div className="flex items-center justify-center gap-2 py-2">
            <span className="text-2xl">🏳️‍🌈</span>
            <p className="text-xs text-primary pixel-text">
              EVERYONE IS WELCOME!
            </p>
            <span className="text-2xl">🏳️‍🌈</span>
          </div>
          <p className="text-[10px] text-muted-foreground/50 italic hover:text-primary/70 transition-colors">
            "Science isn't about WHY. It's about WHY NOT!" - Cave Johnson
          </p>
          <p className="text-[10px] text-muted-foreground/50 italic hover:text-primary/70 transition-colors">
            "When life gives you lemons, don't make lemonade. Make life take the lemons back! GET MAD!" - Cave Johnson
          </p>
        </div>
      </div>
    </footer>
  );
}
