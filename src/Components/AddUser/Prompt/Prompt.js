import Button from '../../Ui/Button';
import style from './Prompt.module.css';

const Backdrop  = props =>{
    return <div className={props.backdrop}></div>
}

const Overlay = props =>{
    
}
function Prompt(props){
    return(
        <div className={style['backdrop']}>
        <div className={style['main-card']}>
            <div className={style['sub-card']}>
                <label>Invalid Input</label>
                <p>Please enter correct name</p>
                <Button onClick ={props.onClick}>Okay</Button>
            </div>
        </div>
        </div>
    )
}

export default Prompt;
