import { useRef } from "react";

export default function Ticker() {
  const ticker = useRef();
  return (
    <div className="text-running-box" ref={ticker}>
      <div className="text-running-wrapper">
        <div className="text-running-inner">
          <h5 className="text-running text-black">
            GOOGLE <span className="slash"></span>MICROSOFT<span className="slash"></span>AMAZON<span className="slash"></span>NETFLIX
            <span className="slash"></span>TWITTER<span className="slash"></span>FACEBOOK<span className="slash"></span>INSTAGRAM
            <span className="slash"></span>APPLE
            <span className="slash"></span>STARBUCKS<span className="slash"></span>DISCORD<span className="slash">SKYPE</span>
          </h5>
        </div>
        <div className="text-running-inner">
          <h5 className="text-running text-black">
            GOOGLE <span className="slash"></span>MICROSOFT<span className="slash"></span>AMAZON<span className="slash"></span>NETFLIX
            <span className="slash"></span>TWITTER<span className="slash"></span>FACEBOOK<span className="slash"></span>INSTAGRAM
            <span className="slash"></span>APPLE
            <span className="slash"></span>STARBUCKS<span className="slash"></span>DISCORD<span className="slash">SKYPE</span>
          </h5>
        </div>
      </div>
    </div>
  );
}
