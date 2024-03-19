import React from 'react'
import laddu from '../../assets/SweetsImg/Laddu.png'
import Cham from '../../assets/SweetsImg/Cham-Cham.png'
import Barfi from '../../assets/SweetsImg/Gajrela-Barfi.png'
import Jamun from '../../assets/SweetsImg/Gulab-Jamun.png'
import Kalakand from '../../assets/SweetsImg/Kalakand-.png'
import Khoya from '../../assets/SweetsImg/Khoya-Barfi.png'
import Milkcake from '../../assets/SweetsImg/Milkcake.png'
import Peda from '../../assets/SweetsImg/Peda.png'
import Petha from '../../assets/SweetsImg/Petha.png'
import Rasgulla from '../../assets/SweetsImg/Rasgulla.png'
import Sandwich from '../../assets/SweetsImg/Sandwich.png'
import './sweets.css'

function Sweets() {
  return (
    <div className='Sweets'>
        <h1 className='sweet-text-main'>Sweets</h1>
        <div className='d-flex flex-column mt-2 mb-2'>
            <img src={laddu} alt="laddu" width={200} height={200}/>
            <text className='sweets-text'>Laddu</text>
            <p className='sweets-text-p'>Laddu is a spherical sweet from the Indian subcontinent made of various ingredients and sugar syrup or jaggery.</p>
            <text className='sweets-text'>$6/lb</text>
        </div>
        <div className='d-flex flex-column mt-2 mb-2'>
            <img src={Rasgulla} alt="Rasgulla" width={200} height={200}/>
            <text className='sweets-text'>Rasgulla</text>
            <p className='sweets-text-p'>made from ball shaped dumplings made from paneer and cooked in a light sugar syrup. Rasgulla quantity.</p>
            <text className='sweets-text'>$7/lb</text>
        </div>
        <div className='d-flex flex-column mt-2 mb-2'>
            <img src={Jamun} alt="Jamun" width={200} height={200}/>
            <text className='sweets-text'>Gulab Jamun</text>
            <p className='sweets-text-p'>Fried milk balls soaked in sweet syrup, such as rose syrup or honey.</p>
            <text className='sweets-text'>$7/lb</text>
        </div>
        <div className='d-flex flex-column mt-2 mb-2'>
            <img src={Petha} alt="Petha" width={200} height={200}/>
            <text className='sweets-text'>Petha</text>
            <p className='sweets-text-p'>Firm white pumpkin, sugar, kitchen lime, alum powder.</p>
            <text className='sweets-text'>$7/lb</text>
        </div>
        <div className='d-flex flex-column mt-2 mb-2'>
            <img src={Barfi} alt="Barfi" width={200} height={200}/>
            <text className='sweets-text'>Gajrela Barfi</text>
            <p className='sweets-text-p'>Easy, quick and tasty recipe of carrot burfi made with carrots, milk powder, ghee sugar and cardamom powder.</p>
            <text className='sweets-text'>$8/lb</text>
        </div>
        <div className='d-flex flex-column mt-2 mb-2'>
            <img src={Peda} alt="Peda" width={200} height={200}/>
            <text className='sweets-text'>Peda</text>
            <p className='sweets-text-p'>Creamy and rich peda is a delightfully sweet fudge-like confection often found in Indian shops and made traditionally with khoya.</p>
            <text className='sweets-text'>$8/lb</text>
        </div>
        <div className='d-flex flex-column mt-2 mb-2'>
            <img src={Sandwich} alt="Sandwich" width={200} height={200}/>
            <text className='sweets-text'>Sandwich</text>
            <p className='sweets-text-p'>There are both savory sandwiches, such as deli meat sandwiches, and sweet sandwiches, such as a peanut butter and jelly.</p>
            <text className='sweets-text'>$9/lb</text>
        </div>
        <div className='d-flex flex-column mt-2 mb-2'>
            <img src={Cham} alt="Cham" width={200} height={200}/>
            <text className='sweets-text'>Cham Cham</text>
            <p className='sweets-text-p'>Cham cham mithai is made with fresh chenna and pressure cooked in thick sugar syrup.</p>
            <text className='sweets-text'>$9/lb</text>
        </div>
        <div className='d-flex flex-column mt-2 mb-2'>
            <img src={Khoya} alt="Khoya" width={200} height={200}/>
            <text className='sweets-text'>Khoya Barfi</text>
            <p className='sweets-text-p'>Khoya barfi is a fudgy sweet made with fresh condensed milk, cubed and topped with pistachios.</p>
            <text className='sweets-text'>$10/lb</text>
        </div>
        <div className='d-flex flex-column mt-2 mb-2'>
            <img src={Milkcake} alt="Milkcake" width={200} height={200}/>
            <text className='sweets-text'>Milkcake</text>
            <p className='sweets-text-p'>made of milk, sugar, ghee, and an acidic agent such as lemon juice.</p>
            <text className='sweets-text'>$10/lb</text>
        </div>
        <div className='d-flex flex-column mt-2 mb-2'>
            <img src={Kalakand} alt="Kalakand" width={200} height={200}/>
            <text className='sweets-text'>Kalakand</text>
            <p className='sweets-text-p'>made with condensed milk solids, sugar & cardamom powder. Make it with paneer or ricotta cheese instantly.</p>
            <text className='sweets-text'>$10/lb</text>
        </div>
    </div>
  )
}

export default Sweets