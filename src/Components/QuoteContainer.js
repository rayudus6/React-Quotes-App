import React, { useEffect, useState } from 'react';
import QuoteItems from './QuoteItems';
import AddQuote from './AddQuote';

const QuoteContainer=(props) =>{
    const [quotes,setQuotes]=useState([]);

    useEffect(() =>{
        const result=JSON.parse(localStorage.getItem('quotes')) || []
        setQuotes(result);
    },[])

    useEffect(() =>{
        localStorage.setItem('quotes',JSON.stringify(quotes))
    },[quotes])

    const quoteData=(quote) =>{
        const result=[quote,...quotes]
        setQuotes(result)
    }

    const removeItem=(id) =>{
        const result=quotes.filter((quote) =>{
            return quote.id !==id;
        })
        setQuotes(result);
    }
    const editItem = (quote) =>{
        const result=quotes.map((q) =>{
            if(q.id==quote.id){
                return {...q, ...quote}
            }else{
                return {...q}
            }
        });
        setQuotes(result)
    }
    return(
        <div>
            {
                quotes.length === 0 ? 
                <p>Add your quotes</p> 
                :
                 <QuoteItems 
                 quotes={quotes} 
                 removeItem={removeItem}
                 editItem={editItem}
                 />
                
            }
            <AddQuote addQuote={quoteData} />
        </div>
    )
}

export default QuoteContainer;