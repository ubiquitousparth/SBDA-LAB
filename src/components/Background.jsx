import "./Background.css";

import image8 from "../assets/image8.jpg";
import image6 from "../assets/image9.jpg";
import image7 from "../assets/image7.jpg";



const images = [image8, image6, image7];

const Background = ({ heroCount }) => {
  return (
    <div className="background-container">
      
      <img
        src={images[heroCount]}
        className="background"
        alt="background"
      />
     
    </div>
  );
};

export default Background;
