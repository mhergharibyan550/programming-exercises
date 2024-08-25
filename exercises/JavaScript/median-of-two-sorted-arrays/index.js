/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */


function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length <= 1000 && nums2.length <= 1000) {
    const mergedNums = [...nums1, ...nums2].sort((a, b) => a - b);

    if (mergedNums.length > 0) {
      if (mergedNums.length % 2 === 0) {
        const firstMiddleNum = mergedNums[mergedNums.length / 2 - 1];
        const secondMiddleNum = mergedNums[mergedNums.length / 2];
        return (firstMiddleNum + secondMiddleNum) / 2;
      } else {
        return mergedNums[Math.floor(mergedNums.length / 2)];
      }
    } else {
      console.log("No array elements.");
    }

  } else {
    console.log("Too large array size.");
  }
};

console.log(findMedianSortedArrays([4, 90, 4, 6], [1, 9, 55, 12]));
console.log(findMedianSortedArrays([1,3], [1,2,3]));

