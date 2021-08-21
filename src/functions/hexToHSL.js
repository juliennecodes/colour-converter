export function hexToHSL(hex) {
  const hexObject = splitIntoIndividualHexNotations(hex);

  const red = hexTo8BitFraction(hexObject.red);
  const green = hexTo8BitFraction(hexObject.green);
  const blue = hexTo8BitFraction(hexObject.blue);

  const smallestChannel = Math.min(red, green, blue);
  const greatestChannel = Math.max(red, green, blue);
  const delta = greatestChannel - smallestChannel;

  const hue = calculateHue(red, green, blue, delta, greatestChannel);
  const saturation = calculateSaturation(greatestChannel, smallestChannel);
  const lightness = calculateLightness(greatestChannel, smallestChannel);

  return {
    hue: hue,
    saturation: saturation,
    lightness: lightness,
  };
}

function splitIntoIndividualHexNotations(hex) {
  let red;
  let green;
  let blue;

  // # + 3 digits
  if (hex.length === 4) {
    red = "0x" + hex[1] + hex[1];
    green = "0x" + hex[2] + hex[2];
    blue = "0x" + hex[3] + hex[3];

    // # + 6 digits
  } else if (hex.length === 7) {
    red = "0x" + hex[1] + hex[2];
    green = "0x" + hex[3] + hex[4];
    blue = "0x" + hex[5] + hex[6];
  }

  return {
    red: red,
    green: green,
    blue: blue,
  };
}

function hexTo8BitFraction(hexColour) {
  return hexColour / 255;
}

function calculateHue(red, green, blue, delta, greatestChannel) {
  let hue = 0;

  if (delta === 0) {
    hue = 0;
  } else if (greatestChannel === red) {
    hue = ((green - blue) / delta) % 6;
  } else if (greatestChannel === green) {
    hue = (blue - red) / delta + 2;
  } else {
    hue = (red - green) / delta + 4;
  }

  hue = Math.round(hue * 60);

  if (hue < 0) {
    hue = hue + 360;
  }

  return Math.round(hue);
}

function calculateSaturation(greatestChannel, smallestChannel) {
  let delta = greatestChannel - smallestChannel;
  let lightness = (greatestChannel + smallestChannel) / 2;

  let saturation = 0;

  if (delta === 0) {
    saturation = 0;
  } else {
    saturation = delta / (1 - Math.abs(2 * lightness - 1));
    saturation = Number((saturation * 100).toFixed(1));
  }

  return Math.round(saturation);
}

function calculateLightness(greatestChannel, smallestChannel) {
  let lightness = (greatestChannel + smallestChannel) / 2;
  lightness = Number((lightness * 100).toFixed(1));

  return Math.round(lightness);
}
