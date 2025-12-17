import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center transition-opacity duration-500"
      style={{ opacity: progress >= 100 ? 0 : 1 }}
    >
      {/* Minecraft dirt background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 16px, hsl(var(--primary)) 16px, hsl(var(--primary)) 32px),
                           repeating-linear-gradient(90deg, transparent, transparent 16px, hsl(var(--primary)) 16px, hsl(var(--primary)) 32px)`,
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8 px-4">
        {/* Copper Golem */}
        <div className="minecraft-border copper-glow p-4 bg-card animate-float">
          <img 
            src="https://cdn-ai.onspace.ai/onspace/files/4LVMQKT5AYAbSEucZKwQuy/CopperGolemPixel.png" 
            alt="Loading" 
            className="w-24 h-24 md:w-32 md:h-32 object-contain"
          />
        </div>

        {/* Loading text */}
        <h2 className="text-xl md:text-2xl pixel-text text-primary animate-pulse-glow">
          LOADING COPPERCRAFT...
        </h2>

        {/* Progress bar */}
        <div className="w-64 md:w-96">
          <div className="minecraft-border bg-card p-2">
            <div className="h-6 bg-muted relative overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
              {/* Pixelated shimmer effect */}
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(255,255,255,0.3) 4px, rgba(255,255,255,0.3) 8px)`,
                  animation: 'shimmer 1s linear infinite',
                }}
              />
            </div>
          </div>
          
          {/* Percentage */}
          <p className="text-center text-sm pixel-text text-primary mt-3">
            {Math.floor(progress)}%
          </p>
        </div>

        {/* Loading tips */}
        <div className="text-xs md:text-sm text-muted-foreground text-center max-w-md px-4 animate-fade-in-up">
          <p className="pixel-text">
            {progress < 30 && "TIP: COPPER GOLEMS ARE MADE FROM COPPER BLOCKS!"}
            {progress >= 30 && progress < 60 && "TIP: BE RESPECTFUL TO ALL PLAYERS!"}
            {progress >= 60 && progress < 90 && "TIP: FILL OUT THE APPLICATION TO JOIN!"}
            {progress >= 90 && "TIP: HAVE FUN AND BE CREATIVE!"}
          </p>
        </div>
      </div>
    </div>
  );
}
