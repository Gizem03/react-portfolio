import "./Components.css";

function Contact() {
  return (
    <section className="page-section contact" id="contact">
      <h2>Contact Me</h2>
      <ul className="contact-menu-list page-section-content">
        <li>
          <a href="https://twitter.com/" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/Gizem03" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <i className="fa-solid fa-square-envelope"></i>
        </li>
        <li>
          <i className="fa-solid fa-phone"></i>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
