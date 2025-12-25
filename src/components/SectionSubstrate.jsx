import React from "react";
import {
  GitBranch,
  SquareTerminal,
  ChevronsRight,
  ShieldCheck,
  Check,
  CircleCheck,
} from "lucide-react";

// Reusable JSON Payload Component
const JsonPayload = ({ fields }) => (
  <div className="json-payload">
    <span className="text-purple-400">{"{"}</span>
    <br />
    {fields.map((item, i) => (
      <React.Fragment key={i}>
        &nbsp;&nbsp;
        <span className="text-blue-300">{item.key}</span>:
        <span className={item.valueColor || "text-green-400"}>
          {item.value}
        </span>
        {i < fields.length - 1 && ","}
        <br />
      </React.Fragment>
    ))}
    <span className="text-purple-400">{"}"}</span>
  </div>
);

const SectionSubstrate = () => {
  const swapEvents = [
    {
      id: "ev_6772",
      model: "GPT-4o-mini",
      note: "From granite4:latest",
      provider: "openai",
      active: false,
    },
    {
      id: "ev_6772",
      model: "granite4:latest",
      note: "From GPT-4o-mini",
      provider: "local",
      active: false,
    },
    {
      id: "ev_6830",
      model: "Qwen3-vl:235b",
      note: "From granite4:latest",
      provider: "cloud",
      active: false,
    },
    {
      id: "ev_7178",
      model: "granite4:latest",
      note: "From Qwen3-vl:235b",
      provider: "local",
      active: true,
    },
  ];

  return (
    <section className="section-substrate">
      {/* Intro Header */}
      <div className="substrate-intro">
        <h1>
          Model Agnostic <span>Cognition</span>
        </h1>
        <p>
          Switch models mid-conversation without losing continuity. The agent’s
          identity, memory, and state rebuild from an immutable ledger — not the
          model.
        </p>
      </div>

      {/* Wrapper */}
      <div className="wrapper">
        <div className="blur-xl" />
        <div className="section-header">
          <h2>
            Substrate Independence<span>: Model Swaps</span>
          </h2>
          <div className="section-badge">
            <h3>persistent mind model // v_1.0.0</h3>
          </div>
          <div className="card-blur"></div>
        </div>

        {/* Main Dashboard UI */}
        <div className="dashboard-card">
          {/* Top Header */}
          <div className="ledger-header">
            <div className="strip-left">
              <span className="badge-runtime">Ev_6772 // Ev_7187</span>
            </div>

            <div className="strip-right">
              <div className="hash-pill">
                <span className="text-[11px] font-jetbrains-mono text-harvest-gold tracking-widest">
                  HASH-CHAINED LEDGER:
                </span>
                <span className="text-[11px] font-medium text-silver-mist">
                  Head: ev_7187 · h(...1fe8)
                </span>
              </div>
            </div>
            <div className="card-blur"></div>
          </div>

          {/* Chain Visualization */}
          <div className="chain-visualizer">
            {/* Chain Label */}
            <div className="chain-label">
              <GitBranch className="chain-icon" />
              ledger_events // model_agnostic_replay
            </div>

            {/* Chain Container */}
            <div className="chain-container">
              {/* Chain Grid */}
              <div className="chain-grid">
                {swapEvents.map((swap, idx) => (
                  <React.Fragment key={`${swap.id}-${idx}`}>
                    {/* Chain Nodes */}
                    <div
                      className={`chain-node ${
                        swap.active ? "active" : "inactive"
                      }`}
                    >
                      <div className="node-header">
                        <span>{swap.id}</span>
                      </div>
                      <div className="node-model">
                        {" "}
                        <ChevronsRight size={14} /> {swap.model}
                      </div>
                      <div className="node-note">
                        {swap.note}

                        {/* Connector Arrow */}
                        {idx < swapEvents.length - 1 ? (
                          <ChevronsRight
                            size={14}
                            className="connector-arrows"
                          />
                        ) : (
                          <Check size={14} className="connector-arrows" />
                        )}
                      </div>
                      <div className="card-blur"></div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Verified Substrate Card */}
            <div className="verified-substrate">
              <div className="verified-header">
                <h2>Independence Verification</h2>
                <div className="proof-badge">
                  <ShieldCheck className="verified-icon" /> verified
                </div>
              </div>

              {/* Left & Right  Ledger Events */}
              <div className="card">
                {/* Left Column */}
                <div className="left-col">
                  {/* Source Heading */}
                  <div className="source-heading">// ledger_source</div>

                  {/* Event-Id Heading */}
                  <div className="event-id-heading">// Event Id: 13114</div>

                  {/* System Event Heading */}
                  <div className="system-event-heading">
                    system_event: model swap
                  </div>

                  {/* JSON Payload */}
                  <JsonPayload
                    fields={[
                      { key: '"id"', value: '"ev_13114"' },
                      { key: '"prev_model"', value: '"gpt-4o-mini"' },
                      { key: '"new_model"', value: '"ibm_granite_13b"' },
                      {
                        key: '"identity_hash"',
                        value: '"0x9f...a2b"',
                        valueColor: "text-summit-gold",
                      },
                    ]}
                  />

                  {/* Event-Id Heading */}
                  <div className="event-id-heading">
                    // Event Id: 13114 (Reflection)
                  </div>

                  <JsonPayload
                    fields={[
                      { key: '"type"', value: '"reflection"' },
                      { key: '"content"', value: '"gpt-4o-mini"' },
                      {
                        key: '"new_model"',
                        value:
                          '"I remain Echo. My identity is the chain of events 1..13116..."',
                      },
                    ]}
                  />
                </div>

                {/* Right Colum */}
                <div className="right-col pmm-grid-14">
                  <div className="source-heading">// Agent Output</div>

                  <div className="quote-section">
                    <div className="quote-box">
                      <ShieldCheck className="quote-check" />
                      <p className="quote-text">
                        “I remain Echo. My identity is the chain of events
                        1..13116, not the transient model state.”
                      </p>
                      <div className="mt-3 text-harvest-gold/60 text-[10px] uppercase tracking-widest font-jetbrains-mono">
                        -- Reflection ev_13117
                      </div>
                    </div>
                  </div>

                  {/* Agent Output Subtext */}
                  <div className="agent-output-subtext">
                    <div>
                      <span>
                        <SquareTerminal className="subtext-icon terminal" />
                      </span>
                      <p>Runtime swapped live during mid-conversation</p>
                    </div>

                    <div>
                      <span>
                        <CircleCheck className="subtext-icon circle-check" />
                      </span>
                      <p>Agent identity persisted with 100% fidelity</p>
                    </div>
                  </div>

                  {/* Verified Subtext */}
                  <div className="verified-subtext">
                    <span className="verification-status">Verification status</span>
                    <span className="verification-value">confirmed</span>
                  </div>

                  <div className="card-blur"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="radial-grid"></div>
          <div className="card-blur"></div>
        </div>
      </div>
    </section>
  );
};

export default SectionSubstrate;
