import { useRef } from "react";
import cocacola from "../../assets/images/coca-cola.png";
import samsung from "../../assets/images/samsung.png";
import gotv from "../../assets/images/gotv.png";
import vivo from "../../assets/images/vivo.svg";
import milo from "../../assets/images/milo.png";
import apple from "../../assets/images/apple.png";
import sony from "../../assets/images/sony.svg";
import oppo from "../../assets/images/oppo.png";
import lg from "../../assets/images/lg.png";
import hp from "../../assets/images/hp.png";
import hyundai from "../../assets/images/hyundai.png";

export default function Ticker() {
  const ticker = useRef();
  return (
    <>
      <div className="flex items-center justify-center">
        <p className="text-secondary/70">Trusted by hundreds of progressive brands</p>
      </div>
      <div className="text-running-box" ref={ticker}>
        <div className="text-running-wrapper bg-background">
          <div className="text-running-inner">
            <div className="text-running text-black flex items-center">
              <img src={cocacola} className="w-24 h-full object-contain" alt="" />
              <div className="slash"></div>
              <img src={samsung} className="w-24 h-full object-contain" alt="" />
              <div className="slash"></div>
              <img src={gotv} className="w-24 h-full object-contain" alt="" />
              <div className="slash"></div>
              <img src={vivo} className="w-24 h-full object-contain" alt="" />
              <div className="slash"></div>
              <img src={milo} className="w-24 h-full object-contain" alt="" />
              <div className="slash"></div>
              <img src={apple} className="w-24 h-full object-contain" alt="" />
              <div className="slash"></div>
              <img src={oppo} className="w-24 h-10 object-cover" alt="" />
              <div className="slash"></div>
              <img src={sony} className="w-24 h-10 object-cover" alt="" />
              <div className="slash"></div>
              <img src={lg} className="w-24 h-10 object-cover" alt="" />
              <div className="slash"></div>
              <img src={hyundai} className="w-24 h-10 object-cover" alt="" />
              <div className="slash"></div>
              <img src={hp} className="w-24 h-10 object-cover" alt="" />
            </div>
          </div>
          <div className="text-running-inner">
            <div className="text-running text-black flex items-center">
              <div className="slash pl-7"></div>
              <img src={cocacola} className="w-24 h-full object-contain" alt="" />
              <div className="slash"></div>
              <img src={samsung} className="w-24 h-full object-contain" alt="" />
              <div className="slash"></div>
              <img src={gotv} className="w-24 h-full object-contain" alt="" />
              <div className="slash"></div>
              <img src={vivo} className="w-24 h-full object-contain" alt="" />
              <div className="slash"></div>
              <img src={milo} className="w-24 h-full object-contain" alt="" />
              <div className="slash"></div>
              <img src={apple} className="w-24 h-full object-contain" alt="" />
              <div className="slash"></div>
              <img src={oppo} className="w-24 h-10 object-cover" alt="" />
              <div className="slash"></div>
              <img src={sony} className="w-24 h-10 object-cover" alt="" />
              <div className="slash"></div>
              <img src={lg} className="w-24 h-10 object-cover" alt="" />
              <div className="slash"></div>
              <img src={hyundai} className="w-24 h-10 object-cover" alt="" />
              <div className="slash"></div>
              <img src={hp} className="w-24 h-10 object-cover" alt="" />
            </div>
          </div>
          <div className="text-running-inner">
            <div className="text-running text-black flex items-center">
              <div className="slash pl-7"></div>
              <img src={cocacola} className="w-24 h-full object-contain" alt="" />
              <div className="slash"></div>
              <img src={samsung} className="w-24 h-full object-contain" alt="" />
              <div className="slash"></div>
              <img src={gotv} className="w-24 h-full object-contain" alt="" />
              <div className="slash"></div>
              <img src={vivo} className="w-24 h-full object-contain" alt="" />
              <div className="slash"></div>
              <img src={milo} className="w-24 h-full object-contain" alt="" />
              <div className="slash"></div>
              <img src={apple} className="w-24 h-full object-contain" alt="" />
              <div className="slash"></div>
              <img src={oppo} className="w-24 h-10 object-cover" alt="" />
              <div className="slash"></div>
              <img src={sony} className="w-24 h-10 object-cover" alt="" />
              <div className="slash"></div>
              <img src={lg} className="w-24 h-10 object-cover" alt="" />
              <div className="slash"></div>
              <img src={hyundai} className="w-24 h-10 object-cover" alt="" />
              <div className="slash"></div>
              <img src={hp} className="w-24 h-10 object-cover" alt="" />
            </div>
          </div>
          <div className="text-running-inner">
            <div className="text-running text-black flex items-center">
              <div className="slash pl-7"></div>
              <img src={cocacola} className="w-24 h-full object-contain" alt="" />
              <div className="slash"></div>
              <img src={samsung} className="w-24 h-full object-contain" alt="" />
              <div className="slash"></div>
              <img src={gotv} className="w-24 h-full object-contain" alt="" />
              <div className="slash"></div>
              <img src={vivo} className="w-24 h-full object-contain" alt="" />
              <div className="slash"></div>
              <img src={milo} className="w-24 h-full object-contain" alt="" />
              <div className="slash"></div>
              <img src={apple} className="w-24 h-full object-contain" alt="" />
              <div className="slash"></div>
              <img src={oppo} className="w-24 h-10 object-cover" alt="" />
              <div className="slash"></div>
              <img src={sony} className="w-24 h-10 object-cover" alt="" />
              <div className="slash"></div>
              <img src={lg} className="w-24 h-10 object-cover" alt="" />
              <div className="slash"></div>
              <img src={hyundai} className="w-24 h-10 object-cover" alt="" />
              <div className="slash"></div>
              <img src={hp} className="w-24 h-10 object-cover" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
