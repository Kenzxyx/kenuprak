import React from "react"
import Gambar from '../assets/petanikode-com/petaniikode.svg'
import Gambar2 from '../assets/petanikode-com/facebook.png'
import Gambar3 from '../assets/petanikode-com/twitter.png'
import Gambar4 from '../assets/petanikode-com/telegram.png'
import Gambar5 from '../assets/petanikode-com/instagram.png'
import Gambar6 from '../assets/petanikode-com/youtube.png'
function Footer() {

    return(
      <footer className="pt-16 bg-slate-800 text-white mt-16">
        <div className="container mx-auto px-25  grid grid-cols-6 gap-6 ">
          <div className="col-span-2 mb-6 w-76">
            <a href=""><img src={Gambar} className="hover:fill-teal-600"/></a>
            <p className="mt-6">Tempat belajar budidaya kode (coding) <br /> dengan tutorial yang gampang dipahami</p>
          </div>
  
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-4">Belajar</h3>
            <ul className="flex flex-col gap-2">
              <li className="font-medium py-0 hover:text-teal-400 text-slate-300 cursor-pointer">Artikel</li>
              <li className="font-medium py-0 hover:text-teal-400 text-slate-300 cursor-pointer">Tutorial</li>
              <li className="font-medium py-0 hover:text-teal-400 text-slate-300 cursor-pointer">Buku</li>
            </ul>
          </div>
          <div className="mb-4 w-45 relative right-10">
            <h3 className="text-2xl font-bold mb-4 justify-text">Popular Tutorial</h3>
            <ul className="flex flex-col gap-2">
              <li className="font-medium py-0 hover:text-teal-400 text-slate-300 cursor-pointer">Tutorial Bahasa C</li>
              <li className="font-medium py-0 hover:text-teal-400 text-slate-300 cursor-pointer">Tutorial Javascript</li>
              <li className="font-medium py-0 hover:text-teal-400 text-slate-300 cursor-pointer">Tutorial Java</li>
              <li className="font-medium py-0 hover:text-teal-400 text-slate-300 cursor-pointer">Tutorial PHP</li>
              <li className="font-medium py-0 hover:text-teal-400 text-slate-300 cursor-pointer">Tutorial Phyton</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-4">Sosial Media</h3>
            <ul className="flex flex-col gap-2">
              <li className="font-medium py-0 hover:text-teal-400 text-slate-300 cursor-pointer">Facebook Page</li>
              <li className="font-medium py-0 hover:text-teal-400 text-slate-300 cursor-pointer">Instagram</li>
              <li className="font-medium py-0 hover:text-teal-400 text-slate-300 cursor-pointer">Twitter</li>
              <li className="font-medium py-0 hover:text-teal-400 text-slate-300 cursor-pointer">Youtube Channel</li>
              <li className="font-medium py-0 hover:text-teal-400 text-slate-300 cursor-pointer">Telegram Channel</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-4">Petani Kode</h3>
            <ul className="flex flex-col gap-2">
              <li className="font-medium py-0 hover:text-teal-400 text-slate-300 cursor-pointer">About</li>
              <li className="font-medium py-0 hover:text-teal-400 text-slate-300 cursor-pointer">FAQs</li>
              <li className="font-medium py-0 hover:text-teal-400 text-slate-300 cursor-pointer">Contact</li>
            </ul>
          </div>
       </div>
  
       <div className="text-sm py-6 mt-16 mx-auto border-t border-slate-700 text-center">
        <h2>Ikuti Kami di</h2>
        <div className="my-4 flex gap-4 items-center justify-center flex-wrap">
          <a className="inline-block p-2 rounded-full hover:bg-[#3b5998] bg-white/10 w-10"><img src={Gambar2}/></a>
          <a className="inline-block p-2 rounded-full hover:bg-[#1da1f2] bg-white/10 w-10"><img src={Gambar3}/></a>
          <a className="inline-block p-2 rounded-full hover:bg-[#08c] bg-white/10 w-10"><img src={Gambar4}/></a>
          <a className="inline-block p-2 rounded-full hover:bg-[#c13584] bg-white/10 w-10"><img src={Gambar5}/></a>
          <a className="inline-block p-2 rounded-full hover:bg-[#f00] bg-white/10 w-10"><img src={Gambar6}/></a>
        </div>
        <p>
          © 2025 <a className="font-bold hover:text-teal-400 cursor-pointer">Petani Kode</a> 
          <span>
            <br className="hidden"/> <span className="inline"> •  </span> 
            Made with ❤️ using <a className="hover:text-teal-400 cursor-pointer">Hugo 0.134.0</a>
          </span>
        </p>
       </div>
  
      </footer>  
    )
  }

export default Footer