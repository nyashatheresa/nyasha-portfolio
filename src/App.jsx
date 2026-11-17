import './App.css'

function App() {
  return (
    <div className="portfolio">

      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#" className="logo">NM.</a>

        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <main>
        <section className="hero">
          <p className="eyebrow">WEB DEVELOPER · DIGITAL CREATIVE</p>

          <h1>
            I build digital experiences
            <span> that do something.</span>
          </h1>

          <div className="heroBottom">
            <p className="intro">
              I'm <strong>Nyasha Mpofu</strong>, a Zimbabwe-based web developer
              building practical digital products for businesses,
              organisations and ideas worth growing.
            </p>

            <a href="#work" className="primaryButton">
              View my work ↓
            </a>
          </div>

          <div className="currentlyBuilding">
            <span className="statusDot"></span>
            Currently building — Vheneka Initiative · Launching Jan 2027
          </div>
        </section>

        {/* WORK */}
        <section className="work" id="work">
  <div className="sectionHeader">
    <p>SELECTED WORK</p>
    <p>2026 — 2027</p>
  </div>

  {/* PROJECT 01 */}
  <article className="project">
    <div className="projectTop">
      <p className="projectNumber">01</p>

      <div className="projectInfo">
        <p className="projectType">BUSINESS SUPPORT PLATFORM · 2026</p>
        <h2>GrowthWise SME</h2>

        <p className="projectDescription">
          A digital platform created to help Zimbabwean SMEs assess
          their businesses and make better decisions across finance,
          compliance, marketing and growth.
        </p>

        <div className="tags">
          <span>Product Design</span>
          <span>Web Development</span>
          <span>Business Strategy</span>
        </div>
        <a
  href="https://growthwise-biz-boost.lovable.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="projectLink"
>
  VIEW LIVE PROJECT ↗
</a>
      </div>
    </div>

    <div className="projectImage">
      <img
        src="/growthwise.png"
        alt="GrowthWise SME business support platform"
      />
    </div>
  </article>

  {/* PROJECT 02 */}
  <article className="project">
    <div className="projectTop">
      <p className="projectNumber">02</p>

      <div className="projectInfo">
        <p className="projectType">INSTITUTIONAL PLATFORM · 2026</p>
        <h2>HIPH Alumni Platform</h2>

        <p className="projectDescription">
          An alumni platform developed for the Harare Institute of
          Public Health, creating a central space for graduate profiles,
          events, opportunities and professional connection.
        </p>

        <div className="tags">
          <span>Web Development</span>
          <span>UI/UX</span>
          <span>System Design</span>
        </div>
        <a
  href="https://hiph-alumni-network.onrender.com/index.html"
  target="_blank"
  rel="noopener noreferrer"
  className="projectLink"
>
  VIEW LIVE PROJECT ↗
</a>
      </div>
    </div>

    <div className="projectImage">
      <img
        src="/hiph-alumni.png"
        alt="HIPH Alumni Platform"
      />
    </div>
  </article>

  {/* PROJECT 03 */}
  <article className="project">
    <div className="projectTop">
      <p className="projectNumber">03</p>

      <div className="projectInfo">
        <p className="projectType">SECURITY SOLUTIONS WEBSITE · 2026</p>
        <h2>ZimSecure Security</h2>

        <p className="projectDescription">
          A business website developed for a security solutions
          company, creating a professional digital presence to
          showcase its services and connect with potential clients.
        </p>

        <div className="tags">
          <span>Web Development</span>
          <span>Business Website</span>
          <span>UI/UX</span>
        </div>

        <a
          href="https://zimsecuresecurity.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="projectLink"
        >
          VIEW LIVE PROJECT ↗
        </a>
      </div>
    </div>

    <div className="projectImage">
      <img
        src="/zimsecure.png"
        alt="ZimSecure Security website"
      />
    </div>
  </article>

  {/* PROJECT 04 */}
  <article className="project">
    <div className="projectTop">
      <p className="projectNumber">04</p>

      <div className="projectInfo">
        <p className="projectType">DESIGN & CONSTRUCTION WEBSITE · 2026</p>
        <h2>IMBA Design & Build</h2>

        <p className="projectDescription">
          A digital platform developed for IMBA Design & Build,
          presenting the brand and its services through a
          professional online presence designed to engage
          prospective clients.
        </p>

        <div className="tags">
          <span>Web Development</span>
          <span>UI/UX</span>
          <span>Brand Presentation</span>
        </div>

        <a
          href="https://imba-website-six.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="projectLink"
        >
          VIEW LIVE PROJECT ↗
        </a>
      </div>
    </div>

    <div className="projectImage">
      <img
        src="/imba.png"
        alt="IMBA Design and Build website"
      />
    </div>
  </article>

 {/* PROJECT 05 */}
  <article className="project">
    <div className="projectTop">
      <p className="projectNumber">03</p>

      <div className="projectInfo">
        <p className="projectType">
          NGO WEBSITE · LAUNCHING JANUARY 2027
        </p>

        <h2>Vheneka Initiative</h2>

        <p className="projectDescription">
          Designing and developing the digital home of Vheneka
          Initiative, an organisation focused on empowering young people
          and communities through access, support and connection.
        </p>

        <div className="tags">
          <span>Web Development</span>
          <span>UI/UX</span>
          <span>Digital Strategy</span>
        </div>

        <p className="developmentStatus">● IN DEVELOPMENT</p>
      </div>
    </div>

    <div className="projectImage">
      <img
        src="/vheneka.png"
        alt="Vheneka Initiative website"
      />
    </div>
  </article>
</section>

        {/* ABOUT */}
        <section className="about" id="about">
          <p className="sectionLabel">ABOUT ME</p>

          <h2>
            I'm interested in the space where
            <span> technology meets business.</span>
          </h2>

          <div className="aboutGrid">
            <p>
              I'm a web developer and Finance, Digital Applications & Law
              student based in Zimbabwe. I enjoy turning ideas and
              organisational problems into practical digital products.
            </p>

            <p>
              My work ranges from business platforms and institutional
              systems to websites and digital design. I care about building
              technology that isn't just visually appealing, but genuinely
              useful to the people using it.
            </p>
          </div>
        </section>
{/* CAPABILITIES */}
<section className="capabilities">
  <div className="sectionHeader lightHeader">
    <p>CAPABILITIES</p>
    <p>WHAT I WORK WITH</p>
  </div>

  <div className="capabilityGrid">
    <div className="capability">
      <span>01</span>
      <h3>Development</h3>
      <p>HTML · CSS · JavaScript · React · Responsive Web Development</p>
    </div>

    <div className="capability">
      <span>02</span>
      <h3>Tools</h3>
      <p>VS Code · GitHub · Node.js · Database Systems</p>
    </div>

    <div className="capability">
      <span>03</span>
      <h3>Design</h3>
      <p>UI/UX · Web Design · Canva · Graphic Design</p>
    </div>

    <div className="capability">
      <span>04</span>
      <h3>Business</h3>
      <p>Business Research · Finance · Digital Applications · Project Research</p>
    </div>
  </div>
</section>

        {/* CONTACT */}
        <section className="contact" id="contact">
          <p className="sectionLabel">LET'S WORK TOGETHER</p>

          <h2>
            Have something
            <br />
            worth building?
          </h2>

          <div className="contactLinks">
  <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=mpofunyasha2005@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="contactButton"
>
  EMAIL ME ↗
</a>

  <a
    href="https://www.linkedin.com/in/nyasha-mpofu-0a12a7335"
    target="_blank"
    rel="noopener noreferrer"
    className="contactButton"
  >
    LINKEDIN ↗
  </a>
</div>
        </section>
      </main>

      <footer>
        <p>© 2026 Nyasha Mpofu</p>
        <p>Zimbabwe</p>
      </footer>

    </div>
  )
}

export default App