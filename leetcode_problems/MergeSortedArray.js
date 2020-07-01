var merge = function(nums1, m, nums2, n) {
    var currentIndex = m + n - 1;

    m--;
    n--;
 
     while(currentIndex){
         if(n < 0 || nums1[m] > nums2[n]){
             nums1[currentIndex] = nums1[m] 
             m--;
         }else{
             nums1[currentIndex] = nums2[n]
             n--;
         }
         currentIndex--;
    }

   console.log(nums1)
};


merge([1,2,3,0,0,0], 3, [2,5,6], 3)