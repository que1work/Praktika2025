import { Link } from "react-router-dom";
import palettes from "../pallete.json";

const Palette = ({ paletteName }) => {
  const palette = palettes.find(p => p.paletteName === paletteName);

  if (!palette) {
    return <p>Палітра "{paletteName}" не знайдена.</p>;
  }

  return (
    <Link to={`/palette/${palette.id}`}>
      <div className="palletes">
        <h2>{palette.paletteName} {palette.emoji}</h2>
        <div className="palette-grid">
          {palette.colors.map((color, index) => (
            <div
              key={index}
              className="color"
              style={{ backgroundColor: color.color }}
              title={color.name}
            />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Palette;
