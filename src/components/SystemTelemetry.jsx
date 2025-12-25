const Item = ({ label, value, className = "" }) => (
  <div className={`metric-item ${className}`}>
    <span className="metric-label">{label}</span>
    <span className="metric-value">{value}</span>
  </div>
);

const SystemTelemetry = () => {
  return (
    
    /* System Telemetry*/
    <div className="system-telemetry">
      
      {/* ONLINE INDICATOR */}
      <div className="online-indicator">
        <span>
          <span></span>
          <span></span>
        </span>
        <span>SYSTEM: ONLINE</span>
      </div>

      {/* METRICS */}
      <Item
        label="LATEST_HASH:"
        value={<span className="metric-value--hash">0x7f...3a9</span>}
      />

      <Item
        label="LEDGER_EVENTS:"
        value={<span className="metric-value--default">13,116</span>}
      />

      <Item
        label="CONSENSUS:"
        value={<span className="metric-value--consensus">RATIFIED</span>}
      />

      <Item
        className="metric-item--uptime"
        label="UPTIME:"
        value={<span className="metric-value--default">99.9%</span>}
      />
    </div>
  );
};

export default SystemTelemetry;
