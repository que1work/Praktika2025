import { useState } from "react";
import { useParams } from "react-router-dom";
import palettes from "../pallete.json";
import notifySound from "../src_notify.mp3";

const PaletteDetail = () => {
  const { id } = useParams();
  const palette = palettes.find((p) => p.id === id);
  const [alert, setAlert] = useState(null);

  if (!palette) {
    return <p>Палітра не знайдена.</p>;
  }

  const copyToClipboard = (color) => {
    const audio = new Audio(notifySound);
    audio.play().then(() => {
      navigator.clipboard.writeText(color).then(() => {
        setAlert(color);
        setTimeout(() => setAlert(null), 2000);
      });
    });
  };

  return (
    <div className="pallete_click">
      <div className="back">
        <a href="/">⬅ Back</a>
      </div>
      <div className="grid_pallete">
        {palette.colors.map((color, index) => (
          <div
            key={index}
            className="color_grid"
            style={{ backgroundColor: color.color, cursor: "pointer" }}
            title="Натисніть, щоб скопіювати"
            onClick={(e) => {
              e.stopPropagation();
              copyToClipboard(color.color);
            }}
          >
            <h2>{color.name}</h2>
          </div>
        ))}
      </div>

      {alert && (
        <div className="alert" style={{ backgroundColor: alert }}>
          <h1>COPYED!</h1>
          <p>{alert}</p>
        </div>
      )}

    </div>
  );
};

export default PaletteDetail;
