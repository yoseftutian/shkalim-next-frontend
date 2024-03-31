import { info } from "@/utils/data/info";
import "./oneSection.css";
import { nanoid } from "nanoid";
export default function OneSection() {
  return (
    <div>
      <nav className="container">
        <ul className="link-list">
          {info.map((i) => (
            <Kinds key={nanoid()} item={i} />
          ))}
        </ul>
      </nav>
    </div>
  );
}

function Kinds({ item }) {
  return (
    <div className="link-list">
      <h1>{item.title}</h1>
      <p>{item.header}</p>
    </div>
  );
}
