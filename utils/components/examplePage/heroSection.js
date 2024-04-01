import MyImage from "../imagecomponent/myImage";
import "./example.css";

export default function HeroSection() {
  return (
    <div className="example-container blue-background column">
      <h1 className="example-title">
        Netef. <br />
        Makes Argazim. <br />
        Tons Of Argazim!
      </h1>
      <div className="example-image column center">
        <MyImage
          src={
            "https://www.dogstrust.ie/images/800x600/assets/2023-06/BostonTerrier.png"
          }
        />
      </div>
    </div>
  );
}
