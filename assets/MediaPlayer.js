
class MediaPlayer{
    constructor(config) {
        this.media = config.el;
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    togglePlay(){
        this.media.paused === false 
            ? this.media.pause()
            : this.media.play()
    }
}

export default MediaPlayer;