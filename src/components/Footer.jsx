const Footer = () => {
  return (
    <div className="footer bg-white shadow mt-20" id="social">
     <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="py-4">&copy; Copyright 2024 <span className="font-bold">Hadi Ramadhan</span>
        </p>
        <div className="sosial-footer flex items-center sm:gap-7 gap-2">
        <a href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer">
            <i className="ri-facebook-circle-fill text-2xl cursor-pointer"></i>
                </a>
            <a href="https://x.com/hadiram37322953"
              target="_blank"
              rel="noopener noreferrer">
            <i className="ri-twitter-fill text-2xl cursor-pointer"></i>
                </a>
            <a href="https://www.instagram.com/hadiramadhan08/"
              target="_blank"
              rel="noopener noreferrer">
            <i className="ri-instagram-fill text-2xl cursor-pointer"></i>
              </a>
              <a href="https://www.linkedin.com/in/hadi-ramadhan-710390287/"
              target="_blank"
              rel="noopener noreferrer">
              <i className="ri-linkedin-box-fill text-2xl cursor-pointer"></i>
              </a>
            <a
              href="https://wa.me/62895358517252"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-whatsapp-line text-2xl cursor-pointer"></i>
            </a>
        </div>
     </div>
    </div>
  )
}

export default Footer
