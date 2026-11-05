
import './App.css'

function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo">
          RAVI<span>.</span>DEV
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk ↗
        </a>
      </header>

      <main>

        {/* HERO SECTION */}
        <section className="hero-section" id="home">

          <div className="hero-content">

            <div className="availability">
              <span className="status-dot"></span>
              Available for opportunities
            </div>

            <p className="intro-text">HELLO, I'M</p>

            <h1>
              Ravi <span>Gupta.</span>
            </h1>

            <h2>Sr. PHP Developer</h2>

            <p className="hero-description">
              PHP/Laravel Developer with 6+ years of experience
              building scalable web applications, REST APIs,
              multi-client platforms and e-commerce solutions.
              Passionate about backend development, performance
              optimization and solving complex problems.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Work ↗
              </a>

              <a href="#contact" className="secondary-button">
                Let's Connect
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/ravihello"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <span>•</span>

              <a href="mailto:ravi2704gupta@gmail.com">
                Email Me
              </a>
            </div>

          </div>

          {/* DEVELOPER PROFILE CARD */}
          <div className="hero-visual">

            <div className="glow-circle"></div>

            <div className="developer-card">

              <div className="card-top">
                <span>DEVELOPER PROFILE</span>
                <span className="online-dot"></span>
              </div>

              <div className="profile-avatar">
                RG
              </div>

              <h3>Ravi Gupta</h3>

              <p className="profile-role">
                PHP / Laravel Developer
              </p>

              <div className="card-divider"></div>

              <div className="tech-stack">
                <span>PHP</span>
                <span>Laravel</span>
                <span>MySQL</span>
                <span>MongoDB</span>
                <span>React</span>
                <span>JavaScript</span>
              </div>

              <div className="card-footer">
                <span>Building digital experiences</span>
                <span>✦</span>
              </div>

            </div>

            <div className="floating-badge badge-one">
              ⚡ Backend Development
            </div>

            <div className="floating-badge badge-two">
              ✦ Problem Solver
            </div>

          </div>

        </section>


        {/* ABOUT SECTION */}
        <section className="about-section" id="about">

          <div className="section-heading">
            <span>GET TO KNOW ME</span>
            <h2>About <span>Me</span></h2>
            <p>My professional journey and expertise.</p>
          </div>

          <div className="about-content">

            <div className="about-left">

              <h3>
                Building scalable applications
                <span> with PHP & Laravel.</span>
              </h3>

              <p>
                I'm Ravi Gupta, a Sr. PHP Developer with 6+
                years of experience building web applications,
                REST APIs, multi-client platforms and
                e-commerce workflows.
              </p>

              <p>
                My core expertise includes Laravel backend
                development, MySQL and MongoDB, API and
                database performance optimization,
                authentication and payment gateway
                integrations including PayPal, CCAvenue
                and Razorpay.
              </p>

              <p>
                I also have hands-on experience with Laravel
                StreamedResponse, frontend ReadableStream,
                Vue.js, Nuxt.js and GrapesJS-based
                site builder development.
              </p>

              <p>
                I enjoy solving complex technical challenges
                and building reliable applications that
                deliver a better user experience.
              </p>

              <div className="about-details">

                <div>
                  <span>Location</span>
                  <strong>Noida, Uttar Pradesh</strong>
                </div>

                <div>
                  <span>Experience</span>
                  <strong>6+ Years</strong>
                </div>

                <div>
                  <span>Specialization</span>
                  <strong>PHP / Laravel</strong>
                </div>

                <div>
                  <span>Education</span>
                  <strong>B.Tech Computer Science</strong>
                </div>

              </div>

            </div>

            <div className="about-right">

              <div className="info-card">
                <span>01</span>
                <div>
                  <h4>Backend Development</h4>
                  <p>PHP, Laravel, REST APIs, Authentication and RBAC</p>
                </div>
              </div>

              <div className="info-card">
                <span>02</span>
                <div>
                  <h4>E-commerce & Payments</h4>
                  <p>Cart, Buy Now, Checkout, PayPal, Razorpay and CCAvenue</p>
                </div>
              </div>

              <div className="info-card">
                <span>03</span>
                <div>
                  <h4>Database & Optimization</h4>
                  <p>MySQL, MongoDB, MS SQL Server and performance optimization</p>
                </div>
              </div>

              <div className="info-card">
                <span>04</span>
                <div>
                  <h4>Streaming & Frontend</h4>
                  <p>StreamedResponse, ReadableStream, Vue.js and Nuxt.js</p>
                </div>
              </div>

            </div>

          </div>

        </section>


        {/* TECHNICAL SKILLS */}
        <section className="skills-section" id="skills">

          <div className="section-heading">
            <span>MY EXPERTISE</span>
            <h2>Technical <span>Skills</span></h2>
            <p>Technologies and tools I have worked with.</p>
          </div>

          <div className="skills-grid">

            <div className="skill-card">
              <div className="skill-icon">PHP</div>
              <h3>Backend Development</h3>
              <p>
                PHP, Laravel, REST APIs, OOP, Authentication,
                RBAC, StreamedResponse
              </p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">DB</div>
              <h3>Databases</h3>
              <p>MySQL, MongoDB, MS SQL Server</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">JS</div>
              <h3>Frontend Development</h3>
              <p>
                JavaScript, Vue.js, Nuxt.js,
                React (Intermediate), HTML5, CSS3,
                Bootstrap, Livewire
              </p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">PAY</div>
              <h3>E-commerce & Payments</h3>
              <p>
                Cart, Buy Now, Checkout, Guest Cart,
                PayPal, CCAvenue, Razorpay
              </p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">DEV</div>
              <h3>Tools & Platform</h3>
              <p>
                GrapesJS, Cron Jobs, API Debugging,
                LocalStorage, Git, GitHub
              </p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">API</div>
              <h3>Performance & Integration</h3>
              <p>
                ReadableStream, API Optimization,
                Database Optimization,
                Third-party Integrations
              </p>
            </div>

          </div>

        </section>


        {/* PROFESSIONAL EXPERIENCE */}
        <section className="experience-section" id="experience">

          <div className="section-heading">
            <span>CAREER JOURNEY</span>
            <h2>Work <span>Experience</span></h2>
            <p>My professional experience and contributions.</p>
          </div>

          <div className="experience-list">

            {/* FREELANCE 2026 */}
            <article className="experience-card">

              <div className="experience-date">
                MAR 2026 — PRESENT
              </div>

              <div className="experience-info">

                <h3>Independent Software Developer</h3>
                <span className="company-name">Freelance</span>

                <ul>
                  <li>
                    Contributed to three e-commerce projects,
                    including furniture and jewellery stores.
                  </li>
                  <li>
                    Integrated PayPal, CCAvenue and Razorpay
                    payment gateways.
                  </li>
                  <li>
                    Implemented Add to Cart, Buy Now and
                    checkout workflows.
                  </li>
                  <li>
                    Developed guest cart storage using
                    LocalStorage and database-backed carts
                    for authenticated users.
                  </li>
                  <li>
                    Worked on cart continuity during
                    guest-to-login transitions.
                  </li>
                </ul>

                <div className="experience-tags">
                  <span>Laravel</span>
                  <span>PHP</span>
                  <span>PayPal</span>
                  <span>Razorpay</span>
                  <span>CCAvenue</span>
                </div>

              </div>
            </article>


            {/* PODUP */}
            <article className="experience-card">

              <div className="experience-date">
                DEC 2024 — FEB 2026
              </div>

              <div className="experience-info">

                <h3>Laravel Developer</h3>
                <span className="company-name">PodUp Inc.</span>

                <ul>
                  <li>
                    Developed a custom GrapesJS-based site
                    builder with reusable page components
                    and multi-client support.
                  </li>
                  <li>
                    Built a Vue.js form builder with
                    conditional logic and API integrations.
                  </li>
                  <li>
                    Worked on Nuxt.js client websites and
                    performance/SEO improvements.
                  </li>
                  <li>
                    Implemented Laravel StreamedResponse
                    and frontend ReadableStream handling
                    for progressive data delivery.
                  </li>
                  <li>
                    Improved analytics dashboard performance,
                    resolved production issues and refactored
                    legacy application code.
                  </li>
                </ul>

                <div className="achievement">
                  <strong>Key Achievement:</strong>
                  Reduced API response time by up to 60%.
                </div>

                <div className="experience-tags">
                  <span>Laravel</span>
                  <span>GrapesJS</span>
                  <span>Vue.js</span>
                  <span>Nuxt.js</span>
                  <span>ReadableStream</span>
                </div>

              </div>
            </article>


            {/* FREELANCE 2024 */}
            <article className="experience-card">

              <div className="experience-date">
                MAR 2024 — NOV 2024
              </div>

              <div className="experience-info">

                <h3>Independent Software Developer</h3>
                <span className="company-name">Freelance</span>

                <ul>
                  <li>
                    Developed Laravel APIs for data-heavy
                    applications.
                  </li>
                  <li>
                    Implemented streaming responses for
                    large datasets.
                  </li>
                  <li>
                    Built Vue.js/Nuxt.js application features.
                  </li>
                  <li>
                    Created dynamic UI components using Livewire
                    and improved application performance.
                  </li>
                </ul>

                <div className="experience-tags">
                  <span>Laravel</span>
                  <span>PHP</span>
                  <span>Vue.js</span>
                  <span>Nuxt.js</span>
                  <span>Livewire</span>
                </div>

              </div>
            </article>


            {/* SCALEUPALLY */}
            <article className="experience-card">

              <div className="experience-date">
                JUL 2023 — FEB 2024
              </div>

              <div className="experience-info">

                <h3>Senior Software Engineer</h3>
                <span className="company-name">Scaleupally Pvt. Ltd.</span>

                <ul>
                  <li>
                    Developed Laravel applications with
                    authentication and role-based access control.
                  </li>
                  <li>
                    Built REST APIs and optimized database queries.
                  </li>
                  <li>
                    Implemented PDF and Excel export functionality.
                  </li>
                </ul>

                <div className="experience-tags">
                  <span>PHP</span>
                  <span>Laravel</span>
                  <span>MySQL</span>
                  <span>REST APIs</span>
                </div>

              </div>
            </article>


            {/* NIMBUSPOST */}
            <article className="experience-card">

              <div className="experience-date">
                AUG 2021 — JUN 2023
              </div>

              <div className="experience-info">

                <h3>Laravel Developer</h3>
                <span className="company-name">NimbusPost Pvt. Ltd.</span>

                <ul>
                  <li>
                    Worked on logistics and analytics platforms
                    using Laravel and MongoDB.
                  </li>
                  <li>
                    Worked on Shopify integration and related
                    platform workflows.
                  </li>
                  <li>
                    Developed dashboards, reporting features
                    and scheduled cron tasks.
                  </li>
                </ul>

                <div className="experience-tags">
                  <span>Laravel</span>
                  <span>MongoDB</span>
                  <span>Shopify</span>
                  <span>Cron Jobs</span>
                </div>

              </div>
            </article>


            {/* MARGDARSHAK */}
            <article className="experience-card">

              <div className="experience-date">
                JUN 2019 — AUG 2021
              </div>

              <div className="experience-info">

                <h3>PHP Developer</h3>
                <span className="company-name">Margdarshak</span>

                <ul>
                  <li>
                    Developed education platforms using
                    Laravel and MySQL.
                  </li>
                  <li>
                    Implemented authentication, dynamic
                    modules and online testing features.
                  </li>
                  <li>
                    Worked on CMS functionality and
                    application development.
                  </li>
                </ul>

                <div className="experience-tags">
                  <span>PHP</span>
                  <span>Laravel</span>
                  <span>MySQL</span>
                  <span>CMS</span>
                </div>

              </div>
            </article>

          </div>

        </section>


        {/* SELECTED PROJECTS */}
        <section className="projects-section" id="projects">

          <div className="section-heading">
            <span>WHAT I HAVE BUILT</span>
            <h2>Selected <span>Projects</span></h2>
            <p>My development work and technical contributions.</p>
          </div>

          <div className="projects-grid">

            <article className="project-card">

              <div className="project-number">
                01 / E-COMMERCE
              </div>

              <div className="project-symbol">🛍️</div>

              <h3>E-commerce Platforms</h3>

              <p>
                Furniture and jewellery e-commerce workflows
                with cart management, Buy Now, checkout and
                online payment gateway integrations.
              </p>

              <div className="experience-tags">
                <span>Laravel</span>
                <span>PHP</span>
                <span>PayPal</span>
                <span>Razorpay</span>
                <span>CCAvenue</span>
              </div>

            </article>


            <article className="project-card">

              <div className="project-number">
                02 / SITE BUILDER
              </div>

              <div className="project-symbol">🧩</div>

              <h3>Multi-client Site Builder</h3>

              <p>
                GrapesJS-based page builder with reusable
                components and multi-client website support.
              </p>

              <div className="experience-tags">
                <span>Laravel</span>
                <span>GrapesJS</span>
                <span>Vue.js</span>
                <span>Nuxt.js</span>
              </div>

            </article>


            <article className="project-card">

              <div className="project-number">
                03 / PERFORMANCE
              </div>

              <div className="project-symbol">⚡</div>

              <h3>Streaming-based Data Delivery</h3>

              <p>
                Progressive delivery of large responses using
                Laravel StreamedResponse and frontend
                ReadableStream handling.
              </p>

              <div className="experience-tags">
                <span>Laravel</span>
                <span>PHP</span>
                <span>ReadableStream</span>
                <span>JavaScript</span>
              </div>

            </article>


            <article className="project-card">

              <div className="project-number">
                04 / INTEGRATION
              </div>

              <div className="project-symbol">🔗</div>

              <h3>Shopify Integration System</h3>

              <p>
                Laravel-based integration work for logistics
                and analytics platform workflows.
              </p>

              <div className="experience-tags">
                <span>Laravel</span>
                <span>PHP</span>
                <span>MongoDB</span>
                <span>Shopify</span>
              </div>

            </article>

          </div>

        </section>


        {/* EDUCATION */}
        <section className="education-section" id="education">

          <div className="section-heading">
            <span>ACADEMIC BACKGROUND</span>
            <h2>My <span>Education</span></h2>
          </div>

          <div className="education-card">

            <div className="education-icon">🎓</div>

            <div>
              <h3>Bachelor of Technology (B.Tech)</h3>
              <p>Computer Science</p>

              <strong>
                Aligarh College of Engineering & Technology
              </strong>

              <span>2015</span>
            </div>

          </div>

        </section>


        {/* CONTACT */}
        <section className="contact-section" id="contact">

          <div className="section-heading">
            <span>LET'S CONNECT</span>

            <h2>
              Let's Build Something <span>Great</span>
            </h2>

            <p>
              Have an opportunity or project in mind?
              Let's talk.
            </p>
          </div>

          <div className="contact-cards">

            <a
              href="mailto:ravi2704gupta@gmail.com"
              className="contact-card"
            >
              <span>✉</span>
              <div>
                <small>Email Me</small>
                <strong>ravi2704gupta@gmail.com</strong>
              </div>
            </a>

            <a
              href="tel:+919761142946"
              className="contact-card"
            >
              <span>☎</span>
              <div>
                <small>Call Me</small>
                <strong>+91 9761142946</strong>
              </div>
            </a>

            <a
              href="https://github.com/ravihello"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span>⌘</span>
              <div>
                <small>GitHub</small>
                <strong>github.com/ravihello</strong>
              </div>
            </a>

          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer className="footer">

        <p>
          © {new Date().getFullYear()} Ravi Gupta.
          All rights reserved.
        </p>

        <a href="#home">
          Back to top ↑
        </a>

      </footer>

    </div>
  )
}

export default App
