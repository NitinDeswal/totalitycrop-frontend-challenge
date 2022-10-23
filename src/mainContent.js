import './mainContent.css';

function MainContent(){
    return(
        <div className="container">
        <img className="grid1-img" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81151.jpg" alt="" />
        <div className="grid1 text light">
          <h2>Fall at your fingertips</h2>
          <p>
            Ordering your fall favorites is a snap with the app. Join Starbucks®
            Rewards and tap into fall.
          </p>
          <a href="https://www.starbucks.com/account/create">Join now</a>
        </div>
        <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-79282.jpg" alt="" />
        <div className="grid3 text green">
          <h1>Perfectly pumpkin</h1>
          <p>
          Savor the season with a Pumpkin Spice Latte or Pumpkin Cream Cold Brew.
          </p>
          <a href="https://www.starbucks.com/menu/featured/">Learn more</a>
        </div>
        <div className="grid4 text green">
          <h1>Layers of baked apple yum</h1>
          <p>
          Try the Apple Crisp Oatmilk Macchiato, now nondairy and with Starbucks® Blonde Espresso.
          </p>
          <a href="https://www.starbucks.com/menu/food/bakery">Learn more</a>
        </div>
        <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81152.jpg" alt="" />
        
        <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81152.jpg" alt="" />
        <div className="grid5 text green">
        
          <h1>The art of the roast</h1>
          <p>
            With a new roast spectrum front and center on our coffee bags, it’s
            easier than ever to find a taste you love.
          </p>
          <a href="https://www.starbucks.com/menu/at-home-coffee/whole-bean"
            >Order now</a>
        </div>
        
      </div>

    );
}
export default MainContent;