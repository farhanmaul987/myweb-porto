import myPhoto from "../../assets/my-photo.png";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import whatsapp from "../../assets/whatsapp.png";

function Hero() {
  return (
    <>
      <section id="hero">
        <div className="container flex flex-row w-full">
          {/* Flex Left */}
          <div className="w-1/2">
            <div className="flex flex-col w-full">
              {/* Intro */}
              <div className="h-[35%] pt-36">
                <h2 className="heading-2 text-white">Hi!</h2>
                <h1 className="heading-1 text-white">
                  I am <span className="text-prLavender">Farhan Maulana</span>
                </h1>
                <p className="text-gray-300 font-poppins pt-1">
                  Web Developer | Discord Bot Developer
                </p>
              </div>
              <div className="h-[45%] pt-6">
                <div className="line-1 mt-1"></div>
                <p className="text-gray-300 text-justify font-poppins mt-3">
                  Bachelor of Informatics from Universitas Pembangunan Nasional
                  &quot;Veteran&quot; Jawa Timur who has a strong interest in
                  Web Development and Discord Bot Development. I am an
                  individual with a passion for learning new things. I have
                  experience working in a team and have a commitment to be able
                  to contribute my best.
                </p>
              </div>
              {/* End Intro */}

              {/* Button */}
              <div className="h-[20%] pt-9">
                <div className=" left-0 flex flex-row h-fit text-center">
                  <a
                    href="https://drive.google.com/file/d/1u-HucAID5WDx-BTMOmOmGrbRutY7zsYj/view?usp=sharing"
                    target="_blank"
                    className="downloadCV mr-4"
                  >
                    <i className="bi bi-file-text-fill mr-2"></i>
                    Download CV
                  </a>
                  <a href="#" className="moreAboutMe">
                    More
                  </a>
                </div>
              </div>
              {/* End Button */}
            </div>
          </div>
          {/* End Flex Left */}

          {/* Flex Right */}
          <div className="flex w-1/2">
            <div className="flex flex-col w-full">
              {/* Photo */}
              <div className="h-[90%] pt-28 pl-40">
                <img src={myPhoto} alt="my-photo" />
              </div>
              {/* End Photo */}

              {/* Social Media */}
              <div className="items-center flex pl-44 pt-8 space-x-3">
                <h6 className="heading-6">Find Me On</h6>
                <a href="https://github.com/farhanmaul987" target="_blank">
                  <img src={github} alt="github" className="socmed" />
                </a>
                <a
                  href="https://www.instagram.com/farhan.maul/"
                  target="_blank"
                >
                  <img src={instagram} alt="instagram" className="socmed" />
                </a>
                <a
                  href="https://www.linkedin.com/in/farhanmaul987/"
                  target="_blank"
                >
                  <img src={linkedin} alt="linkedin" className="socmed" />
                </a>
                <a href="https://wa.me/6282272447647" target="_blank">
                  <img src={whatsapp} alt="whatsapp" className="socmed" />
                </a>
              </div>
              {/* End Social Media */}
            </div>
          </div>
          {/* End Flex Right */}
        </div>
      </section>
    </>
  );
}

export default Hero;
