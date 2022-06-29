
import React, { useEffect, useState } from "react";
import Card from "../../UI/RecipeCard";
import classes from "./RecipeInstructions.module.css";

import StartFireBase from "../../../Firebase";
import { ref, set } from "firebase/database";

import RecipeList from "./RecipeList";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import CustomModal from "../RecipeModal";
import { getRecipe } from "../../../Store/reduxSlice";

const RecipePreparation = (props) => {
  let [database, setDatabase] = useState("");
  const dispatch = useDispatch();

  let data = useSelector((state) => state.userdata);

  useEffect(() => {
    setDatabase(StartFireBase());
  }, [setDatabase]);

  const onSubmitHandler = (datas) => {
    const db = database;
    set(ref(db, "collection/" + datas.name), {
      id: datas.id,
      name: datas.name,
      ingredients: datas.ingredients,
      instructions: datas.instructions,
      category: datas.category,
      dateAdded: datas.dateAdded,
      dateEdited: datas.dateEdited,
      notes: datas.notes,
      serving: datas.serving,
    })
      .then(() => {
        dispatch(getRecipe());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let RecipesList;
  if (data.length === 0) {
    RecipesList = (
      <Typography id="modal-modal-title" variant="h5" component="h2">
        <span> {"Collection of Recipes"}</span>
      </Typography>
    );
  } else {
    RecipesList = data.map((recipe) => (
      <RecipeList recipe={recipe} key={recipe.id} />
    ));
  }

  return (
    <section className={classes.meals}>
      <div className={classes.buttonCSS}>  
        <CustomModal name="ADD" recipe="" onSubmit={onSubmitHandler} />
      </div>
      <Card>
        <ul>{RecipesList}</ul>
      </Card>
    </section>
  );
};

export default RecipePreparation;
