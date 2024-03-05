import { useContext, useEffect, useState } from "react"
import CurrentyContext from "./CurrencyContext";

export default function CurrencySelection() {


    const [exchangeRate, setExchangeRate] = useState(1);
    const [currencies, setCurrencies] = useState([]);
    const { currency, setCurrency } = useContext(CurrentyContext);

    const loadExchangeRate = async (currency) => {
        const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/exchange-rate.php?currency=' + currency);
        const data = await response.json();

        setExchangeRate(data.rate);
    }
    const loadCurrencies = async () => {
        const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/currencies.php');
        const data = await response.json();

        setCurrencies(data);
    }

    const handleCurrencyChange = event => {
        setCurrency(event.target.value);
    }

    useEffect(() => {
        loadExchangeRate(currency);

    }, [currency])

    useEffect(() => {
        loadCurrencies()

    }, [])

    return (
        <div className="currency-selection">

            <select
                name="currency"
                value={ currency }
                onChange={ handleCurrencyChange }
            >
                <option value="">-- please choose --</option>
                {
                    currencies.map(code => (
                        <option key={ code } value={ code }>{ code }</option>
                    ))
                }
            </select>

            Exchange rate (to EUR): { exchangeRate }
        </div>
    )

}