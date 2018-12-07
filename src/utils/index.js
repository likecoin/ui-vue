export function wiggleValue(value, deviation) {
  const vInt = parseFloat(value, 10);
  const dInt = parseFloat(deviation, 10);
  return vInt - dInt + Math.random() * dInt * 2;
}
