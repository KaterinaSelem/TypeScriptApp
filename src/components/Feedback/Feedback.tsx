


import Button from "components/Button/Button";
import { FeedbackProps } from "./types";
import { FedbackResultContainer, FeedbackContainer, LikeDislikeContainer, ResultContainer } from "./styles";



function Feedback({like = 0, dislike = 0, addLike, addDislike, resetResults}: FeedbackProps) {
  return (
    <FeedbackContainer>
      <FedbackResultContainer>

        <LikeDislikeContainer>
          <Button name="Like" onButtonClick={addLike} />
          <ResultContainer>{like}</ResultContainer>
        </LikeDislikeContainer>

        <LikeDislikeContainer>
          <Button name="Dislike" onButtonClick={addDislike} />
          <ResultContainer>{dislike}</ResultContainer>
        </LikeDislikeContainer>
        
      </FedbackResultContainer>
      <Button name="Reset Results" onButtonClick={resetResults} />

    </FeedbackContainer>
  );
}

export default Feedback;
