import React from "react";
import { Hash } from "lucide-react";
import { LEDGER_DATA } from "../ledgerData";

const LedgerTerminal = () => {

  const headIndex = LEDGER_DATA.length - 1;

  return (

    <section className="ledger-wrapper">
      
      <div className="ledger-body">
        {LEDGER_DATA.map((event, i) => {
          const isHead = i === headIndex;

          return (
            <div key={event.id} className={`ledger-row ${isHead ? "ledger-row-head" : ""}`}>
             
              {/* Hash anchor (hidden on mobile) */}
              <div className="ledger-hash-icon">
                <Hash size={14} />
              </div>

              {/* Event card */}
              <div className="ledger-event">

                {/* Event Header */}
                <div className="event-header">
                  <span className="event-timestamp">
                    {event.timestamp}
                  </span>
                  <span className={`event-badge badge-${event.type}`}>
                    {event.type}
                  </span>

                </div>

                <div className="event-message">
                  <span className="event-id">{event.id}</span>
                  {event.type}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LedgerTerminal;