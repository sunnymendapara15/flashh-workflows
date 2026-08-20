import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Bot, MousePointerClick, Puzzle, Zap, Users } from 'lucide-react';
import { featuresContent, featuresData } from '../data/mockData';

const iconMap = {
  sparkles: Sparkles,
  bot: Bot,
  'mouse-pointer-click': MousePointerClick,
  puzzle: Puzzle,
  zap: Zap,
  users: Users,
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">{featuresContent.heading}</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {featuresContent.description}
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-card rounded-2xl p-8 hover:border-indigo-500/30 transition-all duration-300 group ${
                  feature.span || ''
                }`}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={24} className="text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-indigo-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}