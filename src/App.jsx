import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTypewriter } from "react-simple-typewriter";
import "./App.css";
import catVector from "./assets/cat_vector.webp";
import kuldeepImg from "./assets/kuldeep.webp";
import kuldeepImg2 from "./assets/kuldeepImage.png";
import background from "./assets/background.webp";
import eveLogo from "./assets/eveLogo.png";
import jupiter from "./assets/jupiter.png";
import medicWorld from "./assets/medic_world.webp";
import studysync from "./assets/studysync.webp";
import projectManager from "./assets/project_manager.webp";
import ProjectCard from "./components/ProjectCard";
import StudySyncAndroid from "./assets/studysync_android.webp";
import BMICalculator from "./assets/bmi_calculator.webp";
import HireMe from "./assets/hire_me-min.webp";
import logo from "./assets/logo.webp";
import AuthSystem from "./assets/auth_system.webp";
import { IoMailOpen } from "react-icons/io5";
import { SiGooglegemini } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

function App() {
  useEffect(() => {
    const header = document.querySelector("header");
    const links = header.querySelectorAll("a");
    const logo = header.querySelector(".logo");

    links.forEach((link) => {
      link.addEventListener("click", () => {
        links.forEach((link) => link.classList.remove("selected"));
        link.classList.add("selected");
      });
    });

    logo.addEventListener("mouseover", () => {
      logo.querySelector(
        ".logo-text"
      ).innerHTML = `<span>made by</span><p>Kuldeep</p>`;
    });

    logo.addEventListener("mouseout", () => {
      logo.querySelector(".logo-text").innerHTML = "PORTFOLIO";
    });
  });

  // aos
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [SpecializationText] = useTypewriter({
    words: ["Full Stack Developer", "Android Developer"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <>
      {/* header */}
      <header data-aos="fade-up">
        <Link activeClass="active" smooth spy to="home">
          Home
        </Link>
        <Link activeClass="active" smooth spy to="project">
          Project
        </Link>
        <Link activeClass="active" smooth spy to="service">
          Service
        </Link>
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            style={{ width: "45px" }}
            loading="lazy"
            decoding="async"
          />
          <p className="logo-text">PORTFOLIO</p>
        </div>
        <a activeClass="active" target="_blank" href="https://drive.google.com/file/d/1ku_emR0tdGLg_w9S_jfRJ9XesTkMJpFp/view?usp=sharing" download >
          Resume
        </a>
        <Link activeClass="active" smooth spy to="education">
          Education
        </Link>
        <Link activeClass="active" smooth spy to="contact">
          Contact
        </Link>
      </header>

      {/* content section */}
      {/* intro */}
      <div className="intro" data-aos="fade-up">
        <section id="home" className="details">
          <p className="greet">
            Hello!
            <img
              src={catVector}
              alt="cat-vector"
              loading="lazy"
              decoding="async"
            />
          </p>
          <h1 className="data">
            I'm <span>Kuldeep</span>,<br />
            {SpecializationText}
            <img
              src={catVector}
              alt="cat-vector"
              loading="lazy"
              decoding="async"
            />
          </h1>
        </section>
        <section className="intro-about" data-aos="fade-up">
          <p className="quote">
            "A Full Stack Developer with a passion for creating innovative
            solutions"
          </p>
          <div className="experience" data-aos="fade-up">
            {/* stars */}
            <div className="stars">
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
            </div>
            <h2>2 Years</h2>
            <p>Experience</p>
          </div>
        </section>
        <section className="image-area">
          {/* image */}
          <img
            className="photo"
            src={kuldeepImg}
            alt=""
            loading="lazy"
            decoding="async"
            data-aos="fade-up"
          />
          {/* portfolio and contact */}
          <div className="CV-links">
            <a target="_blank" href="https://drive.google.com/file/d/1ku_emR0tdGLg_w9S_jfRJ9XesTkMJpFp/view?usp=sharing" className={"selected"} download>
              Portfolio
            </a>
            <Link activeClass="active" smooth spy to="contact">
              Contact
            </Link>
          </div>
        </section>
      </div>
      {/* services section */}
      <div className="service-section" id="service" data-aos="fade-up">
        <div className="service-section-header" data-aos="fade-up">
          <p className="section-eyebrow">What I offer</p>
          <h2>My <span className="d-orange">Services</span></h2>
          <p className="section-sub">Offering full-stack web, mobile &amp; backend services with a focus on performance, scalability, and clean architecture.</p>
        </div>
        <div className="service-cards-row">
          <div className="svc-card" data-aos="fade-up">
            <div className="svc-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
            </div>
            <h3>Full Stack Development</h3>
            <p>End-to-end web apps with React, Node.js, Spring Boot — from pixel-perfect UIs to robust APIs and databases.</p>
            <div className="svc-tags">{["React", "Node.js", "Spring Boot", "PostgreSQL"].map(t => <span key={t}>{t}</span>)}</div>
          </div>
          <div className="svc-card" data-aos="fade-up">
            <div className="svc-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></svg>
            </div>
            <h3>Mobile App Development</h3>
            <p>Native Android apps with Kotlin, and cross-platform experiences using modern mobile design patterns.</p>
            <div className="svc-tags">{["Kotlin", "Android", "Jetpack", "Flutter"].map(t => <span key={t}>{t}</span>)}</div>
          </div>
          <div className="svc-card" data-aos="fade-up">
            <div className="svc-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10M12 20V4M6 20v-6" /></svg>
            </div>
            <h3>Backend &amp; API Engineering</h3>
            <p>Scalable microservices, REST &amp; event-driven APIs with Kafka, SQS, and cloud-native deployments on AWS &amp; Kubernetes.</p>
            <div className="svc-tags">{["Kafka", "SQS", "AWS", "Docker", "K8s"].map(t => <span key={t}>{t}</span>)}</div>
          </div>
          <div className="svc-card" data-aos="fade-up">
            <div className="svc-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            </div>
            <h3>System Design &amp; DevOps</h3>
            <p>Production-grade architecture, CI/CD pipelines, monitoring with Grafana &amp; Datadog, and on-call reliability engineering.</p>
            <div className="svc-tags">{["Grafana", "CI/CD", "Prometheus", "Kubernetes"].map(t => <span key={t}>{t}</span>)}</div>
          </div>
        </div>
      </div>
      {/* work experience */}
      <div className="experience" id="resume" data-aos="fade-up">
        <section className="content">
          <h2>My <span className="d-orange">Work Experience</span></h2>
          <div className="timeline">

            {/* Jupiter SDE 1 */}
            <div className="timeline-entry" data-aos="fade-up">
              <div className="timeline-spine">
                <div className="tl-dot"></div>
                <div className="tl-line"></div>
              </div>
              <div className="timeline-card">
                <div className="tl-card-header">
                  <img src="https://jupiter.money/assets/images/header-white.svg?v=7e86edc062" alt="Jupiter Money" className="tl-logo" />
                  <div className="tl-meta">
                    <h3 className="tl-role">Software Development Engineer</h3>
                    <p className="tl-company">Jupiter Money (Amica Financial)</p>
                    <p className="tl-date">Apr 2026 – Current &nbsp;·&nbsp; Bengaluru</p>
                  </div>
                </div>
                <ul className="tl-bullets">
                  <li>Designed and implemented real-time reconciliation system for partner transactions, reducing <strong>settlement mismatches by ~90%</strong> and eliminating manual intervention for ~10–12 cases/week.</li>
                  <li>Led migration of legacy workflows to event-driven architecture (AWS SQS + Kafka), improving system reliability and <strong>reducing retry failures by ~60%</strong>.</li>
                  <li>Owned end-to-end delivery of core Loans servicing platform, <strong>supporting ~2K+ daily transactions</strong> with <strong>improved API latency by ~35%</strong> through caching and async processing optimizations.</li>
                  <li>Integrated Partner Onboarding flow, streamlining the onboarding process for new financial partners.</li>
                </ul>
              </div>
            </div>

            {/* Jupiter Full-time */}
            <div className="timeline-entry" data-aos="fade-up">
              <div className="timeline-spine">
                <div className="tl-dot"></div>
                <div className="tl-line"></div>
              </div>
              <div className="timeline-card">
                <div className="tl-card-header">
                  <img src="https://jupiter.money/assets/images/header-white.svg?v=7e86edc062" alt="Jupiter Money" className="tl-logo" />
                  <div className="tl-meta">
                    <h3 className="tl-role">Associate Software Development Engineer</h3>
                    <p className="tl-company">Jupiter Money (Amica Financial)</p>
                    <p className="tl-date">Oct 2025 – Mar 2026 &nbsp;·&nbsp; Bengaluru</p>
                  </div>
                </div>
                <ul className="tl-bullets">
                  <li>Led integration of a third-party CRM (Collections) for Loans &amp; Cards, handling ~61K+ card and ~14K+ loan records daily via AWS API Gateway, Cognito &amp; Kubernetes.</li>
                  <li>Fixed transaction status mismatches with external partners — eliminated ~4–5 manual corrections/week.</li>
                  <li>Implemented Platform Fee logic during Loan Cooling-Off Period, generating <strong>₹2.5L+ revenue/month</strong>.</li>
                  <li>Integrated Alternative Contact Collection flow, expected to reduce failed communications by 30–40%.</li>
                </ul>
              </div>
            </div>

            {/* Jupiter Intern */}
            <div className="timeline-entry" data-aos="fade-up">
              <div className="timeline-spine">
                <div className="tl-dot"></div>
                <div className="tl-line"></div>
              </div>
              <div className="timeline-card">
                <div className="tl-card-header">
                  <img src="https://jupiter.money/assets/images/header-white.svg?v=7e86edc062" alt="Jupiter Money" className="tl-logo" />
                  <div className="tl-meta">
                    <h3 className="tl-role">Software Development Engineer Intern</h3>
                    <p className="tl-company">Jupiter Money (Amica Financial)</p>
                    <p className="tl-date">Dec 2024 – Sep 2025 &nbsp;·&nbsp; Jaipur</p>
                  </div>
                </div>
                <ul className="tl-bullets">
                  <li>Led KYC microservices dev, scaling eKYC capacity from 150 → 500+ daily verifications (<strong>₹22–27L/month revenue</strong>).</li>
                  <li>Built Generic Partner KYC Upload API — onboarded Khatabook (3.5K+ users) &amp; Finsall (2.4K+ users); contributed ₹10–15 Cr loan disbursal.</li>
                  <li>Automated CKYC using SQS + state-machine, processing 10K–20K monthly uploads with <strong>80% less manual ops time</strong>.</li>
                  <li>Reduced AWS cost by <strong>$8,100/month</strong> by optimizing DynamoDB throughput (400 → 1200 WCUs) and preventing Lambda retry storms.</li>
                </ul>
              </div>
            </div>

            {/* EVE Internship */}
            <div className="timeline-entry last" data-aos="fade-up">
              <div className="timeline-spine">
                <div className="tl-dot"></div>
              </div>
              <div className="timeline-card">
                <div className="tl-card-header">
                  <img src={eveLogo} alt="EVE Logo" className="tl-logo" />
                  <div className="tl-meta">
                    <h3 className="tl-role">Frontend Developer Intern</h3>
                    <p className="tl-company">EVE Healthcare Center</p>
                    <p className="tl-date">Jun 2023 – Aug 2023 &nbsp;·&nbsp; Remote</p>
                  </div>
                </div>
                <ul className="tl-bullets">
                  <li>Built responsive web interfaces using React, JavaScript, HTML, and CSS.</li>
                  <li>Delivered portfolio website with optimised UI, reducing load time and improving user engagement.</li>
                </ul>
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* Technical Skills */}
      <div className="skills-section" data-aos="fade-up">
        <section className="content">
          <h2>Technical <span className="d-orange">Skills</span></h2>
          <div className="skills-grid">
            <div className="skill-group" data-aos="fade-up">
              <h3>Core Backend &amp; Languages</h3>
              <div className="skill-badges">
                {["Kotlin", "JavaScript", "Spring Boot", "Jersey", "Node.js"].map(s => (
                  <span key={s} className="badge">{s}</span>
                ))}
              </div>
            </div>
            <div className="skill-group" data-aos="fade-up">
              <h3>Databases &amp; Storage</h3>
              <div className="skill-badges">
                {["PostgreSQL", "DynamoDB", "MySQL", "MongoDB", "JOOQ"].map(s => (
                  <span key={s} className="badge">{s}</span>
                ))}
              </div>
            </div>
            <div className="skill-group" data-aos="fade-up">
              <h3>Cloud, Messaging &amp; Infra</h3>
              <div className="skill-badges">
                {["AWS SQS/SNS", "Lambda", "API Gateway", "Cognito", "Kafka", "Docker", "Kubernetes", "CI/CD"].map(s => (
                  <span key={s} className="badge">{s}</span>
                ))}
              </div>
            </div>
            <div className="skill-group" data-aos="fade-up">
              <h3>Frontend &amp; Monitoring</h3>
              <div className="skill-badges">
                {["React.js", "Prometheus", "Grafana", "Datadog", "Opsgenie"].map(s => (
                  <span key={s} className="badge">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* education experience */}
      {/* why hire */}
      <div className="why-hire" data-aos="fade-up">
        {/* Left: image + stat pills */}
        <div className="hire-left">
          <div className="back-cont">
            <img src={kuldeepImg2} alt="Kuldeep Varma" loading="lazy" decoding="async" />
          </div>
          <div className="hire-stats">
            <div className="hire-stat">
              <span className="stat-num">10<span className="d-orange">+</span></span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="hire-stat">
              <span className="stat-num">1<span className="d-orange">+</span></span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="hire-stat">
              <span className="stat-num">400<span className="d-orange">+</span></span>
              <span className="stat-label">LeetCode Problems</span>
            </div>
          </div>
        </div>

        {/* Right: heading + value cards + CTA */}
        <div className="hire-right">
          <p className="section-eyebrow">Why me?</p>
          <h2>Why <span className="d-orange">Hire Me</span>?</h2>

          <div className="hire-cards">
            <div className="hire-card" data-aos="fade-up">
              <div className="hire-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
              </div>
              <div>
                <h4>Full-Stack Expertise</h4>
                <p>End-to-end delivery — React UIs to Spring Boot APIs and cloud infra (AWS, Kafka, PostgreSQL).</p>
              </div>
            </div>

            <div className="hire-card" data-aos="fade-up">
              <div className="hire-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              </div>
              <div>
                <h4>Ship Fast, Ship Right</h4>
                <p>Strong track record of on-time delivery with clean, maintainable code and thorough testing.</p>
              </div>
            </div>

            <div className="hire-card" data-aos="fade-up">
              <div className="hire-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <div>
                <h4>Team Player</h4>
                <p>Experience collaborating in cross-functional agile teams — communicative, adaptable, proactive.</p>
              </div>
            </div>

            <div className="hire-card" data-aos="fade-up">
              <div className="hire-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              </div>
              <div>
                <h4>User-First Mindset</h4>
                <p>Obsessed with performance and UX — optimising systems that users love and metrics reflect.</p>
              </div>
            </div>
          </div>

          <a className="hire-me-btn" href="mailto:kuldeepvarma7413@gmail.com" data-aos="fade-up">
            Let's Work Together →
          </a>
        </div>
      </div>
      {/* projects */}
      <div className="projects" id="project" data-aos="fade-up">
        <div className="projects-header">
          <p className="section-eyebrow">What I've built</p>
          <h2>My <span className="d-orange">Projects</span></h2>
          <p className="section-sub">A selection of personal and professional projects across full-stack, mobile and backend engineering.</p>
        </div>
        <div className="all-project">
          <ProjectCard
            title="Authentication System"
            tag="Full Stack"
            description="Developed an authentication system with local and Google OAuth, email verification, and JWT-based security. Includes user status management for secure interactions."
            image={AuthSystem}
            githubLink="https://github.com/kuldeepvarma7413/Authentication-using-MERN"
          />
          <ProjectCard
            title="StudySync"
            tag="Full Stack"
            description="Academic companion with real-time collaboration, note-taking, powerful search, compiler-driven functionalities, and seamless MongoDB & Cloudinary integration."
            image={studysync}
            // link="https://www.studysync.co.in"
            githubLink="https://github.com/kuldeepvarma7413/StudySync-MERN"
          />
          <ProjectCard
            title="Project Manager"
            tag="Full Stack"
            description="Project management app enabling teams to plan, track, and collaborate on tasks with assignments, progress monitoring, and deadline management."
            image={projectManager}
            githubLink="https://github.com/kuldeepvarma7413/project_manager"
          />
          <ProjectCard
            title="Medic World"
            tag="Java · Swing"
            description="Pharmacy Management system with admin/chemist roles — medicine management, billing, and profile handling built with Java and Swing."
            image={medicWorld}
            githubLink="https://github.com/kuldeepvarma7413/Medic-World-Application-JAVA"
          />
          <ProjectCard
            title="BMI Calculator"
            tag="Android"
            description="User-friendly BMI calculator app for determining Body Mass Index based on weight and height inputs with intuitive result display."
            image={BMICalculator}
            githubLink="https://github.com/kuldeepvarma7413/BMI-Calculator"
          />
          <ProjectCard
            title="StudySync Android"
            tag="Android · Kotlin"
            description="Android companion for StudySync with real-time collaboration, note sharing, and a user-friendly interface to streamline study sessions."
            image={StudySyncAndroid}
            githubLink="https://github.com/kuldeepvarma7413/StudySync_Android"
          />
        </div>
      </div>
      {/* moving label */}
      <div className="moving-label" data-aos="fade-up">
        <label className="label1">
          Android Apps <SiGooglegemini className="gemini" /> Web Apps{" "}
          <SiGooglegemini className="gemini" /> UI/UX{" "}
          <SiGooglegemini className="gemini" /> APIs
        </label>
        <label className="label2">
          Android Apps <SiGooglegemini className="gemini" /> Web Apps{" "}
          <SiGooglegemini className="gemini" /> UI/UX{" "}
          <SiGooglegemini className="gemini" /> APIs
        </label>
      </div>
      {/* education */}
      <div className="experience" id="education" data-aos="fade-up">
        <section className="content">
          <h2>My <span className="d-orange">Education</span></h2>
          <div className="timeline">

            <div className="timeline-entry" data-aos="fade-up">
              <div className="timeline-spine">
                <div className="tl-dot"></div>
                <div className="tl-line"></div>
              </div>
              <div className="timeline-card">
                <div className="tl-card-header">
                  <div className="tl-edu-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                  </div>
                  <div className="tl-meta">
                    <h3 className="tl-role">B.Tech CSE — Full Stack &amp; Android</h3>
                    <p className="tl-company">Lovely Professional University</p>
                    <p className="tl-date">Aug 2021 – May 2025 &nbsp;·&nbsp; Jalandhar, Punjab</p>
                  </div>
                </div>
                <ul className="tl-bullets">
                  <li>CGPA: <strong>8.3</strong> | Specialization in Full Stack Development &amp; Android</li>
                </ul>
              </div>
            </div>

            <div className="timeline-entry" data-aos="fade-up">
              <div className="timeline-spine">
                <div className="tl-dot tl-dot"></div>
                <div className="tl-line"></div>
              </div>
              <div className="timeline-card">
                <div className="tl-card-header">
                  <div className="tl-edu-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                  </div>
                  <div className="tl-meta">
                    <h3 className="tl-role">12th — Science (PCM)</h3>
                    <p className="tl-company">G.B.S. School, Jaswantpura</p>
                    <p className="tl-date">Jul 2019 – May 2020 &nbsp;·&nbsp; Churu, Rajasthan</p>
                  </div>
                </div>
                <ul className="tl-bullets">
                  <li>Result: <strong>71%</strong> | Physics, Chemistry, Maths</li>
                </ul>
              </div>
            </div>

            <div className="timeline-entry last" data-aos="fade-up">
              <div className="timeline-spine">
                <div className="tl-dot"></div>
              </div>
              <div className="timeline-card">
                <div className="tl-card-header">
                  <div className="tl-edu-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                  </div>
                  <div className="tl-meta">
                    <h3 className="tl-role">10th — Science</h3>
                    <p className="tl-company">G.B.S. School, Jaswantpura</p>
                    <p className="tl-date">Jul 2017 – May 2018 &nbsp;·&nbsp; Churu, Rajasthan</p>
                  </div>
                </div>
                <ul className="tl-bullets">
                  <li>Result: <strong>80.67%</strong></li>
                </ul>
              </div>
            </div>

          </div>
        </section>
      </div>
      {/* Let's Discuss */}
      <div className="connect" id="contact" data-aos="fade-up">
        <div className="connect-inner">
          <p className="section-eyebrow">Let's talk</p>
          <h2>Have a project idea? <br /><span className="d-orange">Let's Discuss</span></h2>
          <p className="connect-sub">Drop your email and I'll get back to you within 24 hours. Open to full-time roles, freelance work, and collaborations.</p>
          <form
            action="https://public.herotofu.com/v1/ca1a0aa0-47e2-11ef-9c40-81ddfd46a512"
            method="post"
            acceptCharset="UTF-8"
            className="connect-form"
            data-aos="fade-up"
          >
            <div className="connect-row">
              <div className="connect-field">
                <IoMailOpen className="field-icon" />
                <input name="Email" id="email" type="email" placeholder="Enter your email" required />
              </div>
              <button type="submit">Send →</button>
            </div>
            <input name="Name" type="text" value="portfolio" style={{ display: "none" }} readOnly />
            <div className="extra" aria-hidden="true">
              <input type="submit" value="Download CTA" />
              <div><input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" /></div>
            </div>
          </form>
          <div className="connect-socials">
            <a href="https://www.linkedin.com/in/kul-deep-varma-4150bb225/" title="LinkedIn"><BsLinkedin /></a>
            <a href="https://github.com/kuldeepvarma7413" title="GitHub"><FaSquareGithub /></a>
            <a href="https://www.instagram.com/kuldeepvarma7413" title="Instagram"><RiInstagramFill /></a>
            <a href="https://leetcode.com/u/kuldeepvarma7413/" title="LeetCode"><SiLeetcode /></a>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer data-aos="fade-up">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>Kuldeep<span className="d-orange">.</span></h2>
            <p>Associate SDE at Jupiter Money · Building scalable backend systems and delightful web experiences.</p>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/in/kul-deep-varma-4150bb225/" title="LinkedIn"><BsLinkedin /></a>
              <a href="https://github.com/kuldeepvarma7413" title="GitHub"><FaSquareGithub /></a>
              <a href="https://www.instagram.com/kuldeepvarma7413" title="Instagram"><RiInstagramFill /></a>
              <a href="https://leetcode.com/u/kuldeepvarma7413/" title="LeetCode"><SiLeetcode /></a>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Navigation</h4>
              <Link smooth spy to="home">Home</Link>
              <Link smooth spy to="about">About</Link>
              <Link smooth spy to="service">Services</Link>
              <Link smooth spy to="resume">Experience</Link>
              <Link smooth spy to="project">Projects</Link>
              <Link smooth spy to="education">Education</Link>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <a href="tel:+917413912366">+91 74139 12366</a>
              <a href="mailto:kuldeepvarma7413@gmail.com">kuldeepvarma7413@gmail.com</a>
              <a href="https://kuldeepvarma.netlify.app" target="_blank" rel="noreferrer">kuldeepvarma.netlify.app</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Kuldeep Varma. Crafted with React &amp; ♥</p>
          <a href="https://www.linkedin.com/in/kul-deep-varma-4150bb225/" className="footer-cta">Let's Connect →</a>
        </div>
      </footer>
    </>
  );
}

export default App;
