import React from "react";

import '../../components/orderList/cssStyles/Rightlayout.css';
import NotificationField from "../rightbarComponents/NotificationField";
import { PiBugBeetle } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import { PiBroadcastLight } from "react-icons/pi";
import ActivityField from "../rightbarComponents/Activityfield";
import image1 from '../../assets/Activities/3D05.png';
import image2 from '../../assets/Activities/Female05.png';
import image3 from '../../assets/Activities/3D08.png';
import image4 from '../../assets/Activities/Male07.png';
import image5 from '../../assets/Activities/Male11.png';
import ContactField from "../rightbarComponents/ContactField";
import contactImage1 from '../../assets/Contacts/contactImage1.png';
import contactImage2 from '../../assets/Contacts/contactImage2.png';
import contactImage3 from '../../assets/Contacts/contactImage3.png';
import contactImage4 from '../../assets/Contacts/contactImage4.png';
import contactImage5 from '../../assets/Contacts/contactImage5.png';
import contactImage6 from '../../assets/Contacts/contactImage6.png';

const notifications = [
    { icon: PiBugBeetle, text: "You have a bug that needs...", time: "Just now" },
    { icon: AiOutlineUser, text: "New user registered", time: "59 minutes ago" },
    { icon: PiBugBeetle, text: "You have a bug that needs...", time: "12 hours ago" },
    { icon: PiBroadcastLight, text: "Andi Lane subscribed to you", time: "Today, 11:59 AM " },
    //   { icon: MdPersonAdd, text: "New follower: Mike", time: "2 days ago" },
];
const Activities = [
    { image: image1, text: "You have a bug that needs...", time: "Just now" },
    { image: image2, text: "Released a new version", time: "59 minutes ago" },
    { image: image3, text: "Submitted a bug", time: "12 hr ago" },
    { image: image4, text: "Modified A data in page X", time: "Today, 11:59 AM " },
    { image: image5, text: "Deleted a data in Project X", time: "Feb 2, 2023" },
]
const contacts = [
  { image: contactImage1, name: "Natali Craig" },
  { image: contactImage2, name: "Drew Cano" },
  { image: contactImage3, name: "Orlando Diggs" },
  { image: contactImage4, name: "Andi Lane" },
  { image: contactImage5, name: "Kate Morrison" },
  { image: contactImage6, name: "Koray Okumus" },
];
const Rightbar = () => {
    return (
        <div className="rightbar-section">
            <div className="rightbar-frame">
                <div className="NotificationText">Notifications</div>
                {notifications.map((item, index) => (
                    <NotificationField
                        key={index}
                        icon={item.icon}
                        text={item.text}
                        time={item.time}
                    />
                ))}

            </div>
            <div className="rightbar-frame-two">
                <div className="NotificationText">Activities</div>
                
                {Activities.map((item, index) => (
        <ActivityField
          key={index}
          image={item.image}
          text={item.text}
          time={item.time}
        />
      ))}
            </div>
            <div className="rightbar-frame-three">
                 <div className="NotificationText">Contacts</div>
                 {contacts.map((contact, index) => (
        <ContactField
          key={index}
          image={contact.image}
          name={contact.name}
        />
      ))}
            </div>



        </div>
    );
};

export default Rightbar;
