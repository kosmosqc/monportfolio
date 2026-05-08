import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Skill.css";

const technicalSkills = [
  { name: "ServiceNow", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React.js", level: 70 },
  { name: "Next.js", level: 70 },
  { name: "HTML", level: 60 },
  { name: "CSS", level: 60 },
  { name: "SQL", level: 60 },
];

const tools = [
  { name: "Windows 10/11", level: 90 },
  { name: "PowerShell", level: 70 },
  { name: "Linux", level: 60 },
  { name: "Visual Studio Code", level: 80 },
  { name: "GitHub", level: 70 },
  { name: "Photoshop", level: 80 },
];

const experiences = [
  "2024-2026 Desjardins - API REST et B2B (gestion de 2-3 fournisseurs)",
  "Intégrations variées et documentation technique",
  "2022-2024 Développeur ServiceNow",
  "2022 Stage de 8 semaines - site web PHP, SQL, HTML, CSS",
];

const certifications = [
  "Certified ServiceNow Implementer 2024",
  "Certified ServiceNow Administrator 2022",
  "2021-2022 Collège de Rosemont - AEC en programmation orientée objet",
];

const passions = [
  "Informatique & Technologie",
  "Astronomie & Science",
  "Histoire & Art",
];

const MeterList = ({ items, animate }) => (
  <ul className="meter-list">
    {items.map((item, index) => (
      <li key={item.name} className="meter-item">
        <div className="meter-label">
          <span>{item.name}</span>
          <span>{item.level}%</span>
        </div>
        <div className="meter-track">
          <span
            className="meter-fill"
            style={{
              width: animate ? `${item.level}%` : "0%",
              transitionDelay: `${index * 120}ms`,
            }}
          />
        </div>
      </li>
    ))}
  </ul>
);

const Skillpage = () => {
  const navigate = useNavigate();
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setAnimateBars(true);
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="skill-page">
      <div className="skill-overlay" />

      <div className="skill-shell">
        <button onClick={() => navigate("/")} className="skill-back-button">
          Accueil
        </button>

        <header className="skill-header">
          <p className="skill-eyebrow">Compétences et outils</p>
          <h1 className="skill-title">Profil technique</h1>
        </header>

        <main className="skill-grid">
          <section className="skill-card">
            <h2 className="skill-card-title">Compétences</h2>
            <MeterList items={technicalSkills} animate={animateBars} />
          </section>

          <section className="skill-card">
            <h2 className="skill-card-title">Outils</h2>
            <MeterList items={tools} animate={animateBars} />

            <h2 className="skill-card-title skill-subsection">Passions</h2>
            <ul className="text-list">
              {passions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="skill-card">
            <h2 className="skill-card-title">Expérience</h2>
            <ul className="text-list">
              {experiences.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 className="skill-card-title skill-subsection">Formation</h2>
            <ul className="text-list">
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Skillpage;
