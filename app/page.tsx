'use client';

import React from 'react'; // Import React for typing

// --- Helper Components for Pixel Art Style ---

// A container with a pixelated border and shadow
const PixelBox = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div className={`bg-gray-800 border-4 border-black p-6 ${className}`} style={{ boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)' }}>
        {children}
    </div>
);

// A pixel-art style button
const PixelButton = ({ children, onClick, className = '' }: { children: React.ReactNode; onClick?: () => void; className?: string }) => (
    <button 
        onClick={onClick}
        className={`bg-green-500 text-white font-display border-4 border-black px-6 py-3 hover:bg-green-600 active:bg-green-700 active:transform active:translate-y-1 active:shadow-none transition-all ${className}`}
        style={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
    >
        {children}
    </button>
);

// --- Main Homepage Component ---
const HomePage = () => {
    return (
        <div className="bg-[#1a1a1a] text-white font-body min-h-screen bg-repeat bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpiYGBgeP//f4YxQ2AANAQYACDAAn0CE/tU/6cAAAAASUVORK5CYII=')]">
             {/* Import pixel fonts */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');
                .font-display { font-family: 'Press Start 2P', cursive; }
                .font-body { font-family: 'VT323', monospace; }
            `}</style>
            <Header />
            <main>
                <HeroSection />
                <HowItWorksSection />
                <FeaturesSection />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
};

// --- Sub-Components ---

const Header = () => (
    <header className="bg-[#111] border-b-4 border-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
                <a href="#" className="flex items-center space-x-4">
                    <span className="text-3xl" role="img" aria-label="heart">❤️</span>
                    <span className="font-display text-2xl">FitQuest</span>
                </a>
                <a href="/connect" className="hidden md:block">
                     <PixelButton>Connect Wallet</PixelButton>
                </a>
            </div>
        </div>
    </header>
);

const HeroSection = () => (
    <section className="text-center py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-display text-4xl md:text-6xl text-green-400 [text-shadow:_4px_4px_0_rgb(0_0_0)]">
                Level Up Your Fitness
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-2xl text-gray-300 leading-relaxed">
                A fitness RPG where your real-life progress earns you on-chain loot. Track your goals, complete quests, and get rewarded.
            </p>
            <div className="mt-12">
                <a href="/connect">
                     <PixelButton className="text-xl px-10 py-4">Start Your Quest</PixelButton>
                </a>
            </div>
        </div>
    </section>
);

const HowItWorksSection = () => (
    <section id="how-it-works" className="py-20 bg-[#111]/50 border-y-4 border-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="font-display text-3xl [text-shadow:_4px_4px_0_rgb(0_0_0)]">Quest Log</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <PixelBox className="text-center">
                    <h3 className="font-display text-xl text-green-400 mb-4">1. Accept Quest</h3>
                    <p className="text-lg">Connect your Internet Identity and set your weight loss or gain goal. This is your main quest!</p>
                </PixelBox>
                <PixelBox className="text-center">
                    <h3 className="font-display text-xl text-green-400 mb-4">2. Gain EXP</h3>
                    <p className="text-lg">Log your workouts and weigh-ins. Each entry is like defeating a monster, earning you experience points.</p>
                </PixelBox>
                <PixelBox className="text-center">
                    <h3 className="font-display text-xl text-green-400 mb-4">3. Get Loot</h3>
                    <p className="text-lg">As you level up and hit milestones, unique NFT rewards and tokens are sent directly to your IC wallet.</p>
                </PixelBox>
            </div>
        </div>
    </section>
);

const FeaturesSection = () => (
    <section id="features" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="font-display text-3xl [text-shadow:_4px_4px_0_rgb(0_0_0)]">Legendary Features</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                 <PixelBox>
                     <div className="flex items-start space-x-4">
                        <span className="text-4xl" role="img" aria-label="target">🎯</span>
                        <div>
                             <h3 className="font-display text-2xl text-cyan-400">RPG Progression</h3>
                             <p className="text-xl mt-2">Your fitness journey is an epic role-playing game. Your stats increase with every workout, making you stronger both in-game and in real life.</p>
                        </div>
                     </div>
                 </PixelBox>
                 <PixelBox>
                     <div className="flex items-start space-x-4">
                        <span className="text-4xl" role="img" aria-label="chain">🔗</span>
                        <div>
                             <h3 className="font-display text-2xl text-indigo-400">On-Chain Loot</h3>
                             <p className="text-xl mt-2">Powered by the Internet Computer. Your achievements are minted as permanent, ownable NFT rewards. No centralized servers, pure blockchain.</p>
                        </div>
                     </div>
                 </PixelBox>
            </div>
        </div>
    </section>
);

const CTASection = () => (
    <section className="py-20 bg-[#111] border-t-4 border-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl text-yellow-400 [text-shadow:_4px_4px_0_rgb(0_0_0)]">Ready, Player One?</h2>
            <div className="mt-8">
                 <a href="/connect" className="inline-block">
                     <PixelButton className="text-2xl px-12 py-5 bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700">Join the Game</PixelButton>
                </a>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-black py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg text-gray-500 font-body">&copy; {new Date().getFullYear()} FitQuest. Built on the Internet Computer.</p>
        </div>
    </footer>
);

export default HomePage;
