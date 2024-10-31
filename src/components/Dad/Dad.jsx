import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sisters from "../Sisters/Sisters";


const Dad = ({asset}) => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex">
                <Myself asset={asset}></Myself>
                <Brother></Brother>
                <Sisters></Sisters>
            </section>
        </div>
    );
};

export default Dad;