import { featuresBasic, featuresPremium, featuresStandar } from "../libs/data";
import CardPrice from "./ui/card-price";
function Prices() {
  return (
    <section
      id="plans"
      className="container min-h-screen flex items-center justify-center mx-auto"
    >
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <li>
          <CardPrice title="Basico" price="120" services={featuresBasic} />
        </li>
        <li>
          <CardPrice
            title="Estandar"
            price="180"
            services={featuresStandar}
            active={true}
          />
        </li>
        <li>
          <CardPrice title="Premium" price="300" services={featuresPremium} />
        </li>
      </ul>
    </section>
  );
}

export default Prices;
