import { useState, useEffect, useRef } from 'react';
import p5 from 'p5';
import { sketch } from './sketches/target';
import playIcon from './icons/play.svg';
import stopIcon from './icons/stop.svg';
import reloadIcon from './icons/reload.svg';

const play = (p5) => {
  p5.loop();
};

const stopSketch = (p5) => {
  p5.noLoop();
};

const reload = (p5Instance, canvasContainer) => {
  p5Instance.current.remove();
  p5Instance.current = new p5(sketch, canvasContainer.current);
};

const App = () => {
  const [stopped, setStopped] = useState(false);
  const canvasContainer = useRef(null);
  const p5Instance = useRef(null);

  useEffect(() => {
    if (p5Instance.current) {
      p5Instance.current.remove();
    }

    p5Instance.current = new p5(sketch, canvasContainer.current);
  }, []);

  return (
    <>
      <main ref={canvasContainer} />
      <nav>
        <button
          onClick={() => {
            if (stopped) {
              play(p5Instance.current);
            } else {
              stopSketch(p5Instance.current);
            }

            setStopped(!stopped);
          }}>
          <img src={stopped ? playIcon : stopIcon} />
        </button>

        <button
          onClick={() => {
            reload(p5Instance, canvasContainer);
            setStopped(false);
          }}>
          <img src={reloadIcon} />
        </button>
      </nav>
    </>
  );
};

export default App;
