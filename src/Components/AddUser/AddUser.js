import React,{useState} from 'react';
import style from './AddUser.module.css';
import Prompt from './Prompt/Prompt';
import Button from '../Ui/Button';
import Wrapper from '../Helpers/Wrapper';
function AddUser(props){
   const[userInput,setUserInput]= useState({
        name:'',
        age:''
    });
    const [isError,setError]=useState('');
    const onSumbitHandler = (event)=>{
        event.preventDefault();
        console.log(userInput);
        if(userInput.name.trim().length === 0 || userInput.age.length === 0){
            setError({
                title:'inValid',
                message:'please enter name and age'
            })
            return}
        if(userInput.age <1){
            setError({
                title:'inValid',
                message:'please enter valid age'
            })
            return;
            
        }
       props.onAddUser(userInput)
        setUserInput({
            name:'',
        age:''
        })
        
    }
    const onTextChange = (displyaName,value) =>{
        if(displyaName === 'age') {value = +value; };
        setUserInput((prev)=>{
            return{
                ...prev,
                [displyaName]:value
            }
        });
    }
    const errorHandler = ()=>{
        setError('')
    }
    return(
        <Wrapper>
            {isError && <Prompt title ={isError.title} msg ={isError.msg} onClick ={errorHandler}></Prompt>}
        <form onSubmit ={onSumbitHandler}>
        <div className ={style["main-card"]}>
            <div className={style["sub-card"]}>
                <label>Username</label>
                <input type ="text" onChange ={(event)=>onTextChange('name',event.target.value)} value={userInput.name}/>
            </div>
            <div className={style["sub-card"]}>
                <label>Age (Years)</label>
                <input type ="number" onChange ={(event)=>onTextChange('age',event.target.value)} value={userInput.age}/>
            </div>
            <div className={style["sub-card"]}>
                <Button type='submit'>Add User</Button>
            </div>
        </div>
        </form>
    
        </Wrapper>
)
}

export default AddUser