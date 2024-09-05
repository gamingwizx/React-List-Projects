import Header from "../Header.js";
import PricingMainContent from "./PricingMainContent.js";
export default function Pricing() {
  return (
    <div className="container-parent container-parent__pricing">
      <div className="container">
        <Header />
      </div>
      <div className="container">
        <PricingMainContent />
      </div>
    </div>
  );
}
