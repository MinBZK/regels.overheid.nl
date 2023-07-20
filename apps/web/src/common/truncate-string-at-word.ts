export function truncateStringAtWord(input: string, max: number) {
  if (input.length <= max) return input;

  let truncatedStr = input.substring(0, max);

  truncatedStr = truncatedStr.substring(0, Math.min(truncatedStr.length, truncatedStr.lastIndexOf(' ')));

  if (truncatedStr.length < input.length) truncatedStr += '…';

  return truncatedStr;
}
