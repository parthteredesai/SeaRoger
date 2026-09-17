import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="HeroSection">
      <h1>SeaRoger</h1>
      <h3>AI-Powered Bulk Freight Forecasting & Maritime Procurement System</h3>
      <img
        src="media/images/HomePage.jpg"
        alt="HomeHero"
        width="500"
        height="800"
      ></img>
      <div className="animation">
        <div class="loader">
          <div class="circle">
            <div class="dot"></div>
            <div class="outline"></div>
          </div>
          <div class="circle">
            <div class="dot"></div>
            <div class="outline"></div>
          </div>
          <div class="circle">
            <div class="dot"></div>
            <div class="outline"></div>
          </div>
          <div class="circle">
            <div class="dot"></div>
            <div class="outline"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
