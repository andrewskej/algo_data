// You are given an array coordinates, 
// coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. 
// Check if these points make a straight line in the XY plane.

// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true

// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false

// 2 <= coordinates.length <= 1000
// coordinates[i].length == 2
// -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
// coordinates contains no duplicate point.


/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
      // if there are maximum 2 points, it's a line
      if(coordinates.length <= 2) return true;
    
      // slope is diff between 1st and 2nd point
      let x1 = coordinates[0][0]; 
      let y1 = coordinates[0][1];
      let slope = (coordinates[1][1] - y1) / (coordinates[1][0] - x1);
      
      // slope for all other points should be same as first 2
      for(let i = 2; i < coordinates.length;i++){ 
          if((coordinates[i][1] - y1)  !== slope * (coordinates[i][0]  - x1)) return false;
      }
      return true; 
};

const coordinates1 = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
const coordinates2 = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]];
const coordinates3 = [[-3,-2],[-1,-2],[2,-2],[-2,-2],[0,-2]];

console.log(checkStraightLine(coordinates1)) //t
console.log(checkStraightLine(coordinates2)) //f
console.log(checkStraightLine(coordinates3)) //t
