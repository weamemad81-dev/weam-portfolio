import "./App.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            Weam<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#project">Project</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-decoration decoration-one"></div>
        <div className="hero-decoration decoration-two"></div>
        <div className="hero-decoration decoration-three"></div>

        <div className="hero-content">
          <div className="hero-badge">
            Business Information Systems Student
          </div>

          <img
            src="/weam.jpeg"
            alt="Weam Emad"
            className="hero-image"
          />

          <h1>
            Hi, I'm <span>Weam Emad</span>
          </h1>

          <h2>Turning business needs into smart digital solutions.</h2>

          <p>
            I'm a third-year Business Information Systems student interested
            in technology, databases, and software development. I enjoy
            turning business challenges into simple and effective digital
            solutions.
          </p>

          <div className="hero-buttons">
            <a href="#project" className="btn btn-primary">
              View My Project
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about-section">
        <div className="section-container">
          <div className="section-title">
            <span>Get To Know Me</span>
            <h2>About Me</h2>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <div className="about-icon">💻</div>
              <h3>Business Meets Technology</h3>
              <p>
                I study Business Information Systems, focusing on the
                connection between business needs and technology solutions.
              </p>
            </div>

            <div className="about-text">
              <p>
                I'm a third-year Business Information Systems student at
                Modern Academy. I'm interested in technology and
                problem-solving, especially at the intersection of business
                and software development.
              </p>

              <p>
                I have knowledge in databases, SQL, and business systems, and
                I'm currently developing my skills toward becoming a Junior
                .NET Full Stack Developer.
              </p>

              <div className="about-highlights">
                <div>
                  <strong>01</strong>
                  <span>Problem Solving</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Database Knowledge</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Business & Technology</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="skills-section">
        <div className="section-container">
          <div className="section-title">
            <span>What I Know</span>
            <h2>My Skills</h2>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-number">01</div>
              <h3>C#</h3>
              <p>Programming and software development fundamentals.</p>
            </div>

            <div className="skill-card">
              <div className="skill-number">02</div>
              <h3>SQL / SQL Server</h3>
              <p>Database querying, management, and relational databases.</p>
            </div>

            <div className="skill-card">
              <div className="skill-number">03</div>
              <h3>Database Design</h3>
              <p>ERD, relational modeling, and database implementation.</p>
            </div>

            <div className="skill-card">
              <div className="skill-number">04</div>
              <h3>HTML & CSS</h3>
              <p>Building and styling clean web pages.</p>
            </div>

            <div className="skill-card">
              <div className="skill-number">05</div>
              <h3>Microsoft Office</h3>
              <p>Microsoft Word, Excel, PowerPoint, and Office tools.</p>
            </div>

            <div className="skill-card">
              <div className="skill-number">06</div>
              <h3>Business Information Systems</h3>
              <p>Understanding business processes and technology solutions.</p>
            </div>

            <div className="skill-card">
              <div className="skill-number">07</div>
              <h3>Communication</h3>
              <p>Clear communication and working effectively with others.</p>
            </div>

            <div className="skill-card">
              <div className="skill-number">08</div>
              <h3>Teamwork</h3>
              <p>Collaborating with others to achieve shared goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project */}
      <section id="project" className="project-section">
        <div className="section-container">
          <div className="section-title">
            <span>Featured Work</span>
            <h2>My Project</h2>
          </div>

          <div className="project-card">
            <div className="project-content">
              <div className="project-icon">✈️</div>

              <h3>Airline Reservation Database System</h3>

              <p>
                A relational database system designed to manage airline
                reservations, flights, passengers, bookings, and related
                information.
              </p>

              <p>
                The project focuses on database design and implementation,
                including managing flights, passengers, bookings, and
                reservation data efficiently.
              </p>

              <div className="project-tech">
                <span>SQL Server</span>
                <span>Database Modeling</span>
                <span>C#</span>
              </div>

              <a
                href="https://github.com/weamemad81-dev/Airline"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project on GitHub →
              </a>
            </div>

            <div className="project-details">
              <div className="detail-item">
                <strong>Project Type</strong>
                <span>Academic Project</span>
              </div>

              <div className="detail-item">
                <strong>Focus</strong>
                <span>Database Design & Implementation</span>
              </div>

              <div className="detail-item">
                <strong>Repository</strong>
                <span>GitHub</span>
              </div>

              <div className="detail-item">
                <strong>Status</strong>
                <span>Completed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="education-section">
        <div className="section-container">
          <div className="section-title">
            <span>My Academic Journey</span>
            <h2>Education</h2>
          </div>

          <div className="education-card">
            <div className="education-year">2023 — Present</div>

            <div className="education-content">
              <h3>Modern Academy</h3>
              <h4>Business Information Systems (BIS)</h4>

              <p>
                Currently in my third year, studying systems analysis,
                database design, software development, and enterprise
                business applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="career-section">
        <div className="section-container">
          <div className="career-content">
            <span className="career-label">Career Goal</span>

            <h2>
              Aspiring <span>Junior .NET Full Stack Developer</span>
            </h2>

            <p>
              I'm developing my technical skills in C#, ASP.NET Core, Entity
              Framework Core, SQL Server, and web development to build useful
              and reliable software solutions.
            </p>

            <div className="career-skills">
              <span>C#</span>
              <span>ASP.NET Core</span>
              <span>Entity Framework Core</span>
              <span>SQL Server</span>
              <span>Web Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="section-title">
            <span>Let's Connect</span>
            <h2>Contact Me</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-text">
              <h3>Let's work together.</h3>

              <p>
                I'm always open to connecting with people, learning new
                things, and exploring opportunities in technology and
                business.
              </p>
            </div>

            <div className="contact-links">
              <a
                href="mailto:weamemad81@gmail.com"
                className="contact-item"
              >
                <div className="contact-icon">✉</div>
                <div>
                  <strong>Email</strong>
                  <span>weamemad81@gmail.com</span>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/weam-emad"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-icon">in</div>
                <div>
                  <strong>LinkedIn</strong>
                  <span>linkedin.com/in/weam-emad</span>
                </div>
              </a>

              <a
                href="https://github.com/weamemad81-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-icon">GH</div>
                <div>
                  <strong>GitHub</strong>
                  <span>github.com/weamemad81-dev</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            Weam<span>.</span>
          </div>

          <p>© 2026 Weam Emad. All rights reserved.</p>

          <a href="#home" className="back-top">
            ↑
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;