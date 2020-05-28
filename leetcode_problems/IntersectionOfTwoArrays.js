/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
   const result = []

   const map = new Map()
   for(const n of nums1){
       if(map.has(n)){
        map.set(n, map.get(n)+1)
       }else{
        map.set(n, 1);
       }
   }

   for(const n of nums2){
       if(map.has(n) && map.get(n) > 0){
           result.push(n)
           map.set(n, map.get(n)-1)
       }
   }

   return result;
};

console.log(intersect([1,2,2,2,4],[2,2,4,5]))