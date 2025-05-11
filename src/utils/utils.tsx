const getSlideClass = (
  index: number,
  activeIndex: number,
  total: number
): string => {
  const secondLeft = (activeIndex + 2) % total;
  const firstLeft = (activeIndex + 1) % total;
  const firstRight = (activeIndex - 1 + total) % total;
  const secondRight = (activeIndex - 2 + total) % total;

  const isVisible = [
    secondLeft,
    firstLeft,
    activeIndex,
    firstRight,
    secondRight,
  ].includes(index);

  let slideClass = "";

  if (index === secondRight) slideClass += "-translate-x-full scale-75 z-10";
  else if (index === firstRight)
    slideClass += "-translate-x-1/2 scale-90 z-20 ";
  else if (index === activeIndex) slideClass += "translate-x-0 scale-100 z-30";
  else if (index === firstLeft) slideClass += "translate-x-1/2 scale-90 z-20";
  else if (index === secondLeft) slideClass += "translate-x-full scale-75 z-10";

  if (!isVisible) slideClass += "opacity-0 scale-0 -z-10";

  return slideClass;
};

const getPixels = (
  range: number,
  hexCodes?: string[] | null,
  baseRow?: string[]
) => {
  let pixels = [];

  if (hexCodes) {
    const base = hexCodes.flatMap((code, i) =>
      Array(i === 0 ? 1 : range - 1).fill(code)
    );
    pixels.push(base);
  } else if (baseRow) {
    pixels.push(baseRow);
  }

  for (let i = 0; i < range; i++) {
    let row: string[] = [...pixels[i]];
    row.pop();
    row.unshift(row[0]);
    pixels.push(row);
  }

  return pixels;
};

const updatePixels = (pixels: string[][]) => {
  const pixelBtn = document.getElementById("pixelBtn");

  const height = pixels.length;
  const width = 272;
  const rowHeight = 10;

  const backgroundImages: string[] = [];
  const backgroundSizes: string[] = [];
  const backgroundPositions: string[] = [];

  pixels.forEach((row, rowIndex) => {
    const segmentWidth = 100 / row.length;
    let offset = 0;

    const segments = row.map((color) => {
      const start = offset;
      offset += segmentWidth;
      return `${color} ${start}%, ${color} ${offset}%`;
    });

    backgroundImages.push(`linear-gradient(to right, ${segments.join(", ")})`);
    backgroundSizes.push(`${width}px ${rowHeight}px`);
    backgroundPositions.push(`0px ${rowIndex * rowHeight}px`);
  });
  if (pixelBtn) {
    pixelBtn.style.height = `${height * rowHeight}px`;
    pixelBtn.style.backgroundImage = backgroundImages.join(",");
    pixelBtn.style.backgroundSize = backgroundSizes.join(",");
    pixelBtn.style.backgroundRepeat = "no-repeat";
    pixelBtn.style.backgroundPosition = backgroundPositions.join(",");
  }
};

const shiftPixels = (
  pixels: string[][],
  directions: Map<number, number>,
  order: string[]
) => {
  const newRow = pixels[0];
  const currentColor = newRow[0];
  let count = 0;
  for (const color of newRow) {
    if (color === currentColor) count++;
    else break;
  }
  if (!directions.has(0)) directions.set(0, 1);

  if (count < order.length - 1) {
    newRow.pop();
    newRow.unshift(currentColor);
  } else {
    let index = order.indexOf(currentColor);
    let dir = directions.get(0)!;

    if (index <= 0) dir = 1;
    else if (index >= order.length - 1) dir = -1;

    directions.set(0, dir);
    const newColor = order[index + dir];
    newRow.pop();
    newRow.unshift(newColor);
  }
  pixels[0] = newRow;
  const newPixels = getPixels(pixels.length - 1, null, newRow);

  updatePixels(newPixels);
};

export { getSlideClass, getPixels, updatePixels, shiftPixels };
