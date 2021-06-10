export const sketch = (p5) => {
  let x = 0;
  const widthHeight = 768;

  p5.setup = () => {
    p5.createCanvas(widthHeight, widthHeight);
    p5.background(200, 120, 200);
  };

  p5.draw = () => {
    p5.circle(widthHeight / 2, widthHeight / 2, x);
    x++;
  };
};
