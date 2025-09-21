import '../orderList/cssStyles/NotificationField.css';

export default function NotificationField({ icon:Icon, text, time }) {
  return (
    <div className="notification-field">
      {/* <img src={image} alt="avatar" className="" />
      <div className="notification-content">
        <div className="notification-text">{text}</div>
        <div className="notification-time">{time}</div>
      </div> */}

      <div className="image-containers">
        <Icon  /> 
      </div>
       <div className="notification-content">
        <div className="notification-text">{text}</div>
        <div className="notification-time">{time}</div>
      </div> 
    </div>
  );
}
