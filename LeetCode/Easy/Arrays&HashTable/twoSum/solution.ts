// description : https://leetcode.com/problems/two-sum/description/

function twoSum(nums: number[], target: number): number[] {
  let indices: number[];
  let map = nums.map((num, index) => {
    let diff = target - num;
    let exist = nums.includes(diff, index + 1);
    if (exist) {
      let indexOf = nums.indexOf(diff, index + 1);
      indices = [...[index, indexOf]];
      return;
    }
  });
  return indices!;
}
