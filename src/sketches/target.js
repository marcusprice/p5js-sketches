const randomInt = (max) => {
  return Math.floor(Math.random() * max);
};

export const sketch = (p5) => {
  const colors = ['#355070', '#6D597A', '#B56576', '#E56B6F', '#EAAC8B'];
  let count = randomInt(5);
  const widthHeight = 768;

  p5.setup = () => {
    p5.createCanvas(widthHeight, widthHeight);
    p5.background(255);
    p5.noLoop();
  };

  p5.draw = () => {
    for (let i = widthHeight; i >= 0; i = i - 50) {
      const color = colors[count];
      console.log(color);

      p5.noStroke();
      p5.fill(color);
      p5.circle(widthHeight / 2, widthHeight / 2, i);

      count++;
      if (count > 4) {
        count = 0;
      }
    }
  };
};
