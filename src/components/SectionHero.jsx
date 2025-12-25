import React from "react";
import LedgerTerminal from "./LedgerTerminal";
import { FolderGit2 } from 'lucide-react';
import { NotepadText } from 'lucide-react';

const SectionHero = () => {
  return (
    /* Hero Section */
    <section className="hero-section">
      {/* HERO CONTENT */}
      <div className="hero-content">
        {/* LEFT COLUMN */}
        <div className="left-column">
          <p className="tag-line">
            Memory as Ledger.
            <br />
            Cognition as Deterministic Replay.
            <br />
            Identity through recursive reflection. 
          </p>

          <h1 className="head-line">
            The Persistent <br/><span className="accent-text">Mind Model</span>
          </h1>

          <p className="intro-text">
           A <span> deterministic</span>, event-sourced architecture for observable <span>artificial cognition </span>
            in which an agent’s identity, memory, and <span>reasoning state</span> are externalized, immutable, 
            and replayable, rather than embedded in transient model weights. 
          </p>

          <p>The Operating System
for Artificial Selfhood.
AI identity is no longer a hallucination. It is a cryptographic, append-only ledger. PMM solves AI amnesia by treating the mind as a forensic data structure.</p>

          {/* Button Container */}
          <div className="button-container">
            <button className="view-source-btn">
              <FolderGit2 size={18} />
              View Source
            </button>
            <button className="read-proof-btn">
              <NotepadText size={18} />
              Read Proof
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="right-column">
    <LedgerTerminal />
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
