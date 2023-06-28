## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```

## Mock-Up

The following animation demonstrates the application functionality:

![A user clicks through an interactive coding quiz, then enters initials to save the high score before resetting and starting over.](./Assets/04-web-apis-homework-demo.gif)



Based on your acceptance criteria, here are some additional details to help flesh out the mock-up:

    The quiz should have at least N questions on JavaScript fundamentals.
    The timer should start at 90 seconds and count down to 0. If the timer reaches 0 before the user finishes the quiz, the game is over and the user cannot save their score.
    Each question should have four multiple-choice answers.
    If the user selects the correct answer, they should see a message indicating that their answer is correct before moving on to the next question.
    If the user selects an incorrect answer, they should see a message indicating that their answer is incorrect and 10 seconds should be subtracted from the timer before moving on to the next question.
    Once the user has answered all of the questions or the timer reaches 0, they should be taken to a screen that shows their final score and allows them to enter their initials to save their high score.
    The high scores should be stored locally on the user's device and displayed on a separate page that can be accessed by clicking a "High Scores" button on the main page.
    The user should be able to reset the quiz by clicking a "Reset" button.



A user clicks through an interactive coding quiz, then enters initials to save the high score before resetting and starting over.