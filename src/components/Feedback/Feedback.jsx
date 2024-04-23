import { useState } from "react";

import "./style.css";
import Button from "../Button/Button";

function Feedback() {
  const [like, setLikes] = useState(0);
  const [dislike, setDisLikes] = useState(0);

  const onLike = () => {
    setLikes((prevValue) => prevValue + 1);
  };

  const onDisLike = () => {
    setDisLikes((prevValue) => prevValue + 1);
  };

  const onReset = () => {
    setLikes(0);
    setDisLikes(0);
  };

  return (
    <div className="feedback-wrapper">
      <div className="button-control">
        <Button  name="Like"  onButtonClick={onLike}/>
        </div>
        <p>{like}</p>
      
      <div className="button-control">
        <Button name="Dislike" onButtonClick={onDisLike}/>
        </div>
        <p>{dislike}</p>
      
      <div className="button-control">
        <Button name="Reset Results" onButtonClick={onReset} />
      </div>
    </div>
  );
}

export default Feedback;