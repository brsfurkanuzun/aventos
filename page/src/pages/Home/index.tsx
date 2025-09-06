import React from "react";
import Header from "../../components/Header";
import LiquidText from "../../components/LiquidText";
import Orb from "../../components/OrbBG";
import ScrollVelocity from "../../components/ScrollText";
import "./style.css";

function Home() {
  return (
    <div>
      <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
        <Orb
          hoverIntensity={0}
          rotateOnHover={false}
          hue={256}
          forceHoverState={false}
        />
      </div>
      <div style={{ height: "100vh", width: "100vw", background: "#000" }}>
        <ScrollVelocity
          texts={[
            "The way to make things better",
            "Design. Innovation. Perfection.",
          ]}
          velocity={50}
          className="scroll-text"
        />
      </div>
    </div>
  );
}

export default Home;
