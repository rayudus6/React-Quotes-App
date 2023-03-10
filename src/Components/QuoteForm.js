import React, { useState } from "react";


const QuoteForm =(props) =>{
    const { formSubmission,id:slNo,name: author,body: quote,handleToggle } =props;
    const [id,setId]=useState(slNo ? slNo : Number(new Date()))
    const [name,setName]=useState(author ? author : '');
    const [body,setBody]=useState(quote ? quote : '');

    const handleSubmit=(e) =>{
        e.preventDefault()
        const formData={
            id:id,
            name:name,
            body:body
        }
        formSubmission(formData)
        if(handleToggle){
            handleToggle()
        }
        setBody('')
        setName('')
    }
    const handleName=(e) =>{
        setName(e.target.value)
    }
    const handleBoday=(e) =>{
        setBody(e.target.value)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br />
                <input type="text" value={name} onChange={handleName}/><br />
                <label>body</label><br />
                <input type="textarea" value={body} onChange={handleBoday}/><br /><br />
                <input type="submit" value="Save" />
            </form>
        </div>
    )
}


export default QuoteForm;