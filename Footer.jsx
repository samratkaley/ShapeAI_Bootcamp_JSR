import React from "react";

function Footer() {
  var currDate = new Date().getFullYear();
  return (
    <footer>
      <p>Copyrite @ {currDate}</p>
    </footer>
  );
}
export default Footer;
