import React from "react";

const IconButton = ({
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  text,
  width = "180px",
  height = "28px",
  onClick,
}) => {
  return (
    <div
      className="d-flex align-items-center rounded-2 gap-1 px-2"
      style={{ width, height, cursor: onClick ? "pointer" : "default" }}
      onClick={onClick}
    >
      {/* Left Icon */}
      {LeftIcon && (
        <div
          className="d-flex justify-content-center align-items-center rounded-2"
          style={{
            width: "24px",
            height: "20px",
            borderRadius: "8px",
            opacity: 1,
          }}
        >
          <LeftIcon
            size={20}
            style={{ color: "var(--black-20, #FFFFFF33)" }}
          />
        </div>
      )}

      {/* Right Section (Icon + Text) */}
      <div
        className="d-flex align-items-center rounded-2"
        style={{
          width: "144px",
          height: "20px",
          borderRadius: "8px",
          gap: "4px",
          opacity: 1,
        }}
      >
        {RightIcon && (
          <div className="chartpieslice">
            <RightIcon size={20} style={{ marginBottom: "10px" }} />
          </div>
        )}
        {text && (
          <div className="icon-text">
            <span style={{ marginBottom: "10px",fontSize:"14px" }}>{text}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default IconButton;
