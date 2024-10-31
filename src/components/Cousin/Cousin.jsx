import Friend from "../Friend/Friend";
import Spacial from "../Speacial/Spacial";


const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
               {
                asset &&  <Spacial asset={asset}></Spacial>
               }
               {
                name === 'layla' && <Friend></Friend>
               }
            </section>
        </div>
    );
};

export default Cousin;