import React from "react";
import "./gallary.css";
import image1 from "../../assets/GallaryImg/1848390-gulab-jamun-recipe.png";
import image2 from "../../assets/GallaryImg/Allo-Tikki-Burger.png";
import image3 from "../../assets/GallaryImg/Dabeli.png";
import image4 from "../../assets/GallaryImg/Dhaba-Style-Aloo-Paratha-feature.png";
import image5 from "../../assets/GallaryImg/Gobhi-Manchurian.png";
import image6 from "../../assets/GallaryImg/IMG_6600.png";
import image7 from "../../assets/GallaryImg/IMG_6603-1.png";
import image8 from "../../assets/GallaryImg/IMG_6605-e1687626700389.png";
import image9 from "../../assets/GallaryImg/IMG_6606.png";
import image10 from "../../assets/GallaryImg/IMG_6612.png";
import image11 from "../../assets/GallaryImg/IMG_6617.png";
import image12 from "../../assets/GallaryImg/IMG_6619-1.png";
import image13 from "../../assets/GallaryImg/IMG_6619.png";
import image14 from "../../assets/GallaryImg/IMG_6624.png";
import image15 from "../../assets/GallaryImg/IMG_6633.png";
import image16 from "../../assets/GallaryImg/IMG_6639.png";
import image17 from "../../assets/GallaryImg/Katori-Chaat.png";
import image18 from "../../assets/GallaryImg/Paneer-65.png";
import image19 from "../../assets/GallaryImg/Paneer-Tikka-Roll.png";
import image20 from "../../assets/GallaryImg/Pav-Bhaji.png";
import image21 from "../../assets/GallaryImg/Raita.png";
import image22 from "../../assets/GallaryImg/Shahi-Paneer-4.png";
import image23 from "../../assets/GallaryImg/Veg-Kathi-Roll.png";
// import image24 from "../../assets/GallaryImg/allo-tikki-chana-1.png";
// import image25 from "../../assets/GallaryImg/allo-tikki-chana.png";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
function Gallary() {
  return (
    <div class="image-grid">
      <div class="image">
        <img src={image1} alt="gallery" />
      </div>
      <div class="image">
        <img src={image2} alt="gallery" />
      </div>
      <div class="image">
        <img src={image3} alt="gallery" />
      </div>
      <div class="image">
        <img src={image4} alt="gallery" />
      </div>
      <div class="image">
        <img src={image5} alt="gallery" />
      </div>
      <div class="image">
        <img src={image6} alt="gallery" />
      </div>
      <div class="image">
        <img src={image7} alt="gallery" />
      </div>
      <div class="image">
        <img src={image8} alt="gallery" />
      </div>
      <div class="image">
        <img src={image9} alt="gallery" />
      </div>
      <div class="image">
        <img src={image10} alt="gallery" />
      </div>
      <div class="image">
        <img src={image11} alt="gallery" />
      </div>
      <div class="image">
        <img src={image12} alt="gallery" />
      </div>
      <div class="image">
        <img src={image13} alt="gallery" />
      </div>
      <div class="image">
        <img src={image14} alt="gallery" />
      </div>
      <div class="image">
        <img src={image15} alt="gallery" />
      </div>
      <div class="image">
        <img src={image16} alt="gallery" />
      </div>
      <div class="image">
        <img src={image17} alt="gallery" />
      </div>
      <div class="image">
        <img src={image18} alt="gallery" />
      </div>
      <div class="image">
        <img src={image19} alt="gallery" />
      </div>
      <div class="image">
        <img src={image20} alt="gallery" />
      </div>
      <div class="image">
        <img src={image21} alt="gallery" />
      </div>
      <div class="image">
        <img src={image22} alt="gallery" />
      </div>
      <div class="image">
        <img src={image23} alt="gallery" />
      </div>
      <ScrollToTopButton />
    </div>
  );
}

export default Gallary;
