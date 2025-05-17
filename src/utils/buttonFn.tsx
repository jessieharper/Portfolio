const countLeadingColours = (row: string[], colour: string): number => {
  let count = 0;
  for (const c of row) {
    if (c === colour) count++;
    else break;
  }
  return count;
};

export const generatePixels = (
  range: number,
  colours: string[],
  direction: number,
  baseRow?: string[]
): string[][] => {
  if (
    (!colours || colours.length === 0) &&
    (!baseRow || baseRow.length === 0)
  ) {
    return [];
  }

  const pixels: string[][] = [];

  const base =
    baseRow && baseRow.length > 0
      ? baseRow
      : colours.flatMap((colour, i) => Array(i === 0 ? 1 : range).fill(colour));

  pixels.push(base);

  for (let i = 0; i < range; i++) {
    const prev = pixels[i];
    const row = [...prev];
    const current = row[0];

    const count = countLeadingColours(row, current);

    if (count < range) {
      row.pop();
      row.unshift(current);
    } else {
      let index = colours.indexOf(current);
      if (index <= 0) direction = 1;
      else if (index >= colours.length - 1) direction = -1;

      const newColour = colours[index + direction] || current;
      row.pop();
      row.unshift(newColour);
    }

    pixels.push(row);
  }

  return pixels;
};

export const updateButtonBackground = (
  pixels: string[][],
  elementId: string
) => {
  const el = document.getElementById(elementId);
  if (!el) return;

  const rowHeight = 10;
  const height = pixels.length;
  const width = 260;

  const backgroundImages: string[] = [];
  const backgroundSizes: string[] = [];
  const backgroundPositions: string[] = [];

  pixels.forEach((row, rowIndex) => {
    const segmentWidth = 100 / row.length;
    let offset = 0;

    const segments = row.map((colour) => {
      const start = offset;
      offset += segmentWidth;
      return `${colour} ${start}%, ${colour} ${offset}%`;
    });

    backgroundImages.push(`linear-gradient(to right, ${segments.join(", ")})`);
    backgroundSizes.push(`${width}px ${rowHeight}px`);
    backgroundPositions.push(`0px ${rowIndex * rowHeight}px`);
  });

  el.style.height = `${height * rowHeight}px`;
  el.style.backgroundImage = backgroundImages.join(",");
  el.style.backgroundSize = backgroundSizes.join(",");
  el.style.backgroundPosition = backgroundPositions.join(",");
  el.style.backgroundRepeat = "no-repeat";
};

export const animatePixels = (
  pixels: string[][],
  colours: string[],
  direction: number,
  range: number
): [string[][], number] => {
  const row = [...pixels[0]];
  const current = row[0];
  const count = countLeadingColours(row, current);

  let newRow;

  if (count < range) {
    row.pop();
    row.unshift(current);
    newRow = row;
  } else {
    let index = colours.indexOf(current);
    if (index <= 0) direction = 1;
    else if (index >= colours.length - 1) direction = -1;

    const newColour = colours[index + direction] || current;
    row.pop();
    row.unshift(newColour);
    newRow = row;
  }

  const updated = generatePixels(range, colours, direction, newRow);
  return [updated, direction];
};
