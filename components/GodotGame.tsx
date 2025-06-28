'use client';

import { useState, useEffect, useRef } from 'react';

const ResponsiveGodotGame = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);

    // --- CONFIGURATION ---
    const gameName = 'web';
    const gamePath = '/game/';
    const gameScriptPath = `${gamePath}${gameName}.js`;

    // 1. Effect to dynamically load the Godot game script
    useEffect(() => {
        const script = document.createElement('script');
        script.src = gameScriptPath;
        script.async = true;
        
        script.onload = () => {
            console.log('Godot script loaded.');
            setIsScriptLoaded(true); // Signal that the script is ready
        };
        
        script.onerror = (e) => {
            console.error("Failed to load Godot script:", e);
        };

        document.body.appendChild(script);

        return () => {
            // Clean up by removing the script
            const scriptElement = document.querySelector(`script[src="${gameScriptPath}"]`);
            if (scriptElement) {
                document.body.removeChild(scriptElement);
            }
        };
    }, [gameScriptPath]);

    // 2. Effect to initialize and resize the game canvas
    useEffect(() => {
        // Only run this effect if the script is loaded
        if (!isScriptLoaded || !canvasRef.current || !containerRef.current) {
            return;
        }

        const Engine = (window as any).Engine;
        if (!Engine) {
            console.error('Fatal: Godot Engine class not found.');
            return;
        }
        
        const engine = new Engine();

        // Function to handle resizing the canvas
        const handleResize = () => {
            if (canvasRef.current && containerRef.current) {
                const canvas = canvasRef.current;
                const container = containerRef.current;
                
                // Get the container's size
                const newWidth = container.clientWidth;
                const newHeight = container.clientHeight;

                // Update canvas rendering resolution
                canvas.width = newWidth;
                canvas.height = newHeight;
                
                // This will also notify the Godot engine of the new size
            }
        };

        // Initial resize
        handleResize();

        // Set up resize listener
        window.addEventListener('resize', handleResize);

        // Start the game
        engine.startGame({
            canvas: canvasRef.current,
            executable: `${gamePath}${gameName}`,
            mainPack: `${gamePath}${gameName}.pck`,
        });

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            // Godot doesn't have a standard 'quit' method via JS,
            // but the component unmounting will remove the canvas.
        };

    }, [isScriptLoaded, gameName, gamePath]); // Rerun if the script is loaded

    return (
        // --- THIS IS THE MODIFIED LINE ---
        // This div now takes up the entire screen.
        <div 
            ref={containerRef} 
            className="fixed inset-0 w-screen h-screen z-50 bg-black"
        >
            <canvas 
                ref={canvasRef} 
                id="canvas" 
                className="absolute top-0 left-0 w-full h-full"
            >
                Your browser does not support the HTML5 canvas element.
            </canvas>
        </div>
    );
};

export default ResponsiveGodotGame;
