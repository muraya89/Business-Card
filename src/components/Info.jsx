import "../styles/info.css";
export default function Info() {
  return (
    <div className="info">
      <img src="/profile-pic.png" alt="Susan Muraya" width="100%" />
      <div className="info-details">
        <span className="name">Susan Muraya</span>
        <span className="title">Frontend Developer</span>
        <a
          href="https://muraya-portfolio-production.up.railway.app/"
          className="url"
        >
          muraya-portfolio
        </a>
      </div>
      <div className="button-section">
        <button
          className="email--btn"
          onClick={() => window.open("mailto:susanmuraya89@gmail.com")}
        >
          <img src="/email.svg" alt="email" width="16px" />
          Email
        </button>
        <button
          className="linkedin--btn"
          onClick={() =>
            window.open("https://www.linkedin.com/in/susan-muraya/", "_blank")
          }
        >
          <img src="/linkedin.svg" alt="linkedin" />
          LinkedIn
        </button>
      </div>
    </div>
  );
}
