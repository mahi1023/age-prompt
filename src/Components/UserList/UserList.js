import style from './UserList.module.css';
import React from 'react';
function UserList(props){
    console.log(props.items)
    return(
        <React.Fragment>
        <div className={style['main-card']}>
            <ul className={style['ul-t']}>
                {props.items.map((obj,index)=>{
                    return <li key ={index}>{obj.name}</li>
                })}
            </ul>
        </div>
        </React.Fragment>
    )
}

export default UserList;