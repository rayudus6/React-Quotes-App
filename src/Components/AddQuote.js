import React, { useState } from 'react';
import QuoteForm from './QuoteForm';


const AddQuote = (props) =>{
    const [isSave,setIsSave]=useState(false)
    const {addQuote} = props;
    const formSubmission =(formData) =>{
        addQuote(formData);
        setIsSave(true)
    }
    return(
        <div>
            <h2>Add Quote</h2>
            <QuoteForm formSubmission={formSubmission} isSave={isSave}/>
        </div>
        
    )

}

export default AddQuote;