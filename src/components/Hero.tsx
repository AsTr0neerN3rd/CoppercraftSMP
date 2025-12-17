import { Pickaxe, Users, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 8px, hsl(var(--primary)) 8px, hsl(var(--primary)) 16px),
                           repeating-linear-gradient(90deg, transparent, transparent 8px, hsl(var(--primary)) 8px, hsl(var(--primary)) 16px)`,
        }} />
      </div>

      {/* Floating light orbs */}
      <div className="absolute top-20 left-10 light-orb" />
      <div className="absolute top-40 right-20 light-orb" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-1/4 light-orb" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-1/3 light-orb" style={{ animationDelay: '1.5s' }} />

      {/* Sparkles */}
      <div className="sparkle top-10 left-1/3 animate-sparkle" />
      <div className="sparkle top-1/3 right-1/4 animate-sparkle" style={{ animationDelay: '0.5s' }} />
      <div className="sparkle bottom-1/4 left-1/2 animate-sparkle" style={{ animationDelay: '1s' }} />
      <div className="sparkle top-1/2 left-10 animate-sparkle" style={{ animationDelay: '1.5s' }} />
      <div className="sparkle bottom-10 right-10 animate-sparkle" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-12">
        {/* Copper Golem with light rays */}
        <div className="flex justify-center mb-8 relative">
          {/* Light rays */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 flex gap-4">
            <div className="light-ray" />
            <div className="light-ray" style={{ animationDelay: '0.5s' }} />
            <div className="light-ray" style={{ animationDelay: '1s' }} />
            <div className="light-ray" style={{ animationDelay: '1.5s' }} />
            <div className="light-ray" style={{ animationDelay: '2s' }} />
          </div>
          
          <div className="minecraft-border animate-pulse-glow torch-glow p-4 bg-card inline-block animate-float hover-grow relative">
            <img 
              src="https://cdn-ai.onspace.ai/onspace/files/4LVMQKT5AYAbSEucZKwQuy/CopperGolemPixel.png" 
              alt="Copper Golem" 
              className="w-32 h-32 md:w-48 md:h-48 object-contain animate-glow-pulse"
            />
            {/* Orbiting particles */}
            <div className="absolute w-2 h-2 rounded-full bg-primary top-0 left-1/2" style={{ animation: 'orbit 4s linear infinite' }} />
            <div className="absolute w-2 h-2 rounded-full bg-secondary top-0 left-1/2" style={{ animation: 'orbit 6s linear infinite reverse' }} />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl pixel-text text-primary leading-relaxed animate-bounce-in">
            COPPERCRAFT SMP
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up stagger-2">
            A MINECRAFT REALM WHERE ADVENTURE MEETS COMMUNITY
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="minecraft-border bg-card p-6 copper-glow hover-lift animate-slide-up stagger-3 relative overflow-hidden">
            <Users className="w-8 h-8 md:w-12 md:h-12 text-primary mx-auto mb-3 hover-grow animate-twinkle relative z-10" />
            <div className="text-xl md:text-2xl text-primary mb-2 relative z-10">NEW</div>
            <div className="text-xs md:text-sm text-muted-foreground relative z-10">REALM</div>
          </div>
          
          <div className="minecraft-border bg-card p-6 copper-glow hover-lift animate-slide-up stagger-4 relative overflow-hidden">
            <Pickaxe className="w-8 h-8 md:w-12 md:h-12 text-primary mx-auto mb-3 hover-grow animate-wave relative z-10" />
            <div className="text-xl md:text-2xl text-primary mb-2 relative z-10">24/7</div>
            <div className="text-xs md:text-sm text-muted-foreground relative z-10">UPTIME</div>
          </div>
          
          <div className="minecraft-border bg-card p-6 copper-glow hover-lift animate-slide-up stagger-5 relative overflow-hidden">
            <Zap className="w-8 h-8 md:w-12 md:h-12 text-primary mx-auto mb-3 hover-grow animate-glow-pulse relative z-10" />
            <div className="text-xl md:text-2xl text-primary mb-2 relative z-10">ACTIVE</div>
            <div className="text-xs md:text-sm text-muted-foreground relative z-10">EVENTS</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-8 animate-fade-in-up stagger-6 relative">
          {/* Glow effect under button */}
          <div className="absolute inset-0 blur-xl bg-primary/30 animate-pulse-glow" />
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfM3nP_OrfXfZJqKGird0AbsEEmoPOGZsqO4TqpHqW8tXow1g/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="minecraft-button text-sm md:text-base hover:animate-shake inline-block hover-lift torch-glow animate-glow-pulse relative z-10"
          >
            JOIN THE REALM
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
