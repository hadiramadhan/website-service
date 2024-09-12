import HeroImage from "../assets/images/hero.svg"
import AboutImage from "../assets/images/about.svg"
import Proyek2312 from "../assets/images/2312.png"
import Proyek12345 from "../assets/images/12345.png"
import Proyek2345 from "../assets/images/2345.png"
import Proyek567 from "../assets/images/567.png"
import Proyek6789 from "../assets/images/6789.png"
const HomePage = () => {
  return (
   <div className="homepage pb-10">
    <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
            <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">Website <span className="font-bold text-sky-500 underline">Service</span>
            </h1>
            <p className="text-base/8 mb-7">Selamat Datang Diwebsite Service Kami</p>
            <a href="#" className="bg-sky-400 hover:bg-sky-600 transition-all py-2 px-4 text-white shadow rounded-full">Tentang Kami <i className="ri-information-line"></i>
            </a>
        </div>
        <div className="box">
            <img src={HeroImage} alt="Hero Image" className="md:w-full w-[400px] mx-auto md:m-0" />
        </div>
    </div>
    <div className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 md:pt-20 pt-32" id="about">
        <div className="box md:order-1 order-2">
            <img src={AboutImage} alt="About" className="lg:w-[500px] w-[400px] md:m-0 mx-auto"/>
        </div>
        <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">Tentang <span className="font-bold text-sky-500 underline">Kami</span>
            </h1>
            <p className="text-base/loose">Kami Menyediakan Jasa Layanan Pembuatan Website Untuk Umkm Maupun Untuk Yang Lainnya</p>
        </div>
    </div>

    <div className="services pt-32" id="services">
        <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">Service <span className="font-bold text-sky-500 underline">Kami</span></h1>
        <p className="text-center">Selamat Datang Di Website Service Kami</p>
        <div className="service-box pt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box bg-sky-400 rounded-lg shadow p-5">
                <i className="ri-number-1 text-3xl text-white"></i>
                <h3 className="text-xl font-bold text-white mt-6 mb-2">Service Website 1</h3>
                <p className="text-white text-base/loose">Service Kami Selalu Terdepan</p>
            </div>
            <div className="box box bg-sky-400 rounded-lg shadow p-5">
                <i className="ri-number-2 text-3xl text-white"></i>
                <h3 className="text-xl font-bold text-white mt-6 mb-2">Service Website 2</h3>
                <p  className="text-white text-base/loose">Kami Mengutamakan Kepuasaan User</p>
            </div>
            <div className="box box bg-sky-400 rounded-lg shadow p-5">
                <i className="ri-number-3 text-3xl text-white"></i>
                <h3 className="text-xl font-bold text-white mt-6 mb-2">Service Wesbite 3</h3>
                <p  className="text-white text-base/loose">Menggunakan Framework Yang Cepat</p>
            </div>
        </div>
    </div>
        <div className="proyek pt-32" id="proyek">
        <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">Proyek <span className="text-sky-500 font-bold underline">Kami</span></h1>
        <p className="text-center">Selamat Datang Proyek Kami</p>
        <div className="proyek-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box p-2 bg-white">
            <img src={Proyek2312} alt="proyek 1" className="w-full h-[220px]" />
            <h3 className="text-xl font-bold  mt-6 mb-2">Proyek 1
            </h3>
            <a href="https://nadi-animelist.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline text-sky-500">Click Untuk Melihat</a>
        </div>
            <div className="box p-2 bg-white">
            <img src={Proyek12345} alt="proyek 1 " className="w-full h-[220px]" />
            <h3 className="text-xl font-bold  mt-6 mb-2">Proyek 2</h3>
            <a href="https://hadi-zoom.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline text-sky-500">Click Untuk Melihat</a>
        </div>
            <div className="box p-2 bg-white">
            <img src={Proyek2345} alt="proyek 1" className="w-full h-[220px]" />
            <h3 className="text-xl font-bold  mt-6 mb-2">Proyek 3</h3>
            <a href="https://ptksn.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline text-sky-500">Click Untuk Melihat</a>
        </div>
            <div className="box p-2 bg-white">
            <img src={Proyek567} alt="proyek 1" className="w-full h-[220px]" />
            <h3 className="text-xl font-bold  mt-6 mb-2">Proyek 4</h3>
            <a href="https://portofolio-hadi-ra.vercel.app/about" target="_blank" rel="noopener noreferrer" className="underline text-sky-500">Click Untuk Melihat</a>
        </div>
            <div className="box p-2 bg-white">
            <img src={Proyek6789} alt="proyek 1" className="w-full h-[220px]" />
            <h3 className="text-xl font-bold  mt-6 mb-2">Proyek 5</h3>
            <a href="https://undangan-wedding-amber.vercel.app/#undangan" target="_blank" rel="noopener noreferrer" className="underline text-sky-500">Click Untuk Melihat</a>
        </div>
        </div>
        </div>
   </div>
   </div>

  )
}

export default HomePage
