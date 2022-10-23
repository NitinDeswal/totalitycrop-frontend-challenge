import "./footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer-up">
        <div className="footer-ul">
          <div className="footer-ul-header">
            <h3>About Us</h3>
            <button className="footer-btn"><i className="fa-solid fa-chevron-down"></i></button>
          </div>

          <ul className="footer-up-ul">
            <li><a href="https://www.starbucks.com/about-us/">Our Company</a></li>
            <li><a href="https://www.starbucks.com/coffee/">Our Coffee</a></li>
            <li><a href="https://stories.starbucks.com/">Stories and News</a></li>
            <li><a href="https://archive.starbucks.com/">Starbuck Archive</a></li>
            <li>
              <a href="https://investor.starbucks.com/ir-home/default.aspx"
              >İnvestor Relations</a>
            </li>
            <li>
              <a href="https://customerservice.starbucks.com/"
              >Customer Service</a>
            </li>
          </ul>

        </div>
        <div className="footer-ul p">
          <div className="footer-ul-header">
            <h3>Careers</h3>
            <button className="footer-btn"><i className="fa-solid fa-chevron-down"></i></button>
          </div>
          <ul className="footer-up-ul">
            <li>
              <a
                href="https://www.starbucks.com/careers/working-at-starbucks/culture-and-values/"
              >Culture and Values</a>
            </li>
            <li>
              <a href="https://stories.starbucks.com/stories/inclusion-diversity/"
              >Inclusion, Diversity, and Equity</a>
            </li>
            <li>
              <a
                href="https://www.starbucks.com/careers/working-at-starbucks/education/"
              >College Archievement Plan</a>
            </li>
            <li>
              <a href="https://alumni.starbucks.com/login/">Alumni Community</a>
            </li>
            <li><a href="https://www.starbucks.com/careers/">U.S. Careers</a></li>
            <li>
              <a href="https://www.starbucks.com/careers/international-careers/"
              >International Careers</a>
            </li>
          </ul>

        </div>
        <div className="footer-ul p">
          <div className="footer-ul-header">
            <h3>Social Impact</h3>
            <button className="footer-btn"><i className="fa-solid fa-chevron-down"></i></button>
          </div>
          <ul className="footer-up-ul">
            <li>
              <a href="https://www.starbucks.com/responsibility/people/"
              >People</a>
            </li>
            <li>
              <a href="https://www.starbucks.com/responsibility/planet/"
              >Planet</a>
            </li>
            <li>
              <a href="https://www.starbucks.com/responsibility/reporting-hub/"
              >Environmental and social Impact Reporting</a>
            </li>
          </ul>
        </div>
        <div className="footer-ul p">
          <div className="footer-ul-header">
            <h3>For Business Partners</h3>
            <button className="footer-btn"><i className="fa-solid fa-chevron-down"></i></button>
          </div>
          <ul className="footer-up-ul">
            <li>
              <a href="https://www.starbucks.com/business/landlord-faq/"
              >Landlord Support Center</a>
            </li>
            <li>
              <a href="https://www.starbucks.com/business/suppliers/"
              >Suppliers</a>
            </li>
            <li>
              <a href="https://www.starbuckscardb2b.com/s/"
              >Corborate Gift Card Sales</a>
            </li>
            <li>
              <a
                href="https://www.nestlecoffeepartnerssl.com/our-brands/we-proudly-serve-starbucks-coffee-program"
              >Office and Foodservice Coffee</a >
            </li>
          </ul>

        </div>
        <div className="footer-ul p">
          <div className="footer-ul-header">
            <h3>Order and Pıckup</h3>
            <button className="footer-btn"><i className="fa-solid fa-chevron-down"></i></button>
          </div>
          <ul className="footer-up-ul">
            <li>
              <a href="https://www.starbucks.com/rewards/mobile-apps/"
              >Order on the App</a>
            </li>
            <li>
              <a href="https://www.starbucks.com/menu">Order on the Web</a>
            </li>
            <li>
              <a href="https://delivery.starbucks.com/">Delivery</a>
            </li>
            <li>
              <a href="https://www.starbucks.com/ways-to-order/"
              >Order and Pickup Options</a>
            </li>
            <li>
              <a
                href="https://athome.starbucks.com/?utm_source=starbucks.com&utm_medium=referral&utm_campaign=footer"
              >Explore and Find Coffee for Home</a>
            </li>
          </ul>

        </div>
      </div>

      <div className="footer-down">
        <div className="footer-icons">
          <a href="#"><i className="fa-brands fa-spotify"></i></a>
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-pinterest"></i></a>
          <a href="#"><i className="fa-brands fa-square-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-youtube"></i></a>
          <a href="#"><i className="fa-brands fa-square-twitter"></i></a>
        </div>
        <div className="footer-information">
          <a href="https://www.starbucks.com/terms/privacy-policy/"
          >Privacy Policy</a >
          <a href="https://www.starbucks.com/terms/starbucks-terms-of-use/"
          >Terms of Use</a>
          <a
            href="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70076.pdf"
          >CA Supply Chain Act</a>
          <a href="https://www.starbucks.com/">Cookie Preferences</a>




        </div>
        <div className="footer-end"><p>© 2022 Starbucks Coffee Company. All rights reserved.</p></div>
      </div>
    </footer>
  );
}
const buttons = document.querySelectorAll(".footer-ul");


buttons.forEach((item) => {
  const header = item.querySelector(".footer-ul-header");
  header.addEventListener("click", () => {
    item.classList.toggle("open");


    const footerList = item.querySelectorAll(".footer-up-ul");


    if (item.classList.contains("open")) {
      footerList.forEach((list) => {
        list.style.height = `${list.scrollHeight}px`;
        list.previousElementSibling.firstElementChild.nextElementSibling.style.transform =
          "rotate(180deg)";
      });
    } else {
      footerList.forEach((list) => {
        list.style.height = "0px";
        list.previousElementSibling.firstElementChild.nextElementSibling.style.transform =
          "rotate(360deg)";
      });
    }
  });
});
export default Footer;