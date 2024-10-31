import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const Priceoption = ({ option }) => {
  const { price, name, features } = option;

  // console.log(option);
  return (
    <div className="bg-blue-500 text-white p-4 flex flex-col rounded-xl">
      <h2 className="text-center">
        <span className="text-7xl text-center font-extrabold">{price}</span>
        <span className="text-3xl ">/mon</span>
      </h2>
      <h4 className="text-3xl text-center my-8">{name}</h4>
      <div className="flex-grow" >
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>
      <button className="mt-12 bg-green-600 w-full py-2 rounded-md font-bold hover:bg-green-900">Buy Now</button>
    </div>
  );
};

Priceoption.propTypes = {
  option: PropTypes.object,
};

export default Priceoption;
