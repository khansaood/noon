import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="mainfotr">
        <div className="footertext">
          <h3>We're Always Here To Help</h3>
          <p className="footertextsub">
            Reach out to us through any of these support channels
          </p>
        </div>
        <div className="mainfotrset">
          <div className="foterset">
            <div className="fotrlogo">
              <i class="fa fa-info-circle" aria-hidden="true"></i>
            </div>
            <div>
              <h5>
                <span className="fontset"> Help Center</span> <br />{" "}
                help.noon.try
              </h5>
            </div>
          </div>
          <div className="foterset">
            <div className="fotrlogo">
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
            </div>
            <div>
              <h5>
                <span className="fontset"> EMAIL SUPPORT</span> <br />{" "}
                care@noon.try
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="mainfotrli">
        <div>
          <ul className="subfotrli">
            <li>
              <b>ELECTRONICS</b>
            </li>
            <li>Mobiles</li>
            <li>Tablets</li>
            <li>Laptops</li>
            <li>Home Appliances</li>
            <li>Camera, Photo & Video </li>
            <li>Televisions </li>
            <li>Headphones</li>
            <li> Video Games </li>
          </ul>
        </div>
        <div>
          <ul className="subfotrli">
            <li>
              <b>FASHION</b>
            </li>
            <li>Women's Fashion</li>
            <li>Men's Fashion</li>
            <li>Girls' Fashion</li>
            <li>Boys' Fashion</li>
            <li>Watches </li>
            <li>Jewellery </li>
            <li>Women's Handbags </li>
            <li>Men's Eyewear </li>
          </ul>
        </div>
        <div>
          <ul className="subfotrli">
            <li>
              <b>HOME AND KITCHEN</b>
            </li>
            <li>Bath</li>
            <li>Home Decor</li>
            <li>Kitchen and Dining</li>
            <li>Tools and Home Improvement</li>
            <li>Audio and Video </li>
            <li>Furniture</li>
            <li>Patlo Lawn & Garden </li>
            <li> Pet Supplies </li>
          </ul>
        </div>
        <div>
          <ul className="subfotrli">
            <li>
              <b>BEAUTY</b>
            </li>
            <li>Fragrance</li>
            <li>Make-Up</li>
            <li>Haircare</li>
            <li>Skincare</li>
            <li>Personal Care</li>
            <li>Tools & Accessories </li>
            <li>Men's Grooming </li>
            <li> Health Care Essentials </li>
          </ul>
        </div>
        <div>
          <ul className="subfotrli">
            <li>
              <b>BABY</b>
            </li>
            <li>Strollers & Prams</li>
            <li>Car Seats</li>
            <li>Feeding</li>
            <li>Bathing & Skincare</li>
            <li>Diapering Baby</li>
            <li>Baby Clothing & Shoes </li>
            <li>Baby & Toddler Toys </li>
            <li> Baby Foods </li>
          </ul>
        </div>
        <div>
          <ul className="subfotrli">
            <li>
              <b>TOP BRANDS</b>
            </li>
            <li>Mothercare</li>
            <li>Apple </li>
            <li>Nike </li>
            <li>Samsung </li>
            <li>Tefal </li>
            <li>L'Oreal Paris </li>
            <li>Skechers </li>
            <li> Silsal</li>
          </ul>
        </div>
        <div>
          <ul className="subfotrli">
            <li>
              <b>DAILY GROCERIES</b>
            </li>
            <li>Fresh Produce</li>
            <li>Dairy & Eggs</li>
            <li>Bread & Bakery</li>
            <li>Meat & Seafood</li>
            <li>Breakfast Food</li>
            <li>Pantry Staples </li>
            <li>Household Supplies </li>
            <li> Video Games </li>
          </ul>
        </div>
      </div>
      <div className="mainsubfotr">
        <div>
          <p style={{ margin: 0 }} className="botmtext">
            <b>SHOP ON THE GO</b>
          </p>
          <img
            alt="appstore"
            src={
              "https://z.nooncdn.com/s/app/com/common/images/logos/app-store.svg"
            }
          />
          <img
            alt="playstore"
            src={
              "https://z.nooncdn.com/s/app/com/common/images/logos/google-play.svg"
            }
          />
        </div>
        <div>
          <p style={{ margin: 0 }} className="botmtext">
            <b>CONNECT WITH US</b>
          </p>
          <div className="fotriconbar">
            <div className="fotricon">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </div>
            <div className="fotricon">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </div>
            <div className="fotricon">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </div>
            <div className="fotricon">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="leastfotr">
        <p>2021-MuhamamdNawaz.All Rights Reserved</p>
        <div className="leasticone">
          <span className="leasticoneli">
            <i class="fa fa-cc-paypal" aria-hidden="true"></i>
          </span>
          <span className="leasticoneli">
            <i class="fa fa-cc-visa" aria-hidden="true"></i>
          </span>
          <span className="leasticoneli">
            <i class="fa fa-money" aria-hidden="true"></i>
          </span>
        </div>
        <div>
          <ul className="leastli">
            <li>Careers</li>
            <li>Warrentry Policy</li>
            <li>Sell with us</li>
            <li>Term of Use</li>
            <li>Term of Sale</li>
            <li>Privacy Policy</li>
            <li>Consumer Rights</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

//
//
