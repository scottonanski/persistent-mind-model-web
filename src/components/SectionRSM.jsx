import React from "react";
import {
  Hash,
  Eye,
  RefreshCw,
  Database,
  ArrowDown,
  Terminal,
  Activity,
  GitCommitHorizontal,
  FileJson,
  ChevronsRight
} from "lucide-react";

// --- Reusable Components (Matching Visual Grammar) ---

const JsonPayload = ({ fields }) => (
  <div className="font-jetbrains-mono text-[10px] leading-relaxed opacity-90">
    <span className="text-twilight-purple font-bold">{"{"}</span>
    <div className="pl-4">
      {fields.map((item, i) => (
        <div key={i} className="whitespace-nowrap">
          <span className="text-steel-blue">"{item.key}"</span>
          <span className="text-steel-blue">: </span>
          <span className={item.valueColor || "text-sage-green"}>
            {item.value}
          </span>
          {i < fields.length - 1 && <span className="text-steel-blue">,</span>}
        </div>
      ))}
    </div>
    <span className="text-twilight-purple font-bold">{"}"}</span>
  </div>
);

const StageConnector = () => (
  <div className="connector-icon-wrapper">
    <ArrowDown className="connector-icon" />
  </div>
);

const CardHeader = ({ icon: Icon, title, subtitle }) => (
  <div className="card-b-header">
    <div className="card-b-icon">
      <Icon size={14} />
    </div>
    <div className="card-b-title-wrapper">
      <span className="card-b-title">{title}</span>
      <span className="card-b-subtitle">{subtitle}</span>
    </div>
  </div>
);

const SectionRSM = () => {
  return (
    /* Section RSM */
    <section className="section-rsm">
      {/* Wrapper */}
      <div className="wrapper">
        {/* Intro Header */}
        <div className="rsm-intro">
          <h1>
            Recursive <span>Self-Model</span>
          </h1>
          <p>
            <span>The Recursive Self-Model (RSM) </span>
            formalizes how an LLM’s self-identity emerges from repeated,
            evidence-bound reflection over an append-only event ledger, rather
            than heuristic or retrieval-based memory.
          </p>
        </div>

        {/*STAGE 1: RSM Card Row */}
        {/* STAGE 1: EVENT GENESIS */}
        <div className="rsm-card-row">

          {/* STAGE 1: CARD HEADER */}
           <div className="rsm-card-header">
            <h3>Event</h3>
            <span className="stage-tag">Stage 01</span>
          </div>

          {/* STAGE 1: RSM Card Wrapper */}
          <div className="rsm-card-wrapper">
            {/* Card A: Concept */}
            <div className="rsm-card-a">
              <div>
                <h4>Input as Evidence</h4>
                <p>
                  Every interaction begins as an immutable ledger entry. When a
                  user submits input, the system wraps it in a{" "}
                  <code>user_message</code> event. Critically, this event is
                  cryptographically chained using the SHA-256 hash of the
                  previous event.
                </p>
                {/* Legder Event Group  */}
                <div className="ledger-events-group">
                  {/* Event Item */}
                  <div className="event-item">
                    <GitCommitHorizontal size={12} />
                    <span>EventLog.append(kind="user_message")</span>
                  </div>

                  {/* Event Item */}
                  <div className="event-item">
                    <Hash size={12} />
                    <span>digest = sha256(prev_hash + content)</span>
                  </div>
                </div>
              </div>

              {/* Legder Impact */}
              <div className="ledger-impact">
                <span>Impact</span>
                <p>
                  User input becomes permanently replayable evidence for the
                  self-model.
                </p>
              </div>
            </div>
            {/* End of Card A */}

            {/* Card B: Visual */}
            {/* STAGE 1: CARD B */}
            <div className="rsm-card-b">
              <CardHeader
                icon={Database}
                title="Ledger State"
                subtitle="Event ID: 14002"
              />

              <div className="card-b-body">
                <div className="body-b-tag">// Immutable Entry</div>
                <JsonPayload
                  fields={[
                    { key: "id", value: "14002", valueColor: "text-blue-400" },
                    { key: "ts", value: '"2025-10-24T08:12:00.000Z"' },
                    { key: "kind", value: '"user_message"' },
                    {
                      key: "content",
                      value: '"Who are you?"',
                      valueColor: "text-pure-white",
                    },
                    { key: "prev_hash", value: '"e7a9...8f21"' },
                    {
                      key: "hash",
                      value: '"3b4c...9d12"',
                      valueColor: "text-harvest-gold",
                    },
                  ]}
                />
                {/* Visual Highlight of keywords */}
              </div>
              <div className="card-b-footer">
                <span className="footer-tag">idx_events_hash: unique</span>
              </div>
            </div>
          </div>
        </div>

        <StageConnector />

        {/*STAGE 2: RSM Card Row */}
        {/* STAGE 2: RESPONSE AS EVIDENCE */}
        <div className="rsm-card-row">
          {/* STAGE 2: CARD HEADER */}
          <div className="rsm-card-header">
            <h3>Response as Evidence</h3>
            <span className="stage-tag">Stage 02</span>
          </div>

          {/* STAGE 2: RSM Card Wrapper */}
          <div className="rsm-card-wrapper">
            {/* Card A: Concept */}
            <div className="rsm-card-a">
              <div>
                <h4>System Observation</h4>
                <p>
                  The system does not privilege its own thoughts. The
                  assistant's response is appended to the ledger as an{" "}
                  <code>assistant_message</code>. Crucially, the RSM scans this
                  output for behavioral markers, including keywords like
                  ‘unknown’ or ‘claim: failed’, which may later contribute to
                  knowledge gap detection.
                </p>
                {/* Legder Event Group  */}
                <div className="ledger-event-group">
                  {/* Event Item */}
                  <div className="event-item">
                    <Terminal size={12} />
                    <span>EventLog.append(kind="assistant_message")</span>
                  </div>

                  {/* Event Item */}
                  <div className="event-item">
                    <Eye size={12} />
                    <span>Content scan: _BEHAVIORAL_PATTERNS</span>
                  </div>
                </div>
              </div>

              {/* Legder Impact */}
              <div className="ledger-impact">
                <span>Impact</span>
                <p>The system observes its own output as external data.</p>
              </div>
            </div>
            {/* End of Card A */}

            {/* Card B: Visual */}
            {/* STAGE 2: CARD B */}
            <div className="rsm-card-b">
              <CardHeader
                icon={Terminal}
                title="Ledger Append"
                subtitle="Event ID: 14003"
              />
              <div className="card-b-body">
                <div className="body-b-tag">// Observable Output</div>
                <JsonPayload
                  fields={[
                    { key: "id", value: "14003", valueColor: "text-blue-400" },
                    { key: "kind", value: '"assistant_message"' },
                    {
                      key: "content",
                      value:
                        '"I am a deterministic system built on an event ledger."',
                      valueColor: "text-pure-white",
                    },
                    { key: "prev_hash", value: '"3b4c...9d12"' },
                    {
                      key: "hash",
                      value: '"8a2f...11bb"',
                      valueColor: "text-harvest-gold",
                    },
                  ]}
                />
                <br />
                {/* Visual Highlight of keywords */}
              

              </div>

                {/* CARD-B Footer */}
                <div className="card-b-footer">
                  <div className="flex items-center gap-2">
                    <span className="footer-tag">
                      Detected Markers:
                    </span>
                    <span className="footer-tag marker">
                      "deterministic"
                    </span>
                    <span className="footer-tag marker">
                      "ledger"
                    </span>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <StageConnector />
        {/*STAGE 3: RSM Card Row */}
        {/* STAGE 3: OBSERVATION & STATE */}
        <div className="rsm-card-row">

          {/* STAGE 3: CARD HEADER */}
          <div className="rsm-card-header">
            <span className="stage-tag">Stage 03</span>
            <h3>Observation & State</h3>
          </div>

          {/* STAGE 3: RSM Card Wrapper */}
          <div className="rsm-card-wrapper">
            {/* Card A: Concept */}
            <div className="rsm-card-a">
              <div>
                <h4>Deterministic Accumulation</h4>
                <p>
                  The{" "}<code>RecursiveSelfModel</code>{" "}
                  class replays the ledger to build an internal state. It tracks
                  behavioral tendencies using bounded counters (max 50) and
                  detects knowledge gaps only when a topic exceeds a threshold
                  (&gt;3) within a rolling 500-event window.
                </p>

                {/* Ledger Event Group */}
                <div className="ledger-event-group">
                  {/* Event Item */}
                  <div className="event-item">
                    <Activity size={12} />
                    <span>RecursiveSelfModel.observe(event)</span>
                  </div>

                  {/* Event Item */}
                  <div className="event-item">
                    <RefreshCw size={12} />
                    <span>Rolling Window: _KNOWLEDGE_WINDOW = 500</span>
                  </div>
                  
                  {/* Event Item */}
                  <div className="event-item">
                    <Hash size={12} />
                    <span>Uniqueness: Derived from hash prefixes</span>
                  </div>
                </div>
              </div>

              {/* Ledger Impact */}
              <div className="ledger-impact">
                <span>Impact</span>
                <p>Self-knowledge is mathematically derived, not hallucinated.</p>
              </div>
            </div>

            {/* Card B: Visual */}
            {/* STAGE 3: CARD B */}
            <div className="rsm-card-b">
              <CardHeader
                icon={Activity}
                title="Internal State (RSM)"
                subtitle="Memory Construction"
              />

              <div className="card-b-body">

                {/* Behavioral Counters */}
                <div className="behavioral-row">
                  <div className="behavioral-text">
                    <span>identity_query</span>
                    <span>12 / 50</span>
                  </div>
                  <div className="behavioral-progress-bg">
                    <div className="behavioral-progress-fg identity-progress"></div>
                  </div>
                </div>

                <div className="behavioral-row">
                  <div className="behavioral-text">
                    <span>determinism_emphasis</span>
                    <span>41 / 50</span>
                  </div>
                  <div className="behavioral-progress-bg">
                    <div className="behavioral-progress-fg determinism-progress"></div>
                  </div>
                </div>

                {/* Derived Metric */}
                <div className="metric-container ">
                  <div className="metric-card">
                    <span>
                      uniqueness_emphasis
                    </span>
                  </div>
                  <p>
                    (len(unique_prefixes) / total_events) * 10
                  </p>
                </div>

                {/* Knowledge Gap Logic */}
                <div className="metric-container">
                  <div className="metric-card">
                  <span>
                    knowledge_gaps (Topic &gt; 3)
                  </span>
                  </div>
                  <p>none detected</p>
                </div>

              </div>
            </div>
          </div>
        </div>

        <StageConnector />
        {/*RSM Card Row */}
        {/* STAGE 4: REFLECTION & CLOSURE */}
        <div className="rsm-card-row">

          {/* STAGE 4: CARD HEADER */}
          <div className="rsm-card-header">
            <span className="stage-tag">Stage 04</span>
            <h4>Reflection & Recursive Closure</h4>
          </div>

          {/* STAGE 4: RSM CARD WRAPPER */}
          <div className="rsm-card-wrapper">
            {/* Card A: Concept */}
            <div className="rsm-card-a">
              <div>
                <h4>The Feedback Loop</h4>
                <p>
                  Upon triggering, the RSM calls{" "}
                  <code>snapshot()</code> to
                  serialize its counters and gaps. This snapshot drives a
                  reflection process, resulting in a new{" "}
                  <code>reflection</code>{" "}
                  event. The intent of this reflection is fed back into the
                  observe loop, allowing the system to learn from its own
                  analysis.
                </p>

                {/* Ledger Event Group */}
                <div className="ledger-event-group">
                  {/* Event Item */}
                  <div className="event-item">
                    <FileJson size={12} />
                    <span>RecursiveSelfModel.snapshot()</span>
                  </div>
                  {/* Event Item */}
                  <div className="event-item">
                    <Database size={12} />
                    <span>EventLog.append(kind="reflection")</span>
                  </div>
                  {/* Event Item */}
                  <div className="event-item">
                    <RefreshCw size={12} />
                    <span>reflection_intents → observe()</span>
                  </div>

                </div>
              </div>

              {/* Ledger Impact */}
              <div className="ledger-impact">
                <span>Impact</span>
                <p>
                  The system's analysis becomes part of the history it analyzes.
                </p>
              </div>
            </div>
            {/* End of Card A */}

            {/* Card B: Visual */}
            {/* STAGE 4: CARD B */}
            <div className="rsm-card-b">
              <CardHeader
                icon={RefreshCw}
                title="Recursive Closure"
                subtitle="Event ID: 14004"
              />
              <div className="card-b-body">
                {/* Snapshot preview */}
                  <div className="body-b-tag">
                    // Snapshot Input
                  </div>
                <div className="json-container">
                  <JsonPayload
                    fields={[
                      { key: "behavioral_tendencies", value: "{...}" },
                      {
                        key: "knowledge_gaps",
                        value: '["quantum_latency"]',
                        valueColor: "text-red-300",
                      },
                    ]}
                  />
                </div>
                

                {/* Reflection Event */}
                <div className="relative">
                  <div className="body-b-tag">// New Ledger Entry</div>
                  <div className="json-container">
                  <JsonPayload
                    fields={[
                      {
                        key: "id",
                        value: "14004",
                        valueColor: "text-blue-400",
                      },
                      { key: "kind", value: '"reflection"' },
                      {
                        key: "content",
                        value:
                          '"{\\"intent\\": \\"Address quantum_latency gap\\"}"',
                        valueColor: "text-pure-white",
                      },
                      { key: "prev_hash", value: '"8a2f...11bb"' },
                    ]}
                  />
                  </div>
                </div>
              </div>

              {/* Visual Loop Indicator */}
              <div className="loop-indicator">
                <RefreshCw
                  
                  className="icon"
                />
                <span>
                  Event 14004 feeds back into RSM.observe()
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionRSM;
0;
