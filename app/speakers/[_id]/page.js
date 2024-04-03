import { getProductById } from "@/utils/functions/apiCalls";
import Image from "next/image";

export default async function Speaker({ params: { _id } }) {
  const product = await getProductById(_id);
  return (
    <div className="row">
      <div>
        <Image
          width={300}
          height={300}
          style={{ objectFit: "contain" }}
          src={product.mainImg}
        />
      </div>
      <div className="column">
        <h1>{product.title}</h1>
        <span>{product.price}₪</span>
        <p>{product.desc}</p>
      </div>
    </div>
  );
}
