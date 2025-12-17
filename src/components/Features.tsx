import { Shield, Heart, Trophy, Hammer, Map } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Feature = {
  icon?: LucideIcon;
  image?: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Shield,
    title: 'GRIEF PROTECTION',
    description: 'YOUR BUILDS ARE SAFE WITH OUR ANTI-GRIEF POLICIES',
  },
  {
    icon: Heart,
    title: 'FRIENDLY COMMUNITY',
    description: 'JOIN A WELCOMING GROUP OF MINECRAFT ENTHUSIASTS',
  },
  {
    icon: Trophy,
    title: 'REGULAR EVENTS',
    description: 'COMPETITIONS, BUILD CONTESTS, AND COMMUNITY PROJECTS',
  },
  {
    icon: Hammer,
    title: 'CUSTOM BUILDS',
    description: 'COPPER-THEMED SPAWN AREA WITH UNIQUE DESIGNS',
  },
  {
    image: 'https://cdn-ai.onspace.ai/onspace/files/cfMyHpuCnxEifRAPCKthPk/Swamp.png',
    title: 'ACTIONS & STUFF',
    description: 'CUSTOM TEXTURE PACK FOR ENHANCED VISUAL EXPERIENCE',
  },
  {
    icon: Map,
    title: 'ACTIVE WORLD',
    description: 'FRESH MAP WITH REGULAR UPDATES AND EXPANSIONS',
  },
];

export default function Features() {
  return (
    <div className="py-20 px-4 relative overflow-hidden">
      {/* Floating light sources */}
      <div className="absolute top-10 right-10 light-orb animate-flicker" />
      <div className="absolute bottom-20 left-10 light-orb animate-flicker" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 light-orb animate-flicker" style={{ animationDelay: '2s' }} />
      
      {/* More sparkles */}
      <div className="sparkle top-20 left-1/3 animate-sparkle" />
      <div className="sparkle top-40 right-1/4 animate-sparkle" style={{ animationDelay: '0.7s' }} />
      <div className="sparkle bottom-40 left-1/2 animate-sparkle" style={{ animationDelay: '1.2s' }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-4xl text-primary mb-4 text-center pixel-text animate-glow-pulse">
          FEATURES
        </h2>
        <p className="text-xs md:text-sm text-primary/80 text-center italic mb-12 hover:text-primary transition-colors">
          "Technoblade never dies!" - Technoblade
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`minecraft-border bg-card p-6 hover:copper-glow transition-all hover-lift hover-glow animate-slide-up stagger-${(index % 8) + 1} relative overflow-hidden`}
            >
              {feature.icon && <feature.icon className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4 hover-grow animate-twinkle relative z-10" />}
              {feature.image && (
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-32 h-32 md:w-40 md:h-40 object-contain mb-4 hover-grow animate-float relative z-10"
                />
              )}
              <h3 className="text-sm md:text-base text-primary mb-3 pixel-text relative z-10">
                {feature.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed relative z-10">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Server Rules */}
        <div className="mt-20 relative">
          {/* Light rays behind rules */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex gap-8">
            <div className="light-ray h-40" />
            <div className="light-ray h-40" style={{ animationDelay: '0.5s' }} />
            <div className="light-ray h-40" style={{ animationDelay: '1s' }} />
            <div className="light-ray h-40" style={{ animationDelay: '1.5s' }} />
          </div>
          
          <div className="minecraft-border bg-card p-8 md:p-12 animate-pulse-glow torch-glow relative z-10">
            <h2 className="text-2xl md:text-4xl text-primary mb-8 text-center pixel-text animate-fade-in-up">
              SERVER RULES
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-primary text-xl">1.</span>
                  <span className="text-muted-foreground">BE RESPECTFUL TO ALL PLAYERS</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-primary text-xl">2.</span>
                  <span className="text-muted-foreground">NO GRIEFING OR STEALING</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-primary text-xl">3.</span>
                  <span className="text-muted-foreground">KEEP CHAT FAMILY FRIENDLY</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-primary text-xl">4.</span>
                  <span className="text-muted-foreground">NO HACKING OR EXPLOITS</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-primary text-xl">5.</span>
                  <span className="text-muted-foreground">BUILD AWAY FROM OTHERS UNLESS INVITED</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-primary text-xl">6.</span>
                  <span className="text-muted-foreground">HAVE FUN AND BE CREATIVE!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
