import "./Footer.css"

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__body">
          <div className="footer__copy">© Deep Dash {year}</div>
          <a href="#up" className="footer__up"></a>
          <a href="" className="test"></a>
        </div>
      </div>
    </footer>
  );
};
