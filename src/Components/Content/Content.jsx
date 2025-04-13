import "./Content.css";

const Content = () => {
  return (
    <div className="Content">
      <h1>Welcome to the Doctor Reservation System</h1>
      <p>
        Your health is our priority. Book an appointment with our experienced
        doctors and get the care you deserve.
      </p>
      <p>
        We offer a wide range of medical services to ensure your well-being.
        Schedule your visit today and experience quality healthcare.
      </p>
      <a href="#book-appointment" className="btn">
        Book an Appointment
      </a>
    </div>
  );
};

export default Content;
