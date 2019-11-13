import React from 'react';

export default class PomodoroClock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isBreak: false,
            sessionLength: 25,
            breakLength: 5,
            timeLeft: 1500,
            isRunning: false
        }
        this.audioRef = React.createRef()

        this.handleStartStop = this.handleStartStop.bind(this);
        this.decrementBreak = this.decrementBreak.bind(this);
        this.incrementBreak = this.incrementBreak.bind(this);
        this.decrementSession = this.decrementSession.bind(this);
        this.incrementSession = this.incrementSession.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.tick = this.tick.bind(this);
        this.reset = this.reset.bind(this);
    }

    decrementBreak() {
        if (this.state.breakLength > 1) {
            this.setState({
                breakLength: this.state.breakLength - 1,
                timeLeft: (this.state.isBreak) ? (this.state.breakLength - 1) * 60 : this.state.timeLeft
            })
        }
    }

    incrementBreak() {
        if (this.state.breakLength < 60) {
            this.setState({
                breakLength: this.state.breakLength + 1,
                timeLeft: (this.state.isBreak) ? (this.state.breakLength + 1) * 60 : this.state.timeLeft
            })
        }
    }

    decrementSession() {
        if (this.state.sessionLength > 1) {
            this.setState({
                sessionLength: this.state.sessionLength - 1,
                timeLeft: (!this.state.isBreak) ? (this.state.sessionLength - 1) * 60 : this.state.timeLeft
            })
        }
    }

    incrementSession() {
        if (this.state.sessionLength < 60) {
            this.setState({
                sessionLength: this.state.sessionLength + 1,
                timeLeft: (!this.state.isBreak) ? (this.state.sessionLength + 1) * 60 : this.state.timeLeft
            })
        }
    }

    reset() {
        this.stopTimer();
        this.setState({
            isBreak: false,
            sessionLength: 25,
            breakLength: 5,
            timeLeft: 1500,
            isRunning: false
        })
        this.audioRef.current.pause();
        this.audioRef.current.load();
    }

    tick() {
        this.setState({ timeLeft: this.state.timeLeft - 1 })
        if (this.state.timeLeft < 0) {
            this.stopTimer();
            this.audioRef.current.play();
            this.setState({ isBreak: !this.state.isBreak });
            this.setState({ timeLeft: (this.state.isBreak) ? this.state.breakLength * 60 : this.state.sessionLength * 60 });
            this.startTimer();
        }
    }

    startTimer() {
        this.interval = setInterval(this.tick, 1000)
    }

    stopTimer() {
        clearInterval(this.interval)
    }

    handleStartStop() {
        if (this.state.isRunning) {
            this.stopTimer()
        } else {
            this.startTimer()
        }
        this.setState({ isRunning: !this.state.isRunning })
    }

    render() {

        var minutes = Math.floor(this.state.timeLeft / 60);
        var seconds = this.state.timeLeft % 60;
        var time = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);

        return (
            <div id="clock-body" className="project">

                <h2>Pomodoro Clock</h2>

                <div id="control-time-left">   {/* Control Time Left */}
                    <div>   {/* Control Break */}
                        <button className="btn btn-primary" onClick={this.decrementBreak}>  -  </button>
                        <div className="timer-control-label">
                            <div>Break Length</div>
                            <div>{this.state.breakLength}</div>
                        </div>
                        <button className="btn btn-primary" onClick={this.incrementBreak}>  +  </button>
                    </div>

                    <div>    {/* Control Session */}    
                        <button className="btn btn-primary" onClick={this.decrementSession}>  -  </button>
                        <div className="timer-control-label">
                            <div>Session Length</div>
                            <div>{this.state.sessionLength}</div>
                        </div>
                        <button className="btn btn-primary" onClick={this.incrementSession}>  +  </button>
                    </div>
                </div>
                

                <div>   {/* Display */}
                    <div>{this.state.isBreak ? "Break" : "Session"}</div>
                    <div>{time}</div>
                </div>

                <div>   {/* Control Timer */}
                    <button className="btn btn-info" onClick={this.handleStartStop}>{this.state.isRunning ? "Stop" : "Start"}</button>
                    <button className="btn btn-danger" onClick={this.reset}>Reset</button>
                </div>

                <audio id='beep' ref={this.audioRef} src="http://www.pacdv.com/sounds/interface_sound_effects/sound98.wav"></audio>
            </div >)
    }
}

class Display extends React.Component {

    render() {
        var minutes = Math.floor(this.props.timeLeft / 60);
        var seconds = this.props.timeLeft % 60;
        var time = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
        return (
            <div>
                <div id="container">
                    <div id="timer-label">{this.props.isBreak ? "Break" : "Session"}</div>
                    <div id="time-left">{time} </div>
                </div>
                <button id="start_stop" className="btn btn-info" onClick={this.props.startStop}>{this.props.isRunning ? "Stop" : "Start"}</button>
                <button id="reset" className="btn btn-danger" onClick={this.props.reset}>Reset</button>
            </div>
        )
    }
}