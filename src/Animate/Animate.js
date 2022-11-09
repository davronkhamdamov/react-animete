import './Animate.css';
function Animate() {
  let a = (e) => animate(e.target.id);
  let b = (e) => animate(e.target.id);
  let c = (e) => animate(e.target.id);
  let d = (e) => animate(e.target.id);
  let e = (e) => animate(e.target.id);
  let f = (e) => animate(e.target.id);
  let animate = (id) => {
    document.getElementById('star').style.width = `${id * 17}%`;
    let text = document.getElementById('text');
    text.style.transform = `translate(${id * 16.7}%)`;
    text.textContent = id * 20 + '%';
  };
  return (
    <div className="box">
      <p id="text">0%</p>
      <br />
      <div className="star" id="star"></div>
      <div className="btn-group">
        <button onClick={a} id="0">
          0%
        </button>
        <button onClick={b} id="1">
          20%
        </button>
        <button onClick={c} id="2">
          40%
        </button>
        <button onClick={d} id="3">
          60%
        </button>
        <button onClick={e} id="4">
          80%
        </button>
        <button onClick={f} id="5">
          100%
        </button>
      </div>
    </div>
  );
}
export default Animate;
