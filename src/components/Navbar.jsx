import { useEffect, useState } from "react"

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleClick = () => {
        setClick(!click);
        console.log(click)
    }

    let menuActive = click ? "left-0" : "-left-full";
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 5) {
                console.log(scroll)
                setScroll(true)
                setClick(false)

            }else {
                setScroll(false)
            }
        })
    })

    let scrollActive = scroll ? "py-6 bg-white shadow" : "py"
  return (
    <div className={`navbar fixed w-full transition-all py-6 ${scrollActive}`}>
     <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
            <div className="logo">
                <h1 className="sm:text-2xl text-xl font-bold">Website Service</h1>
            </div>
            <ul className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg 
            shadow-slate-300 bg-green-500 font-bold text-white transition-all`}>
                <li className="flex items-center gap-3">
                    <i className="ri-home-3-line text-3xl md:hidden block"></i>
                    <a href="#home" className="font-medium opacity-75">Beranda</a>
                </li>
                <li  className="flex items-center gap-3">
                    <i className="ri-information-line text-3xl md:hidden block"></i>
                    <a href="#about" className="font-medium opacity-75">About Us</a>
                </li>
                <li  className="flex items-center gap-3">
                    <i className="ri-settings-3-line text-3xl md:hidden block"></i> 
                    <a href="#services" className="font-medium opacity-75">Service</a>
                </li>
                <li  className="flex items-center gap-3">
                    <i className="ri-image-line text-3xl md:hidden block"></i>
                    <a href="#proyek" className="font-medium opacity-75">Project</a>
                </li>
            </ul>
            <div className="sosial flex items-center gap-2">
                <a href="#social" className="bg-red-500 px-5 py-2 rounded-full text-white font-bold hover:bg-red-300 transition-all">Sosial Media</a>
                <i className="ri-menu-line text-3xl md:hidden block" onClick={handleClick}></i>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Navbar
