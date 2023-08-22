import "./styles/css/slide.css";
import "./styles/js/slide";

export default function Slide({ logo }) {
  const copy = [...logo];
  const copy2 = [...logo];
  const join = [...logo, ...copy, ...copy2];

  return (
    <div className="slide-container">
      <div className="slider">
        <div
          className={`slide-track`}
          style={{ width: `${300 * join.length}px` }}
        >
          {
          join.map((a, key) => {
            const src = a.attributes.url
            return (
              <div key={key} className="slide">
                <img className="img-slide mx-25" src={process.env.NEXT_PUBLIC_URL+src} />
              </div>
            );
          })
          }
        </div>
      </div>
    </div>
  );
}
