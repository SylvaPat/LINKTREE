import internship from "./img/zuri.png";
import ingressive from "./img/zuri-ingressive-img.png";

export default function Foot() {
  return (
    <div className="foot">
      <hr />
      <div className="foot-body">
        <img src={internship} alt="zuri internship" id="zuri__img" />
        <p id="hng__text">HNG Internship 9 Frontend Task</p>
        <img src={ingressive} alt="Inngressive" id="zuri__ingressive" />
      </div>
    </div>
  );
}
