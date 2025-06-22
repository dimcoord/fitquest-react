'use client';

import React, { useState, useEffect, useRef } from 'react';
import { AuthClient } from '@dfinity/auth-client';
import Script from 'next/script';

const GodotGame = () => {
  useEffect(() => {
  (window as any).myNextJsFunction = (message: string) => {
    console.log(message); // "Hello from Godot!"
  };
  // ... rest of the useEffect code
}, []);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // --- CONFIGURATION ---
  // 1. Update this to the name of your Godot export files (without the extension)
  const gameName = 'web'; 

  // 2. Update this to the path where you placed your Godot files in the `public` directory
  const gamePath = '/exports/'; 
  // --- END CONFIGURATION ---

  const gameScriptPath = `${gamePath}${gameName}.js`;

  const handleScriptReady = () => {
    console.log('Godot script has loaded. Initializing engine...');
    
    // Ensure the Engine class is available on the window object
    const Engine = (window as any).Engine;
    if (!Engine) {
      console.error('Fatal: Godot Engine class not found. Check that the script path is correct.');
      return;
    }
    
    const engine = new Engine();

    engine.startGame({
      canvas: canvasRef.current,
      executable: `${gamePath}${gameName}`, // This will be the .wasm file
      mainPack: `${gamePath}${gameName}.pck`,
    });
  };

  return (
    <div>
      <canvas ref={canvasRef} id="canvas" width="1024" height="600">
        {/* Fallback content for browsers that don't support canvas */}
        Your browser does not support the HTML5 canvas element.
      </canvas>

      <Script 
        src={gameScriptPath}
        strategy="afterInteractive"
        onReady={handleScriptReady}
        onError={(e) => {
          console.error('Failed to load the Godot script:', e);
        }}
      />
    </div>
  );
};

export default GodotGame;