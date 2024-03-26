import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./menucard.css";
import Samosa from "../../assets/MenuCardImg/samosa-plate-e1687625585145.webp";
import alloPuri from "../../assets/MenuCardImg/ChatpataChats/Allo-Puri.webp";
import Batata from "../../assets/MenuCardImg/ChatpataChats/Batata-Vada.webp";
import Dabeli from "../../assets/MenuCardImg/ChatpataChats/Dabeli.webp";
import DahiBhalla from "../../assets/MenuCardImg/ChatpataChats/DahiBhalla.webp";
import Gobhi from "../../assets/MenuCardImg/ChatpataChats/Gobhi-Cauliflower-65-Fry.webp";
// import IMG_6605 from "../../assets/MenuCardImg/ChatpataChats/IMG_6605-e1687626700389.webp";
import Paneer from "../../assets/MenuCardImg/ChatpataChats/Paneer-Pakora.webp";
import PavBhaji from "../../assets/MenuCardImg/ChatpataChats/Pav-Bhaji.webp";
import allo1 from "../../assets/MenuCardImg/ChatpataChats/allo-tikki-chana-1.jpg";
import amrritsarikulchachana from "../../assets/MenuCardImg/ChatpataChats/amrritsarikulchachana.webp";
import bhelpuri from "../../assets/MenuCardImg/ChatpataChats/bhelpuri (1).png";
import bomby_sandvich from "../../assets/MenuCardImg/ChatpataChats/bomby_sandvich.webp";
import chana from "../../assets/MenuCardImg/ChatpataChats/chana-Samosa.webp";
import chat from "../../assets/MenuCardImg/ChatpataChats/chat-papri.webp";
import dahi from "../../assets/MenuCardImg/ChatpataChats/dahi-puri.webp";
import khasta_kachori from "../../assets/MenuCardImg/ChatpataChats/khasta_kachori.png";
import onion from "../../assets/MenuCardImg/ChatpataChats/onion-bhaaji.jpg";
import pani_puri from "../../assets/MenuCardImg/ChatpataChats/pani_puri.webp";
import pocket from "../../assets/MenuCardImg/ChatpataChats/pocket-kulcha.webp";
import raj_kachori from "../../assets/MenuCardImg/ChatpataChats/raj_kachori.webp";
import vada_pav from "../../assets/MenuCardImg/ChatpataChats/vada_pav.webp";
import vegpakora from "../../assets/MenuCardImg/ChatpataChats/vegpakora.webp";
import bhatura from "../../assets/MenuCardImg/ChatpataChats/chana-bhatura.webp";

// tikke tikke
// import desi from "../../assets/MenuCardImg/TikkeTikke/desi-platters.webp";
import haryali from "../../assets/MenuCardImg/TikkeTikke/haryali-paneer-tikka.webp";
import malai from "../../assets/MenuCardImg/TikkeTikke/malai-paneer-tikka.webp";
import masala from "../../assets/MenuCardImg/TikkeTikke/masala-soya-chaap.webp";
// import mlai from "../../assets/MenuCardImg/TikkeTikke/mlai-soya-chaap.webp";
import paneer_tikka from "../../assets/MenuCardImg/TikkeTikke/paneer-tikka-2.webp";
import veg_kabab from "../../assets/MenuCardImg/TikkeTikke/veg-kabab.webp";
import desi_platters from "../../assets/MenuCardImg/TikkeTikke/desi-platters.webp";

// burger and rolls
import Allo_Tikki_Burger from "../../assets/MenuCardImg/BurgerAndRolls/Allo-Tikki-Burger.webp";
import Chilli_Paneer_Roll from "../../assets/MenuCardImg/BurgerAndRolls/Chilli-Paneer-Roll.webp";
import Noodle_Burger from "../../assets/MenuCardImg/BurgerAndRolls/Noodle-Burger.webp";
import Paneer_Tikka_Roll from "../../assets/MenuCardImg/BurgerAndRolls/Paneer-Tikka-Roll.webp";
import deSoya_Chaap_Roll from "../../assets/MenuCardImg/BurgerAndRolls/Soya-Chaap-Roll.webp";
import Veg_Kathi_Roll from "../../assets/MenuCardImg/BurgerAndRolls/Veg-Kathi-Roll.webp";

//Indo Chinese
import Chowmein from "../../assets/MenuCardImg/IndoChinese/Chowmein.jpg";
import Fried_Rice from "../../assets/MenuCardImg/IndoChinese/Fried-Rice.jpg";
import Gobhi_Manchurian from "../../assets/MenuCardImg/IndoChinese/Gobhi-Manchurian.webp";
import Momos_Steamed_Fried from "../../assets/MenuCardImg/IndoChinese/Momos-Steamed-Fried.webp";
import Spring_Roll from "../../assets/MenuCardImg/IndoChinese/Spring-Roll.webp";
import Tandoori_Momos from "../../assets/MenuCardImg/IndoChinese/Tandoori-Momos.webp";
import Veg_Manchurian from "../../assets/MenuCardImg/IndoChinese/Veg-Manchurian.webp";

// South Indian
import Rasam from "../../assets/MenuCardImg/SouthIndian/Rasamimg1.webp";
import Plain_Dosa from "../../assets/MenuCardImg/SouthIndian/Plain-Dosaimag2.webp";
import Gobhi_Cauliflower_65Fry from "../../assets/MenuCardImg/SouthIndian/Gobhi-Cauliflower-65-Fryimg3.webp";
import Paneer65 from "../../assets/MenuCardImg/SouthIndian/Paneer-65img4.webp";
import Masala_Dosa from "../../assets/MenuCardImg/SouthIndian/Masala-Dosaimg5.webp";
import Mysore_Masala_Dosa from "../../assets/MenuCardImg/SouthIndian/Mysore-Masala-Dosaimg6.webp";
import Pav_Bhaji_Dosa from "../../assets/MenuCardImg/SouthIndian/Pav-Bhaji-Dosaimg7.webp";
import Ghee_Masala_Dosa from "../../assets/MenuCardImg/SouthIndian/Ghee-Masala-Dosa.webp";
import Onion_Rava_Masala_Dosa from "../../assets/MenuCardImg/SouthIndian/Onion-Rava-Masala-Dosa.webp";
import Uttapam from "../../assets/MenuCardImg/SouthIndian/Uttapam.webp";
import Idli_Sambhar from "../../assets/MenuCardImg/SouthIndian/Idli-Sambhar.webp";
import Vada_Sambhar from "../../assets/MenuCardImg/SouthIndian/Vada-Sambhar.webp";
import Paneer_Dosa from "../../assets/MenuCardImg/SouthIndian/Paneer-Dosa.webp";

// Desi Curries
import ShahiPaneer from "../../assets/MenuCardImg/DesiCurries/Shahi-Paneer-4.webp";
import ChilliPaneer from "../../assets/MenuCardImg/DesiCurries/Chilli-Paneer.webp";
import PaneerMakhani from "../../assets/MenuCardImg/DesiCurries/Paneer-Makhani.webp";
import ChanaMasala from "../../assets/MenuCardImg/DesiCurries/Chana-Masala.webp";
import DalMakhani from "../../assets/MenuCardImg/DesiCurries/Dal-Makhani.webp";
import DalTadka from "../../assets/MenuCardImg/DesiCurries/Dal-Tadka.webp";
import AlloGobhi from "../../assets/MenuCardImg/DesiCurries/Allo-Gobhi.webp";
import BainganBhartha from "../../assets/MenuCardImg/DesiCurries/Baingan-Bhartha.webp";
import PaneerTikkaMasala from "../../assets/MenuCardImg/DesiCurries/Paneer-Tikka-Masala.webp";
import PalakPaneer from "../../assets/MenuCardImg/DesiCurries/Palak-Paneer.webp";
import MalaiKofta from "../../assets/MenuCardImg/DesiCurries/Malai-Kofta.webp";
import KaliMirchPaneer from "../../assets/MenuCardImg/DesiCurries/Kali-Mirch-Paneer.webp";
import BhindiMasala from "../../assets/MenuCardImg/DesiCurries/Bhindi-Masala.webp";
import MixVeg from "../../assets/MenuCardImg/DesiCurries/Mix-Veg.webp";
import VegKorma from "../../assets/MenuCardImg/DesiCurries/Veg-Korma.webp";
import Kadhi from "../../assets/MenuCardImg/DesiCurries/Kadhi.webp";
import Rajma from "../../assets/MenuCardImg/DesiCurries/Rajma.webp";
import MutterPaneer from "../../assets/MenuCardImg/DesiCurries/Mutter-Paneer.webp";
import PaneerKadhai from "../../assets/MenuCardImg/DesiCurries/Paneer-Kadhai.webp";
import PaneerPasanda from "../../assets/MenuCardImg/DesiCurries/Paneer-Pasanda.webp";
import SoyaCurry from "../../assets/MenuCardImg/DesiCurries/Soya-Curry.webp";
import PaneerBhurji from "../../assets/MenuCardImg/DesiCurries/Paneer-Bhurji.webp";
import Saag from "../../assets/MenuCardImg/DesiCurries/Saag.webp";

//Prantha and Naan
import AlloPrantha from "../../assets/MenuCardImg/PranthandNaan/Allo-Prantha.jpg";
import PaneerPrantha from "../../assets/MenuCardImg/PranthandNaan/Paneer-Prantha.webp";
import GobhiPrantha from "../../assets/MenuCardImg/PranthandNaan/Gobhi-Prantha.webp";
import MixPrantha from "../../assets/MenuCardImg/PranthandNaan/Mix-Prantha.webp";
import MakkidiRoti from "../../assets/MenuCardImg/PranthandNaan/Makki-di-Roti.webp";
import TawaRoti from "../../assets/MenuCardImg/PranthandNaan/Tawa-Roti.webp";
import RumaliRoti from "../../assets/MenuCardImg/PranthandNaan/Rumali-Roti.webp";
import LachaPrantha from "../../assets/MenuCardImg/PranthandNaan/Lacha-Prantha.webp";
import PaneerNaan from "../../assets/MenuCardImg/PranthandNaan/Paneer-Naan.webp";
import OnionKulcha from "../../assets/MenuCardImg/PranthandNaan/Onion-Kulcha.webp";
import WeDesiSplMawaKulcha from "../../assets/MenuCardImg/PranthandNaan/Mawa-Kulcha.webp";
import TandooriRoti from "../../assets/MenuCardImg/PranthandNaan/Tandoori-Roti.webp";
import PlainNaan from "../../assets/MenuCardImg/PranthandNaan/Plain-Naan.webp";
import GarlicNaan from "../../assets/MenuCardImg/PranthandNaan/Garlic-Naan.webp";
import BreadBasket from "../../assets/MenuCardImg/PranthandNaan/Naan-Garlic-Naan-Roti-Lacha-Prantha.jpg";

// WeDesi Combo
import VegThali from "../../assets/MenuCardImg/WeDesiCombo/Veg-Thali.webp";
import RajmaRice from "../../assets/MenuCardImg/WeDesiCombo/Rajma-Rice.webp";
import KadhiRice from "../../assets/MenuCardImg/WeDesiCombo/Kadhi-Rice.webp";
import MakkidiRotiwithSaag from "../../assets/MenuCardImg/WeDesiCombo/Makki-di-Roti-with-Saag.webp";
import PaneerTikkaRiceBowl from "../../assets/MenuCardImg/WeDesiCombo/Paneer-Tikka-Rice-Bowl.webp";
import TikkaCombo from "../../assets/MenuCardImg/WeDesiCombo/tikka-combo.webp";

// Rice
import PlainRice from "../../assets/MenuCardImg/Rice/PlainRice (1).webp";
import JeeraRice from "../../assets/MenuCardImg/Rice/Jeera-Rice.webp";
import RicePulao from "../../assets/MenuCardImg/Rice/Rice-Pulao.webp";
import VegBriyani from "../../assets/MenuCardImg/Rice/Veg-Briyani.webp";
import WeDesiSplPulao from "../../assets/MenuCardImg/Rice/WeDesi-Spl-Pulao.webp";

// Dessert
import GulabJamun from "../../assets/MenuCardImg/Dessert/gulab-jamun-recipe.webp";
import Rasmalai from "../../assets/MenuCardImg/Dessert/Rasmalai.webp";
import GulabJamunwithIceCream from "../../assets/MenuCardImg/Dessert/Gulab-Jamun-with-ice-cream.webp";
import MoongDalHalwa from "../../assets/MenuCardImg/Dessert/Moong-Dal-Halwa.webp";
import GajarHalwa from "../../assets/MenuCardImg/Dessert/Gajar-Halwa.webp";
import JalebiRabri from "../../assets/MenuCardImg/Dessert/Jalebi-Rabri.webp";
import MalpuaRabri from "../../assets/MenuCardImg/Dessert/Malpua-Rabri.webp";
import ShahiTukdaRabri from "../../assets/MenuCardImg/Dessert/Shahi-Tukda-Rabri.webp";
import GulabJamunwithRabri from "../../assets/MenuCardImg/Dessert/Gulab-Jamun-with-Rabri.webp";
import KulfiFalooda from "../../assets/MenuCardImg/Dessert/Kulfi-Falooda.webp";
import RabriFalooda from "../../assets/MenuCardImg/Dessert/Rabri-Falooda.webp";
import PaanIceCream from "../../assets/MenuCardImg/Dessert/Paan-Ice-Cream.webp";
import MangoIceCream from "../../assets/MenuCardImg/Dessert/Mango-Ice-Cream.webp";
import MatkaKulfi from "../../assets/MenuCardImg/Dessert/Matka-Kulfi.webp";
import KesarPistaKulfi from "../../assets/MenuCardImg/Dessert/Kesar-Pista-Ice-Cream.webp";

//Drinks
import RoyalFalooda from "../../assets/MenuCardImg/Drinks/Royal-Falooda.webp";
import KesarPistaFalooda from "../../assets/MenuCardImg/Drinks/Kesar-Pista-Falooda.webp";
import RasmalaiRabdiFalooda from "../../assets/MenuCardImg/Drinks/Rabri-Falooda.webp";
import MilkBadam from "../../assets/MenuCardImg/Drinks/Milk-Badam.webp";
import DryFruitShake from "../../assets/MenuCardImg/Drinks/Dry-Fruit-Shake.webp";
import FruitPunch from "../../assets/MenuCardImg/Drinks/Fruit-Punch.webp";
import ChikkooShake from "../../assets/MenuCardImg/Drinks/Chikkoo-Shake.webp";
import MangoShake from "../../assets/MenuCardImg/Drinks/Mango-Shake-1.webp";
import MangoLassi from "../../assets/MenuCardImg/Drinks/Mango-Lassi.webp";
import Aampanna from "../../assets/MenuCardImg/Drinks/Aampanna.webp";
import SweetSaltyLassi from "../../assets/MenuCardImg/Drinks/Sweet-Salty-Lassi.webp";
import MasalaChaas from "../../assets/MenuCardImg/Drinks/Masala-Chaas.webp";
import MasalaShikanji from "../../assets/MenuCardImg/Drinks/Masala-Shikanji.webp";
import SugarcaneJuice from "../../assets/MenuCardImg/Drinks/Sugarcane-Juice.webp";
import MangoMojito from "../../assets/MenuCardImg/Drinks/Mango-Mojito.webp";
import PineappleMojito from "../../assets/MenuCardImg/Drinks/Pineapple-Mojito.webp";
import GreenTea from "../../assets/MenuCardImg/Drinks/Green-Tea.webp";
import KashmiriChai from "../../assets/MenuCardImg/Drinks/Kashmiri-Chai.webp";
import Pop from "../../assets/MenuCardImg/Drinks/Pop.webp";
import IndianCola from "../../assets/MenuCardImg/Drinks/cola.webp";

// Kids Special
import GrilledCheeseSandwich from "../../assets/MenuCardImg/KidesSpecial/grilled-cheese-sandwich.webp";
import SmileyFries from "../../assets/MenuCardImg/KidesSpecial/Smiley-Fries-1.webp";
import MiniBurger from "../../assets/MenuCardImg/KidesSpecial/Mini-Burger.webp";
import NutellaDosa from "../../assets/MenuCardImg/KidesSpecial/Nutella-Dosa.webp";
import CheeseDosa from "../../assets/MenuCardImg/KidesSpecial/Cheese-Dosa.webp";
import StrawberryShake from "../../assets/MenuCardImg/KidesSpecial/Strawberry-Shake.webp";
import ChocolateShake from "../../assets/MenuCardImg/KidesSpecial/Cheese-Dosa.webp";
import VanillaIceCreamShake from "../../assets/MenuCardImg/KidesSpecial/Vanilla-Ice-Cream-Shake.webp";

//Side
import Raita from "../../assets/MenuCardImg/Sides/Raita.webp";
import PlainDahi from "../../assets/MenuCardImg/Sides/plain-dahi.webp";
import Papadum from "../../assets/MenuCardImg/Sides/Papadum.webp";
import GreenSalad from "../../assets/MenuCardImg/Sides/Green-Salad.webp";
import OnionSalad from "../../assets/MenuCardImg/Sides/Onion-Salad.webp";
import Chutney from "../../assets/MenuCardImg/Sides/Chutney.webp";
import Pickle from "../../assets/MenuCardImg/Sides/Pickle.webp";

import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import StickyButton from "../MainMenu/StickyButton";

// import { IoIosArrowUp } from "react-icons/io";

// //We're using the useState hook to manage the state of whether to show the button or not.
// function StickyButton() {
//   const [showButton, setShowButton] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);

//   // We're using the useEffect hook to add an event listener for the scroll event when the component mounts, and removing it when the component unmounts.
//   useEffect(() => {
//     //   Inside the scrollFunction, we calculate the scroll percentage and update the state accordingly.
//     const scrollFunction = () => {
//       const scrollPercent =
//         ((document.documentElement.scrollTop + document.body.scrollTop) /
//           (document.documentElement.scrollHeight -
//             document.documentElement.clientHeight)) *
//         100;
//       //The button's display is controlled by the showButton state variable. If showButton is true, the button will be displayed, otherwise, it will be hidden.
//       if (scrollPercent > 0.8) {
//         setShowButton(true);
//       } else {
//         setShowButton(false);
//       }
//     };

//     window.addEventListener("scroll", scrollFunction);

//     return () => {
//       window.removeEventListener("scroll", scrollFunction);
//     };
//   }, []);

//   return (
//     <button
//       id="stickyBtn"
//       className="sticky-button"
//       style={{ display: showButton ? "block" : "none" }}
//     >
//       Main Menu
//     </button>
//   );
// }

// function StickyButton() {
//   const [showButton, setShowButton] = useState(false);

//   useEffect(() => {
//     const scrollFunction = () => {
//       const scrollPercent =
//         ((document.documentElement.scrollTop + document.body.scrollTop) /
//           (document.documentElement.scrollHeight -
//             document.documentElement.clientHeight)) *
//         100;
//       if (scrollPercent > 0.8) {
//         setShowButton(true);
//       } else {
//         setShowButton(false);
//       }
//     };

//     window.addEventListener("scroll", scrollFunction);

//     return () => {
//       window.removeEventListener("scroll", scrollFunction);
//     };
//   }, []);

//   return (
//     <button
//       id="stickyBtn"
//       className="sticky-button"
//       style={{ display: showButton ? "block" : "none" }}
//       onClick={() => {
//         // Do something when the button is clicked, e.g., scroll to a specific section
//       }}
//     >
//       Main Menu
//     </button>
//   );
// }

// function ScrollToTopButton() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const scrollFunction = () => {
//       const scrollPercent =
//         ((document.documentElement.scrollTop + document.body.scrollTop) /
//           (document.documentElement.scrollHeight -
//             document.documentElement.clientHeight)) *
//         100;
//       if (scrollPercent > 2) {
//         // Change the threshold to 30%
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener("scroll", scrollFunction);

//     return () => {
//       window.removeEventListener("scroll", scrollFunction);
//     };
//   }, []);

//   const scrollToTop = () => {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
//   };

//   return (
//     <button
//       className="scroll-to-top-button"
//       style={{ display: isVisible ? "block" : "none",padding:"1.5vh 2vh" }}
//       onClick={scrollToTop}
//     >
//       <IoIosArrowUp style={{ fontSize: "2rem",fontWeight:"900" }} />
//     </button>
//   );
// }

function MenuCard() {
  const { itemId } = useParams();
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = document.getElementById(itemId);
    if (section) {
      // Scroll to the section
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [itemId]);

  return (
    <div ref={sectionRef} className="menucard">
      <StickyButton />

      {/* Chatpata Chats */}
      <section id="Chatpata Chats">
        <div>
          <div className="menucard-head">
            <div className="menu-1 p-4">
              <div className="Chatpata-menu">
                <text>Chatpata Chats</text>
              </div>
            </div>
            <div className="menucard-img1"></div>
          </div>
          <div className="menucard-container">
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Samosa Plate</p>
                <p className="text-white text-start">
                  Vegetable samosas with onions,tomato and spices
                </p>
                <p className="text-white text-start price">$ 4.00</p>
              </div>
              <img src={Samosa} alt="Samosa" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Allo Tikki With Salad
                </p>
                <p className="text-white text-start">
                  Deep fried mashed potato cutlets served with green salad
                </p>
                <p className="text-white text-start price">$5.49</p>
              </div>
              <img src={allo1} alt="allo1" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Aloo Tikki + Chana (2 pcs)
                </p>
                <p className="text-white text-start">
                  Deep fried mashed potato cutlet mixed with different spices
                  and topped with yogurt, tamarind chutney, mint chutney, onions
                  and tomatoes. Perfect on the go!
                </p>
                <p className="text-white text-start price">$ 6.99</p>
              </div>
              <img src={allo1} alt="allo1" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Chana Samosa</p>
                <p className="text-white text-start">
                  Vegetable samosas with onions,tomato and spices
                </p>
                <p className="text-white text-start price">$ 6.99</p>
              </div>
              <img src={chana} alt="chana" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Chat Papri</p>
                <p className="text-white text-start">
                  Crispy dough wafers topped with potato, chickpea, onions,
                  tomatoes, yogurt, mint chutney, tamarind chutney, and our
                  special in-house sauce. Perfect on the go
                </p>
                <p className="text-white text-start price">$ 6.99</p>
              </div>
              <img src={chat} alt="chat" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Dahi Bhalla</p>
                <p className="text-white text-start">
                  Deep fried lentil fritters dunked in creamy yogurt, topped
                  with different kinds of sweet spicy chutneys
                </p>
                <p className="text-white text-start price">$6.99</p>
              </div>
              <img src={DahiBhalla} alt="DahiBhalla" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Veg Pakora</p>
                <p className="text-white text-start">
                  crispy fritters made with onions, potatoes, spinach gram
                  flour, spices and herbs
                </p>
                <p className="text-white text-start price">$ 5.49</p>
              </div>
              <img src={vegpakora} alt="vegpakora" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Onion Bhaji</p>
                <p className="text-white text-start">
                  Onions dipped in gram flour and fried with herb
                </p>
                <p className="text-white text-start price">$5.49</p>
              </div>
              <img src={onion} alt="onion" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Paneer Pakora
                </p>
                <p className="text-white text-start">
                  Slices of Paneer with coriander filling coated in our special
                  batter and deep fried
                </p>
                <p className="text-white text-start price">$ 7.99</p>
              </div>
              <img src={Paneer} alt="Paneer" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Gobhi Pakora</p>
                <p className="text-white text-start">
                  Fritters made with cauliflower florets, gram flour, spices and
                  herbs
                </p>
                <p className="text-white text-start price">$ 7.99</p>
              </div>
              <img src={Gobhi} alt="Gobhi" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Bhel Puri</p>
                <p className="text-white text-start">
                  Slices of vegies with coriander filling coated in our special
                  batter and deep fried
                </p>
                <p className="text-white text-start price">$ 5.99</p>
              </div>
              <img src={bhelpuri} alt="bhelpuri" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Pani Puri(6 pieces)
                </p>
                <p className="text-white text-start">
                  Hollow fried crispy flatbread, comes with potato and chickpea
                  filling, tamarind chutney and spicy masala pani (water).
                  Perfect on the go
                </p>
                <p className="text-white text-start price">$6.99</p>
              </div>
              <img src={pani_puri} alt="pani_puri" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Dahi Puri</p>
                <p className="text-white text-start">
                  Hollow fried crispy flatbread, comes with potato and chickpea
                  filling, tamarind chutney and dahi (curd). Perfect on the go
                </p>
                <p className="text-white text-start price">$ 7.99</p>
              </div>
              <img src={dahi} alt="dahi" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Chana Bhatura
                </p>
                <p className="text-white text-start">
                  Two fried puris served with season chickpeas and spicy pickle
                </p>
                <p className="text-white text-start price">$ 8.99</p>
              </div>
              <img src={bhatura} alt="bhatura" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Allo Puri</p>
                <p className="text-white text-start">
                  Warmly spiced potato curry with crispy Indian fried bread
                </p>
                <p className="text-white text-start price">$ 9.99</p>
              </div>
              <img src={alloPuri} alt="alloPuri" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Amrritsari Kulcha Chana
                </p>
                <p className="text-white text-start">
                  Spicy potato filled Nan mixed with coriander, mint and many
                  more spices. Served with 2 Kulchas, Chana and Roasted Tamarind
                  Chutney
                </p>
                <p className="text-white text-start price">$ 7.99</p>
              </div>
              <img src={amrritsarikulchachana} alt="amrritsarikulchachana" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Pocket Kulcha
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 6.99</p>
              </div>
              <img src={pocket} alt="pocket" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Raj Kachori</p>
                <p className="text-white text-start">
                  Crispy fried shells filled with potatoes, yogurt, boiled
                  lentils, spices, chutneys & more!
                </p>
                <p className="text-white text-start price">$ 7.99</p>
              </div>
              <img src={raj_kachori} alt="raj_kachori" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Khasta Kachori
                </p>
                <p className="text-white text-start">
                  Puff pastry filled with a delectable moong dal mixture and
                  deep fried.
                </p>
                <p className="text-white text-start price">$ 5.99</p>
              </div>
              <img src={khasta_kachori} alt="khasta_kachori" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Batata Vada</p>
                <p className="text-white text-start">
                  batter-coated potato stuffed fritter dumplings
                </p>
                <p className="text-white text-start price">$ 6.99</p>
              </div>
              <img src={Batata} alt="Batata" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Bombay Sandwich
                </p>
                <p className="text-white text-start">
                  Sandwich with mix vegetables , coriander-mint chutney and
                  special sandwich masala - crispy and grilled
                </p>
                <p className="text-white text-start price">$ 9.99</p>
              </div>
              <img src={bomby_sandvich} alt="bomby_sandvich" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Vada Pav</p>
                <p className="text-white text-start">
                  Vada / Deep fried Potato dumpling placed inside a Bread Bun
                  (Pav) - accompanied with Chutneys
                </p>
                <p className="text-white text-start price">$ 8.99</p>
              </div>
              <img src={vada_pav} alt="vada_pav" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Dabeli</p>
                <p className="text-white text-start">
                  Spicy, Tangy and Sweet Potato filling inside a Bun, drizzled
                  with a Spicy Chutney
                </p>
                <p className="text-white text-start price">$ 8.99</p>
              </div>
              <img src={Dabeli} alt="Dabeli" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Pav Bhaji</p>
                <p className="text-white text-start">
                  Spiced mixture of mashed Vegetables in a thick Gravy, served
                  hot with a soft white Bread cheese extra
                </p>
                <p className="text-white text-start price">$ 10.99</p>
              </div>
              <img src={PavBhaji} alt="PavBhaji" />
            </div>
          </div>
        </div>
      </section>
      {/* Tikke Shikke */}
      <section id="TikkeShikke">
        <div>
          <div className="menucard-head">
            <div className="menu-2 p-4">
              <div className="Chatpata-menu">
                <text>Tikke Shikke</text>
              </div>
            </div>
            <div className="menucard-img1"></div>
          </div>
          <div className="menucard-container">
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Paneer Tikka</p>
                <p className="text-white text-start">
                  Paneer marinated in marinade the soft and juicy morsels of
                  paneer coated with spicy and is a delight to eat
                </p>
                <p className="text-white text-start price">$ 12.99</p>
              </div>
              <img src={paneer_tikka} alt="paneer_tikka" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Malai Paneer Tikka
                </p>
                <p className="text-white text-start">
                  Grilled homemade cheese pieces, peppers, and onions with
                  cooking cream
                </p>
                <p className="text-white text-start price">$ 12.99</p>
              </div>
              <img src={malai} alt="malai" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Haryali Paneer Tikka
                </p>
                <p className="text-white text-start">
                  Paneer marinated in marinade the soft and juicy morsels of
                  paneer coated with spicy and is a delight to eat
                </p>
                <p className="text-white text-start price">$ 12.99</p>
              </div>
              <img src={haryali} alt="haryali" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Amritsari Soya chaap
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 12.99</p>
              </div>
              <img src={masala} alt="masala" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Malai Soya Chaap
                </p>
                <p className="text-white text-start">
                  Soya cooked in the white gravy made with cream, curd, cashew
                  paste and spices
                </p>
                <p className="text-white text-start price">$ 12.99</p>
              </div>
              <img src={malai} alt="chat" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Veg Kebab</p>
                <p className="text-white text-start">
                  Soya Chaap marinated in yogurt, spices and cooked in tandoor
                </p>
                <p className="text-white text-start price">$ 12.99</p>
              </div>
              <img src={veg_kabab} alt="veg_kabab" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  WeDesi Spl Platter
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 19.99</p>
              </div>
              <img src={desi_platters} alt="desi_platters" />
            </div>
          </div>
        </div>
      </section>
      {/* Burger */}
      <section id="burger">
        <div>
          <div className="menucard-head">
            <div className="menu-3 p-4">
              <div className="Chatpata-menu">
                <text>Burgers and Rolls</text>
              </div>
            </div>
            <div className="menucard-img1"></div>
          </div>
          <div className="menucard-container">
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Allo Tikki Burger
                </p>
                <p className="text-white text-start">
                  Crisp golden potato patties sandwiched between burger buns and
                  topped with veggies and slathered with chutneys
                </p>
                <p className="text-white text-start price">$ 6.99</p>
              </div>
              <img src={Allo_Tikki_Burger} alt="Allo_Tikki_Burger" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Noodle Burger
                </p>
                <p className="text-white text-start">
                  Grilled Hakka-Style Tikki Burger in a bun, topped with Hakka
                  Chow mien noodles with Szechuan sauce
                </p>
                <p className="text-white text-start price">$ 7.99</p>
              </div>
              <img src={Noodle_Burger} alt="Noodle_Burger" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Soya Chaap Roll
                </p>
                <p className="text-white text-start">
                  Marinated soya chaap in yogurt, Indian spices, onion and
                  wrapped served with mint chutney
                </p>
                <p className="text-white text-start mt-5price">$ 10.99</p>
              </div>
              <img src={deSoya_Chaap_Roll} alt="deSoya_Chaap_Roll" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Veg Kathi Roll
                </p>
                <p className="text-white text-start">
                  Indian layered paratha wrap with a filling of grilled kebabs,
                  green chutney or sauces, shredded veggies
                </p>
                <p className="text-white text-start price">$ 9.99</p>
              </div>
              <img src={Veg_Kathi_Roll} alt="Veg_Kathi_Roll" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Paneer Tikka Roll
                </p>
                <p className="text-white text-start">
                  Cottage cheese marinated in yogurt, Indian spices,
                  char-grilled with onions and wrapped served with mint chutney
                </p>
                <p className="text-white text-start price">$ 10.99</p>
              </div>
              <img src={Paneer_Tikka_Roll} alt="Paneer_Tikka_Roll" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Chilli Paneer Roll
                </p>
                <p className="text-white text-start">
                  Chilli paneer, char-grilled with onions and wrapped served
                  with mint chutney
                </p>
                <p className="text-white text-start price">$ 10.99</p>
              </div>
              <img src={Chilli_Paneer_Roll} alt="Chilli_Paneer_Roll" />
            </div>
          </div>
        </div>
      </section>
      {/* Indo Chinese */}
      <section id="IndoChinese">
        <div>
          <div className="menucard-head">
            <div className="menu-4 p-4">
              <div className="Chatpata-menu">
                <text>Indo Chinese</text>
              </div>
            </div>
            <div className="menucard-img1"></div>
          </div>
          <div className="menucard-container">
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Momos (Steamed/Fried)
                </p>
                <p className="text-white text-start">
                  Rounded soft dough steamed/fried, stuffed with vegetable,
                  served with spicy
                </p>
                <p className="text-white text-start price">$ 10.99</p>
              </div>
              <img src={Momos_Steamed_Fried} alt="Momos_Steamed_Fried" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Tandoori Momos
                </p>
                <p className="text-white text-start">
                  Classic momos tossed in tandoori paste and chargrilled to
                  perfection
                </p>
                <p className="text-white text-start price">$ 11.99</p>
              </div>
              <img src={Tandoori_Momos} alt="Tandoori_Momos" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Fried Rice</p>
                <p className="text-white text-start">
                  Wok tossed rice with garden fresh vegetables, soy sauce,
                  chilli sauce and spices
                </p>
                <p className="text-white text-start price">$ 6.99</p>
              </div>
              <img src={Fried_Rice} alt="Fried_Rice" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Chowmein</p>
                <p className="text-white text-start">
                  Delectable dish wok stir fried noodles with garden fresh
                  vegetables, soy sauce, chilli sauce and spices
                </p>
                <p className="text-white text-start price">$ 9.99</p>
              </div>
              <img src={Chowmein} alt="Chowmein" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Veg Manchurian
                </p>
                <p className="text-white text-start">
                  Indo Chinese dish of fried veggie balls in a spicy, sweet and
                  tangy sauce.- with gravy.
                </p>
                <p className="text-white text-start price">$ 12.99</p>
              </div>
              <img src={Veg_Manchurian} alt="Veg_Manchurian" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Spring Roll</p>
                <p className="text-white text-start">
                  Chinese savory snack made with pastry sheet filled with
                  vegetables, rolled & fried
                </p>
                <p className="text-white text-start price">$ 6.99</p>
              </div>
              <img src={Spring_Roll} alt="Spring_Roll" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Gobhi Manchurian
                </p>
                <p className="text-white text-start">
                  Cauliflower in an exotic Asian dish made with onions, green
                  chili, and soya sauc
                </p>
                <p className="text-white text-start price">$ 10.99</p>
              </div>
              <img src={Gobhi_Manchurian} alt="Gobhi_Manchurian" />
            </div>
          </div>
        </div>
      </section>
      {/* South Indian */}
      <section id="SouthIndian">
        <div>
          <div className="menucard-head">
            <div className="menu-5 p-4">
              <div className="Chatpata-menu">
                <text>South Indian</text>
              </div>
            </div>
            <div className="menucard-img1"></div>
          </div>
          <div className="menucard-container">
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Rasam</p>
                <p className="text-white text-start">
                  A tangy spicy tomato soup elevated with red chillies,curry
                  leaves and tamarind
                </p>
                <p className="text-white text-start price">$ 10.99</p>
              </div>
              <img src={Rasam} alt="Momos_Steamed_Fried" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Plain Dosa</p>
                <p className="text-white text-start">
                  Incredibly large thin crispy crepe
                </p>
                <p className="text-white text-start price">$ 7.99</p>
              </div>
              <img src={Plain_Dosa} alt="Tandoori_Momos" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Gobhi 65 (Dry)
                </p>
                <p className="text-white text-start">
                  crispy deep-fried cauliflower florets coated in a tangy and
                  fiery sauce
                </p>
                <p className="text-white text-start price">$ 10.99</p>
              </div>
              <img src={Gobhi_Cauliflower_65Fry} alt="Fried_Rice" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Paneer 65</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 11.99</p>
              </div>
              <img src={Paneer65} alt="Chowmein" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Masala Dosa</p>
                <p className="text-white text-start">
                  Rice flour pancakes served with sambar, Chutney & stuffed
                  inside with potatoes & onions.
                </p>
                <p className="text-white text-start price">$ 9.99</p>
              </div>
              <img src={Masala_Dosa} alt="Veg_Manchurian" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Mysore Masala Dosa
                </p>
                <p className="text-white text-start">
                  Crisp and soft dosa spiced with red chutney and served with a
                  potato filling, along with coconut chutney
                </p>
                <p className="text-white text-start price">$ 10.99</p>
              </div>
              <img src={Mysore_Masala_Dosa} alt="Mysor-masal-dosa" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Pav Bhaji Dosa
                </p>
                <p className="text-white text-start">
                  Crisp and soft dosa with pav bhaji filling served with coconut
                  chutney
                </p>
                <p className="text-white text-start price">$ 11.99</p>
              </div>
              <img src={Pav_Bhaji_Dosa} alt="Pav_Bhaji_Dosa" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Ghee Masala Dosa
                </p>
                <p className="text-white text-start">
                  Crispy rice and lentil crepe and a spiced masala potato
                  filling made in clarified butter
                </p>
                <p className="text-white text-start price">$ 11.99</p>
              </div>
              <img src={Ghee_Masala_Dosa} alt="Ghee_Masala_Dosa" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Onion Rava Masala Dosa
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 11.99</p>
              </div>
              <img src={Onion_Rava_Masala_Dosa} alt="Onion_Rava_Masala_Dosa" />
            </div>

            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Uttapam</p>
                <p className="text-white text-start">
                  A thick soft version of the dosa, comforting like a savoury
                  pancake with a few variations of lentils
                </p>
                <p className="text-white text-start price">$ 9.99</p>
              </div>
              <img src={Uttapam} alt="Uttapam" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Idli Sambhar(3 pieces)
                </p>
                <p className="text-white text-start">
                  Cakes made by steaming a batter consisting of fermented black
                  lentils and rice soaked in Sambhar
                </p>
                <p className="text-white text-start price">$ 6.99</p>
              </div>
              <img src={Idli_Sambhar} alt="Idli_Sambhar" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Vada Sambhar(2 pieces)
                </p>
                <p className="text-white text-start">
                  Medhu vadas soaked in our sambar
                </p>
                <p className="text-white text-start price">$ 6.99</p>
              </div>
              <img src={Vada_Sambhar} alt="Vada_Sambhar" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Paneer Dosa</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 5.99</p>
              </div>
              <img src={Paneer_Dosa} alt="Paneer_Dosa" />
            </div>
          </div>
        </div>
      </section>
      {/* Desi Curries */}
      <section id="DesiCurries">
        <div>
          <div className="menucard-head">
            <div className="menu-6 p-4">
              <div className="Chatpata-menu">
                <text>Desi Curries</text>
              </div>
            </div>
            <div className="menucard-img1"></div>
          </div>
          <div className="menucard-container">
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Shahi Paneer</p>
                <p className="text-white text-start">
                  Paneer, simmered with onions and tomatoes in a rich creamy
                  sauce.
                </p>
                <p className="text-white text-start price"> $ 13.99</p>
              </div>
              <img src={ShahiPaneer} alt="ShahiPaneer" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Chilli Paneer
                </p>
                <p className="text-white text-start">
                  Cubes of fried crispy paneer-tossed in a spicy sauce made with
                  soy sauce, vinegar & chili sauce.
                </p>
                <p className="text-white text-start price">$ 13.99</p>
              </div>
              <img src={ChilliPaneer} alt="ChilliPaneer" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Paneer Makhani
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 13.99</p>
              </div>
              <img src={PaneerMakhani} alt="PaneerMakhani" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Chana Masala</p>
                <p className="text-white text-start">
                  Chickpeas cooked with authentic spices
                </p>
                <p className="text-white text-start price">$ 9.99</p>
              </div>
              <img src={ChanaMasala} alt="ChanaMasala" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Dal Makhani</p>
                <p className="text-white text-start">
                  Mild whole lentils in a creamy buttery base.
                </p>
                <p className="text-white text-start price">$ 9.99</p>
              </div>
              <img src={DalMakhani} alt="DalMakhani" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Dal Tadka</p>
                <p className="text-white text-start">
                  Yellow lentil cooked with various spices garnished with
                  tomato.
                </p>
                <p className="text-white text-start price">$ 8.99</p>
              </div>
              <img src={DalTadka} alt="DalTadka" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Allo Gobhi</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 9.99</p>
              </div>
              <img src={AlloGobhi} alt="AlloGobhi" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Baingan Bhartha
                </p>
                <p className="text-white text-start">
                  Eggplant baked in a tandoor, sautéed with herbs and spices.
                </p>
                <p className="text-white text-start price">$ 10.99</p>
              </div>
              <img src={BainganBhartha} alt="BainganBhartha" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Paneer Tikka Masala
                </p>
                <p className="text-white text-start">
                  Homemade cheese marinated & cooked in a clay oven, then cooked
                  in various Indian spices
                </p>
                <p className="text-white text-start price">$ 13.99</p>
              </div>
              <img src={PaneerTikkaMasala} alt="PaneerTikkaMasala" />
            </div>

            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Palak Paneer</p>
                <p className="text-white text-start">
                  Home made cheese deep fried and cooked in fresh pureed spinach
                  mildly spiced.
                </p>
                <p className="text-white text-start price">$ 12.99</p>
              </div>
              <img src={PalakPaneer} alt="PalakPaneer" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Malai Kofta</p>
                <p className="text-white text-start">
                  Minced fried vegetables with raisins and cooked in a thick
                  creamy sauce.
                </p>
                <p className="text-white text-start price">$ 13.99</p>
              </div>
              <img src={MalaiKofta} alt="MalaiKofta" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Kali Mirch Paneer
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 13.99</p>
              </div>
              <img src={KaliMirchPaneer} alt="KaliMirchPaneer" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Bhindi Masala
                </p>
                <p className="text-white text-start">
                  Okra cooked with special Indian spices sautéed with chopped
                  onions and garlics.
                </p>
                <p className="text-white text-start price">$ 10.99</p>
              </div>
              <img src={BhindiMasala} alt="BhindiMasala" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Mix Veg</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 8.99</p>
              </div>
              <img src={MixVeg} alt="MixVeg" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Veg Korma</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 8.99</p>
              </div>
              <img src={VegKorma} alt="VegKorma" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Kadi</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 8.99</p>
              </div>
              <img src={Kadhi} alt="Kadhi" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Rajma</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 8.99</p>
              </div>
              <img src={Rajma} alt="Rajma" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Mutter Paneer
                </p>
                <p className="text-white text-start">
                  Home made cheese and peas cooked in creamy curry sauce
                </p>
                <p className="text-white text-start price">$ 12.99</p>
              </div>
              <img src={MutterPaneer} alt="MutterPaneer" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Paneer Kadhai
                </p>
                <p className="text-white text-start">
                  Home made cheese cubes cooked with bell pepper, onions,
                  garlic, ginger & Indian spices.
                </p>
                <p className="text-white text-start price">$ 13.99</p>
              </div>
              <img src={PaneerKadhai} alt="PaneerKadhai" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Paneer Pasanda
                </p>
                <p className="text-white text-start">
                  Stuffed indian cheese with nuts and khoa, cooked in rich
                  tomato gravy.
                </p>
                <p className="text-white text-start price">$ 14.99</p>
              </div>
              <img src={PaneerPasanda} alt="PaneerPasanda" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Soya Curry</p>
                <p className="text-white text-start">
                  Soya chaap cooked in a tangy curry sauce with rare spices.
                </p>
                <p className="text-white text-start price">$ 13.99</p>
              </div>
              <img src={SoyaCurry} alt="SoyaCurry" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Paneer Bhurji
                </p>
                <p className="text-white text-start">
                  Homemade Grated paneer sauteed with onion, tomato, bell
                  pepper, and spices
                </p>
                <p className="text-white text-start price">$ 14.99</p>
              </div>
              <img src={PaneerBhurji} alt="PaneerBhurji" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Saag</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 12.99</p>
              </div>
              <img src={Saag} alt="Saag" />
            </div>
          </div>
        </div>
      </section>
      {/* prantha */}
      <section id="PranthaandNaan">
        <div>
          <div className="menucard-head">
            <div className="menu-7 p-4">
              <div className="Chatpata-menu">
                <text>Prantha and Naan</text>
              </div>
            </div>
            <div className="menucard-img1"></div>
          </div>
          <div className="menucard-container">
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Allo Prantha</p>
                <p className="text-white text-start">
                  Whole wheat bread stuffed with masala potatoes and spices
                  cooked on tawa and topped with butter.
                </p>
                <p className="text-white text-start price"> $ *2.99</p>
              </div>
              <img src={AlloPrantha} alt="AlloPrantha" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Paneer Prantha
                </p>
                <p className="text-white text-start">
                  Whole wheat bread stuffed with paneer, special spices.
                </p>
                <p className="text-white text-start price">$ *3.99</p>
              </div>
              <img src={PaneerPrantha} alt="PaneerPrantha" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Gobhi Prantha
                </p>
                <p className="text-white text-start">
                  Whole wheat bread stuffed with grated cauliflower and spices
                </p>
                <p className="text-white text-start price">$ *3.99</p>
              </div>
              <img src={GobhiPrantha} alt="GobhiPrantha" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Mix Prantha</p>
                <p className="text-white text-start">
                  Whole wheat bread stuffed with paneer, potato,onion,home made
                  spices.
                </p>
                <p className="text-white text-start price">$ *3.99</p>
              </div>
              <img src={MixPrantha} alt="MixPrantha" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Makki di Roti
                </p>
                <p className="text-white text-start">
                  Fatbread made with makki atta (maize flour).
                </p>
                <p className="text-white text-start price">$ *2.99</p>
              </div>
              <img src={MakkidiRoti} alt="MakkidiRoti" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Tawa Roti</p>
                <p className="text-white text-start">
                  A charred whole wheat flour Indian bread that is soft.
                </p>
                <p className="text-white text-start price">$ 1.99</p>
              </div>
              <img src={TawaRoti} alt="DalTTawaRotiadka" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Rumali Roti</p>
                <p className="text-white text-start">
                  Thin, soft flatbread that can be folded like a handkerchief.
                </p>
                <p className="text-white text-start price">$ 3.99</p>
              </div>
              <img src={RumaliRoti} alt="RumaliRoti" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Lacha Prantha
                </p>
                <p className="text-white text-start">
                  Crispy flaky layered whole wheat flatbreads.
                </p>
                <p className="text-white text-start price">$ 3.99</p>
              </div>
              <img src={LachaPrantha} alt="LachaPrantha" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Paneer Naan</p>
                <p className="text-white text-start">
                  Naan stuffed withHome made paneer ,sepcial spices.
                </p>
                <p className="text-white text-start price">$ 3.99</p>
              </div>
              <img src={PaneerNaan} alt="PaneerNaan" />
            </div>

            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Onion Kulcha</p>
                <p className="text-white text-start">
                  Indian bread stuffed with onion,coriander and spices.
                </p>
                <p className="text-white text-start price">$ 2.99</p>
              </div>
              <img src={OnionKulcha} alt="OnionKulcha" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  WeDesi Spl Mawa Kulcha
                </p>
                <p className="text-white text-start">
                  Sweet naan bread stuffed with dry fruits.
                </p>
                <p className="text-white text-start price">$ 4.99</p>
              </div>
              <img src={WeDesiSplMawaKulcha} alt="WeDesiSplMawaKulcha" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Tandoori Roti
                </p>
                <p className="text-white text-start">
                  Whole wheat bread baked in the Tandoor
                </p>
                <p className="text-white text-start price">$ 1.99</p>
              </div>
              <img src={TandooriRoti} alt="TandooriRoti" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Plain Naan</p>
                <p className="text-white text-start">
                  Indian bread Made with milk, salt, baking powder.
                </p>
                <p className="text-white text-start price">$ 1.99</p>
              </div>
              <img src={PlainNaan} alt="PlainNaan" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Garlic Naan</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 2.99</p>
              </div>
              <img src={GarlicNaan} alt="GarlicNaan" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Bread Basket(Naan, Garlic Naan, Roti, Lacha Prantha)
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 9.99</p>
              </div>
              <img src={BreadBasket} alt="BreadBasket" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text"></p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price"></p>
              </div>
              {/* <img src={Kadhi} alt="Kadhi" /> */}
            </div>
          </div>
        </div>
      </section>
      {/* wedesi-combo */}
      <section id="WeDesiCombo">
        <div>
          <div className="menucard-head">
            <div className="menu-8 p-4">
              <div className="Chatpata-menu">
                <text>WeDesi Combo</text>
              </div>
            </div>
            <div className="menucard-img1"></div>
          </div>
          <div className="menucard-container">
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Veg Thali</p>
                <p className="text-white text-start">
                  Chef’s choice of 3 vegetables served with rice, naan and
                  bread.
                </p>
                <p className="text-white text-start price"> $ 9.99</p>
              </div>
              <img src={VegThali} alt="VegThali" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Rajma Rice</p>
                <p className="text-white text-start">Rajma served with rice.</p>
                <p className="text-white text-start price">$ 9.99</p>
              </div>
              <img src={RajmaRice} alt="RajmaRice" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Kadhi Rice</p>
                <p className="text-white text-start">Kadhi served with rice.</p>
                <p className="text-white text-start price">$ 9.99</p>
              </div>
              <img src={KadhiRice} alt="KadhiRice" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Makki di Roti with Saag
                </p>
                <p className="text-white text-start">
                  Steaming hot makki roti with a dollop of butter or ghee served
                  with Saag.
                </p>
                <p className="text-white text-start price">$ 12.99</p>
              </div>
              <img src={MakkidiRotiwithSaag} alt="MakkidiRotiwithSaag" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Paneer Tikka Rice Bowl
                </p>
                <p className="text-white text-start">
                  Basmati rice, paneer tikka, butter sauce and fresh greens.
                </p>
                <p className="text-white text-start price">$ 11.99</p>
              </div>
              <img src={PaneerTikkaRiceBowl} alt="PaneerTikkaRiceBowl" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Tikka Combo (Chose any 2 Tandoori Items)
                </p>
                <p className="text-white text-start">
                  Your choice of any 2 tandoori items in one platter.
                </p>
                <p className="text-white text-start price">$ 1.99</p>
              </div>
              <img src={TikkaCombo} alt="TikkaCombo" />
            </div>
          </div>
        </div>
      </section>
      {/* Rice */}
      <section id="Rice">
        <div>
          <div className="menucard-head">
            <div className="menu-9 p-4">
              <div className="Chatpata-menu">
                <text>Rice</text>
              </div>
            </div>
            <div className="menucard-img1"></div>
          </div>
          <div className="menucard-container">
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Plain Rice</p>
                <p className="text-white text-start">
                  Basmati rice cooked to perfection.
                </p>
                <p className="text-white text-start price"> $ 2.99</p>
              </div>
              <img src={PlainRice} alt="PlainRice" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Jeera Rice</p>
                <p className="text-white text-start">
                  Basmati rice cooked with cumin seeds.
                </p>
                <p className="text-white text-start price">$ 4.99</p>
              </div>
              <img src={JeeraRice} alt="JeeraRice" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Rice Pulao</p>
                <p className="text-white text-start">
                  ndian basmati rice cooked with turmeric powder, onions, peas
                  and garnished with onions and coriander.
                </p>
                <p className="text-white text-start price">$ 5.99</p>
              </div>
              <img src={RicePulao} alt="RicePulao" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Veg Briyani</p>
                <p className="text-white text-start">
                  Basmati rice cooked with exotic spices and garden fresh
                  vegetables.
                </p>
                <p className="text-white text-start price">$ 10.99</p>
              </div>
              <img src={VegBriyani} alt="VegBriyani" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  WeDesi Spl Pulao
                </p>
                <p className="text-white text-start">
                  Rice with mix vegetables,dry fruits , spices.
                </p>
                <p className="text-white text-start price">$ 6.99</p>
              </div>
              <img src={WeDesiSplPulao} alt="WeDesiSplPulao" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Tikka Combo (Chose any 2 Tandoori Items)
                </p>
                <p className="text-white text-start">
                  Your choice of any 2 tandoori items in one platter.
                </p>
                <p className="text-white text-start price">$ 1.99</p>
              </div>
              <img src={DalTadka} alt="DalTadka" />
            </div>
          </div>
        </div>
      </section>
      {/* Dessert */}
      <section id="Dessert">
        <div>
          <div className="menucard-head">
            <div className="menu-10 p-4">
              <div className="Chatpata-menu">
                <text>Dessert</text>
              </div>
            </div>
            <div className="menucard-img1"></div>
          </div>
          <div className="menucard-container">
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Gulab Jamun</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price"> $ 3.99</p>
              </div>
              <img src={GulabJamun} alt="GulabJamun" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Rasmalai</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 4.99</p>
              </div>
              <img src={Rasmalai} alt="Rasmalai" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Gulab Jamun with Ice Cream
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 4.99</p>
              </div>
              <img src={GulabJamunwithIceCream} alt="GulabJamunwithIceCream" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Moong Dal Halwa
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 5.99</p>
              </div>
              <img src={MoongDalHalwa} alt="MoongDalHalwa" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Gajar Halwa</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 5.99</p>
              </div>
              <img src={GajarHalwa} alt="GajarHalwa" />
            </div>

            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Jalebi Rabri</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 5.99</p>
              </div>
              <img src={JalebiRabri} alt="JalebiRabri" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Malpua Rabri</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 6.99</p>
              </div>
              <img src={MalpuaRabri} alt="MalpuaRabri" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Shahi Tukda Rabri
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 6.99</p>
              </div>
              <img src={ShahiTukdaRabri} alt="ShahiTukdaRabri" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Gulab Jamun with Rabri
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 5.99</p>
              </div>
              <img src={GulabJamunwithRabri} alt="GulabJamunwithRabri" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Kulfi Falooda
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 6.49</p>
              </div>
              <img src={KulfiFalooda} alt="KulfiFalooda" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Rabri Falooda
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 7.99</p>
              </div>
              <img src={RabriFalooda} alt="RabriFalooda" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Paan Ice Cream
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 5.99</p>
              </div>
              <img src={PaanIceCream} alt="PaanIceCream" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Mango Ice Cream
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 5.99</p>
              </div>
              <img src={MangoIceCream} alt="MangoIceCream" />
            </div>

            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Matka Kulfi</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 6.49</p>
              </div>
              <img src={MatkaKulfi} alt="MatkaKulfi" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Kesar Pista Kulfi
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 5.99</p>
              </div>
              <img src={KesarPistaKulfi} alt="KesarPistaKulfi" />
            </div>
          </div>
        </div>
      </section>
      {/* Drinks */}
      <section id="Drinks">
        <div>
          <div className="menucard-head">
            <div className="menu-11 p-4">
              <div className="Chatpata-menu">
                <text>Drinks</text>
              </div>
            </div>
            <div className="menucard-img1"></div>
          </div>
          <div className="menucard-container">
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Royal Falooda
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price"> $ 9.99</p>
              </div>
              <img src={RoyalFalooda} alt="RoyalFalooda" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Kesar Pista Falooda
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 8.99</p>
              </div>
              <img src={KesarPistaFalooda} alt="KesarPistaFalooda" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Rasmalai Rabdi Falooda
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 9.99</p>
              </div>
              <img src={RasmalaiRabdiFalooda} alt="RasmalaiRabdiFalooda" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Milk Badam</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 9.99</p>
              </div>
              <img src={MilkBadam} alt="MilkBadam" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Dry Fruit Shake
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 9.99</p>
              </div>
              <img src={DryFruitShake} alt="DryFruitShake" />
            </div>

            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Fruit Punch</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 9.99</p>
              </div>
              <img src={FruitPunch} alt="FruitPunch" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Chikkoo Shake
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 9.99</p>
              </div>
              <img src={ChikkooShake} alt="ChikkooShake" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Mango Shake</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 4.99</p>
              </div>
              <img src={MangoShake} alt="MangoShake" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Mango Lassi</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 4.99</p>
              </div>
              <img src={MangoLassi} alt="MangoLassi" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Aampanna</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 6.99</p>
              </div>
              <img src={Aampanna} alt="Aampanna" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Sweet/Salty Lassi
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 3.99</p>
              </div>
              <img src={SweetSaltyLassi} alt="SweetSaltyLassi" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Masala Chaas</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 4.99</p>
              </div>
              <img src={MasalaChaas} alt="MasalaChaas" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Masala Shikanji
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 4.99</p>
              </div>
              <img src={MasalaShikanji} alt="MasalaShikanji" />
            </div>

            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Sugarcane Juice(House Spl)
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 7.99</p>
              </div>
              <img src={SugarcaneJuice} alt="SugarcaneJuice" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Mango Mojito</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 7.99</p>
              </div>
              <img src={MangoMojito} alt="MangoMojito" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Pineapple Mojito
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 7.99</p>
              </div>
              <img src={PineappleMojito} alt="PineappleMojito" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Green Tea 3.99
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 3.99</p>
              </div>
              <img src={GreenTea} alt="GreenTea" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Kashmiri Chai
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 4.99</p>
              </div>
              <img src={KashmiriChai} alt="KashmiriChai" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Pop(Coke/Pepsi/Ginger Ale etc)
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 2.49</p>
              </div>
              <img src={Pop} alt="Pop" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Indian Cola(Thumbs Up, Limca, Fanta)
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 3.49</p>
              </div>
              <img src={IndianCola} alt="IndianCola" />
            </div>
          </div>
        </div>
      </section>

      {/* KidsSpecial */}
      <section id="KidsSpecial">
        <div>
          <div className="menucard-head">
            <div className="menu-12 p-4">
              <div className="Chatpata-menu">
                <text>Kids Special</text>
              </div>
            </div>
            <div className="menucard-img1"></div>
          </div>
          <div className="menucard-container">
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Grilled Cheese Sandwich
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price"> $ 5.49</p>
              </div>
              <img src={GrilledCheeseSandwich} alt="GrilledCheeseSandwich" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Smiley Fries</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 3.99</p>
              </div>
              <img src={SmileyFries} alt="SmileyFries" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Mini Burger</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 4.99</p>
              </div>
              <img src={MiniBurger} alt="MiniBurger" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Nutella Dosa</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 5.99</p>
              </div>
              <img src={NutellaDosa} alt="NutellaDosa" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Cheese Dosa</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 7.49</p>
              </div>
              <img src={CheeseDosa} alt="CheeseDosa" />
            </div>

            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Strawberry Shake
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 6.99</p>
              </div>
              <img src={StrawberryShake} alt="StrawberryShake" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Chocolate Shake
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 6.99</p>
              </div>
              <img src={ChocolateShake} alt="DalTadka" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">
                  Vanilla Ice Cream Shake
                </p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 6.99</p>
              </div>
              <img src={VanillaIceCreamShake} alt="VanillaIceCreamShake" />
            </div>
          </div>
        </div>
      </section>

      {/* Sides */}
      <section id="Sides">
        <div>
          <div className="menucard-head">
            <div className="menu-13 p-4">
              <div className="Chatpata-menu">
                <text>Sides</text>
              </div>
            </div>
            <div className="menucard-img1"></div>
          </div>
          <div className="menucard-container">
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Raita</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price"> $ 4.99</p>
              </div>
              <img src={Raita} alt="Raita" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Plain Dahi</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 3.99</p>
              </div>
              <img src={PlainDahi} alt="PlainDahi" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Papadum</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 1.49</p>
              </div>
              <img src={Papadum} alt="Papadum" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Green Salad</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 3.99</p>
              </div>
              <img src={GreenSalad} alt="GreenSalad" />
            </div>
            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Onion Salad</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 3.99</p>
              </div>
              <img src={OnionSalad} alt="OnionSalad" />
            </div>

            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Chutney</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 0.99</p>
              </div>
              <img src={Chutney} alt="Chutney" />
            </div>

            <div class="menucards">
              <div className="menucards-1 mt-2">
                <p className="text-white text-start first-text">Pickle</p>
                <p className="text-white text-start"></p>
                <p className="text-white text-start price">$ 1.49</p>
              </div>
              <img src={Pickle} alt="Pickle" />
            </div>
          </div>
        </div>
      </section>
      <ScrollToTopButton />
    </div>
  );
}

export default MenuCard;
