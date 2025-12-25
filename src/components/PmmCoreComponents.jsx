import { DatabaseZap } from "lucide-react";
import { Brain } from "lucide-react";
import { Activity } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Route } from "lucide-react";
import { LayersPlus } from "lucide-react";

const PmmCoreComponents = () => {
  return (
    <section className="pmm-core">
        <div className="blur-xl" />
      <div className="wrapper">

        <div className="section-header">
          <h2>
            Cognitive Architecture <span>: Conceptual Overview</span>
          </h2>
          <div className="section-badge">
            <h3>persistent mind model // v_1.0.0</h3>
          </div>
          <div className="card-blur"></div>
        </div>

        <div className="card-grid">
          {/* MemeGraph */}
          <article>
            <div className="article-header">
              <h3>Cryptographic Ledger</h3>
              <DatabaseZap className="article-icon ledger" />
            </div>
            <p>
              The ledger constitutes the system’s cognitive state. SHA-256
              hash-chains every append into SQLite. The log is append-only via
              the API; state stays replayable and auditable. Immutability holds
              when the database is locked down with proper deployment
              safeguards.
            </p>
            <div className="badge-wrapper">
              <span>SHA-256 • IMMUTABLE</span>
            </div>
            <div className="card-blur"></div>
          </article>

          {/* Recursive Self-Model */}
          <article>
            <div className="article-header">
              <h3>Recursive Self-Model</h3>
              <Brain className="article-icon brain" />
            </div>
            <p>
              The system rereads its ledger to produce a deterministic self-view
              of tendencies, gaps, and patterns. That snapshot feeds autonomy
              reflections and constrains what it commits to next, forming a loop
              of self-referential continuity.
            </p>
            <div className="badge-wrapper">
              <span>META-COGNITION</span>
            </div>
            <div className="card-blur"></div>
          </article>

          {/* Autonomy Kernel */}
          <article>
            <div className="article-header">
              <h3>Autonomy Kernel</h3>
              <Activity className="article-icon activity" />
            </div>
            <p>
              A timed supervisor emits autonomy stimuli that trigger ticks. Each
              tick deterministically selects an action—reflect, summarize, or
              index—executes it, and records the outcome, enabling prompt-free
              operation with full auditability.
            </p>
            <div className="badge-wrapper">
              <span>AUTONOMOUS LOOPS</span>
            </div>
            <div className="card-blur"></div>
          </article>

          {/* Policy Enforcement */}
          <article>
            <div className="article-header">
              <h3>Policy Enforcement</h3>
              <ShieldCheck className="article-icon shield" />
            </div>
            <p>
              Runtime policies prevent disallowed sources from emitting
              sensitive event kinds. Enforced rules are not overrideable via
              CLI. Violations are deterministically logged and raised,
              protecting all runtime write paths and audit trails.
            </p>
            <div className="badge-wrapper">
              <span>IMMUTABLE RULES</span>
            </div>
            <div className="card-blur"></div>
          </article>

          {/* Hybrid Retrieval */}
          <article>
            <div className="article-header">
              <h3>Hybrid Retrieval</h3>
              <Route className="article-icon route" />
            </div>
            <p>
              Ledger-based traversal is authoritative; similarity-based recall
              is advisory. Hybrid retrieval Follows the ledger’s structure and
              uses a “find similar” helper to suggest additional context. All
              retrieval decisions are logged.
            </p>
            <div className="badge-wrapper">
              <span>DETERMINISTIC CONTEXT</span>
            </div>
            <div className="card-blur"></div>
          </article>

          {/* Event Sourcing */}
          <article>
            <div className="article-header">
              <h3>Model-Agnosticism</h3>
              <LayersPlus className="article-icon layers" />
            </div>
            <p>
              The system’s identity and memory derive from the ledger, not model
              weights. Cognitive state can be reconstructed across models,
              allowing models to be swapped mid-conversation without losing persistent 
              continuity, statefully.
            </p>
            <div className="badge-wrapper">
              <span>PORTABLE COGNITIVE STATE</span>
            </div>
            <div className="card-blur"></div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PmmCoreComponents;
