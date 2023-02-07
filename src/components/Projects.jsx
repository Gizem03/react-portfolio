import "./Components.css";

function Projects() {
  return (
    <section class="page-section" id="work">
      <h2>Work</h2>
      <div class="page-section-content" id="work-grid">
        <a
          href="https://gizem03.github.io/shop-grid-landing-page/"
          target="_blank"
          class="project"
          id="furniture"
        >
          <div class="label">
            <div>Furniture Shop</div>
          </div>
        </a>
        <a
          href="https://gizem03.github.io/Reimplementation-of-Jakes-Eatery-Website/"
          target="_blank"
          class="project"
          id="eatery"
        >
          <div class="label">Jake's Eatery</div>
        </a>
        <a
          href="https://gizem03.github.io/horiseon-home-page-refactor/"
          target="_blank"
          class="project"
          id="horiseon"
        >
          <div class="label">Horiseon Landing Page</div>
        </a>
      </div>
    </section>
  );
}

export default Projects;
