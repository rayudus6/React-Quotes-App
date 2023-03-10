import React, { useState }  from "react";
import EditQuote from "./EditQuote";


const Item =(props) =>{
    const {id,name,body,removeItem,editItem}=props;
    const [toggle,setToggle]=useState(false)

    const handleRemove=() =>{
        const remove=window.confirm('Are you Sure?')
        if(remove){
            removeItem(id)
        }
    }
    const handleToggle = () =>{
        const result=!toggle;
        setToggle(result) //setToggle(!toggle) we can write like this also
    }
    return(
        <>
        {
            toggle ? (
            <div>
            <EditQuote
                id={id}
                name={name}
                body={body}
                editItem={editItem}
                handleToggle={handleToggle}
            />
            <button onClick={handleToggle}>Cancel</button>
            </div>
            ) :(
                <div id={id}>
                <h3>{body} ~ {name}</h3>
                <button onClick={handleToggle}>Edit</button>
                <button onClick={handleRemove}>Remove</button>
                </div>
            )

        }
        </>
        
    )

}

export default Item