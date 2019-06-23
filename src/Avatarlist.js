import React from 'react';

const Avatarlist = (props) => {
    return(
        <div className="box">
            <h2 className="name">{props.pname}</h2>
            <h3 className="title" >{props.work}</h3>
            <img src={`https://joeschmoe.io/api/v1/${props.pname}`} alt={`${props.pname}`} />
        </div>
    );
}

export default Avatarlist;
