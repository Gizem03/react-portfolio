import "./Components.css";

function Home() {
  return (
    <div>
      <section className="hero-banner">
        <div>
          <h2>Gizem Unlu's Portfolio</h2>
        </div>
      </section>
      <section className="page-section" id="about">
        <h2>About Me</h2>
        <div className="page-section-content">
          <div className="avatar"></div>
          <p>
            Hello! I’m Gizem Unlu, a Full Stack Web Developer based in London.
            You can view my projects by clicking the Projects link above!
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
