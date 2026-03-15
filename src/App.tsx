import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldAlert, 
  User, 
  Cpu, 
  Info, 
  ChevronRight, 
  AlertTriangle, 
  Eye, 
  EyeOff,
  Terminal,
  Layers,
  Search,
  MapPin,
  GraduationCap,
  Users,
  Calendar,
  FileText,
  Heart
} from 'lucide-react';
import { HOTSPOTS, HotspotData } from './constants';

type Perspective = 'human' | 'system';

export default function App() {
  const [perspective, setPerspective] = useState<Perspective>('human');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedHotspot = HOTSPOTS.find(h => h.id === selectedId);

  const togglePerspective = () => {
    setPerspective(prev => prev === 'human' ? 'system' : 'human');
  };

  const getHotspotIcon = (id: string) => {
    switch (id) {
      case 'name': return <User size={18} />;
      case 'address': return <MapPin size={18} />;
      case 'education': return <GraduationCap size={18} />;
      case 'extracurricular': return <Users size={18} />;
      case 'interests': return <Heart size={18} />;
      case 'keywords': return <Search size={18} />;
      default: return <FileText size={18} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col relative transition-colors duration-300 ${perspective === 'system' ? 'bg-system-bg text-system-text' : 'bg-gatekeeper-bg text-gatekeeper-text'}`}>
      
      {/* Header */}
      <header className={`p-6 border-b flex justify-between items-center sticky top-0 z-50 transition-colors duration-300 ${perspective === 'system' ? 'border-white/10 bg-system-bg/80' : 'border-black/5 bg-gatekeeper-bg/80'} backdrop-blur-md`}>
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-display font-bold tracking-tight">
            THE ALGORITHMIC GATEKEEPER
          </h1>
        </div>

        <button 
          onClick={togglePerspective}
          className={`px-5 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2 text-xs font-bold uppercase tracking-wider
            ${perspective === 'human' 
              ? 'border-gatekeeper-accent text-gatekeeper-accent hover:bg-gatekeeper-accent/5' 
              : 'border-gatekeeper-warning text-gatekeeper-warning hover:bg-gatekeeper-warning/10'}`}
        >
          {perspective === 'human' ? <Eye size={14} /> : <Cpu size={14} />}
          <span>{perspective === 'human' ? 'System View' : 'Human View'}</span>
        </button>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row p-4 md:p-8 gap-8 max-w-6xl mx-auto w-full">
        
        {/* Resume Area */}
        <div className="flex-1 relative">
          <div className={`transition-all duration-500 rounded-xl border p-8 md:p-12 shadow-sm relative
            ${perspective === 'human' 
              ? 'bg-white text-slate-900 border-slate-200' 
              : 'bg-system-card text-system-text border-gatekeeper-warning/20 font-mono'}`}>
            
            <div className="relative z-10">
              {/* Resume Header */}
              <div className="border-b border-current/20 pb-6 mb-8 flex justify-between items-start">
                <div>
                  <Hotspot 
                    data={HOTSPOTS[0]} 
                    perspective={perspective} 
                    isSelected={selectedId === 'name'}
                    onClick={() => setSelectedId('name')}
                  />
                  <div className="mt-2 flex flex-wrap gap-4 text-sm opacity-60">
                    <Hotspot 
                      data={HOTSPOTS[1]} 
                      perspective={perspective} 
                      isSelected={selectedId === 'address'}
                      onClick={() => setSelectedId('address')}
                    />
                    <span>•</span>
                    <span>555-0123</span>
                    <span>•</span>
                    <span>l.rodriguez@email.com</span>
                  </div>
                </div>
              </div>

              {/* Education */}
              <section className="mb-8">
                <h2 className={`text-sm font-bold uppercase tracking-widest mb-4 border-b border-current/10 pb-1 flex items-center gap-2 opacity-50
                  ${perspective === 'system' ? 'text-gatekeeper-warning' : ''}`}>
                  Education
                </h2>
                <div className="flex justify-between items-start">
                  <div>
                    <Hotspot 
                      data={HOTSPOTS[2]} 
                      perspective={perspective} 
                      isSelected={selectedId === 'education'}
                      onClick={() => setSelectedId('education')}
                    />
                    <div className="text-sm italic opacity-70">B.A. in Sociology & Political Science</div>
                  </div>
                  <div className="text-sm font-semibold">2018 – 2022</div>
                </div>
              </section>

              {/* Experience */}
              <section className="mb-8">
                <h2 className={`text-sm font-bold uppercase tracking-widest mb-4 border-b border-current/10 pb-1 flex items-center gap-2 opacity-50
                  ${perspective === 'system' ? 'text-gatekeeper-warning' : ''}`}>
                  Experience
                </h2>
                
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-1">
                    <div className="font-bold">Junior Policy Analyst</div>
                    <div className="text-sm">Jan 2023 – Present</div>
                  </div>
                  <div className="text-sm italic mb-2">Urban Justice Center</div>
                  <ul className="list-none text-sm space-y-3 opacity-80">
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Led cross-departmental research initiatives on housing equity.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 shrink-0 flex flex-col items-start">
                        {perspective === 'system' && (
                          <div className="text-[8px] font-bold uppercase tracking-tighter invisible select-none mb-1" aria-hidden="true">
                            FLAG
                          </div>
                        )}
                        <span className="leading-none mt-1">•</span>
                      </div>
                      <Hotspot 
                        data={HOTSPOTS[5]} 
                        perspective={perspective} 
                        isSelected={selectedId === 'keywords'}
                        onClick={() => setSelectedId('keywords')}
                      />
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-start mb-1">
                    <div className="font-bold">Research Assistant</div>
                    <div className="text-sm">Sept 2021 – June 2022</div>
                  </div>
                  <div className="text-sm italic mb-2">State University Sociology Dept</div>
                  <ul className="list-none text-sm space-y-3 opacity-80">
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Analyzed large datasets regarding local voting patterns.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Co-authored white paper on community engagement metrics.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Extracurriculars */}
              <section className="mb-8">
                <h2 className={`text-sm font-bold uppercase tracking-widest mb-4 border-b border-current/10 pb-1 flex items-center gap-2 opacity-50
                  ${perspective === 'system' ? 'text-gatekeeper-warning' : ''}`}>
                  Leadership & Activities
                </h2>
                <div className="flex justify-between items-start">
                  <Hotspot 
                    data={HOTSPOTS[3]} 
                    perspective={perspective} 
                    isSelected={selectedId === 'extracurricular'}
                    onClick={() => setSelectedId('extracurricular')}
                  />
                  <div className="text-sm font-semibold">2019 – 2022</div>
                </div>
              </section>

              {/* Interests */}
              <section>
                <h2 className={`text-sm font-bold uppercase tracking-widest mb-4 border-b border-current/10 pb-1 flex items-center gap-2 opacity-50
                  ${perspective === 'system' ? 'text-gatekeeper-warning' : ''}`}>
                  Interests
                </h2>
                <Hotspot 
                  data={HOTSPOTS[4]} 
                  perspective={perspective} 
                  isSelected={selectedId === 'interests'}
                  onClick={() => setSelectedId('interests')}
                />
              </section>
            </div>
          </div>
        </div>

        {/* Sidebar / Annotation Area */}
        <aside className="lg:w-80 flex flex-col gap-6">
          <div className="flex-1 flex flex-col gap-6">
            <AnimatePresence mode="wait">
              {selectedHotspot ? (
                <motion.div 
                  key={selectedHotspot.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className={`rounded-xl p-6 shadow-sm border transition-colors duration-300 ${perspective === 'system' ? 'bg-system-card border-white/10' : 'bg-white border-slate-200'}`}
                >
                  <div className="flex items-center gap-2 text-gatekeeper-muted mb-4">
                    <div className={`p-2 rounded-lg ${perspective === 'system' ? 'bg-white/5' : 'bg-slate-50'}`}>
                      {getHotspotIcon(selectedHotspot.id)}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold">Analysis: {selectedHotspot.category}</span>
                  </div>

                  <h3 className="text-lg font-display font-bold mb-4">
                    {selectedHotspot.label}
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-gatekeeper-muted mb-1">
                        {perspective === 'human' ? 'Human Interpretation' : 'System Perception'}
                      </div>
                      <div className={`p-3 rounded border text-sm font-mono ${perspective === 'system' ? 'bg-black/20 border-gatekeeper-warning/30 text-gatekeeper-warning' : 'bg-slate-50 border-slate-200 text-slate-900'}`}>
                        {perspective === 'human' ? selectedHotspot.humanPerception : selectedHotspot.systemPerception}
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] uppercase font-bold text-gatekeeper-muted mb-1">
                        Research Reality
                      </div>
                      <p className="text-sm leading-relaxed italic opacity-80">
                        "{selectedHotspot.reality}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`rounded-xl p-8 flex flex-col items-center justify-center text-center gap-4 min-h-[300px] border border-dashed ${perspective === 'system' ? 'border-white/10 text-white/40' : 'border-slate-200 text-slate-400'}`}
                >
                  <div className="p-4 rounded-full bg-current/5">
                    <Search size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1">Select an element</h3>
                    <p className="text-xs">
                      Click a highlighted section on the resume to see how the system parses it.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Static Impact Stats Box */}
            <div className={`rounded-xl p-6 shadow-sm border transition-colors duration-300 ${perspective === 'system' ? 'bg-system-card border-white/10' : 'bg-white border-slate-200'}`}>
              <div className="text-[10px] uppercase font-bold text-gatekeeper-muted mb-3 flex items-center gap-2">
                <Layers size={12} /> Impact Stats (Quillian et al.)
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className={`p-2 rounded border ${perspective === 'system' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-100'}`}>
                  <div className="text-lg font-bold">36%</div>
                  <div className="text-[8px] uppercase opacity-60 leading-tight">White callback advantage (Black)</div>
                </div>
                <div className={`p-2 rounded border ${perspective === 'system' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-100'}`}>
                  <div className="text-lg font-bold">24%</div>
                  <div className="text-[8px] uppercase opacity-60 leading-tight">White callback advantage (Latinx)</div>
                </div>
              </div>
              <p className="text-[9px] text-gatekeeper-muted mt-3 leading-relaxed">
                Meta-analysis of field experiments shows hiring discrimination has remained largely unchanged for decades.
              </p>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

interface HotspotProps {
  data: HotspotData;
  perspective: Perspective;
  isSelected: boolean;
  onClick: () => void;
}

function Hotspot({ data, perspective, isSelected, onClick }: HotspotProps) {
  const value = data.humanValue;
  
  return (
    <button
      onClick={onClick}
      className={`relative group transition-all duration-300 text-left flex flex-col
        ${perspective === 'human' 
          ? 'hover:text-gatekeeper-accent' 
          : 'hover:text-gatekeeper-warning'}`}
    >
      {/* System Tag */}
      {perspective === 'system' && (
        <div className="text-[8px] font-bold text-gatekeeper-warning/50 uppercase tracking-tighter whitespace-nowrap mb-1">
          [FLAG::{data.id.toUpperCase()}]
        </div>
      )}

      <div className="relative inline-flex items-center">
        <span className={`
          ${isSelected ? (perspective === 'human' ? 'text-gatekeeper-accent font-bold' : 'text-gatekeeper-warning font-bold') : ''}
          ${perspective === 'human' ? 'text-inherit' : 'font-mono text-sm'}
          ${data.id === 'name' ? 'text-3xl font-bold tracking-tight' : ''}
        `}>
          {value}
        </span>
        
        {/* Hotspot Indicator */}
        <span className={`absolute -right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300
          ${isSelected 
            ? (perspective === 'human' ? 'bg-gatekeeper-accent scale-150' : 'bg-gatekeeper-warning scale-150 shadow-[0_0_10px_rgba(255,0,85,0.5)]') 
            : 'bg-current opacity-20 group-hover:opacity-100'}`} 
        />

        {/* Underline */}
        <motion.div 
          className={`absolute -bottom-1 left-0 h-[2px] rounded-full
            ${perspective === 'human' ? 'bg-gatekeeper-accent' : 'bg-gatekeeper-warning'}`}
          initial={{ width: 0 }}
          animate={{ width: isSelected ? '100%' : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </button>
  );
}
