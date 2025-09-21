// Reusable component
// Reusable component
const ChartCard = ({ label }) => {
  return (
    <div
      className="d-flex align-items-center rounded-2 gap-1 px-2"
      style={{ width: "180px", height: "28px" }}
    >
      {/* Small box / icon placeholder */}
      <div
        className="d-flex justify-content-center align-items-center rounded-2"
        style={{ width: "24px", height: "20px", borderRadius: "8px", opacity: 1 }}
      ></div>

      {/* Main content box */}
      <div
        className="d-flex align-items-center rounded-2"
        style={{ width: "144px", height: "20px", borderRadius: "8px", gap: "4px", opacity: 1 }}
      >
        <div className="chartpieslice"></div>
        <div className="icon-text">
          <span style={{ marginBottom: "10px",fontSize:"14px" }}>{label}</span>
        </div>
      </div>
    </div>
  );
};


export default ChartCard;
