import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <nav className="navigation">
        <ul className="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#appointments">Appointments</a></li>
          <li><a href="#about">About</a></li> {/* Fixed closing tag */}
          <li><a href="#contact">Contact</a></li> {/* Fixed closing tag */}
        </ul>
      </nav>
    </div>
  )
}

export default Navigation;
