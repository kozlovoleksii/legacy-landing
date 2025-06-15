import "./MainSection.css"

export const MainSection = () => {
  return (
    <section className="page__section main">
      <div className="main__container">
        <div className="main__body">
          <div className="main__header header-block">
            <div className="header-block__label">We’re Creative</div>
            <h1 className="header-block__title">Digital Agency</h1>
          </div>
          <div className="main__text text">
            <p>
              We pride ourselves in delivering world class outputs to all
              our customers.
            </p>
          </div>
          <a href="#contacts" className="main__button button">
            Get Started
          </a>
        </div>
        <div className="main__image">
          <img
            className="main__picture"
            src="/img/main/image.jpg"
            alt="Image"
          />
        </div>
      </div>
    </section>
  );
};
