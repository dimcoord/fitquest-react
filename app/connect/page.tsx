'use client';

import { useState, useEffect } from 'react';
// Import AuthClient directly from a CDN to resolve the module error
import { AuthClient } from "@dfinity/auth-client";
import { User, LogIn, LogOut, CheckCircle, Copy } from 'lucide-react';

// --- Main IC Wallet Connect Page Component ---
const InternetComputerWalletPage = () => {
    const [authClient, setAuthClient] = useState<AuthClient | null>(null);
    const [principal, setPrincipal] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Initialize the AuthClient
    useEffect(() => {
        const initAuthClient = async () => {
            try {
                const client = await AuthClient.create();
                setAuthClient(client);

                const isAuthed = await client.isAuthenticated();
                if (isAuthed) {
                    const identity = client.getIdentity();
                    const principalId = identity.getPrincipal().toText();
                    setPrincipal(principalId);
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.error("Failed to create AuthClient:", error);
            } finally {
                setIsLoading(false);
            }
        };

        initAuthClient();
    }, []);

    // Handle Login
    const handleLogin = async () => {
        if (!authClient) return;

        await authClient.login({
            identityProvider: "https://identity.ic0.app",
            onSuccess: async () => {
                const identity = authClient.getIdentity();
                const principalId = identity.getPrincipal().toText();
                setPrincipal(principalId);
                setIsAuthenticated(true);
            },
            onError: (error) => {
                console.error("Login Failed:", error);
            }
        });
    };

    // Handle Logout
    const handleLogout = async () => {
        if (!authClient) return;
        await authClient.logout();
        setIsAuthenticated(false);
        setPrincipal(null);
    };
    
    // Copy principal to clipboard
    const copyToClipboard = () => {
        if(principal) {
            navigator.clipboard.writeText(principal);
            alert("Principal ID copied to clipboard!"); // Replace with a toast notification in a real app
        }
    };

    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center text-white font-sans antialiased p-4">
            <div className="w-full max-w-md mx-auto bg-gray-800 rounded-2xl shadow-2xl shadow-black/50 p-8 border border-gray-700">
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                        <img src="https://cryptologos.cc/logos/internet-computer-icp-logo.svg?v=032" alt="Internet Computer Logo" className="h-16 w-16"/>
                    </div>
                    <h1 className="text-3xl font-bold text-cyan-400">Internet Computer Login</h1>
                    <p className="text-gray-400 mt-2">Use your Internet Identity to securely log in and connect to the app.</p>
                </div>
                
                {isLoading ? (
                    <div className="text-center text-gray-400">Loading...</div>
                ) : !isAuthenticated ? (
                     // --- Login View ---
                    <button 
                        onClick={handleLogin}
                        className="w-full flex items-center justify-center px-6 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 transition-all duration-300 transform hover:scale-105"
                    >
                        <LogIn className="mr-3 h-6 w-6" />
                        Login with Internet Identity
                    </button>
                ) : (
                    // --- Logged In View ---
                    <div className="text-center space-y-6">
                        <div className="bg-green-900/50 border border-green-500 rounded-lg p-4">
                            <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-3" />
                            <h2 className="text-xl font-semibold">Login Successful!</h2>
                            <p className="text-xs text-gray-400 mt-2 mb-1">Your Principal ID:</p>
                            <div className="relative">
                                <p className="text-sm font-mono text-green-300 bg-gray-900 rounded-md p-2 break-all pr-8">
                                    {principal}
                                </p>
                                <button onClick={copyToClipboard} className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400 hover:text-white">
                                    <Copy size={16} />
                                </button>
                            </div>
                        </div>
                        <button 
                            onClick={handleLogout}
                            className="w-full flex items-center justify-center px-6 py-3 border border-gray-600 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-all"
                        >
                            <LogOut className="mr-2 h-5 w-5" />
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InternetComputerWalletPage;
