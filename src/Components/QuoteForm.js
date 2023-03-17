import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const QuoteForm =(props) =>{
    const { formSubmission,id:sNo,name: author,body: quote,handleToggle,isSave } =props;
    const [id,setId]=useState(sNo ? sNo : uuidv4())
    const [name,setName]=useState(author ? author : '');
    const [body,setBody]=useState(quote ? quote : '');
    const [errors,setErrors]=useState({})

    useEffect(() =>{
        if(isSave){
        setId(uuidv4())
        setBody('')
        setName('')
        }
    },[isSave])

    const handleSubmit=(e) =>{
        const formData={
            id:id,
            name:name,
            body:body
        }
        const valid=validation();
        e.preventDefault()
        if(valid){
        formSubmission(formData)
        if(handleToggle){
            handleToggle()
        }
        }
    }
    const validation = () => {
        let error={};
        let isValid=true;
        if(!name){
            error.name="Please Enter the Name";
            isValid=false;
        }
        if(body.length<=0){
            error.body="Please Enter the Body";
            isValid=false;
        }
        setErrors(error);
        return isValid;
    }
    const handleName=(e) =>{
        setName(e.target.value)
    }
    const handleBody=(e) =>{
        setBody(e.target.value)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br />
                <input type="text" value={name} onChange={handleName}/><br />
                <p style={{color:"red"}}>{errors.name}</p>
                <label>body</label><br />
                <input type="textarea" value={body} onChange={handleBody}/><br /><br />
                <p style={{color:"red"}}>{errors.body}</p>
                <input type="submit" value="Save" />
            </form>
        </div>
    )
}


export default QuoteForm;