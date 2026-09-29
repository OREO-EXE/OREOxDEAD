import { useEffect, useState, useRef } from "react"
import myPhoto from "./imports/___her___.jpgdsadsadsad.jpg"

const projects = [
  {
    number: "01",
    title: "ODIN",
    description:
      "An institutional cyber-memory platform that turns incident investigations into reusable organizational intelligence through incident reconstruction, MITRE ATT&CK mapping, hybrid retrieval, investigation diffing, and explainable AI.",
    tag: "CYBERSEC",
    art: "odin",
    note: "Rust · Axum · Next.js · PostgreSQL · Qdrant · Neo4j · Redis · Ollama",
    link: "https://github.com/BL4CK-0PS/ODIN.git",
  },
  {
    number: "02",
    title: "TEKMERION",
    description:
      "A forensic evidence verification pipeline that combines face verification, reverse-image discovery, cryptographic fingerprinting, Merkle trees, and Ethereum anchoring to detect evidence tampering.",
    tag: "FORENSICS",
    art: "tekmerion",
    note: "Rust · Python · SCRFD · ArcFace · ONNX Runtime · Solidity · Ethereum Sepolia · SHA-256 · Merkle Trees · Ratatui",
    link: "https://github.com/Mr-IR0k-oo1/TEKMERION.git",
  },
  {
    number: "03",
    title: "APKxDEAD",
    description:
      "AI-powered Android malware analysis platform that statically analyzes APKs, extracts security features, and classifies malware families using machine learning.",
    tag: "MALWARE AI",
    art: "apkxdead",
    note: "Python · XGBoost · Androguard · APKTool · scikit-learn · pandas · Node.js · Git",
    link: "https://github.com/OREO-EXE/APKxDEAD.git",
  },
  {
    number: "04",
    title: "RIGEL",
    description:
      "A contributor workflow for maintaining code quality, reliability, security, and consistency. Process: Understand → Plan → Implement → Test → Document → Review",
    tag: "WORKFLOW",
    art: "rigel",
    note: "Documentation · Architecture · Coding Standards · Error Handling · Testing · Security · Code Review",
    link: "https://github.com/QuantrixStudio/Rigel-main.git",
  },
]

const technologies = [
  "Python",
  "TypeScript",
  "React",
  "React Native",
  "FastAPI",
  "Linux",
  "Web Security",
  "Git",
  "Docker",
  "Figma",
  "Rust",
  "C/C++",
  "Bash",
  "PostgreSQL",
  "Node.js",
  "Burp Suite",
  "Nmap",
  "Wireshark",
  "Ghidra",
  "Metasploit",
  "SQLMap",
  "Reverse Engineering",
  "OSINT",
]

function Tape({ className = "" }: { className?: string }) {
  return <span className={`tape ${className}`} aria-hidden="true" />
}

function BinderClip({ className = "" }: { className?: string }) {
  return (
    <span className={`binder ${className}`} aria-hidden="true">
      <i />
      <i />
    </span>
  )
}

function DoodleRocket({ small = false }: { small?: boolean }) {
  return (
    <div
      className={`rocket-object ${small ? "rocket-small" : ""}`}
      aria-hidden="true"
    >
      <div className="rocket-window" />
      <div className="rocket-fin left" />
      <div className="rocket-fin right" />
      <div className="rocket-flame" />
    </div>
  )
}

function Satellite() {
  return (
    <div className="satellite" aria-hidden="true">
      <div className="solar-wing">
        <i />
        <i />
        <i />
      </div>
      <div className="sat-body">
        <span />
      </div>
      <div className="solar-wing">
        <i />
        <i />
        <i />
      </div>
    </div>
  )
}

function Laptop() {
  return (
    <div className="laptop" aria-hidden="true">
      <div className="laptop-screen">
        <span>$ whoami</span>
        <b>oreo.exe</b>
        <span className="cursor-line">building_the_future_</span>
      </div>
      <div className="laptop-base">
        <i />
      </div>
    </div>
  )
}

function Robot() {
  return (
    <div className="robot" aria-hidden="true">
      <div className="antenna" />
      <div className="robot-head">
        <i />
        <i />
      </div>
      <div className="robot-body">01</div>
      <div className="robot-feet" />
    </div>
  )
}

function PCB({ className = "" }: { className?: string }) {
  return (
    <div className={`pcb ${className}`} aria-hidden="true">
      <span className="chip">EXE</span>
      <i className="trace t1" />
      <i className="trace t2" />
      <i className="trace t3" />
      <i className="pin p1" />
      <i className="pin p2" />
      <i className="pin p3" />
    </div>
  )
}

function ProjectVisual({ type }: { type: string }) {
  if (type === "odin") {
    return (
      <div className="project-visual network-art" aria-hidden="true">
        <div className="net-node n1" />
        <div className="net-node n2" />
        <div className="net-node n3" />
        <div className="net-node n4" />
        <div className="net-line l1" />
        <div className="net-line l2" />
        <div className="net-line l3" />
      </div>
    )
  }
  if (type === "tekmerion") {
    return (
      <div className="project-visual shield-art" aria-hidden="true">
        <div className="shield" />
        <div className="check" />
      </div>
    )
  }
  if (type === "apkxdead") {
    return (
      <div className="project-visual terminal-art" aria-hidden="true">
        <div className="mini-terminal">
          <span>nmap -sV target</span>
          <b>22/tcp &nbsp; open</b>
          <b>443/tcp open</b>
          <span>root@lab:~# _</span>
        </div>
        <div className="lock">
          <i />
        </div>
      </div>
    )
  }
  if (type === "rigel") {
    return (
      <div className="project-visual orbit-art" aria-hidden="true">
        <div className="orbit-ring">
          <span />
        </div>
        <DoodleRocket small />
        <i className="star s1">+</i>
        <i className="star s2">+</i>
      </div>
    )
  }
  return null
}
function LoadingScreen({ onEmerge }: { onEmerge: () => void }) {
  const [phase, setPhase] = useState<"playing" | "exiting" | "done">("playing")

  useEffect(() => {
    // Play for 3.5s then warp
    const t1 = setTimeout(() => {
      setPhase("exiting")
      onEmerge()
    }, 3500)

    // Exiting takes 1.5s
    const t2 = setTimeout(() => {
      setPhase("done")
    }, 5000)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [onEmerge])

  if (phase === "done") return null

  return (
    <div
      className={`loading-screen-warp ${phase}`}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: phase === "playing" ? "all" : "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          phase === "playing"
            ? "linear-gradient(120deg, #00f3ff, #ff00ff, #ffff00, #00ff00, #ff003c, #00f3ff)"
            : "transparent",
        backgroundSize: "400% 400%",
        animation:
          phase === "playing"
            ? "colorfulGradientFlow 3s ease infinite"
            : "none",
        transition: "background 1.5s ease",
        overflow: "hidden",
      }}
    >
      <video
        src="/blackhole.mp4"
        autoPlay
        muted
        playsInline
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          mixBlendMode: "multiply",
          filter: "contrast(300%) brightness(130%) grayscale(100%)",
          transition:
            "transform 1.5s cubic-bezier(0.5, 0, 0.1, 1), opacity 1.2s ease 0.3s",
          transform: phase === "exiting" ? "scale(50)" : "scale(1.1)",
          opacity: phase === "exiting" ? 0 : 1,
          transformOrigin: "center center",
        }}
      />
    </div>
  )
}

function RedirectLoader({ url }: { url: string | null }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [phase, setPhase] = useState<"idle" | "playing" | "warping">("idle")

  useEffect(() => {
    if (url && videoRef.current) {
      const vid = videoRef.current
      let t1: NodeJS.Timeout
      let t2: NodeJS.Timeout

      const onPlaying = () => {
        // Play normally for 1500ms before starting the warp to let the animation breathe
        t1 = setTimeout(() => {
          setPhase("warping")
        }, 1500)

        // The CSS warp transition now takes 2.5s.
        // Redirect 3.5s into the sequence (2.0s into the warp) so the blackhole consumes the screen.
        t2 = setTimeout(() => {
          window.location.href = url
        }, 3500)
      }

      vid.addEventListener("playing", onPlaying, { once: true })

      setPhase("playing")
      vid.currentTime = 0
      vid.play().catch((err) => {
        console.warn("Video playback failed, redirecting immediately:", err)
        window.location.href = url
      })

      return () => {
        vid.removeEventListener("playing", onPlaying)
        clearTimeout(t1)
        clearTimeout(t2)
      }
    } else {
      setPhase("idle")
    }
  }, [url])

  return (
    <div
      className={`video-loader-overlay ${phase}`}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        opacity: phase !== "idle" ? 1 : 0,
        pointerEvents: phase !== "idle" ? "all" : "none",
        transition: "opacity 0.2s ease-in-out",
        background:
          phase !== "idle"
            ? "linear-gradient(120deg, #00f3ff, #ff00ff, #ffff00, #00ff00, #ff003c, #00f3ff)"
            : "transparent",
        backgroundSize: "400% 400%",
        animation:
          phase !== "idle" ? "colorfulGradientFlow 3s ease infinite" : "none",
      }}
    >
      <video
        ref={videoRef}
        src="/blackhole.mp4"
        muted
        playsInline
        preload="auto"
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          mixBlendMode: "multiply",
          filter: "contrast(300%) brightness(130%) grayscale(100%)",
          transition: "transform 2.5s cubic-bezier(0.5, 0, 0.1, 1)",
          transform: phase === "warping" ? "scale(50)" : "scale(1.1)",
          transformOrigin: "center center",
        }}
      />
    </div>
  )
}

export default function App() {
  const [appPhase, setAppPhase] = useState<"loading" | "emerging" | "ready">(
    "loading",
  )
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null)

  const handleRedirect = (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string,
  ) => {
    e.preventDefault()
    if (redirectUrl) return
    setRedirectUrl(url)
  }

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual"
    }
    window.scrollTo(0, 0)
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname)
    }

    const revealTargets = document.querySelectorAll(
      ".paper, .project-sheet, .section-heading, .stack-board, .experience-note",
    )
    revealTargets.forEach((target) => target.classList.add("reveal-ready"))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible")
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )
    revealTargets.forEach((target) => observer.observe(target))

    const updateScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0
      document.documentElement.style.setProperty(
        "--scroll-progress",
        `${progress}`,
      )
      document.documentElement.style.setProperty(
        "--desk-scroll",
        `${window.scrollY}`,
      )
    }
    updateScroll()
    window.addEventListener("scroll", updateScroll, { passive: true })

    if (appPhase === "emerging") {
      const t = setTimeout(() => setAppPhase("ready"), 1200)
      return () => {
        observer.disconnect()
        window.removeEventListener("scroll", updateScroll)
        clearTimeout(t)
      }
    }

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", updateScroll)
    }
  }, [appPhase])

  return (
    <>
      {appPhase !== "ready" && (
        <LoadingScreen onEmerge={() => setAppPhase("emerging")} />
      )}
      <main
        className={`desk ${
          appPhase === "loading"
            ? "hide-app"
            : appPhase === "emerging"
              ? "emerge-app"
              : ""
        }`}
      >
        <RedirectLoader url={redirectUrl} />
        <nav className="desk-nav" aria-label="Main navigation">
          <a className="nav-logo" href="#top">
            OREO.EXE
          </a>
          <div className="nav-links">
            <a href="#about">ABOUT</a>
            <a href="#work">WORK</a>
            <a href="#experiments">EXPERIMENTS</a>
            <a href="#stack">STACK</a>
            <a href="#contact">CONTACT</a>
          </div>
          <span className="scroll-progress" aria-hidden="true" />
        </nav>

        <section className="hero workspace" id="top">
          <div className="joy-ribbon" aria-hidden="true">
            <div>
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i}>
                  BUILD IT! ★ BREAK IT! ★ LEARN IT! ★ MAKE IT WEIRD! ★ STAY
                  CURIOUS! ★{" "}
                </span>
              ))}
            </div>
          </div>
          <div className="desk-confetti" aria-hidden="true">
            <i>+</i>
            <i>★</i>
            <i>✦</i>
            <i>+</i>
            <i>★</i>
            <i>✦</i>
          </div>

          <p className="scribble hero-note">probably unnecessary →</p>
          <div className="pencil" aria-hidden="true" />
          <div className="keyboard" aria-hidden="true">
            {Array.from({ length: 24 }).map((_, i) => (
              <i key={i} />
            ))}
          </div>
          <div className="hero-paper paper">
            <BinderClip className="hero-clip" />
            <Tape className="hero-tape" />
            <p className="eyebrow">PERSONAL ENGINEERING LOG / 2026</p>
            <div className="hero-grid">
              <div>
                <p className="hero-name">OREO.EXE</p>
                <h1>
                  I BUILD
                  <br />
                  <span>WEIRD</span>
                  <br />
                  THINGS.
                </h1>
              </div>
              <div className="hero-copy">
                <div className="orbit-stamp">
                  BUILD
                  <br />
                  BREAK
                  <br />
                  LEARN
                </div>
                <p className="discipline">
                  CYBERSECURITY × SOFTWARE × AEROSPACE
                </p>
                <blockquote>
                  “Build it. Break it. Understand it. Build it better.”
                </blockquote>
                <div className="actions">
                  <a className="button primary" href="#work">
                    VIEW PROJECTS <span>↘</span>
                  </a>
                  <a className="button secondary" href="#about">
                    ABOUT ME <span>→</span>
                  </a>
                </div>
              </div>
            </div>
            <p className="paper-index">FIELD NOTES — 001</p>
          </div>

          <Robot />
          <DoodleRocket />
          <Satellite />
          <div className="coffee" aria-hidden="true">
            <span>
              COFFEE
              <br />→ CODE
            </span>
          </div>

          <div className="cable cable-one" aria-hidden="true" />
          <p className="scribble terminal-tabs">37 terminal tabs</p>
        </section>

        <section className="about workspace" id="about">
          <div className="section-tab">02 / PERSONNEL FILE</div>
          <div className="notebook paper">
            <div className="spiral" aria-hidden="true">
              {Array.from({ length: 12 }).map((_, i) => (
                <i key={i} />
              ))}
            </div>
            <Tape className="about-tape" />
            <div className="profile-side">
              <div className="profile-polaroid">
                <img
                  src={myPhoto}
                  className="avatar-photo"
                  alt="Oreo in the lab"
                />
                <p>OREO IN THE LAB_</p>
              </div>
              <div className="id-note">
                <b>STATUS</b>
                <span>STILL CURIOUS</span>
                <b>MODE</b>
                <span>BUILDING</span>
                <b>BASE</b>
                <span>EARTH (FOR NOW)</span>
              </div>
              <div className="about-arch">
                <svg
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  width="36"
                  height="36"
                >
                  <path d="M256,12.3c-2.9,0-5.6,1.4-7.2,3.8L5.1,385c-2.3,3.4-2,8,0.7,11.2c2.7,3.1,7.2,4.2,11.1,2.6l239.1-98.3l239.1,98.3 c3.9,1.6,8.4,0.5,11.1-2.6c2.7-3.1,3-7.8,0.7-11.2L263.2,16.1C261.6,13.7,258.9,12.3,256,12.3z" />
                  <path d="M125.4,394.3c-3,0-5.8,1.6-7.3,4.1l-14.7,25c-2.3,3.9-1.9,8.8,1,12.3c2.9,3.5,7.7,4.8,12,3.1l139.7-57.5l139.7,57.5 c4.2,1.7,9.1,0.4,12-3.1c2.9-3.5,3.3-8.4,1-12.3l-14.7-25c-1.5-2.6-4.3-4.1-7.3-4.1H125.4z" />
                </svg>
                <span>uses Arch btw</span>
              </div>
            </div>
            <div className="about-copy">
              <p className="eyebrow">THE PERSON BEHIND THE TERMINAL</p>
              <h2>
                BEHIND
                <br />
                <span>THE CHAOS</span>
              </h2>
              <p className="bio">
                Hey, I’m OREO.
                <br />
                <br />I poke at systems, break stuff, build stuff, and then
                spend an unreasonable amount of time figuring out why the stuff
                I built is now broken.
                <br />
                <br />
                Cybersecurity is where curiosity meets controlled chaos.
              </p>
              <div className="timeline">
                <div>
                  <b>NOW</b>
                  <span>
                    Building things I probably should’ve planned first.
                  </span>
                </div>
                <div>
                  <b>NEXT</b>
                  <span>
                    More robots. More experiments. More “wait… can this actually
                    work?”
                  </span>
                </div>
                <div>
                  <b>ALWAYS</b>
                  <span>Break it. Learn from it. Build it better.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="folder" aria-hidden="true">
            <span>
              CLASSIFIED
              <br />
              IDEAS
            </span>
          </div>
          <div className="scissors" aria-hidden="true">
            <i />
            <i />
            <b>✕</b>
          </div>
        </section>

        <section className="projects workspace" id="work">
          <header className="section-heading">
            <p>SELECTED PROJECT ARCHIVE / 01—04</p>
            <h2>
              THINGS I’VE
              <br />
              <span>BUILT</span>
            </h2>
            <p className="scribble">one more feature...</p>
          </header>
          <div className="project-scatter">
            {projects.map((project, index) => (
              <article
                className={`project-sheet project-${index + 1}`}
                key={project.title}
              >
                <BinderClip />
                <span className="project-number">{project.number}</span>
                <span className="project-tag">{project.tag}</span>
                <ProjectVisual type={project.art} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-note">{project.note}</div>
                <a
                  href={project.link || "#"}
                  onClick={(e) => handleRedirect(e, project.link || "#")}
                  className="view-mark"
                >
                  VIEW FILE ↗
                </a>
              </article>
            ))}
          </div>
          <div className="usb" aria-hidden="true">
            <i />
            128 GB
          </div>
        </section>

        <section className="experiments workspace" id="experiments">
          <div className="experiment-book paper">
            <div className="book-rings" aria-hidden="true">
              {Array.from({ length: 7 }).map((_, i) => (
                <i key={i} />
              ))}
            </div>
            <div className="experiment-left">
              <p className="eyebrow">UNFINISHED / UNHINGED / USEFUL?</p>
              <h2>
                WHAT
                <br />
                <span>IF...?</span>
              </h2>
              <div className="sketch-terminal" aria-hidden="true">
                <div className="term-header">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="term-body">
                  <span>$ whoami</span>
                  <span>&gt; explorer_</span>
                </div>
              </div>
              <p className="scribble">it worked yesterday</p>
            </div>
            <div className="experiment-right">
              {[
                {
                  title: "SECURITY",
                  subtitle: "What if every system could be understood?",
                },
                {
                  title: "LINUX",
                  subtitle: "What if I understand the system from inside?",
                },
                { title: "ROBOTICS", subtitle: "What if software could move?" },
                { title: "AI", subtitle: "What if machines could reason?" },
                {
                  title: "AEROSPACE",
                  subtitle: "What if code could leave the ground?",
                },
                {
                  title: "EXPERIMENTS",
                  subtitle: "What if the idea actually worked?",
                },
              ].map((item, i) => (
                <div className={`loose-note note-${i + 1}`} key={item.title}>
                  <span>0{i + 1}</span>
                  <b>{item.title}</b>
                  <i>{item.subtitle}</i>
                </div>
              ))}
            </div>
          </div>
          <div className="headphones" aria-hidden="true">
            <i />
            <i />
            <span />
          </div>
        </section>

        <section className="stack workspace" id="stack">
          <div className="stack-board">
            <Tape className="stack-tape" />
            <div className="stack-title">
              <p>TOOLS / LANGUAGES / THINGS I ARGUE WITH</p>
              <h2>MY TOOLBOX</h2>
            </div>
            <div className="stickers">
              {technologies.map((tech, i) => (
                <span className={`sticker sticker-${(i % 5) + 1}`} key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="experience-note">
            <span className="pin-head" />
            <b>2026</b>
            <h3>
              OFFENSIVE
              <br />
              SECURITY LEAD
            </h3>
            <p>OWASP SREC STUDENT CHAPTER</p>
            <i>lead / learn / share</i>
          </div>
          <div className="experience-note cmart-note">
            <span className="pin-head" style={{ background: "#f28b9d" }} />
            <b>VAPT | CMART</b>
            <h3>Bangalore • Whitefield</h3>
            <p>
              Conducted Vulnerability Assessment & Penetration Testing across
              30+ systems, identifying and validating security vulnerabilities
              and documenting findings for remediation.
            </p>
            <div className="scope">
              <strong>Scope</strong>
              <ul>
                <li>30+ Systems & 2 Firewalls</li>
                <li>Vulnerability Assessment</li>
                <li>Penetration Testing</li>
                <li>Security Documentation & Reporting</li>
              </ul>
            </div>
            <i>Nmap · Burp Suite · Wireshark · Linux</i>
          </div>
          <div className="screwdriver" aria-hidden="true">
            <span />
            <i />
          </div>
        </section>

        <section className="contact workspace" id="contact">
          <p className="scribble contact-note">okay, your turn →</p>
          <div className="contact-sheet paper">
            <BinderClip className="contact-clip" />
            <Tape className="contact-tape" />
            <p className="eyebrow">OPEN CHANNEL / SAY HELLO</p>
            <h2>
              LET’S BUILD
              <br />
              <span>SOMETHING WEIRD.</span>
            </h2>
            <p>
              Got an impossible idea, a curious problem, or just want to compare
              terminal themes?
            </p>
            <div className="contact-links">
              <a
                href="mailto:hello@oreo.exe"
                onClick={(e) => handleRedirect(e, "mailto:hello@oreo.exe")}
              >
                EMAIL <span>↗</span>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                onClick={(e) => handleRedirect(e, "https://github.com/")}
              >
                GITHUB <span>↗</span>
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                onClick={(e) => handleRedirect(e, "https://linkedin.com/")}
              >
                LINKEDIN <span>↗</span>
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                onClick={(e) => handleRedirect(e, "https://instagram.com/")}
              >
                INSTAGRAM <span>↗</span>
              </a>
            </div>
            <p className="signature">— OREO.EXE</p>
          </div>
          <div className="contact-laptop">
            <Laptop />
          </div>
          <div className="contact-satellite">
            <Satellite />
          </div>
          <div className="contact-rocket">
            <DoodleRocket />
          </div>
          <PCB className="contact-pcb" />
          <div className="tiny-notebook">
            NEXT IDEA:
            <br />
            <span>________________</span>
            <br />
            <span>________________</span>
          </div>
          <footer>
            <span>DESIGNED + BUILT BY OREO.EXE</span>
            <span>EARTH / 2026</span>
            <a href="#top">BACK TO DESK ↑</a>
          </footer>
        </section>
      </main>
    </>
  )
}
