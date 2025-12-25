import React from "react";
import {
  Activity,
  Zap,
  FileText,
  Fingerprint,
  Terminal,
  ShieldCheck
} from "lucide-react";

const RecursiveSelfModelCard = ({ snapshot }) => {
  const rsm = snapshot || {
    behavioral_tendencies: {
      identity_query: 0,
      determinism_emphasis: 42,
      stability_emphasis: 31,
      adaptability_emphasis: 12,
      instantiation_capacity: 9,
      uniqueness_emphasis: 17
    },
    knowledge_gaps: ["transformer_logic", "ledger_pruning"],
    interaction_meta_patterns: ["identity_queries_trigger_determinism_ref"],
    reflections: [{ intent: "reflect_on_long_term_identity" }],
    concept_metrics: {
      hot_concepts: ["logic.determinism", "identity.continuity"],
      concept_gaps: ["policy.safety"],
      concept_conflicts: ["governance.bias"],
      concepts_used: { "logic.determinism": 18, "identity.continuity": 15 }
    }
  };

  const tendencies = rsm.behavioral_tendencies || {};
  const knowledgeGaps = rsm.knowledge_gaps || [];
  const patterns = rsm.interaction_meta_patterns || [];
  const reflectionIntents = (rsm.reflections || [])
    .map((r) => r.intent)
    .filter(Boolean)
    .slice(-5);
  const conceptMetrics = rsm.concept_metrics || {};

  const maxFor = (key) => (key === "uniqueness_emphasis" ? 20 : 50);

  return (
    <section className="section-substrate">
     

      <div className="wrapper">
 

        <div className="dashboard-card">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-iron/20">
            {/* behavioral_tendencies */}
            <div className="lg:col-span-4 bg-void-black p-8 space-y-6">
              <div className="flex items-center gap-3 text-steel-blue">
                <Activity size={16} />
                <h3 className="font-jetbrains-mono text-xs uppercase tracking-widest">
                  behavioral_tendencies
                </h3>
              </div>
              <div className="space-y-2">
                {Object.entries(tendencies).map(([key, val]) => {
                  const max = maxFor(key);
                  const width = Math.min(100, (val / max) * 100);
                  return (
                    <div key={key}>
                      <div className="flex justify-between text-[10px] text-steel-blue font-jetbrains-mono">
                        <span>{key}</span>
                        <span>{val}/{max}</span>
                      </div>
                      <div className="h-2 bg-iron/10 border border-iron/30 rounded overflow-hidden">
                        <div
                          className="h-full bg-summit-gold/70"
                          style={{ width: `${width}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* knowledge_gaps + interaction_meta_patterns */}
            <div className="lg:col-span-4 bg-void-black p-8 space-y-6">
              <div className="flex items-center gap-3 text-steel-blue">
                <Zap size={16} />
                <h3 className="font-jetbrains-mono text-xs uppercase tracking-widest">
                  knowledge_gaps
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {knowledgeGaps.map((gap) => (
                  <span
                    key={gap}
                    className="px-2 py-1 bg-harvest-gold/10 border border-harvest-gold/30 text-[10px] font-jetbrains-mono text-harvest-gold uppercase"
                  >
                    {gap}
                  </span>
                ))}
                {knowledgeGaps.length === 0 && (
                  <span className="text-[10px] text-iron/60 font-jetbrains-mono">
                    none
                  </span>
                )}
              </div>

              <div className="pt-2">
                <div className="text-[10px] text-sky-blue uppercase font-jetbrains-mono">
                  interaction_meta_patterns
                </div>
                <div className="mt-2 space-y-2">
                  {patterns.map((p) => (
                    <div
                      key={p}
                      className="px-3 py-2 bg-sky-blue/5 border border-sky-blue/20 rounded text-[10px] font-jetbrains-mono text-sky-blue italic"
                    >
                      &gt; {p}
                    </div>
                  ))}
                  {patterns.length === 0 && (
                    <div className="text-[10px] text-iron/60 font-jetbrains-mono">
                      none
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* reflections + concept_metrics */}
            <div className="lg:col-span-4 bg-void-black p-8 space-y-6">
              <div className="flex items-center gap-3 text-steel-blue">
                <FileText size={16} />
                <h3 className="font-jetbrains-mono text-xs uppercase tracking-widest">
                  reflections
                </h3>
              </div>
              <div className="space-y-1">
                {reflectionIntents.map((intent) => (
                  <div
                    key={intent}
                    className="text-[10px] text-sage-green font-jetbrains-mono"
                  >
                    {intent}
                  </div>
                ))}
                {reflectionIntents.length === 0 && (
                  <div className="text-[10px] text-iron/60 font-jetbrains-mono">
                    none
                  </div>
                )}
              </div>

              <div className="pt-2">
                <div className="text-[10px] text-iron uppercase font-jetbrains-mono">
                  concept_metrics
                </div>

                <div className="mt-2 text-[10px] text-steel-blue font-jetbrains-mono">
                  hot_concepts
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(conceptMetrics.hot_concepts || []).map((c) => (
                    <span
                      key={c}
                      className="px-2 py-1 bg-sage-green/10 border border-sage-green/30 text-[10px] font-jetbrains-mono text-sage-green"
                    >
                      {c}
                    </span>
                  ))}
                  {(conceptMetrics.hot_concepts || []).length === 0 && (
                    <span className="text-[10px] text-iron/60 font-jetbrains-mono">
                      none
                    </span>
                  )}
                </div>

                <div className="mt-3 text-[10px] text-steel-blue font-jetbrains-mono">
                  concept_gaps
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(conceptMetrics.concept_gaps || []).map((c) => (
                    <span
                      key={c}
                      className="px-2 py-1 bg-harvest-gold/10 border border-harvest-gold/30 text-[10px] font-jetbrains-mono text-harvest-gold"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <div className="mt-3 text-[10px] text-steel-blue font-jetbrains-mono">
                  concept_conflicts
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(conceptMetrics.concept_conflicts || []).map((c) => (
                    <span
                      key={c}
                      className="px-2 py-1 bg-red-500/10 border border-red-500/30 text-[10px] font-jetbrains-mono text-red-400"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 py-4 border-t border-iron/20 bg-onyx/50 font-jetbrains-mono text-[9px] uppercase tracking-[0.3em] text-steel-blue">
            <span className="flex items-center gap-2"><Fingerprint size={12} /> identity_persistent</span>
            <span className="flex items-center gap-2 text-sage-green"><ShieldCheck size={12} /> rsm_verified</span>
            <span className="flex items-center gap-2"><Terminal size={12} /> replay_safe</span>
          </div>

          <div className="radial-grid opacity-20"></div>
        </div>
      </div>
    </section>
  );
};

export default RecursiveSelfModelCard;
