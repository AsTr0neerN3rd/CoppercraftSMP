export default function About() {
  return (
    <div className="py-20 px-4 bg-card/30 relative overflow-hidden">
      {/* Ambient light sources */}
      <div className="absolute top-20 left-20 light-orb animate-flicker" />
      <div className="absolute bottom-40 right-20 light-orb animate-flicker" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 right-1/3 light-orb animate-flicker" style={{ animationDelay: '0.8s' }} />
      
      {/* Sparkles */}
      <div className="sparkle top-10 left-1/4 animate-sparkle" />
      <div className="sparkle bottom-20 right-1/4 animate-sparkle" style={{ animationDelay: '1s' }} />
      <div className="sparkle top-1/3 right-10 animate-sparkle" style={{ animationDelay: '1.8s' }} />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="minecraft-border bg-card p-8 md:p-12 copper-glow hover-lift torch-glow relative overflow-hidden">
          <h2 className="text-2xl md:text-4xl text-primary mb-8 text-center pixel-text animate-glow-pulse relative z-10">
            ABOUT US
          </h2>
          
          <div className="space-y-6 text-xs md:text-sm leading-loose text-muted-foreground relative z-10">
            <p className="animate-slide-up stagger-1 hover-glow">
              WELCOME TO COPPERCRAFT SMP, A THRIVING MINECRAFT COMMUNITY DEDICATED TO CREATING
              UNFORGETTABLE ADVENTURES AND LASTING FRIENDSHIPS.
            </p>
            
            <p className="animate-slide-up stagger-2 hover-glow">
              FOUNDED ON THE PRINCIPLES OF CREATIVITY, COOPERATION, AND COPPER (LOTS OF COPPER!),
              OUR REALM OFFERS A UNIQUE SURVIVAL EXPERIENCE WHERE EVERY PLAYER CONTRIBUTES TO
              OUR GROWING WORLD.
            </p>
            
            <p className="animate-slide-up stagger-3 hover-glow">
              WHETHER YOU'RE A MASTER BUILDER, REDSTONE ENGINEER, OR JUST LOVE EXPLORING,
              YOU'LL FIND YOUR PLACE IN OUR COPPER-THEMED COMMUNITY.
            </p>
          </div>
        </div>

        {/* Donation Section */}
        <div className="mt-12 minecraft-border bg-gradient-to-br from-primary/20 to-secondary/20 p-8 md:p-12 animate-pulse-glow hover-lift animate-gradient torch-glow relative overflow-hidden">
          
          <h3 className="text-xl md:text-3xl text-primary mb-6 text-center pixel-text animate-glow-pulse relative z-10">
            HELP KEEP US RUNNING
          </h3>
          
          <div className="space-y-4 text-xs md:text-sm leading-loose text-muted-foreground text-center max-w-2xl mx-auto relative z-10">
            <p>
              RUNNING A MINECRAFT REALM COSTS MONEY EVERY MONTH. YOUR DONATIONS HELP US KEEP
              THE SERVER UP 24/7 SO EVERYONE CAN CONTINUE TO PLAY AND BUILD TOGETHER!
            </p>
            
            <p className="text-primary">
              EVERY CONTRIBUTION, BIG OR SMALL, HELPS KEEP COPPERCRAFT SMP ALIVE FOR THE COMMUNITY.
            </p>
            
            <div className="pt-4">
              <p className="text-sm md:text-base text-primary pixel-text animate-glow-pulse hover-grow">
                CALL 385-229-5744 FOR DETAILS
              </p>
            </div>
            
            <p className="text-[10px] text-muted-foreground/70 italic pt-2">
              ALL DONATIONS GO DIRECTLY TO REALM HOSTING COSTS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
