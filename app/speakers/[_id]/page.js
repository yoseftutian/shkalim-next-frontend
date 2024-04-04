import { getProductById } from "@/utils/functions/apiCalls";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function Speaker({ params: { _id } }) {
  const token = getCookie("token", { cookies });
  const product = await getProductById(_id, token);
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
