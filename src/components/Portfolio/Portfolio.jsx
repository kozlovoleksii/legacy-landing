import "./Portfolio.css";

export const Portfolio = () => {
  return (
    <section className="page__section portfolio">
      <div className="portfolio__container">
        <div className="portfolio__header header-block header-block_center">
          <div className="header-block__label">Our works</div>
          <h2 className="header-block__title">Portfolio</h2>
        </div>
        <div className="portfolio__items">
          <a href="" className="portfolio__item">
            <img src="/img/portfolio/01.jpg" alt="portfolio" />
            <div className="portfolio__overlay">
              <span>View Project</span>
            </div>
          </a>
          <a href="" className="portfolio__item">
            <img src="/img/portfolio/02.jpg" alt="portfolio" />
            <div className="portfolio__overlay">
              <span>View Project</span>
            </div>
          </a>
          <a href="" className="portfolio__item">
            <img src="/img/portfolio/03.jpg" alt="portfolio" />
            <div className="portfolio__overlay">
              <span>View Project</span>
            </div>
          </a>
          <a href="" className="portfolio__item">
            <img src="/img/portfolio/04.jpg" alt="portfolio" />
            <div className="portfolio__overlay">
              <span>View Project</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
