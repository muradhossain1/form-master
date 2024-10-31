import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './GrandPa.css'

export const AssetsContext = createContext('gold')
export const MoneyContext = createContext(1000)

const GrandPa = () => {
    const [money, setMoney] = useState(1000)
    const asset = 'dimond'
    return (
        <div className="grandpa">
            <h3>GrandPa</h3>
            <p>Net Money : {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetsContext.Provider value="gold">
                    <section className="flex">
                        <Dad asset={asset}></Dad>
                        <Uncle asset={asset}></Uncle>
                        <Aunty></Aunty>
                    </section>
                </AssetsContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default GrandPa;

/**
 * 1. Create a context and export it
 * 2. Add provide for the context with a value. value could be aything
 * 3. useContext to access value in the context API
 */