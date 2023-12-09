import { useRef } from "react";

export default function Ticker() {
  const ticker = useRef();
  return (
    <div className="text-running-box" ref={ticker}>
      <div className="text-running-wrapper">
        <div className="text-running-inner">
          <h5 className="text-running text-black">
            landing page <span className="slash"></span>webflow<span className="slash"></span> mobile app <span className="slash"></span>branding
            <span className="slash"></span>2d illustration <span className="slash"></span>3d illustration<span className="slash"></span> Animation
            <span className="slash"></span> saas
            <span className="slash"></span>webapp<span className="slash"></span> graphic design<span className="slash"></span>
          </h5>
        </div>
        <div className="text-running-inner">
          <h5 className="text-running text-black">
            landing page <span className="slash"></span>webflow<span className="slash"></span> mobile app <span className="slash"></span>branding
            <span className="slash"></span>2d illustration <span className="slash"></span>3d illustration<span className="slash"></span> Animation
            <span className="slash"></span> saas
            <span className="slash"></span>webapp<span className="slash"></span> graphic design<span className="slash"></span>
          </h5>
        </div>
        <div className="text-running-inner">
          <h5 className="text-running text-black">
            landing page <span className="slash"></span>webflow<span className="slash"></span> mobile app <span className="slash"></span>branding
            <span className="slash"></span>2d illustration <span className="slash"></span>3d illustration<span className="slash"></span> Animation
            <span className="slash"></span> saas
            <span className="slash"></span>webapp<span className="slash"></span> graphic design<span className="slash"></span>
          </h5>
        </div>
        <div className="text-running-inner">
          <h5 className="text-running text-black">
            landing page <span className="slash"></span>webflow<span className="slash"></span> mobile app <span className="slash"></span>branding
            <span className="slash"></span>2d illustration <span className="slash"></span>3d illustration<span className="slash"></span> Animation
            <span className="slash"></span> saas
            <span className="slash"></span>webapp<span className="slash"></span> graphic design<span className="slash"></span>
          </h5>
        </div>
      </div>
    </div>
  );
}
