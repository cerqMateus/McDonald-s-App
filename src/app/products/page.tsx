import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return (
    <div className="p-5 border border-red-500 rounded-xl">
      <h1 className="text-red-500 p-3">Product Page</h1>
      <Button>Teste</Button>
      <Input placeholder="teste" />
    </div>
  );
};

export default ProductPage;
