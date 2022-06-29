import {useEffect, useState} from 'react'
import { useDispatch } from "react-redux";
import classes from "./RecipeList.module.css";
import CustomModal from "../RecipeModal";
import Button from "@mui/material/Button";

import StartFireBase from '../../../Firebase';
import {ref,update,remove} from 'firebase/database'

import {  getRecipe } from "../../../Store/reduxSlice";
const RecipeList = (props) => {
  let [database,setDatabase]=useState("")
  const dispatch = useDispatch();

useEffect(()=>{
  setDatabase(StartFireBase())
},[setDatabase])

const onSubmitHandler=(datas)=>{
  const db=database;
  update(ref(db,'collection/'+datas.name),{
       id: datas.id,
       name: datas.name,
       ingredients: datas.ingredients,
       instructions: datas.instructions,
       category: datas.category,
       dateAdded: datas.dateAdded,
       dateEdited: datas.dateEdited,
       notes: datas.notes,
       serving: datas.serving,
     }).then(()=>{dispatch(getRecipe())}).catch((error)=>{console.log(error)})

}


const DeleteHandler=()=>{

  const db=database;
  const data=props.recipe.name;
  remove(ref(db,'collection/'+data)).then(()=>{dispatch(getRecipe())}).catch((error)=>{console.log(error)})
}

  return (
  
    <li className={classes.recipe}>
      <div>
        <h3 className={classes.price}>{props.recipe.name} </h3>
        <div className={classes.description}>Ingredients: {props.recipe.ingredients} </div>
        <div className={classes.description}>Instructions: {props.recipe.instructions}</div>
        <div className={classes.description}>Serving: {props.recipe.serving} </div>
        <div className={classes.description}>Category: {props.recipe.category}</div>
        <div className={classes.description}>Notes: {props.recipe.notes} </div>
        <div className={classes.description}>Date Added: {props.recipe.dateAdded}</div>
        <div className={classes.description}>Date Edited: {props.recipe.dateEdited} </div>
      </div>
      <div className={classes.buttonCSS}>
        <CustomModal id={props.recipe.id} recipe={props.recipe} name="EDIT" 
         onSubmit={onSubmitHandler}
        />
        <Button onClick={DeleteHandler} >{"DELETE"}</Button>
        
      </div>
    </li>
  );
};

export default RecipeList;
