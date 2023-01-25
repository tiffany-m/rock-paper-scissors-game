# Rock Paper Scissors
A classic game - Rock, Paper, Scissors! Choose one of the three choices - and see if you can beat the computer! 
## Directions
Once you click the "Start Game" button the game board will appear. You and the computer will make your choice.  The first one to 5 points wins the game!  To play again click the "Reset Game" button.
    - Scissors beats Paper
    - Paper beats Rock
    - Rock beats Scissors
## Build Status
Complete
## Tech/Framework
- HTML
- CSS
- JavaScript
## Known Bug
Game is not completely centered on all mobile devices.  I found this out close to finishing the project.  In the game, the first screen shows a start button and then you slide to a new screen with the game itself.  I wasn't able to find a work around where I could still keep this feature.  This seems to be a big problem on mobile devices and I will keep it in mind for future projects.

Chanind explains the problem and some solutions really well!  Below is a link to his article, a quick explanation and picture that I copied from his github.

https://chanind.github.io/javascript/2019/09/28/avoid-100vh-on-mobile-web.html

"The core issue is that mobile browsers (I’m looking at you, Chrome and Safari) have a “helpful” feature where the address bar is sometimes visible and sometimes hidden, changing the visible size of the viewport. Rather than adjusting the height of 100vh to be the visible portion of the screen as the viewport height changes, these browsers instead have 100vh set to the height of the browser with address the address bar hidden. The result is that the bottom portion of the screen will be cut off when the address bar is visible, thus defeating the purpose of 100vh to begin with."

![Image showing example of why 100vh doesn't work.](https://chanind.github.io/assets/100vh_problem.png)
