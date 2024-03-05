import './MainContent.scss';
import CurrencyContext from './CurrencyContext.js';
import { useContext, useState } from 'react';
import Context from './Context';
import Homepage from './Homepage';


export default function MainContent({ currentItem }) {
    const { currency} = useContext(CurrencyContext);

    const {state, dispatch} = useContext(Context)

    const changeCurrency = () => {
        dispatch( {
            type: 'currency/set',
            payload: 'EUR'
        }

        )
    }


    return (
        <>
        
        <div>
        <p>Selected Currency: {currency}</p>
        <p>Theme: {state.theme}</p>
        <p>Language: {state.language}</p>
        <p>Currency: {state.currency}</p>
        <p>Shopping Cart: {state.shoppingCart.join(', ')}</p>
        <button onClick={ changeCurrency }>Change something</button>
      </div>
      
        <main className="main">
            {
                currentItem === ''
                    && (
                        <p>Welcome!</p>
                    )
            }

            {
                currentItem === 'about'
                    && (
                        <p>About us: ...</p>
                    )
            }

            {
                currentItem === 'contact'
                    && (
                        <p>Please contact us</p>
                    )
            }
        </main>
        <Homepage/>
        </>
    )

}