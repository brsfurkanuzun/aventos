import React from "react";
import "./style.css";

// LiquidGlassIntro.tsx
// Function component, JSX.Element tipini kullanmadan yazıldı.

function LiquidText() {
  return (
    <div className="liquid-container">
      <div className="liquid-wrapper">
        <h1 className="liquid-text">360°</h1>
        <h1 className="aventostext">AVENTOS</h1>

        {/* Öndeki Liquid Glass 360° yazısı */}
      </div>
    </div>
  );
}

export default LiquidText;
