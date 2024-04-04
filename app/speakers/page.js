import ProductsGrid from "@/utils/components/productsGrid/productsGrid";
import { getAllSpeakers } from "@/utils/functions/apiCalls";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

export default async function SpeakersPage() {
  const token = getCookie("token", { cookies });
  const speakers = await getAllSpeakers(token);
  return (
    <div>
      <ProductsGrid products={speakers} />
    </div>
  );
}
