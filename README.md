# Flappy Bird with Facial Expression Control

A fun implementation of the classic Flappy Bird game that you control with your facial expressions! Smile to make the bird fly up and maintain a neutral expression to let the bird fall down.

![Flappy Bird Game](https://i.imgur.com/example.png)

## Features

- **Facial Expression Control**: Control the bird by smiling (fly up) or maintaining a neutral expression (fall down)
- **Real-time Detection**: Uses face-api.js for accurate and responsive facial expression detection
- **Game Over Face Capture**: Captures your reaction face when you lose and displays it on the game over screen
- **Adjustable Sensitivity**: Fine-tune the smile detection sensitivity to match your facial expressions
- **Responsive Design**: Works well on desktop and mobile devices with a camera
- **Customizable Difficulty**: The game has been tuned to be accessible while still providing a challenge

## How to Play

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/flappy-bird-facial.git
   cd flappy-bird-facial
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the game:
   ```
   npm start
   ```

4. Open your browser to http://localhost:3000

5. Click "Start Camera" to enable facial expression detection

6. Click "Start Game" to begin playing

7. Smile to make the bird fly up! 😊

8. Try to navigate through the pipes without hitting them

9. When you lose, check out your reaction face on the game over screen

10. Click "Reset Game" to play again

## Game Controls

- **Smile**: Makes the bird fly upward
- **Neutral/Negative Expression**: Lets the bird fall
- **Start Game Button**: Begins a new game
- **Reset Game Button**: Resets the game after losing
- **Sensitivity Slider**: Adjusts how easily the game detects your smile

## Technologies Used

- **HTML5 Canvas**: For rendering the game graphics
- **face-api.js**: For real-time facial expression detection
- **Socket.io**: For real-time communication between components
- **Express.js**: For the web server
- **JavaScript ES6+**: For game logic and interaction

## How It Works

The game uses face-api.js to analyze your facial expressions in real-time. When you smile, the system detects the "happy" expression and sends a signal to make the bird fly upward. The game physics handle gravity, collision detection, and scoring.

When you lose the game, it captures a screenshot of your face at that moment, giving you a fun memento of your reaction to losing!

## Customization

You can adjust several aspects of the game:

- **Pipe Gap Size**: Currently set to 200px for easier gameplay
- **Game Speed**: Pipes move at a moderate pace for better playability
- **Bird Physics**: Gravity and jump strength are tuned for smooth control
- **Smile Sensitivity**: Adjustable via the slider in the UI

## Requirements

- Modern web browser with webcam access (Chrome, Firefox, Edge recommended)
- Node.js (v14 or higher)
- Webcam or built-in camera

## Credits

- Original Flappy Bird game by Dong Nguyen
- face-api.js by Vincent Mühler
- Socket.io for real-time communication
- Express.js for the web server

## License

MIT License

---

Enjoy the game and happy flapping! 😊🐦