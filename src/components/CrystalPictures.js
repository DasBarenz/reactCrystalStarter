import React from "react"

function CrystalPics(props) {
    return (
        <div className="card">
            <img className="card-img-top" value={props.value} 
            src={props.image} 
            alt={props.name} 
            onClick={()=>props.score(props.id, props.value)}/>
        </div>
    )

}

export default CrystalPics