/**
 * Capitalize the first letter of a string
 */
export const ucfirst = (input: string) => {
  return input.charAt(0).toUpperCase() + input.slice(1);
};
