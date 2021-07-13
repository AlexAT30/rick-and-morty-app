import load from '../images/load.png';
import logo from '../images/logo.png';
const LoadingPage = () => {
  return (
    <div className='LoadingPage' >
      <div className='LoadingLogo' >
        <img src={logo} alt='img' style={ { width: '100%' }} />
      </div>
      <div className='LoadingImg' >
        <img src={load} alt='img' style={ { width: '100%' }} />
      </div>
  </div>
  )
}
export default LoadingPage;