import "./App.css";

function App() {
  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Weam<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section id="home" className="hero">

        <div className="hero-content">

          {/* Profile Image */}
          <div className="hero-image">
            <img src="/weam.jpeg" alt="Weam Emad" />
          </div>

          <span className="hero-badge">
            Business Information Systems Student
          </span>

          <h1>
            Hi, I'm <span>Weam Emad</span>
          </h1>

          <h2>
            Turning business needs into smart digital solutions.
          </h2>

          <p>
            I am a third-year Business Information Systems student
            interested in technology, problem-solving, databases,
            and software development.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

        </div>

        {/* Decorations */}
        <div className="hero-decoration decoration-one"></div>
        <div className="hero-decoration decoration-two"></div>
        <div className="hero-decoration decoration-three"></div>

      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="section about-section">

        <div className="section-header">
          <span>ABOUT ME</span>
          <h2>A little about me</h2>
        </div>

        <div className="about-container">

          <div className="about-card">
            <div className="about-icon">
              💻
            </div>

            <h3>Business & Technology</h3>

            <p>
              Connecting business needs with technology solutions.
            </p>
          </div>

          <div className="about-text">

            <p>
              I am a third-year Business Information Systems student
              at Modern Academy. I am interested in technology,
              problem-solving, and the connection between business
              and technology.
            </p>

            <p>
              I have an interest in databases, business systems,
              and software development. I enjoy working in
              collaborative environments and turning business
              challenges into practical and elegant digital solutions.
            </p>

            <div className="about-highlights">

              <div>
                <strong>01</strong>
                <span>Problem Solving</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Technology</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Business Systems</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="section skills-section">

        <div className="section-header">
          <span>MY SKILLS</span>
          <h2>What I work with</h2>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-number">01</div>
            <h3>C#</h3>
            <p>Programming & Software Development</p>
          </div>

          <div className="skill-card">
            <div className="skill-number">02</div>
            <h3>SQL / SQL Server</h3>
            <p>Database Querying & Management</p>
          </div>

          <div className="skill-card">
            <div className="skill-number">03</div>
            <h3>Database Design</h3>
            <p>Relational Database Design & Modeling</p>
          </div>

          <div className="skill-card">
            <div className="skill-number">04</div>
            <h3>HTML & CSS</h3>
            <p>Web Structure & Styling</p>
          </div>

          <div className="skill-card">
            <div className="skill-number">05</div>
            <h3>Microsoft Office</h3>
            <p>Microsoft Office Suite</p>
          </div>

          <div className="skill-card">
            <div className="skill-number">06</div>
            <h3>Business Information Systems</h3>
            <p>Business & Technology Integration</p>
          </div>

          <div className="skill-card">
            <div className="skill-number">07</div>
            <h3>Problem Solving</h3>
            <p>Analysis & Practical Solutions</p>
          </div>

          <div className="skill-card">
            <div className="skill-number">08</div>
            <h3>Teamwork</h3>
            <p>Communication & Collaboration</p>
          </div>

        </div>

      </section>

      {/* ================= PROJECT ================= */}
      <section id="projects" className="section projects-section">

        <div className="section-header">
          <span>FEATURED PROJECT</span>
          <h2>What I've worked on</h2>
        </div>

        <div className="project-card">

          <div className="project-left">

            <span className="project-label">
              Academic Project
            </span>

            <h3>
              Airline Reservation Database System
            </h3>

            <p>
              A relational database system designed and implemented
              to manage airline reservation operations, including
              booking management, flight scheduling, and passenger
              records.
            </p>

            <a
              href="https://github.com/weamemad81-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View Project on GitHub →
            </a>

          </div>

          <div className="project-right">

            <div className="project-detail">
              <span>Technologies</span>
              <strong>
                SQL Server · Database Modeling · C#
              </strong>
            </div>

            <div className="project-detail">
              <span>Focus</span>
              <strong>
                Booking Management · Flight Scheduling · Passenger Records
              </strong>
            </div>

            <div className="project-detail">
              <span>Project Type</span>
              <strong>
                Academic Database Project
              </strong>
            </div>

            <div className="project-status">
              <span></span>
              Completed Academic Project
            </div>

          </div>

        </div>

      </section>

      {/* ================= EDUCATION ================= */}
      <section id="education" className="section education-section">

        <div className="section-header">
          <span>EDUCATION</span>
          <h2>My academic journey</h2>
        </div>

        <div className="education-card">

          <div className="education-number">
            01
          </div>

          <div className="education-content">

            <div className="education-label">
              CURRENTLY THIRD YEAR
            </div>

            <h3>Modern Academy</h3>

            <h4>
              Business Information Systems (BIS)
            </h4>

            <p>
              Studying systems analysis, database design,
              software development, and enterprise business
              applications.
            </p>

          </div>

        </div>

      </section>

      {/* ================= CAREER ================= */}
      <section className="section career-section">

        <div className="career-content">

          <span>CAREER GOAL</span>

          <h2>
            Aspiring <span>Junior .NET Full Stack Developer</span>
          </h2>

          <p>
            I am developing my skills in C#, ASP.NET Core,
            Entity Framework Core, and full-stack development
            with the goal of building practical software solutions
            that connect technology with real business needs.
          </p>

          <div className="career-skills">

            <div>C#</div>
            <div>ASP.NET Core</div>
            <div>Entity Framework Core</div>
            <div>SQL Server</div>
            <div>Web Development</div>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="section contact-section">

        <div className="contact-container">

          <div className="contact-text">

            <h3>
              Let's <span>connect.</span>
            </h3>

            <p>
              Feel free to reach out if you'd like to connect,
              collaborate, or discuss opportunities.
            </p>

          </div>

          <div className="contact-links">

            <a
              href="mailto:weamemad81@gmail.com"
              className="contact-item"
            >
              <div className="contact-icon">
                ✉
              </div>

              <div>
                <small>Email</small>
                <strong>
                  weamemad81@gmail.com
                </strong>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/weam-emad"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">
                in
              </div>

              <div>
                <small>LinkedIn</small>
                <strong>
                  linkedin.com/in/weam-emad
                </strong>
              </div>
            </a>

            <a
              href="https://github.com/weamemad81-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">
                GH
              </div>

              <div>
                <small>GitHub</small>
                <strong>
                  github.com/weamemad81-dev
                </strong>
              </div>
            </a>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer>

        <div className="footer-logo">
          Weam<span>.</span>
        </div>

        <p>
          © 2026 Weam Emad. All rights reserved.
        </p>

        <a href="#home">
          Back to top ↑
        </a>

      </footer>

    </div>
  );
}

export default App;