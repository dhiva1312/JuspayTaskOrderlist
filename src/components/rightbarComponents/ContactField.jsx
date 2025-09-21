import '../rightbarComponents/Contactfield.css';

export default function ContactField({ image, name }) {
  return (
    <div className="contact-field">
      <div className="contact-image">
        <img src={image} alt={name} />
      </div>
      <div className="contact-name">{name}</div>
    </div>
  );
}
