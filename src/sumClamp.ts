export const sumClamp = (nums: number[], clamp: number): number => {
  return Math.min(
    nums.reduce((sum, num) => sum + num, 0),
    clamp
  );
};
