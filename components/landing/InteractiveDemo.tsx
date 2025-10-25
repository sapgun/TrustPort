"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Shield, AlertTriangle, ArrowRight, RefreshCw, Loader } from 'lucide-react';

type DemoStep = 'start' | 'review' | 'analysis' | 'approved';

const MotionDiv = motion.div;

export default function InteractiveDemo() {
  const [step, setStep] = useState<DemoStep>('start');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleStart = () => setStep('review');

  const handleApprove = () => {
    setStep('analysis');
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setStep('approved');
    }, 2500); // Simulate analysis delay
  };

  const handleReset = () => setStep('start');

  const renderContent = () => {
    return (
      <AnimatePresence mode="wait">
        {step === 'start' && (
          <MotionDiv
            key="start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center"
          >
            <h3 className="text-xl font-bold text-white mb-2">Transaction Simulation</h3>
            <p className="text-slate-400 mb-6">Click below to simulate a secure transaction review.</p>
            <button
              onClick={handleStart}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-300"
            >
              Simulate: 0.1 ETH to Uniswap <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </MotionDiv>
        )}

        {step === 'review' && (
          <MotionDiv
            key="review"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">1. Natural Language Review</h3>
            <div className="bg-slate-900 rounded-lg p-4 space-y-3 text-left">
              <p className="text-slate-300">You are about to approve a transaction:</p>
              <p className="text-2xl text-teal-400 font-mono">
                Send 0.1 ETH to Uniswap Router
              </p>
              <p className="text-slate-400 text-sm">This action grants Uniswap permission to use your funds for a swap.</p>
            </div>
            <button
              onClick={handleApprove}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Approve
            </button>
          </MotionDiv>
        )}

        {(step === 'analysis' || step === 'approved') && (
          <MotionDiv
            key="analysis"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">2. Security Layer Analysis</h3>
            <div className="bg-slate-900 rounded-lg p-4 space-y-4">
              <AnimatePresence>
                {isAnalyzing ? (
                  <MotionDiv key="loader" className="flex items-center justify-center space-x-3 p-8">
                     <Loader className="h-8 w-8 text-teal-400 animate-spin" />
                     <p className="text-slate-300 text-lg">Analyzing transaction...</p>
                  </MotionDiv>
                ) : (
                  <motion.div key="results" initial={{opacity: 0}} animate={{opacity: 1}}>
                    <div className="flex items-center text-green-400">
                      <CheckCircle className="h-5 w-5 mr-3" />
                      <span>Contract is verified on Etherscan</span>
                    </div>
                    <div className="flex items-center text-green-400">
                      <Shield className="h-5 w-5 mr-3" />
                      <span>Interacting with a known protocol (Uniswap)</span>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <AlertTriangle className="h-5 w-5 mr-3" />
                      <span>This is an irreversible transaction</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {step === 'approved' && !isAnalyzing && (
              <motion.div initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1}} className="mt-6 text-center">
                <div className="bg-green-500/10 text-green-300 font-bold py-3 px-6 rounded-lg flex items-center justify-center">
                  <CheckCircle className="mr-2"/>
                  (Demo) Transaction Approved Securely!
                </div>
                <button
                    onClick={handleReset}
                    className="mt-4 text-slate-400 hover:text-white flex items-center justify-center mx-auto"
                >
                    <RefreshCw className="mr-2 h-4 w-4"/>
                    Run Demo Again
                </button>
              </motion.div>
            )}
          </MotionDiv>
        )}

      </AnimatePresence>
    );
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-teal-500/20 shadow-xl max-w-2xl mx-auto min-h-[280px] flex items-center justify-center">
        {renderContent()}
    </div>
  );
}
