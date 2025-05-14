const countColours = (row: string[], currentColour: string) => {
  let count = 0;
  for (const color of row) {
    if (color === currentColour) count++;
    else break;
  }
  return count;
};

const getPixels = (
  range: number,
  hexCodes?: string[] | null,
  baseRow?: string[]
) => {
  let pixels = [];

  if (hexCodes) {
    const base = hexCodes.flatMap((code, i) =>
      Array(i === 0 ? 1 : range).fill(code)
    );
    pixels.push(base);
  } else if (baseRow) {
    pixels.push(baseRow);
  }

  for (let i = 0; i <= range; i++) {
    const prevRow: string[] = pixels[i];
    const row: string[] = [...prevRow];

    const currentColor = row[0];

    row.pop();
    row.unshift(currentColor);

    pixels.push(row);
  }

  return pixels;
};

const updatePixels = (pixels: string[][]) => {
  const pixelBtn = document.getElementById("pixelBtn");

  const height = pixels.length;
  const width = 260 * 1.5;
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
  order: string[],
  direction: number,
  range: number
) => {
  const newRow = [...pixels[0]];
  const currentColour = newRow[0];

  const count = countColours(newRow, currentColour);
  let newColour;

  if (count < range) {
    newRow.pop();
    newRow.unshift(currentColour);
  } else {
    let index = order.indexOf(currentColour);

    if (index <= 0) direction = 1;
    else if (index >= order.length - 1) direction = -1;

    newColour = order[index + direction];
    newRow.pop();
    newRow.unshift(newColour);
  }
  pixels[0] = newRow;
  const newPixels = getPixels(pixels.length - 1, null, newRow);

  updatePixels(newPixels);
  return direction;
};

export { getPixels, updatePixels, shiftPixels };
