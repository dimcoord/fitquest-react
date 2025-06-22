'use client';

import { HeartPulse, Target, Trophy, Wallet, ArrowRight } from 'lucide-react';

// --- Main Homepage Component ---
const HomePage = () => {
    return (
        <div className="bg-gray-900 text-white font-sans antialiased">
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="text-2xl font-bold">
                    <a href="#" className="flex items-center space-x-2">
                        <HeartPulse className="h-8 w-8 text-green-400" />
                        <span>FitQuest</span>
                    </a>
                </div>
                <nav className="hidden md:flex items-center space-x-6">
                    <a href="#how-it-works" className="text-gray-300 hover:text-green-400 transition-colors duration-300">How It Works</a>
                    <a href="#features" className="text-gray-300 hover:text-green-400 transition-colors duration-300">Features</a>
                </nav>
                 <a href="/game" className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-all">
                    Connect Metamask
                </a>
            </div>
        </div>
    </header>
);

const HeroSection = () => (
    <section className="relative pt-32 pb-24 text-center">
        <div className="absolute inset-0 bg-grid-gray-700/[0.1] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-500">
                Turn Your Fitness Goals into Rewards
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
                Level up your health journey. Track your progress, achieve your weight goals, and earn real rewards on the Internet Computer blockchain.
            </p>
            <div className="mt-10 flex justify-center">
                <a href="/game" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-green-600 hover:bg-green-700 transition-all duration-300 shadow-lg shadow-green-500/30 transform hover:scale-105">
                    Start Your Journey
                    <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                </a>
            </div>
        </div>
    </section>
);

const HowItWorksSection = () => (
    <section id="how-it-works" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">Get Started in 3 Simple Steps</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-gray-800 p-8 rounded-xl text-center flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-900/50 mb-4 border border-green-500">
                        <Wallet className="h-8 w-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">1. Connect Wallet</h3>
                    <p className="text-gray-400">Securely connect your Internet Identity or other supported ICP wallet to create your decentralized profile.</p>
                </div>
                 <div className="bg-gray-800 p-8 rounded-xl text-center flex flex-col items-center">
                     <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-900/50 mb-4 border border-green-500">
                        <Target className="h-8 w-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">2. Set & Track Goals</h3>
                    <p className="text-gray-400">Define your weight loss or gain targets. Log your activities and progress through our simple interface.</p>
                </div>
                 <div className="bg-gray-800 p-8 rounded-xl text-center flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-900/50 mb-4 border border-green-500">
                        <Trophy className="h-8 w-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">3. Earn Rewards</h3>
                    <p className="text-gray-400">As you hit your milestones, automatically earn on-chain rewards like NFTs and tokens directly to your wallet.</p>
                </div>
            </div>
        </div>
    </section>
);


const FeaturesSection = () => (
    <section id="features" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold">A Modern Approach to Fitness</h2>
                <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-400">Combining motivational psychology with decentralized technology.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                    <h3 className="text-2xl font-bold mb-3 text-cyan-400">Gamified Progress</h3>
                    <p className="text-gray-300">Turn the grind into a game. Level up, unlock achievements, and stay motivated with interactive feedback and a clear path to success.</p>
                </div>
                <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                    <h3 className="text-2xl font-bold mb-3 text-green-400">Decentralized & Secure</h3>
                    <p className="text-gray-300">Built on the Internet Computer, your data and rewards are truly yours. Experience unparalleled security and transparency.</p>
                </div>
                 <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                    <h3 className="text-2xl font-bold mb-3 text-yellow-400">Personalized Journeys</h3>
                    <p className="text-gray-300">Whether you want to lose, gain, or maintain weight, FitChain adapts to your personal goals and helps you build sustainable habits.</p>
                </div>
            </div>
        </div>
    </section>
);

const CTASection = () => (
    <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white">Ready to Level Up Your Life?</h2>
            <p className="mt-3 text-lg text-gray-300 max-w-xl mx-auto">Stop wishing, start doing. Connect your wallet and begin your fitness journey on the blockchain today.</p>
            <div className="mt-8">
                 <a href="/app" className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-medium rounded-full text-gray-900 bg-green-400 hover:bg-green-300 transition-all duration-300 transform hover:scale-105">
                    Connect and Get Started
                </a>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400">&copy; {new Date().getFullYear()} FitQuest. All rights reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="https://github.com/dfinity/ic" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Internet Computer</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a>
                </div>
            </div>
        </div>
    </footer>
);


export default HomePage;
