import { contact, info } from "@/utils/data/examplePageData";
import { nanoid } from "nanoid";
import "./example.css";
import MyImage from "../imagecomponent/myImage";
export default function SecondSection() {
  return (
    <div className="example-container column center space-between">
      <div className="info-container row space-between">
        {info.map((i) => (
          <InfoItem key={nanoid()} item={i} />
        ))}
      </div>
      <div className="second-section-middle-container column center space-between">
        <div className="second-section-image column center">
          <MyImage
            src={
              "https://www.dogstrust.ie/images/800x600/assets/2023-06/BostonTerrier.png"
            }
          />
        </div>
        <h2 className="text-center">
          Do you want to make boxes? <br /> Join today!
        </h2>
        <a href="mailto:Argazim.Amen@Shkalim.today" className="email">
          Argazim.Amen@Shkalim.today
        </a>
      </div>
      <div className="second-section-bottom-container row space-between">
        {contact.map((c) => (
          <div key={nanoid()} className="contact-item">
            <InfoItem item={c} reverse />
          </div>
        ))}
      </div>
    </div>
  );
}

function InfoItem({ item, reverse = false }) {
  return (
    <div className={reverse ? "column-reverse" : "column"}>
      <h2>{item.title}</h2>
      <p>{item.subtitle}</p>
    </div>
  );
}
