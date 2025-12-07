import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Layout
      title="Physical AI & Humanoid Robotics Textbook"
      description="Complete AI-native robotics textbook — humanoids, ROS2, VLA systems & digital twins."
    >
      <header style={heroWrap}>
        <div style={heroOverlay}></div>
        <div style={heroGlow}></div>

        <h1 style={heroTitle}>
          Physical AI & Humanoid Robotics
        </h1>

        <p style={heroText}>
          A future-ready robotics textbook — humanoids, ROS 2, digital twin simulation,
          motion planning, reinforcement learning, and biomechanical control systems.
        </p>

        <Link style={ctaBtn} to="/docs/introduction/intro">
          Start Reading
        </Link>
      </header>

      <section style={section}>
        <h2 style={heading}>What You Will Learn</h2>
        <p style={subText}>
          Everything from motors to intelligence — a complete path to practical autonomous robots.
        </p>
      </section>

      <section style={moduleSection}>
        <h2 style={heading}>All Learning Modules</h2>

        <div style={grid}>
          <ModuleCard title="ROS 2 Foundations" link="/docs/ros2-foundations/module-1-ros2">
            Nodes → Topics → Services → Real robot control.
          </ModuleCard>

          <ModuleCard title="Simulation & Digital Twins" link="/docs/simulation/module-2-simulation">
            Gazebo, Unity, Isaac Sim — sim-to-real robotics.
          </ModuleCard>

          <ModuleCard title="Hardware Foundations" link="/docs/hardware-basics/module-3-hardware">
            Actuators, torque, electronics & dynamics.
          </ModuleCard>

          <ModuleCard title="Vision-Language-Action Systems" link="/docs/vla-systems/module-4-vla-foundations">
            AI action transformers for humanoids.
          </ModuleCard>

          <ModuleCard title="Advanced AI & Motion Control" link="/docs/advanced-ai-control/module-5-advanced-ai">
            RL locomotion, planners, trajectory control.
          </ModuleCard>

          <ModuleCard title="Humanoid Robot Design" link="/docs/humanoid-design/module-6-humanoid-design">
            Body structure, kinematics, endurance systems.
          </ModuleCard>

          <ModuleCard title="Research & Appendix" link="/docs/appendix/glossary">
            Research papers, dataset indexes, glossary.
          </ModuleCard>
        </div>
      </section>

      <section style={featuresSection}>
        <h2 style={heading}>Why This Textbook Matters</h2>

        <div style={grid}>
          <FeatureCard title="AI Robotics Engineered">
            VLA pipelines + autonomous reasoning applied to machines.
          </FeatureCard>

          <FeatureCard title="Hardware + Intelligence">
            Not theory only — full physical robotics execution.
          </FeatureCard>

          <FeatureCard title="Industry Level Curriculum">
            Reflects Tesla • Figure AI • Sanctuary AI design.
          </FeatureCard>
        </div>
      </section>

      <section style={ctaSection}>
        <h2 style={{ fontSize: "42px", marginBottom: "16px", fontWeight: 800 }}>
          Begin Your Robotics Era
        </h2>
        <p style={{ color: "#e0e0ff", marginBottom: "32px", fontSize: "19px" }}>
          Start with Module 1 — build humanoid intelligence step by step.
        </p>

        <Link style={ctaBtnLarge} to="/docs/introduction/intro">
          Begin Learning →
        </Link>
      </section>

      {/* Floating animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(-30px) rotate(2deg); }
          50% { transform: translate(-50%, -50%) translateY(30px) rotate(-2deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </Layout>
  );
}

/* ==================== COMPONENTS ==================== */

function ModuleCard({ title, children, link }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        ...card,
        transform: hovered ? "translateY(-12px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 40px rgba(0,0,0,0.15)"
          : "0 8px 25px rgba(0,0,0,0.08)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3 style={cardTitle}>{title}</h3>
      <p style={cardText}>{children}</p>
      <Link style={openBtn} to={link}>
        Open →
      </Link>
    </div>
  );
}

function FeatureCard({ title, children }) {
  return (
    <div style={feature}>
      <h3 style={featureTitle}>{title}</h3>
      <p style={{ opacity: 0.88, lineHeight: "1.6" }}>{children}</p>
    </div>
  );
}

/* ==================== STYLES (ULTIMATE VERSION) ==================== */

const heroWrap = {
  padding: "140px 20px 120px",
  textAlign: "center",
  background: "linear-gradient(135deg, #0a0e1f 0%, #1a1a3a 50%, #2d1b69 100%)",
  color: "white",
  position: "relative",
  overflow: "hidden",
};

const heroOverlay = {
  position: "absolute",
  width: "600px",
  height: "600px",
  background: "radial-gradient(circle, rgba(120,100,255,0.4), transparent 70%)",
  filter: "blur(120px)",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  animation: "float 25s infinite ease-in-out",
};

const heroGlow = {
  position: "absolute",
  width: "800px",
  height: "800px",
  background: "radial-gradient(circle at center, rgba(100,150,255,0.15), transparent 60%)",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  animation: "pulse 8s infinite",
};

const heroTitle = {
  fontSize: "64px",
  fontWeight: 900,
  background: "linear-gradient(90deg, #a8c0ff, #e0c3ff, #c3a8ff)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: "20px",
  letterSpacing: "-1px",
};

const heroText = {
  fontSize: "21px",
  maxWidth: "860px",
  margin: "0 auto 40px",
  opacity: 0.95,
  lineHeight: "1.8",
  fontWeight: 400,
};

const ctaBtn = {
  marginTop: "10px",
  background: "linear-gradient(135deg, #5b6fff, #a855ff)",
  padding: "16px 36px",
  borderRadius: "12px",
  fontSize: "19px",
  fontWeight: 700,
  color: "white",
  boxShadow: "0 8px 32px rgba(100,100,255,0.4)",
  transition: "all 0.3s ease",
  display: "inline-block",
  ":hover": { transform: "translateY(-3px)", boxShadow: "0 12px 40px rgba(100,100,255,0.5)" },
};

const section = { padding: "80px 20px", textAlign: "center", background: "#fafaff" };
const moduleSection = { padding: "90px 20px", background: "linear-gradient(to bottom, #eef2ff, #f8f9ff)" };
const featuresSection = { padding: "100px 20px", background: "#ffffff" };

const heading = { 
  fontSize: "38px", 
  fontWeight: 800, 
  marginBottom: "16px",
  background: "linear-gradient(90deg, #3a1a8f, #6a1aff)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const subText = { fontSize: "19px", opacity: 0.8, maxWidth: "700px", margin: "0 auto" };

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
  gap: "28px",
  maxWidth: "1200px",
  margin: "40px auto 0",
  padding: "0 20px",
};

const card = {
  background: "rgba(255,255,255,0.9)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.4)",
  padding: "28px",
  borderRadius: "18px",
  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
  cursor: "pointer",
};

const cardTitle = { 
  fontSize: "21px", 
  fontWeight: 800, 
  marginBottom: "10px",
  color: "#1a1a3a"
};

const cardText = { 
  fontSize: "15.5px", 
  marginBottom: "20px", 
  opacity: 0.85,
  lineHeight: "1.6"
};

const openBtn = {
  background: "linear-gradient(135deg, #3a54ff, #7b35ff)",
  padding: "10px 18px",
  borderRadius: "8px",
  color: "white",
  fontWeight: 700,
  fontSize: "14px",
  display: "inline-block",
  transition: "all 0.25s",
};

const feature = {
  background: "linear-gradient(145deg, #f8faff, #eef1ff)",
  padding: "32px",
  borderRadius: "16px",
  textAlign: "left",
  border: "1px solid #e0e5ff",
  transition: "all 0.3s",
};

const featureTitle = { 
  fontSize: "22px", 
  fontWeight: 800, 
  marginBottom: "12px",
  color: "#2a1a6f"
};

const ctaSection = {
  padding: "120px 20px",
  background: "linear-gradient(135deg, #0f0f23 0%, #1a1a4e 50%, #2d1b5a 100%)",
  textAlign: "center",
  color: "white",
  position: "relative",
  overflow: "hidden",
};

const ctaBtnLarge = {
  background: "linear-gradient(135deg, #6a7fff, #c955ff)",
  padding: "18px 44px",
  borderRadius: "14px",
  fontWeight: 800,
  fontSize: "22px",
  color: "white",
  boxShadow: "0 12px 40px rgba(120,80,255,0.4)",
  transition: "all 0.3s ease",
  display: "inline-block",
};