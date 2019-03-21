import React, { Component } from 'react'
import VideoPlayer from '../VideoPlayer/VideoPlayer.jsx'
import Video from './Video.jsx'
import Title from './VideoTitle.jsx'
import PlayPause from './PlayPause.jsx'
import Timer from './Timer.jsx'
import Controls from './Controls.jsx'
import { secondsToMinutes } from '../../utilities/utilities.js'
import ProgessBar from './ProgessBar.jsx'
import Spinner from './Spinner.jsx'
import Volume from './Volume.jsx'
import FullScreen from './FullScreen.jsx'
import { connect } from 'react-redux'

class VideoPlayerContainer extends Component {
    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        loading: false,
        volume: 1,
        lastVolume: null
    }
    togglePause = (event) => {
        this.setState({
            pause: !this.state.pause
        })
    }
    componentDidMount() {
        this.setState({
            pause: (!this.props.autoplay)
        })
    }
    handleLoadedMetadata = (event) => {
        this.video = event.target
        this.setState({
            duration: this.video.duration
        })
    }
    handleTimeUpdate = (event) => {
        this.setState({
            currentTime: this.video.currentTime
        })
    }
    handleChange = (event) => {
        this.video.currentTime = event.target.value
    }
    handleSeekinkg = (event) => {
        this.setState({
            loading: true
        })
    }
    handleSeeked = (event) => {
        this.setState({
            loading: false
        })
    }
    handleVolumeChange = (event) => {
        this.video.volume = event.target.value
        this.setState({
            volume: this.video.volume
        })
    }
    mute = () => {
        const lastVolume = this.video.volume
        this.setState({
            lastVolume: lastVolume,
            volume: 0
        })
        this.video.volume = 0
    }
    unMute = () => {
        this.setState({
            volume: this.state.lastVolume
        })
        this.video.volume = this.state.lastVolume
    }
    handleVolumeToggle = (event) => {
        this.video.volume != 0 
        ? 
            this.mute()
        :
            this.unMute()
    }
    setRef = element => {
        this.player = element
    }
    handleFullScreenClick = event => {
        if (!document.webkitIsFullScreen) {
            this.player.webkitRequestFullScreen()
        } else {
            document.exitFullscreen()
        }
    }
    render() {
        return(
            <VideoPlayer
                setRef={this.setRef}
            >
                <Title 
                    title={this.props.movie.get('title')}
                />
                <Controls>
                    <PlayPause 
                        pause={this.state.pause}
                        handleClick={this.togglePause}
                    />
                    <Timer 
                        duration={secondsToMinutes(this.state.duration)}
                        currentTime={secondsToMinutes(this.state.currentTime)}
                    />
                    <ProgessBar
                        duration={this.state.duration}
                        currentTime={this.state.currentTime}
                        handleChange={this.handleChange}
                    />
                    <Volume 
                        handleVolumeChange={this.handleVolumeChange}
                        handleVolumeToggle={this.handleVolumeToggle}
                        volume={this.state.volume}
                    />
                    <FullScreen 
                        handleFullScreenClick={this.handleFullScreenClick}
                    />
                </Controls>
                <Spinner 
                    loading={this.state.loading}
                />
                <Video 
                    autoplay={this.props.autoplay}
                    src={this.props.movie.get('src')}
                    pause={this.state.pause}
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    handleSeekinkg={this.handleSeekinkg}
                    handleSeeked={this.handleSeeked}
                    handleClick={this.togglePause}
                />
            </VideoPlayer>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        movie: state.get('data').get('entities').get('movie').get(props.id)
    }
}

export default connect(mapStateToProps)(VideoPlayerContainer)