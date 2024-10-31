import { useContext } from "react";
import { AssetsContext } from "../GrandPa/GrandPa";


const Friend = () => {
    const gift = useContext(AssetsContext)
    return (
        <div>
            <h2>Friend</h2>
            <p>has : {gift}</p>
        </div>
    );
};

export default Friend;