import "./Team.css";

export const Team = () => {
  return (
    <section className="page__section team">
      <div className="team__container">
        <div className="team__header header-block header-block_center">
          <div className="header-block__label">Meet the staff</div>
          <h2 className="header-block__title">Our Team</h2>
        </div>
        <div className="team__items">
          <div className="team__item item-team">
            <div className="item-team__image">
              <img src="/img/team/01.jpg" alt="team" />
            </div>
            <div className="item-team__info">
              <div className="item-team__body">
                <div className="item-team__title">Antonita Prasentina</div>
                <div className="item-team__position">Content Writer</div>
              </div>
              <div className="item-team__social social-team">
                <a href="" className="social-team__item">
                  <img src="/img/icons/social/fb.svg" alt="" />
                </a>
                <a href="" className="social-team__item">
                  <img src="/img/icons/social/tw.png" alt="" />
                </a>
                <a href="" className="social-team__item">
                  <img src="/img/icons/social/ins.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="team__item item-team">
            <div className="item-team__image">
              <img src="/img/team/02.jpg" alt="team" />
            </div>
            <div className="item-team__info">
              <div className="item-team__body">
                <div className="item-team__title">Choudri Malhotra</div>
                <div className="item-team__position">UI Designer</div>
              </div>
              <div className="item-team__social social-team">
                <a href="" className="social-team__item">
                  <img src="/img/icons/social/fb.svg" alt="" />
                </a>
                <a href="" className="social-team__item">
                  <img src="/img/icons/social/tw.png" alt="" />
                </a>
                <a href="" className="social-team__item">
                  <img src="/img/icons/social/ins.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="team__item item-team">
            <div className="item-team__image">
              <img src="/img/team/03.jpg" alt="team" />
            </div>
            <div className="item-team__info">
              <div className="item-team__body">
                <div className="item-team__title">Malavika Hegte</div>
                <div className="item-team__position">Digital Marketer</div>
              </div>
              <div className="item-team__social social-team">
                <a href="" className="social-team__item">
                  <img src="/img/icons/social/fb.svg" alt="" />
                </a>
                <a href="" className="social-team__item">
                  <img src="/img/icons/social/tw.png" alt="" />
                </a>
                <a href="" className="social-team__item">
                  <img src="/img/icons/social/ins.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="team__item item-team">
            <div className="item-team__image">
              <img src="/img/team/04.jpg" alt="team" />
            </div>
            <div className="item-team__info">
              <div className="item-team__body">
                <div className="item-team__title">Anirudh Vedha</div>
                <div className="item-team__position">Lead Developer</div>
              </div>
              <div className="item-team__social social-team">
                <a href="" className="social-team__item">
                  <img src="/img/icons/social/fb.svg" alt="" />
                </a>
                <a href="" className="social-team__item">
                  <img src="/img/icons/social/tw.png" alt="" />
                </a>
                <a href="" className="social-team__item">
                  <img src="/img/icons/social/ins.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
