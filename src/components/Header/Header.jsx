import "./Header.css"
export const Header = () => {
  return (
    <header id="up" className="header">
      <div className="header__logo">
        <img src="/img/logo.svg" alt="DEEP" />
      </div>
      <div className="header__social social-header">
        <a href="http://facebook.com/" className="social-header__item">
          <img src="/img/icons/social/fb.svg" alt="facebook" />
        </a>
        <a href="https://x.com/" className="social-header__item">
          <img src="/img/icons/social/tw.png" alt="twitter" />
        </a>
        <a href="https://www.instagram.com/" className="social-header__item">
          <img src="/img/icons/social/ins.svg" alt="instagram" />
        </a>
      </div>
    </header>
  );
};
