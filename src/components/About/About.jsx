import "./About.css"

export const About = () => {
  return (
    <section className="page__section about">
            <div className="about__container">
              <div className="about__body">
                <div className="about__header header-block">
                  <div className="header-block__label">Who we are</div>
                  <h2 className="header-block__title">About Agency</h2>
                </div>
                <div className="about__text text">
                  <p>
                    Our company philosophy is to create the kind of website that
                    most business want: easy to find, stylish and applealing,
                    quick loading, mobile responsive and easy to buy from.
                  </p>
                  <p>
                    Trained as industrial designers, we’ve a deep rooted belief
                    in rational function and sustainable aesthetics. Our
                    methodical approach is focused on revealing the essence of
                    each design challenge to allow us to create holistic and
                    durable solutions.
                  </p>
                </div>
              </div>
              <div className="about__image">
                <img src="/img/about/image.jpg" alt="image" />
              </div>
            </div>
          </section>
  )
}
