// import logo from 'https://z.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg'
import "../header/Header.css";
import Alltimecard from "./Alltimecard";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-xl navbar-light  background">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            className="mylogo"
            src={
              "https://z.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg"
            }
            alt="Logo..."
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ">
            <li className="nav-item">
              <input
                className="form-control inpwid"
                type="search"
                placeholder="What are you looking for?"
                aria-label="Search"
              />
            </li>
            <div className="navset">
              <div className="mset">العربية</div>

              <div className="mset">
                <i className="fa fa-flag" aria-hidden="true">
                  Ship to
                </i>
                <b> UAE</b>
              </div>

              <div className="mset">
                Sign In <i className="fa fa-user" aria-hidden="true"></i>
              </div>
              <div className="mset cart">
                Cart <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Navbartwo() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <a className="navbar-brand mx-5" href="#">
            All Categories{" "}
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active bnt" aria-current="page" href="#">
                  ELECTRONIC
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active bnt" href="#">
                  MEN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active bnt" href="#">
                  WOMEN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active bnt" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active bnf" href="#">
                  BEAUTY AND FRAGNANCE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active bnt" href="#">
                  BABY & TOYS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active bnt" href="#">
                  SPORTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active bnf" href="#">
                  THE DUBAI MALL STORE
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

function Carousel() {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner ">
          <div class="carousel-item active slide">
            <img
              src={
                "https://k.nooncdn.com/cms/pages/20210610/7cdc05e953ba712f1896c346711232b1/en_plp-01.gif"
              }
              class="d-block w-100"
              alt="..."
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

function Headerstart() {
  return (
    <>
      <div>
        <img
          className="imgset"
          src={
            "https://k.nooncdn.com/cms/pages/20210106/dc24ba1e0601736cb2c6d8d14196f741/en_cat-module-title.png"
          }
          alt="Shop by category"
        />
      </div>
      <div className="imgrowset">
        <img
          className="imgrow"
          alt="Kitchen and dining"
          src="https://k.nooncdn.com/cms/pages/20210106/dc24ba1e0601736cb2c6d8d14196f741/en_mb-category-06.png"
        />
        <img
          className="imgrow"
          alt="Kitchen and dining"
          src="https://k.nooncdn.com/cms/pages/20210610/299cb07578ff1863ec41b0ff4359a070/en_mb-category-01.png"
        />
        <img
          className="imgrow"
          alt="Kitchen and dining"
          src="https://k.nooncdn.com/cms/pages/20210609/d4b1c1e5f0465ee08a2736baea8a5406/en_mb-category-01.png"
        />
        <img
          className="imgrow"
          alt="Kitchen and dining"
          src="https://k.nooncdn.com/cms/pages/20210106/dc24ba1e0601736cb2c6d8d14196f741/en_mb-category-02.png"
        />
        <img
          className="imgrow"
          alt="Kitchen and dining"
          src="https://k.nooncdn.com/cms/pages/20210106/dc24ba1e0601736cb2c6d8d14196f741/en_mb-category-10.png"
        />
        <img
          className="imgrow"
          alt="Kitchen and dining"
          src="https://k.nooncdn.com/cms/pages/20210106/dc24ba1e0601736cb2c6d8d14196f741/en_mb-category-03.png"
        />
        <img
          className="imgrow"
          alt="Kitchen and dining"
          src="https://k.nooncdn.com/cms/pages/20210106/dc24ba1e0601736cb2c6d8d14196f741/en_mb-category-04.png"
        />
        <img
          className="imgrow"
          alt="Kitchen and dining"
          src="https://k.nooncdn.com/cms/pages/20210106/dc24ba1e0601736cb2c6d8d14196f741/en_mb-category-05.png"
        />
        <img
          className="imgrow"
          alt="Kitchen and dining"
          src="https://k.nooncdn.com/cms/pages/20210106/dc24ba1e0601736cb2c6d8d14196f741/en_mb-category-08.png"
        />
        <img
          className="imgrow"
          alt="Kitchen and dining"
          src="https://k.nooncdn.com/cms/pages/20210106/dc24ba1e0601736cb2c6d8d14196f741/en_mb-category-11.png"
        />
      </div>
      <div>
        <img
          className="imgset"
          src={
            "https://k.nooncdn.com/cms/pages/20210516/99ca724d01129bda8754f4611bedc533/en_bogo-title.png"
          }
          alt="Heading"
        />
      </div>

      <div className="imgrowset">
        <img
          className="imgrowtwo"
          alt="Kitchen and dining"
          src="https://k.nooncdn.com/cms/pages/20210612/f36b0afba39039cbe74f9e8007afd84b/en_mb-01.png"
        />
        <img
          className="imgrowtwo"
          alt="Kitchen and dining"
          src="https://k.nooncdn.com/cms/pages/20210612/f36b0afba39039cbe74f9e8007afd84b/en_mb-02.png"
        />
        <img
          className="imgrowtwo"
          alt="Kitchen and dining"
          src="https://k.nooncdn.com/cms/pages/20210612/f36b0afba39039cbe74f9e8007afd84b/en_mb-03.png"
        />
        <img
          className="imgrowtwo"
          alt="Kitchen and dining"
          src="https://k.nooncdn.com/cms/pages/20210612/f36b0afba39039cbe74f9e8007afd84b/en_mb-04.png"
        />
      </div>
      <div>
        <img
          className="imgset"
          src="https://k.nooncdn.com/cms/pages/20210609/d4b1c1e5f0465ee08a2736baea8a5406/en_B2F1-title.png"
          alt="Heading"
        />
      </div>
      <div className="imgrowset">
        <img
          className="imgrowthree"
          alt="Kitchen and dining"
          src="https://k.nooncdn.com/cms/pages/20210609/d4b1c1e5f0465ee08a2736baea8a5406/en_cat-module-01.png"
        />
        <img
          className="imgrowthree"
          alt="Kitchen and dining"
          src="https://k.nooncdn.com/cms/pages/20210609/d4b1c1e5f0465ee08a2736baea8a5406/en_cat-module-02.png"
        />
      </div>
      <div>
        <img
          className="imgset my-3"
          src="https://k.nooncdn.com/cms/pages/20200813/37154338fe7b6a357e950b8c1c976e35/en_title-01.png"
          alt="All time favorite"
        />
      </div>
      <div className="container-fluid ">
        <div className="midcontainer">
          <Alltimecard
            imag="https://z.nooncdn.com/products/tr:n-t_240/v1613544167/N39757479A_1.jpg"
            name="Noon east Grill Digital Microvave"
            prise="230.00"
            updatedate="MAY-02"
          />

          <Alltimecard
            imag="https://z.nooncdn.com/products/tr:n-t_240/v1593430115/N25720571A_1.jpg"
            name="Noon east 15 bar coffee machine"
            prise="85.00"
            updatedate="JUN-02"
          />

          <Alltimecard
            imag="https://z.nooncdn.com/products/tr:n-t_240/v1588074710/N31981756A_1.jpg"
            name="classic essential 24 piece dinnerware"
            prise="175.00"
            updatedate="JUN-02"
          />

          <Alltimecard
            imag="https://z.nooncdn.com/products/tr:n-t_240/v1593693008/N30653106A_1.jpg"
            name="Noon east garden marbel coat"
            prise="55.00"
            updatedate="JUN-10"
          />

          <Alltimecard
            imag="https://z.nooncdn.com/products/tr:n-t_240/v1588057630/N26505139A_1.jpg"
            name="Noon east coffee grinder"
            prise="165.00"
            updatedate="MAR-20"
          />

          <Alltimecard
            imag="https://z.nooncdn.com/products/tr:n-t_240/v1610470445/N39614014A_1.jpg"
            name="Noon east Grill Digital Microvave"
            prise="35.00"
            updatedate="MAR-15"
          />
        </div>
      </div>
    </>
  );
}

export { Navbar, Navbartwo, Carousel, Headerstart };
