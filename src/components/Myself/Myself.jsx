import Spacial from "../Speacial/Spacial";


const Myself = ({asset}) => {
    return (
        <div>
            <h2>Myself</h2>
            <section className="flex">
                <Spacial asset={asset}></Spacial>
            </section>
        </div>
    );
};

export default Myself;