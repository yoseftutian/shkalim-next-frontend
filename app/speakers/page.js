import ProductsGrid from "@/utils/components/productsGrid/productsGrid";
import { getAllSpeakers } from "@/utils/functions/apiCalls";

export default async function SpeakersPage() {
  const speakers = await getAllSpeakers();
  return (
    <div>
      <h1>speakers</h1>

      {/* <ProductsGrid products={speakers} /> */}
    </div>
  );
}
