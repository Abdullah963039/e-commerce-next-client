import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";
import { Container } from "@/components/ui/container";
import { Billboard } from "@/components/billboard";
import { ProductList } from "@/components/product-list";

export const revalidate = 0;

export default async function HomePage() {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("8adb801c-e037-40f1-a7ff-1e75fa7683f8");

  return (
    <>
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard data={billboard} />
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </Container>
    </>
  );
}
