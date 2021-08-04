import React from "react";
import PropTypes from "prop-types";
function Profile({
  name = "Name Here",
  age = "Age Here",
  pro = "Profession Here",
  alrt,
}) {
  const styleObject = {
    textAlign: "center",
    fontSize: "50px",
    background: "blue",
    color: "black",
    paddingTop: "0px",
  };
  return (
    <div style={styleObject}>
      <p>
        Hey there!!! My name is {name}, {age} years old, and i'm a {pro} .
      </p>
      {alrt(name)}
      <div>
        <img src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/131001616_1660421697494180_3962193288488685559_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=JECffWBqOHoAX8smP_c&_nc_ht=scontent.ftun1-2.fna&oh=26405e1d058fbdb429e604ef703ade43&oe=612E1703"
         alt="me"
        />
      </div>
    </div>
  );
}
Profile.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  pro: PropTypes.string,
};
export default Profile;