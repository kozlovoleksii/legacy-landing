import "./Services.css"

export const Services = () => {
  return (
    <section className="page__section services">
      <div className="services__container">
        <div className="services__body">
          <div className="services__header header-block">
            <div className="header-block__label">What we do</div>
            <h2 className="header-block__title">Our Services</h2>
          </div>
          <div className="services__items">
            <article className="services__item item-services">
              <div className="item-services__icon">
                <img src="/img/services/icons/01.svg" alt="" />
              </div>
              <h4 className="item-services__title">Online Marketing</h4>
              <div className="item-services__text text">
                The internet has transformed business marketing. It is the heart
                of our company.
              </div>
            </article>
            <article className="services__item item-services">
              <div className="item-services__icon">
                <img src="/img/services/icons/02.svg" alt="" />
              </div>
              <h4 className="item-services__title">Web Development</h4>
              <div className="item-services__text text">
                Web development is the work involved in developing a Web site
                for the Internet.
              </div>
            </article>
            <article className="services__item item-services">
              <div className="item-services__icon">
                <img src="/img/services/icons/03.svg" alt="" />
              </div>
              <h4 className="item-services__title">Website Design</h4>
              <div className="item-services__text text">
                Web design refers to the design of websites that are displayed
                on the internet.
              </div>
            </article>
            <article className="services__item item-services">
              <div className="item-services__icon">
                <img src="/img/services/icons/04.svg" alt="" />
              </div>
              <h4 className="item-services__title">SEO Optimization</h4>
              <div className="item-services__text text">
                SEO is the process of improving the quality and quantity of
                website traffic to a website.
              </div>
            </article>
          </div>
        </div>
        <div className="services__media">
          <div className="services__image">
            <img src="/img/services/image.jpg" alt="image" />
          </div>
          <div className="services__phone">
            <img src="/img/services/phone.png" alt="phone" />
          </div>
        </div>
      </div>
    </section>
  );
};
