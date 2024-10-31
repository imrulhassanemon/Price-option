import { FaCheckCircle } from "react-icons/fa";
const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex px-6 items-center gap-2 "> <FaCheckCircle className="text-green-500"></FaCheckCircle> {feature}</p>
        </div>
    );
};

export default Feature;