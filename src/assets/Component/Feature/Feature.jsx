import { FaCheckCircle } from "react-icons/fa";
import PropTypes from 'prop-types';
const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex px-6 items-center gap-2 "> <FaCheckCircle className="text-green-500"></FaCheckCircle> {feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;