
export function roundDecimal(num, dec)
{
  let pow = Math.pow(10, dec);
  return Math.round(num * pow) / pow;
}
