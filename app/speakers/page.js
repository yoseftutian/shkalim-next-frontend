import ProductsGrid from "@/utils/components/productsGrid/productsGrid";
import { getAllSpeakers } from "@/utils/functions/apiCalls";

export default async function SpeakersPage() {
  const speakers = await getAllSpeakers();
  return (
    <div>
      <ProductsGrid products={speakers} />
    </div>
  );
}
