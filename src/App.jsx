import "./style/base.css";

function App() {
  const colorList = [
    "#B9DEC9",
    "#ED6D3D",
    "#608F68",
    "#F49503",
    "#EDC1CF",
    "#344B5C",
    "#FADD99",
    "#E07241",
    "#BECAB7",
    "#4F794A",
    "#EBB6C2",
    "#3D74AA",
    "#F2CC2B",
    "#5D0C8A",
  ];

  return (
    <>
      <h1> Chinese Traditional Color</h1>

      <div className="container">
        {colorList.map((color) => {
          return (
            <div className="colorpage" style={{ backgroundColor: color }}>
              {color}
            </div>
          );
        })}
      </div>
    </>
  );
}
export default App;
