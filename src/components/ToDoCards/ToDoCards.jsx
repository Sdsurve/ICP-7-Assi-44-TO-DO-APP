import React from 'react';
import "./ToDoCards.css";
import ImgDel from "./delete.png";

function ToDoCards({ index, task, category, deleteItem }) {

  const CATEGORY_EMOJI_MAP = {
    Learning: "📚",
    Work: "🧑‍🏭",
    Shopping: "🛒",
    Health: "🧑‍⚕️",
    Other: "🎑",
    Personal: "🏡"
  };

  const CATEGORY_COLOURS = {
    Learning: "hotpink",
    Work: "purple",
    Shopping: "green",
    Health: "red",
    Other: "gray",
    Personal: "pink"
  };

  return (

  );
}

export default ToDoCards;
