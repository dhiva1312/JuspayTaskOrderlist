import '../orderList/cssStyles/NotificationField.css';
export default function ActivityField({ image, text, time }) {
  return (
    <div className="notification-field">
      <img src={image} alt="avatar" className="notification-image" />
      <div className="notification-content">
        <div className="notification-text">{text}</div>
        <div className="notification-time">{time}</div>
      </div>
    </div>
  );
}
