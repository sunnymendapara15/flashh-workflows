import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Globe, BarChart3 } from 'lucide-react';
import { showcaseTabs, showcaseContent } from '../data/mockData';

const iconMap = {
  builder: Monitor,
  integrations: Globe,
  analytics: BarChart3,
};

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('builder');
  const current = showcaseContent[activeTab];
  const Icon = iconMap[activeTab];

  return (
    <section id="product" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">{current.heading}</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              {current.description}
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap gap-3">
              {showcaseTabs.map((tab) => {
                const TabIcon = iconMap[tab.key];
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-all ${
                      activeTab === tab.key
                        ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/25'
                        : 'glass-card text-slate-400 hover:text-white hover:border-indigo-500/30'
                    }`}
                  >
                    <TabIcon size={18} />
                    <span className="text-sm font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-6 shadow-2xl shadow-indigo-500/10">
              {/* Mock UI */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-4">
                <div className="h-4 bg-slate-700/50 rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-slate-700/50 rounded w-1/2 animate-pulse" />
                <div className="grid grid-cols-3 gap-3 mt-6">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-20 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-lg border border-indigo-500/20" />
                  ))}
                </div>
                <div className="h-12 bg-gradient-to-r from-indigo-500/30 to-violet-500/30 rounded-lg mt-4 flex items-center justify-center">
                  <Icon size={24} className="text-indigo-400" />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-2"
            >
              <span className="text-sm font-medium text-indigo-300">Live Preview</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}