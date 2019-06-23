import React from 'react';
import ReactDOM from 'react-dom';
import Avatarlist from './Avatarlist';
import './style.css';

const Avatar = (props) => {

    const AvatarArray = [
        {
            id: 1,
            pname: 'Jahanzeb',
            work: 'Full-Stack',
        },
        {
            id:2,
            pname: 'Farhan k',
            work: 'Back-End',
        },
        {
            id:3,
            pname: 'Ehtisham',
            work: 'Front-End',
        },
        {
            id:4,
            pname: 'Mehmood',
            work: 'Manager',
        }
    ]

    const funArray = AvatarArray.map( (avatarcard, i) =>{
        return <Avatarlist id={AvatarArray[i].id} pname={AvatarArray[i].pname} work={AvatarArray[i].work} />
    } );
    return(
        <section >
            <h2>Welcome to <span>{props.name}</span> </h2>
            <h3>Styling with <span>SCSS</span></h3>
            <hr></hr>
            <div className="block">
                {funArray}
            </div>
        </section>
    );
}

export default Avatar;