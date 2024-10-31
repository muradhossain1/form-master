import { useContext } from "react";
import { AssetsContext } from "../GrandPa/GrandPa";


const Spacial = ({asset}) => {
    const gift = useContext(AssetsContext)
    return (
        <div>
            <h2>Special</h2>
            <p>has : {asset}</p>
            <p>also has: {gift}</p>
        </div>
    );
};

export default Spacial;