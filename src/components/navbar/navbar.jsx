import logoBig from "../../assets/logo-big.png";

function Navbar() {
  return (
    // <!-- Header -->
    <header>
      <div className="mx-auto w-full fixed top-0">
        {/* <!-- Navbar --> */}
        <nav className="px-16 bg-srBlack text-white flex justify-between items-center h-20">
          <a href="#" className="flex">
            <img src={logoBig} alt="logoBig" className="size-11" />
            <h5 className="heading-5 ml-3">
              My <span className="text-prLavender">Portofolio</span>
            </h5>
          </a>
          <ul className="flex space-x-6 heading-6">
            <li>
              <a href="#hero" className="hover:text-prLavender">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-prLavender">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-prLavender">
                Project
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-prLavender">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="contactMe">
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
        {/* <!-- End Navbar --> */}
      </div>
    </header>
    // <!-- End Header -->
  );
}

export default Navbar;
