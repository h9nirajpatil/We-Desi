import React from 'react'
import './menucard.css'
import Samosa from "../../assets/MenuCardImg/samosa-plate-e1687625585145.webp"
import alloPuri from "../../assets/MenuCardImg/ChatpataChats/Allo-Puri.webp"
import Batata from "../../assets/MenuCardImg/ChatpataChats/Batata-Vada.webp"
import Dabeli from "../../assets/MenuCardImg/ChatpataChats/Dabeli.webp"
import DahiBhalla from "../../assets/MenuCardImg/ChatpataChats/DahiBhalla.webp"
import Gobhi from "../../assets/MenuCardImg/ChatpataChats/Gobhi-Cauliflower-65-Fry.webp"
import IMG_6605 from "../../assets/MenuCardImg/ChatpataChats/IMG_6605-e1687626700389.webp"
import Paneer from "../../assets/MenuCardImg/ChatpataChats/Paneer-Pakora.webp"
import PavBhaji from "../../assets/MenuCardImg/ChatpataChats/Pav-Bhaji.webp"
import allo1 from "../../assets/MenuCardImg/ChatpataChats/allo-tikki-chana-1.jpg"
import amrritsarikulchachana from "../../assets/MenuCardImg/ChatpataChats/amrritsarikulchachana.webp"
import bhelpuri from "../../assets/MenuCardImg/ChatpataChats/bhelpuri (1).png"
import bomby_sandvich from "../../assets/MenuCardImg/ChatpataChats/bomby_sandvich.webp"
import chana from "../../assets/MenuCardImg/ChatpataChats/chana-Samosa.webp"
import chat from "../../assets/MenuCardImg/ChatpataChats/chat-papri.webp"
import dahi from "../../assets/MenuCardImg/ChatpataChats/dahi-puri.webp"
import khasta_kachori from "../../assets/MenuCardImg/ChatpataChats/khasta_kachori.png"
import onion from "../../assets/MenuCardImg/ChatpataChats/onion-bhaaji.jpg"
import pani_puri from "../../assets/MenuCardImg/ChatpataChats/pani_puri.webp"
import pocket from "../../assets/MenuCardImg/ChatpataChats/pocket-kulcha.webp"
import raj_kachori from "../../assets/MenuCardImg/ChatpataChats/raj_kachori.webp"
import vada_pav from "../../assets/MenuCardImg/ChatpataChats/vada_pav.webp"
import vegpakora from "../../assets/MenuCardImg/ChatpataChats/vegpakora.webp"
import bhatura from "../../assets/MenuCardImg/ChatpataChats/chana-bhatura.webp"

// tikke tikke
import desi from "../../assets/MenuCardImg/TikkeTikke/desi-platters.webp"
import haryali from "../../assets/MenuCardImg/TikkeTikke/haryali-paneer-tikka.webp"
import malai from "../../assets/MenuCardImg/TikkeTikke/malai-paneer-tikka.webp"
import masala from "../../assets/MenuCardImg/TikkeTikke/masala-soya-chaap.webp"
import mlai from "../../assets/MenuCardImg/TikkeTikke/mlai-soya-chaap.webp"
import paneer_tikka from "../../assets/MenuCardImg/TikkeTikke/paneer-tikka-2.webp"
import veg_kabab from "../../assets/MenuCardImg/TikkeTikke/veg-kabab.webp"
import desi_platters from "../../assets/MenuCardImg/TikkeTikke/desi-platters.webp"

// burger and rolls
import Allo_Tikki_Burger from "../../assets/MenuCardImg/BurgerAndRolls/Allo-Tikki-Burger.webp"
import Chilli_Paneer_Roll from "../../assets/MenuCardImg/BurgerAndRolls/Chilli-Paneer-Roll.webp"
import Noodle_Burger from "../../assets/MenuCardImg/BurgerAndRolls/Noodle-Burger.webp"
import Paneer_Tikka_Roll from "../../assets/MenuCardImg/BurgerAndRolls/Paneer-Tikka-Roll.webp"
import deSoya_Chaap_Roll from "../../assets/MenuCardImg/BurgerAndRolls/Soya-Chaap-Roll.webp"
import Veg_Kathi_Roll from "../../assets/MenuCardImg/BurgerAndRolls/Veg-Kathi-Roll.webp"

//Indo Chinese
import Chowmein from "../../assets/MenuCardImg/IndoChinese/Chowmein.jpg"
import Fried_Rice from "../../assets/MenuCardImg/IndoChinese/Fried-Rice.jpg"
import Gobhi_Manchurian from "../../assets/MenuCardImg/IndoChinese/Gobhi-Manchurian.webp"
import Momos_Steamed_Fried from "../../assets/MenuCardImg/IndoChinese/Momos-Steamed-Fried.webp"
import Spring_Roll from "../../assets/MenuCardImg/IndoChinese/Spring-Roll.webp"
import Tandoori_Momos from "../../assets/MenuCardImg/IndoChinese/Tandoori-Momos.webp"
import Veg_Manchurian from "../../assets/MenuCardImg/IndoChinese/Veg-Manchurian.webp"



function MenuCard() {
    return (
        <div className='menucard'>
            <div className=''>
                <div className='menucard-head'>
                    <div className='menu-1 p-4'>
                        <div className='Chatpata-menu'>
                            <text>Chatpata Chats</text>
                        </div>
                    </div>
                    <div className='menucard-img1'></div>
                </div>
                <div className='menucard-container'>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Samosa Plate</p>
                            <p className='text-white text-start'>Vegetable samosas with  onions,tomato and spices</p>
                            <p className='text-white text-start price'>$ 4.00</p>
                        </div>
                        <img src={Samosa} alt="Samosa" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Allo Tikki With Salad</p>
                            <p className='text-white text-start'>Deep fried mashed potato cutlets served with green salad</p>
                            <p className='text-white text-start price'>$5.49</p>
                        </div>
                        <img src={allo1} alt="allo1" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Aloo Tikki + Chana (2 pcs)</p>
                            <p className='text-white text-start'>Deep fried mashed potato cutlet mixed with different spices and topped with yogurt, tamarind chutney, mint chutney, onions and tomatoes. Perfect on the go!</p>
                            <p className='text-white text-start price'>$ 6.99</p>
                        </div>
                        <img src={allo1} alt="allo1" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Chana Samosa</p>
                            <p className='text-white text-start'>Vegetable samosas with  onions,tomato and spices</p>
                            <p className='text-white text-start price'>$ 6.99</p>
                        </div>
                        <img src={chana} alt="chana" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Chat Papri</p>
                            <p className='text-white text-start'>Crispy dough wafers topped with potato, chickpea, onions, tomatoes, yogurt, mint chutney, tamarind chutney, and our special in-house sauce. Perfect on the go</p>
                            <p className='text-white text-start price'>$ 6.99</p>
                        </div>
                        <img src={chat} alt="chat" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Dahi Bhalla</p>
                            <p className='text-white text-start'>Deep fried lentil fritters dunked in creamy yogurt, topped with different kinds of sweet spicy chutneys</p>
                            <p className='text-white text-start price'>$6.99</p>
                        </div>
                        <img src={DahiBhalla} alt="DahiBhalla" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Veg Pakora</p>
                            <p className='text-white text-start'>crispy fritters made with onions, potatoes, spinach gram flour, spices and herbs</p>
                            <p className='text-white text-start price'>$ 5.49</p>
                        </div>
                        <img src={vegpakora} alt="vegpakora" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Onion Bhaji</p>
                            <p className='text-white text-start'>Onions dipped in gram flour and fried with herb</p>
                            <p className='text-white text-start price'>$5.49</p>
                        </div>
                        <img src={onion} alt="onion" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Paneer Pakora</p>
                            <p className='text-white text-start'>Slices of Paneer with coriander filling coated in our special batter and deep fried</p>
                            <p className='text-white text-start price'>$ 7.99</p>
                        </div>
                        <img src={Paneer} alt="Paneer" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Gobhi Pakora</p>
                            <p className='text-white text-start'>Fritters made with cauliflower florets, gram flour, spices and herbs</p>
                            <p className='text-white text-start price'>$ 7.99</p>
                        </div>
                        <img src={Gobhi} alt="Gobhi" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Bhel Puri</p>
                            <p className='text-white text-start'>Slices of vegies with coriander filling coated in our special batter and deep fried</p>
                            <p className='text-white text-start price'>$ 5.99</p>
                        </div>
                        <img src={bhelpuri} alt="bhelpuri" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Pani Puri(6 pieces)</p>
                            <p className='text-white text-start'>Hollow fried crispy flatbread, comes with potato and chickpea filling, tamarind chutney and spicy masala pani (water). Perfect on the go</p>
                            <p className='text-white text-start price'>$6.99</p>
                        </div>
                        <img src={pani_puri} alt="pani_puri" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Dahi Puri</p>
                            <p className='text-white text-start'>Hollow fried crispy flatbread, comes with potato and chickpea filling, tamarind chutney and dahi (curd). Perfect on the go</p>
                            <p className='text-white text-start price'>$ 7.99</p>
                        </div>
                        <img src={dahi} alt="dahi" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Chana Bhatura</p>
                            <p className='text-white text-start'>Two fried puris served with season chickpeas and spicy pickle</p>
                            <p className='text-white text-start price'>$ 8.99</p>
                        </div>
                        <img src={bhatura} alt="bhatura" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Allo Puri</p>
                            <p className='text-white text-start'>Warmly spiced potato curry with crispy Indian fried bread</p>
                            <p className='text-white text-start price'>$ 9.99</p>
                        </div>
                        <img src={alloPuri} alt="alloPuri" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Amrritsari Kulcha Chana</p>
                            <p className='text-white text-start'>Spicy potato filled Nan mixed with coriander, mint and many more spices. Served with 2 Kulchas, Chana and Roasted Tamarind Chutney</p>
                            <p className='text-white text-start price'>$ 7.99</p>
                        </div>
                        <img src={amrritsarikulchachana} alt="amrritsarikulchachana" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Pocket Kulcha</p>
                            <p className='text-white text-start'></p>
                            <p className='text-white text-start price'>$ 6.99</p>
                        </div>
                        <img src={pocket} alt="pocket" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Raj Kachori</p>
                            <p className='text-white text-start'>Crispy fried shells filled with potatoes, yogurt, boiled lentils, spices, chutneys & more!</p>
                            <p className='text-white text-start price'>$ 7.99</p>
                        </div>
                        <img src={raj_kachori} alt="raj_kachori" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Khasta Kachori</p>
                            <p className='text-white text-start'>Puff pastry filled with a delectable moong dal mixture and deep fried.</p>
                            <p className='text-white text-start price'>$ 5.99</p>
                        </div>
                        <img src={khasta_kachori} alt="khasta_kachori" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Batata Vada</p>
                            <p className='text-white text-start'>batter-coated potato stuffed fritter dumplings</p>
                            <p className='text-white text-start price'>$ 6.99</p>
                        </div>
                        <img src={Batata} alt="Batata" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Bombay Sandwich</p>
                            <p className='text-white text-start'>Sandwich with mix vegetables , coriander-mint chutney and special sandwich masala - crispy and grilled</p>
                            <p className='text-white text-start price'>$ 9.99</p>
                        </div>
                        <img src={bomby_sandvich} alt="bomby_sandvich" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Vada Pav</p>
                            <p className='text-white text-start'>Vada / Deep fried Potato dumpling placed inside a Bread Bun (Pav) - accompanied with Chutneys</p>
                            <p className='text-white text-start price'>$ 8.99</p>
                        </div>
                        <img src={vada_pav} alt="vada_pav" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Dabeli</p>
                            <p className='text-white text-start'>Spicy, Tangy and Sweet Potato filling inside a Bun, drizzled with a Spicy Chutney</p>
                            <p className='text-white text-start price'>$ 8.99</p>
                        </div>
                        <img src={Dabeli} alt="Dabeli" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'> 
                            <p className='text-white text-start first-text'>Pav Bhaji</p>
                            <p className='text-white text-start'>Spiced mixture of mashed Vegetables in a thick Gravy, served hot with a soft white Bread cheese extra</p>
                            <p className='text-white text-start price'>$ 10.99</p>
                        </div>
                        <img src={PavBhaji} alt="PavBhaji" />
                    </div>
                </div>
            </div>
            <div>
                <div className='menucard-head'>
                    <div className='menu-2 p-4'>
                        <div className='Chatpata-menu'>
                            <text>Tikke Shikke</text>
                        </div>
                    </div>
                    <div className='menucard-img1'></div>
                </div>
                <div className='menucard-container'>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Paneer Tikka</p>
                            <p className='text-white text-start'>Paneer marinated in marinade the soft and juicy morsels of paneer coated with spicy and is a delight to eat</p>
                            <p className='text-white text-start price'>$ 12.99</p>
                        </div>
                        <img src={paneer_tikka} alt="paneer_tikka" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Malai Paneer Tikka</p>
                            <p className='text-white text-start'>Grilled homemade cheese pieces, peppers, and onions with cooking cream</p>
                            <p className='text-white text-start price'>$ 12.99</p>
                        </div>
                        <img src={malai} alt="malai" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Haryali Paneer Tikka</p>
                            <p className='text-white text-start'>Paneer marinated in marinade the soft and juicy morsels of paneer coated with spicy and is a delight to eat</p>
                            <p className='text-white text-start price'>$ 12.99</p>
                        </div>
                        <img src={haryali} alt="haryali" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Amritsari Soya chaap</p>
                            <p className='text-white text-start'></p>
                            <p className='text-white text-start price'>$ 12.99</p>
                        </div>
                        <img src={masala} alt="masala" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Malai Soya Chaap</p>
                            <p className='text-white text-start'>Soya cooked in the white gravy made with cream, curd, cashew paste and spices</p>
                            <p className='text-white text-start price'>$ 12.99</p>
                        </div>
                        <img src={malai} alt="chat" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Veg Kebab</p>
                            <p className='text-white text-start'>Soya Chaap marinated in yogurt, spices and cooked in tandoor</p>
                            <p className='text-white text-start price'>$ 12.99</p>
                        </div>
                        <img src={veg_kabab} alt="veg_kabab" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>WeDesi Spl Platter</p>
                            <p className='text-white text-start'></p>
                            <p className='text-white text-start price'>$ 19.99</p>
                        </div>
                        <img src={desi_platters} alt="desi_platters" />
                    </div>
                </div>
            </div>
            <div>
                <div className='menucard-head'>
                    <div className='menu-2 p-4'>
                        <div className='Chatpata-menu'>
                            <text>Burgers and Rolls</text>
                        </div>
                    </div>
                    <div className='menucard-img1'></div>
                </div>
                <div className='menucard-container'>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Allo Tikki Burger</p>
                            <p className='text-white text-start'>Crisp golden potato patties sandwiched between burger buns and topped with veggies and slathered with chutneys</p>
                            <p className='text-white text-start price'>$ 6.99</p>
                        </div>
                        <img src={Allo_Tikki_Burger} alt="Allo_Tikki_Burger" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Noodle Burger</p>
                            <p className='text-white text-start'>Grilled Hakka-Style Tikki Burger in a bun, topped with Hakka Chow mien noodles with Szechuan sauce</p>
                            <p className='text-white text-start price'>$ 7.99</p>
                        </div>
                        <img src={Noodle_Burger} alt="Noodle_Burger" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Soya Chaap Roll</p>
                            <p className='text-white text-start'>Marinated soya chaap in yogurt, Indian spices, onion and wrapped served with mint chutney</p>
                            <p className='text-white text-start mt-5price'>$ 10.99</p>
                        </div>
                        <img src={deSoya_Chaap_Roll} alt="deSoya_Chaap_Roll" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Veg Kathi Roll</p>
                            <p className='text-white text-start'>Indian layered paratha wrap with a filling of grilled kebabs, green chutney or sauces, shredded veggies</p>
                            <p className='text-white text-start price'>$ 9.99</p>
                        </div>
                        <img src={Veg_Kathi_Roll} alt="Veg_Kathi_Roll" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Paneer Tikka Roll</p>
                            <p className='text-white text-start'>Cottage cheese marinated in yogurt, Indian spices, char-grilled with onions and wrapped served with mint chutney</p>
                            <p className='text-white text-start price'>$ 10.99</p>
                        </div>
                        <img src={Paneer_Tikka_Roll} alt="Paneer_Tikka_Roll" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Chilli Paneer Roll</p>
                            <p className='text-white text-start'>Chilli paneer, char-grilled with onions and wrapped served with mint chutney</p>
                            <p className='text-white text-start price'>$ 10.99</p>
                        </div>
                        <img src={Chilli_Paneer_Roll} alt="Chilli_Paneer_Roll" />
                    </div>
                </div>
            </div>
            <div>
                <div className='menucard-head'>
                    <div className='menu-2 p-4'>
                        <div className='Chatpata-menu'>
                            <text>Indo Chinese</text>
                        </div>
                    </div>
                    <div className='menucard-img1'></div>
                </div>
                <div className='menucard-container'>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Momos (Steamed/Fried)</p>
                            <p className='text-white text-start'>Rounded soft dough steamed/fried, stuffed with vegetable, served with spicy</p>
                            <p className='text-white text-start price'>$ 10.99</p>
                        </div>
                        <img src={Momos_Steamed_Fried} alt="Momos_Steamed_Fried" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Tandoori Momos</p>
                            <p className='text-white text-start'>Classic momos tossed in tandoori paste and chargrilled to perfection</p>
                            <p className='text-white text-start price'>$ 11.99</p>
                        </div>
                        <img src={Tandoori_Momos} alt="Tandoori_Momos" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Fried Rice</p>
                            <p className='text-white text-start'>Wok tossed rice with garden fresh vegetables, soy sauce, chilli sauce and spices</p>
                            <p className='text-white text-start price'>$ 6.99</p>
                        </div>
                        <img src={Fried_Rice} alt="Fried_Rice" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Chowmein</p>
                            <p className='text-white text-start'>Delectable dish wok stir fried noodles with garden fresh vegetables, soy sauce, chilli sauce and spices</p>
                            <p className='text-white text-start price'>$ 9.99</p>
                        </div>
                        <img src={Chowmein} alt="Chowmein" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Veg Manchurian</p>
                            <p className='text-white text-start'>Indo Chinese dish of fried veggie balls in a spicy, sweet and tangy sauce.- with gravy.</p>
                            <p className='text-white text-start price'>$ 12.99</p>
                        </div>
                        <img src={Veg_Manchurian} alt="Veg_Manchurian" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Spring Roll</p>
                            <p className='text-white text-start'>Chinese savory snack made with pastry sheet filled with vegetables, rolled & fried</p>
                            <p className='text-white text-start price'>$ 6.99</p>
                        </div>
                        <img src={Spring_Roll} alt="Spring_Roll" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'> 
                            <p className='text-white text-start first-text'>Gobhi Manchurian</p>
                            <p className='text-white text-start'>Cauliflower in an exotic Asian dish made with onions, green chili, and soya sauc</p>
                            <p className='text-white text-start price'>$ 10.99</p>
                        </div>
                        <img src={Gobhi_Manchurian} alt="Gobhi_Manchurian" />
                    </div>
                </div>
            </div>
            <div>
                <div className='menucard-head'>
                    <div className='menu-2 p-4'>
                        <div className='Chatpata-menu'>
                            <text>South Indian</text>
                        </div>
                    </div>
                    <div className='menucard-img1'></div>
                </div>
                <div className='menucard-container'>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Rasam</p>
                            <p className='text-white text-start'>A tangy spicy tomato soup elevated with red chillies,curry leaves and tamarind</p>
                            <p className='text-white text-start price'>$ 10.99</p>
                        </div>
                        <img src={Momos_Steamed_Fried} alt="Momos_Steamed_Fried" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Plain Dosa</p>
                            <p className='text-white text-start'>Incredibly large thin crispy crepe</p>
                            <p className='text-white text-start price'>$ 7.99</p>
                        </div>
                        <img src={Tandoori_Momos} alt="Tandoori_Momos" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Gobhi 65 (Dry)</p>
                            <p className='text-white text-start'>crispy deep-fried cauliflower florets coated in a tangy and fiery sauce</p>
                            <p className='text-white text-start price'>$ 10.99</p>
                        </div>
                        <img src={Fried_Rice} alt="Fried_Rice" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Paneer 65</p>
                            <p className='text-white text-start'></p>
                            <p className='text-white text-start price'>$ 11.99</p>
                        </div>
                        <img src={Chowmein} alt="Chowmein" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Veg Manchurian</p>
                            <p className='text-white text-start'>Indo Chinese dish of fried veggie balls in a spicy, sweet and tangy sauce.- with gravy.</p>
                            <p className='text-white text-start price'>$ 12.99</p>
                        </div>
                        <img src={Veg_Manchurian} alt="Veg_Manchurian" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Masala Dosa</p>
                            <p className='text-white text-start'>Rice flour pancakes served with sambar, Chutney & stuffed inside with potatoes & onions</p>
                            <p className='text-white text-start price'>$ 9.99</p>
                        </div>
                        <img src={Spring_Roll} alt="Spring_Roll" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Mysore Masala Dosa</p>
                            <p className='text-white text-start'>Crisp and soft dosa spiced with red chutney and served with a potato filling, along with coconut chutney</p>
                            <p className='text-white text-start price'>$ 10.99</p>
                        </div>
                        <img src={Gobhi_Manchurian} alt="Gobhi_Manchurian" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Pav Bhaji Dosa</p>
                            <p className='text-white text-start'>Crisp and soft dosa with pav bhaji filling served with coconut chutney</p>
                            <p className='text-white text-start price'>$ 11.99</p>
                        </div>
                        <img src={Gobhi_Manchurian} alt="Gobhi_Manchurian" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Ghee Masala Dosa</p>
                            <p className='text-white text-start'>Crispy rice and lentil crepe and a spiced masala potato filling made in clarified butter</p>
                            <p className='text-white text-start price'>$ 11.99</p>
                        </div>
                        <img src={Gobhi_Manchurian} alt="Gobhi_Manchurian" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Onion Rava Masala Dosa</p>
                            <p className='text-white text-start'></p>
                            <p className='text-white text-start price'>$ 11.99</p>
                        </div>
                        <img src={Gobhi_Manchurian} alt="Gobhi_Manchurian" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Uttapam</p>
                            <p className='text-white text-start'>A thick soft version of the dosa, comforting like a savoury pancake with a few variations of lentils</p>
                            <p className='text-white text-start price'>$ 9.99</p>
                        </div>
                        <img src={Gobhi_Manchurian} alt="Gobhi_Manchurian" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Idli Sambhar(3 pieces)</p>
                            <p className='text-white text-start'>Cakes made by steaming a batter consisting of fermented black lentils and rice soaked in Sambhar</p>
                            <p className='text-white text-start price'>$ 6.99</p>
                        </div>
                        <img src={Gobhi_Manchurian} alt="Gobhi_Manchurian" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Vada Sambhar(2 pieces)</p>
                            <p className='text-white text-start'>Medhu vadas soaked in our sambar</p>
                            <p className='text-white text-start price'>$ 6.99</p>
                        </div>
                        <img src={Gobhi_Manchurian} alt="Gobhi_Manchurian" />
                    </div>
                    <div class="menucards">
                        <div className='menucards-1 mt-2'>
                            <p className='text-white text-start first-text'>Paneer Dosa</p>
                            <p className='text-white text-start'></p>
                            <p className='text-white text-start price'>$ 5.99</p>
                        </div>
                        <img src={Gobhi_Manchurian} alt="Gobhi_Manchurian" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuCard