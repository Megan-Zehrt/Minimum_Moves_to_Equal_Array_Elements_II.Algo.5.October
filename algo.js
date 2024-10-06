// 462. Minimum Moves to Equal Array Elements II



// Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.

// In one move, you can increment or decrement an element of the array by 1.

// Test cases are designed so that the answer will fit in a 32-bit integer.





/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {

    nums.sort((a,b) => a-b)

    let min = Infinity 
    
    for(let i = 0; i < nums.length; i++){

        let moves = 0

        let array = new Array(nums.length).fill(nums[i])

        for(let j = 0; j < nums.length; j++){

            let difference = Math.abs(array[j] - nums[j]);

            moves += difference


        }

        min = Math.min(moves, min)
    }

    return min
};