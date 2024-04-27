// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {timerInSeconds: 0, isTimerRunning: false}

  componentWillUnmount() {
    this.clearInterval(this.timerInterval)
  }

  renderMinutes = () => {
    const {timerInSeconds} = this.state
    const minutes = Math.floor(timerInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {timerInSeconds} = this.state
    const seconds = Math.floor(timerInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  increaseTime = () => {
    this.setState(prevState => ({timerInSeconds: prevState.timerInSeconds + 1}))
  }

  onClickStart = () => {
    this.timeInterval = setInterval(this.increaseTime, 1000)
    this.setState({isTimerRunning: true})
  }

  onClickStop = () => {
    this.clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  onClickReset = () => {
    clearInterval(this.timeInterval)
    this.setState({timerInSeconds: 0})
    this.setState({isTimerRunning: false})
  }

  render() {
    const {isTimerRunning} = this.state
    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-app-container">
            <div className="timer-container">
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                  alt="stopwatch"
                />
                <span className="timer">Timer</span>
              </div>
              <p className="running-stopwatch">{`${this.renderMinutes()} : ${this.renderSeconds()}`}</p>
              <div className="buttons-container">
                <button
                  type="button"
                  className="start-button"
                  onClick={this.onClickStart}
                  disabled={isTimerRunning}
                >
                  Start
                </button>
                <button
                  type="button"
                  className="stop-button"
                  onClick={this.onClickStop}
                >
                  Stop
                </button>

                <button
                  type="button"
                  className="reset-button"
                  onClick={this.onClickReset}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
