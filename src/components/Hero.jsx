import Gambar from "../assets/petanikode-com/PetaniKode.png"
function Hero() {

    return(
        <header className="text-gray-100 bg-slate-800">
            <div className="container mx-auto px-4 py-34 text-center">
                <div className="relative py-6">
                  <img src={Gambar} className="w-lg absolute right-35 -top-30 " />
            </div>
            <div className="w-1/2 mx-15">
            <h1 className="text-6xl font-extrabold">Petani Kode</h1>
            <p className="text 2xl  font-extralight mx-w-1/2 mt-5">Belajar budidaya kode<em>(coding)</em> dengan tutorial yang mudah <br /> dipahami. <em>Mostly</em> pakai Linux.</p>
            </div>
            <div className="mt-5 flex flex-row gap-3 ml-15">
                <button className="px-3 py-2 bg-teal-600 hover:bg-teal-700 rounded-lg">Mulai belajar</button>
                <button className="px-3 py-2 bg-teal-900 border border-teal-400/50 rounded-lg hover:bg-teal-700">Join Newsletter</button>

            </div>

            </div>

        </header>
    )
}

export default Hero