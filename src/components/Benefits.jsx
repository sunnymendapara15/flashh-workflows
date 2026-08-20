import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Wand2, ShieldCheck } from 'lucide-react';
import { benefitsContent, benefitsData } from '../data/mockData';

const iconMap = {
  clock: Clock,
  wand: Wand2,
  shield: ShieldCheck,
};

export default function Benefits() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">{benefitsContent.title}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefitsData.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card rounded-2xl p-8 hover:border-indigo-500/30 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={28} className="text-indigo-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {benefit.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {benefit.description}
                </p>
                <div className="inline-block glass rounded-xl px-4 py-2">
                  <div className="text-lg font-bold gradient-text">{benefit.stat}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">
                    {benefit.statLabel}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}