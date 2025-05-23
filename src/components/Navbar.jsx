import React, { useEffect } from  "react";
import Gambar from "../assets/petanikode-com/image1.png";
import Gambar1 from '../assets/petanikode-com/image2.png';
import Gambar2 from '../assets/petanikode-com/image3.png';
import Gambar3 from '../assets/petanikode-com/image4.png';
import Gambar4 from '../assets/petanikode-com/image5.png';
import Gambar5 from '../assets/petanikode-com/image6.png';
import Gambar6 from '../assets/petanikode-com/image7.png';
import Gambar7 from '../assets/petanikode-com/image8.png';


function Navbar() {

useEffect( () => {

})

    return(
        <div className="Nav_Content">
            <div className="bg-teal-900 text-white top-0 z-40 shadow-md flex mx-auto justify-between px-4 h-12.5" >
                <div className="flex flex-row gap-1 item-center py-3 md:py-2 items-center">
                    <a href="#" className="hidden md:inline-flex item-center gap-1 px-3 py-2 rounded-lg font-medium text-gray-100 hover:bg-teal-700 focus:ring-2 focus:ring-teal-500"><img src={Gambar} alt="" className="w-8 h-8 active:scale-95"/></a>
                    <a href="#"className="hidden md:inline-flex item-center gap-1 px-3 py-2 rounded-lg font-medium text-gray-100 hover:bg-teal-700 focus:ring-2 focus:ring-teal-500"><img src={Gambar1} alt="" className="w-5 h-5 fill-none stroke-currentcolor stroke-width-2"/>Home</a>
                    <a href="#"className="hidden md:inline-flex item-center gap-1 px-3 py-2 rounded-lg font-medium text-gray-100 hover:bg-teal-700 focus:ring-2 focus:ring-teal-500"><img src={Gambar2} alt="" className="w-5 h-5 fill-none stroke-currentcolor stroke-width-2"/>Kelas</a>
                    <a href="#"className="hidden md:inline-flex item-center gap-1 px-3 py-2 rounded-lg font-medium text-gray-100 hover:bg-teal-700 focus:ring-2 focus:ring-teal-500"><img src={Gambar3} alt="" className="w-5 h-5 fill-none stroke-currentcolor stroke-width-2"/>Tutorial</a>
                    <a href="#"className="hidden md:inline-flex item-center gap-1 px-3 py-2 rounded-lg font-medium text-gray-100 hover:bg-teal-700 focus:ring-2 focus:ring-teal-500"><img src={Gambar4} alt="" className="w-5 h-5 fill-none stroke-currentcolor stroke-width-2"/>Buku</a>
                    <a href="#"className="hidden md:inline-flex item-center gap-1 px-3 py-2 rounded-lg font-medium text-gray-100 hover:bg-teal-700 focus:ring-2 focus:ring-teal-500"><img src={Gambar5} alt="" className="w-5 h-5 fill-none stroke-currentcolor stroke-width-2"/>Discord</a>

                </div>
                <div className="flex items-center gap-3 ml-6">
                    <button><a href="#"className="hidden md:inline-flex item-center gap-1 px-3 py-2 rounded-lg font-medium text-gray-100 hover:bg-teal-700 focus:ring-2 focus:ring-teal-500"><img src={Gambar6} alt="" className="w-5 h-5 fill-none stroke-currentcolor stroke-width-2"/></a></button>
                     <button><a href="#"className="hidden md:inline-flex item-center gap-1 px-3 py-2 rounded-lg font-medium text-gray-100 hover:bg-teal-700 focus:ring-2 focus:ring-teal-500"><img src={Gambar7} alt="" className="w-5 h-5 fill-none stroke-currentcolor stroke-width-2"/></a></button>
                    <button><a href="#" className="bg-teal-500 hover:bg-teal-700 active:bg-teal-400 focus:ring-2 focus:ring-teal-300  hidden md:inline-flex item-center gap-1 px-3 py-2 rounded-lg font-medium text-gray-100">Join NewsLetter</a></button> 
                </div>
            </div>
            
        </div>
        
    )
    
}

export default Navbar;