
import { Navigation } from "@/components/Navigation";
import { GraphicsModels } from "@/components/graphics-models/GraphicsModels";
import { Footer } from "@/components/Footer";

const GraphicsModelsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <GraphicsModels />
      <Footer />
    </div>
  );
};

export default GraphicsModelsPage;
