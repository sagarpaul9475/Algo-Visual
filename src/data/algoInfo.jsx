// src/data/algoInfo.js

const algoInfo = {
  "bubble": {
    time: {
      best: "O(n)",
      average: "O(n²)",
      worst: "O(n²)"
    },
    space: "O(1)",
    description: "Bubble Sort repeatedly compares and swaps adjacent elements until the array is sorted.",
    pros: ["Simple to implement", "In-place sorting"],
    cons: ["Inefficient for large datasets"]
  },
  "insertion": {
    time: {
      best: "O(n)",
      average: "O(n²)",
      worst: "O(n²)"
    },
    space: "O(1)",
    description: "Insertion Sort builds the sorted array one item at a time.",
    pros: ["Efficient for small data", "In-place sorting"],
    cons: ["Not suitable for large data"]
  },
  "merge": {
    time: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)"
    },
    space: "O(n)",
    description: "Merge Sort is a divide-and-conquer algorithm that splits the array into halves, sorts, and merges.",
    pros: ["Stable", "Consistent time complexity"],
    cons: ["Needs additional memory"]
  },
  "quick": {
    time: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n²)"
    },
    space: "O(log n)",
    description: "Quick Sort uses a pivot to partition the array and recursively sort sub-arrays.",
    pros: ["Fast in practice", "In-place sorting"],
    cons: ["Unstable", "Worst case O(n²)"]
  }
};

export default algoInfo;
