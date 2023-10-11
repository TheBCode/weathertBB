import anime from "animejs";
const WaterDropGrid = () => {
    return (
        <div className="relative grid h-screen place-content-center bg-slate-900 px-8">
            <DotGrid />
        </div>
    )
};

const GRID_WIDTH = 50;
const GRID_HEIGHT = 50;

const DotGrid = () => {
    const dots = [];
    let index = 0;

    for (let i =0; i < GRID_WIDTH; i++) {
        for (let j = 0; j < GRID_HEIGHT; j++) {
            dots.push(
                <div
                    className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
                    data-index={index}
                    key={`${i}-${j}`}
                >
                    <div
                        className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
                        data-index={index}
                    />
                </div>
            );
            index++;
        }
    }
    return (
        <div
            style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
            className="grid w-fit"
        >
            {dots}
        </div>
    );
};

export default WaterDropGrid;