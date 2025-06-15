import "./Contacts.css";

export const Contacts = () => {
  return (
    <section className="page__section contacts" id="contacts">
      <div className="contacts__container">
        <div className="contacts__body">
          <div className="contacts__header header-block">
            <div className="header-block__label">Keep in touch</div>
            <h2 className="header-block__title">Contact us</h2>
          </div>
          <form action="#" className="contacts__form form">
            <div className="form__line">
              <label htmlFor="i-1" className="form__label">
                Name
              </label>
              <input id="i-1" name="name" type="text" className="form__input" />
            </div>
            <div className="form__line">
              <label htmlFor="i-2" className="form__label">
                Email
              </label>
              <input
                id="i-2"
                name="email"
                type="email"
                required
                className="form__input"
              />
            </div>
            <div className="form__line">
              <label htmlFor="i-3" className="form__label">
                Subject
              </label>
              <input
                id="i-3"
                name="subject"
                type="text"
                className="form__input"
              />
            </div>
            <div className="form__line">
              <label htmlFor="i-4" className="form__label">
                Message
              </label>
              <textarea
                className="form__input"
                name="message"
                id="i-4"
              ></textarea>
            </div>
            <div className="form__button">
              <button type="submit" className="button button_dark">
                Get Started
              </button>
            </div>
          </form>
        </div>
        <div className="contacts__info">
          <div className="info-contacts">
            <div className="info-contacts__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577.9451241461315!2d77.56048977765458!3d12.975953892829926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3df816a2bbc1%3A0x4f715aa1d3a719f9!2s5th%20Cross%20Magadi%20Road!5e0!3m2!1sru!2shu!4v1648547945349!5m2!1sru!2shu"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="info-contacts__content">
              <div className="info-contacts__block">
                <div className="info-contacts__title info-contacts__title_phone">
                  Phone
                </div>
                <a href="tel:+918899556645" className="info-contacts__item">
                  +91 88995 56645
                </a>
                <a href="tel:+918899556645" className="info-contacts__item">
                  +91 88995 56645
                </a>
              </div>
              <div className="info-contacts__block">
                <div className="info-contacts__title info-contacts__title_email">
                  Email
                </div>
                <a href="mailto:www@www.ua" className="info-contacts__item">
                  www@www.ua
                </a>
              </div>
              <div className="info-contacts__block">
                <div className="info-contacts__title info-contacts__title_address">
                  Address
                </div>
                <div className="info-contacts__text">
                  <p>25, 5th Cross Street,</p>
                  <p>Bhommana Halli,</p>
                  <p>Bangalore - 785 956</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
