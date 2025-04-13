import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-content">
        <p>© 2025 Doctor Reservation System. All Rights Reserved.</p>
        <p>
          <a href="#privacy-policy">Privacy Policy</a> |{" "}
          <a href="#terms-of-service">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
