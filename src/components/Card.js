import React from "react";
import "./Card.css";

const Card = ({ children }) => {
  console.log(children);
  return (
    <div className="Card">
      <div
        className="Card-wallpapers"
        style={{ backgroundColor: children.wallpaper }}
      ></div>
      <div className="Card-block">
        <img src={children.profilePic} alt="images" />
        <span style={{ fontWeight: 900 }}>{children.username}</span>
        <span>{children.id}</span>
        <p style={{ fontSize: 13 }}>Abount</p>
        <p>{children.userInfo}</p>
      
        <p>
          <a href={children.profilePic}>https://cdn.discordapp.com</a>
        </p>
      </div>
    </div>
  );
};
export default Card;
