import Image from "next/image";
import "./example.css";
export default function Example() {
  return (
    <div className="container-one column center">
      <h1 className="header">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
        repellendus sed, esse numquam blanditiis cum repudiandae similique vitae
      </h1>
      <div className="my-img">
        <Image
          src="https://www.google.com/search/static/gs/animal/cover_images/m0bt9lr_cover.png"
          fill
          objectFit="contain"
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
