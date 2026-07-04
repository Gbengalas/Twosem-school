import './Videoplayer.css'
import Colledge_video from '../../assets/Colledge-video.mp4'


const Videoplayer = ({playState, setPlayState}) => {
  return (
      <div className={`videoplayer ${playState ? '' : 'hide'}`} onClick={() => setPlayState(false) } >
          <video src={Colledge_video} autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer