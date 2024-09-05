import Header from "../Header.js";
import ProductMainContent from "./ProductMainContent.js";
export default function Product() {
  return (
    <div className="container-parent">
      <div className="container">
        <Header />
      </div>
      <div className="container">
        <ProductMainContent />
      </div>
    </div>
  );
}
