const nums: number[] = [7, 3, 6, 2, 4, 1, 5];

const selection = (nums: number[]): number[] => {
  for (let i = 0; i < nums.length - 1; i++) {
    let minIndex = 1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
  }
  return nums;
};

console.log(selection(nums));

// link : https://youtube.com/shorts/GmFGZHJE0QA?si=RBoNIapamdnvACQs
