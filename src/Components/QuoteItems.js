import React from 'react';
import Item from './Item';

const QuoteItems=(props) =>{
    const {quotes,removeItem,editItem}= props
    return(
        <div>
            <h1>My Quotes--{quotes.length}</h1>
            {
                quotes.map((quote) =>{
                    return(
                        <Item key={quote.id} 
                        {...quote} 
                        removeItem={removeItem}
                        editItem={editItem}
                        />
                    )
                })
            }
        </div>
    )
}

export default QuoteItems;