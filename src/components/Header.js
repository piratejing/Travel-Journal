// import React from "react";
// import "../blocks/Header.css";
// import globe from "../images/globe.png";

// export default function Header() {
//   return (
//     <div className="header-container">
//       <img className="header-image" src={globe}></img>
//       <h2 className="header-title">my travel journal.</h2>
//     </div>
//   );
// }

import React from "react";
import "../blocks/Header.css";
import globe from "../images/globe.png";

export default function Header() {
  return (
    <div className="header-container">
      <img className="header-image" src={globe} alt="globe"></img>
      <h2 className="header-title">my travel journal.</h2>
    </div>
  );
}
