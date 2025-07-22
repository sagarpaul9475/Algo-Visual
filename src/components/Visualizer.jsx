import { getBubbleSortAnimations } from "../algorithms/bubbleSort";
import { getSelectionSortAnimations } from "../algorithms/selectionSort";
import { getMergeSortAnimations } from "../helpers/mergeSortHelper";
import { getInsertionSortAnimations } from "../algorithms/InsertionSort";
import { getQuickSortAnimations } from "../algorithms/quickSort";
import { useEffect, useState } from "react";
import algoInfo from '../data/algoInfo';

function generateArray(length) {
  return Array.from({ length }, () => Math.floor(Math.random() * 300) + 20);
}

function Visualizer() {
  const [array, setArray] = useState(generateArray(30));
  const [barStates, setBarStates] = useState([]);
  const [speed, setSpeed] = useState(100);
  const [isSorting, setIsSorting] = useState(false);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("bubble");
  useEffect(() => {
    setBarStates(new Array(array.length).fill("default"));
  }, [array]);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const resetArray = () => {
    if (isSorting) return;
    setArray(generateArray(30));
    setBarStates(new Array(30).fill("default"));
  };

  const bubbleSort = async () => {
    if (isSorting) return;
    const animations = getBubbleSortAnimations(array);
    const newArr = [...array];
    const newStates = [...barStates];
    setIsSorting(true);

    for (let [type, a, b] of animations) {
      if (type === "compare") {
        newStates[a] = "comparing";
        newStates[b] = "comparing";
        setBarStates([...newStates]);
        await sleep(speed);
        newStates[a] = "default";
        newStates[b] = "default";
      }
      if (type === "swap") {
        newStates[a] = "swapping";
        newStates[b] = "swapping";
        setBarStates([...newStates]);
        await sleep(speed);
        [newArr[a], newArr[b]] = [newArr[b], newArr[a]];
        setArray([...newArr]);
        newStates[a] = "default";
        newStates[b] = "default";
      }
      setBarStates([...newStates]);
    }

    for (let i = 0; i < newArr.length; i++) {
      newStates[i] = "sorted";
      setBarStates([...newStates]);
      await sleep(10);
    }

    setIsSorting(false);
  };

  const selectionSort = async () => {
    if (isSorting) return;
    const animations = getSelectionSortAnimations(array);
    const newArr = [...array];
    const newStates = [...barStates];
    setIsSorting(true);

    for (let [type, a, b] of animations) {
      if (type === "compare") {
        newStates[a] = "comparing";
        newStates[b] = "comparing";
        setBarStates([...newStates]);
        await sleep(speed);
        newStates[a] = "default";
        newStates[b] = "default";
      }
      if (type === "swap") {
        newStates[a] = "swapping";
        newStates[b] = "swapping";
        setBarStates([...newStates]);
        await sleep(speed);
        [newArr[a], newArr[b]] = [newArr[b], newArr[a]];
        setArray([...newArr]);
        newStates[a] = "default";
        newStates[b] = "default";
      }
      setBarStates([...newStates]);
    }

    for (let i = 0; i < newArr.length; i++) {
      newStates[i] = "sorted";
      setBarStates([...newStates]);
      await sleep(10);
    }

    setIsSorting(false);
  };

  const insertionSort = async () => {
    if (isSorting) return;
    const animations = getInsertionSortAnimations(array);
    const newArr = [...array];
    const newStates = [...barStates];
    setIsSorting(true);

    for (let [type, a, b] of animations) {
      if (type === "compare") {
        newStates[a] = "comparing";
        setBarStates([...newStates]);
        await sleep(speed);
        newStates[a] = "default";
      }
      if (type === "overwrite") {
        newStates[a] = "swapping";
        setBarStates([...newStates]);
        newArr[a] = b;
        setArray([...newArr]);
        await sleep(speed);
        newStates[a] = "default";
      }
      setBarStates([...newStates]);
    }

    for (let i = 0; i < newArr.length; i++) {
      newStates[i] = "sorted";
      setBarStates([...newStates]);
      await sleep(10);
    }

    setIsSorting(false);
  };

  const mergeSort = async () => {
    if (isSorting) return;
    const animations = getMergeSortAnimations(array);
    const newArr = [...array];
    const newStates = [...barStates];
    setIsSorting(true);

    for (let i = 0; i < animations.length; i++) {
      const [a, b] = animations[i];

      if (i % 3 !== 2) {
        newStates[a] = "comparing";
        newStates[b] = "comparing";
        setBarStates([...newStates]);
        await sleep(speed);
        newStates[a] = "default";
        newStates[b] = "default";
      } else {
        newArr[a] = b;
        newStates[a] = "swapping";
        setArray([...newArr]);
        setBarStates([...newStates]);
        await sleep(speed);
        newStates[a] = "default";
      }
      setBarStates([...newStates]);
    }

    for (let i = 0; i < newArr.length; i++) {
      newStates[i] = "sorted";
      setBarStates([...newStates]);
      await sleep(10);
    }

    setIsSorting(false);
  };

  const quickSort = async () => {
    if (isSorting) return;
    const animations = getQuickSortAnimations(array);
    const newArr = [...array];
    const newStates = [...barStates];
    setIsSorting(true);

    for (let [type, a, b] of animations) {
      if (type === "compare") {
        newStates[a] = "comparing";
        newStates[b] = "comparing";
        setBarStates([...newStates]);
        await sleep(speed);
        newStates[a] = "default";
        newStates[b] = "default";
      }
      if (type === "swap") {
        newStates[a] = "swapping";
        newStates[b] = "swapping";
        setBarStates([...newStates]);
        await sleep(speed);
        [newArr[a], newArr[b]] = [newArr[b], newArr[a]];
        setArray([...newArr]);
        newStates[a] = "default";
        newStates[b] = "default";
      }
      if (type === "pivot") {
        newStates[b] = "comparing";
        setBarStates([...newStates]);
        await sleep(speed);
        newStates[b] = "default";
      }
      setBarStates([...newStates]);
    }

    for (let i = 0; i < newArr.length; i++) {
      newStates[i] = "sorted";
      setBarStates([...newStates]);
      await sleep(10);
    }

    setIsSorting(false);
  };

  const handleSort = () => {
    switch (selectedAlgorithm) {
      case "bubble": return bubbleSort();
      case "selection": return selectionSort();
      case "insertion": return insertionSort();
      case "merge": return mergeSort();
      case "quick": return quickSort();
      default: return;
    }
  };

  return (
    <div className="w-full max-w-5xl bg-gray-800 text-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-semibold mb-2">Sorting Controls</h2>
      <div className="mb-4 flex flex-wrap gap-4 items-center">
        <label className="text-white font-semibold">Select Algorithm:</label>
        <select
          value={selectedAlgorithm}
          onChange={(e) => setSelectedAlgorithm(e.target.value)}
          className="p-2 rounded bg-gray-700 text-white"
        >
          <option value="bubble">Bubble Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="insertion">Insertion Sort</option>
          <option value="merge">Merge Sort</option>
          <option value="quick">Quick Sort</option>
        </select>

        <button
          onClick={handleSort}
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
        >
          Visualize {selectedAlgorithm.charAt(0).toUpperCase() + selectedAlgorithm.slice(1)} Sort
        </button>

        <button
          onClick={resetArray}
          disabled={isSorting}
          className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700"
        >
          Generate New Array
        </button>
      </div>

      <div className="flex items-center space-x-2 mb-4">
        <label htmlFor="speed" className="text-sm text-white">Speed:</label>
        <input
          type="range"
          id="speed"
          min="10"
          max="1000"
          step="10"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="w-40"
        />
        <span className="text-sm text-white">{speed}ms</span>
      </div>

      <div className="flex items-end justify-center h-90 space-x-1 bg-white p-2 rounded">
        {array.map((value, idx) => {
          let barColor = "bg-blue-500";
          if (barStates[idx] === "comparing") barColor = "bg-yellow-400";
          else if (barStates[idx] === "swapping") barColor = "bg-red-500";
          else if (barStates[idx] === "sorted") barColor = "bg-green-500";
          return (
            <div
              key={idx}
              style={{ height: `${value}px` }}
              className={`w-2 ${barColor} transition-all duration-200`}
            ></div>
          );
        })}
      </div>

      <div className="flex gap-4 mt-6 text-white justify-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-500"></div><span>Default</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-yellow-400"></div><span>Comparing</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-red-500"></div><span>Swapping</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-green-500"></div><span>Sorted</span>
        </div>
      </div>


      {selectedAlgorithm && (
        <div className="bg-white dark:bg-gray-800 p-4 mt-4 rounded shadow text-black dark:text-white">
          <h2 className="text-xl font-bold mb-2">
            {selectedAlgorithm.charAt(0).toUpperCase() + selectedAlgorithm.slice(1)} Sort
          </h2>
          <p className="mb-2">{algoInfo[selectedAlgorithm]?.description}</p>
          <div className="text-sm">
            <p><strong>Time Complexity:</strong></p>
            <ul className="ml-4 list-disc">
              <li>Best: {algoInfo[selectedAlgorithm]?.time?.best}</li>
              <li>Average: {algoInfo[selectedAlgorithm]?.time?.average}</li>
              <li>Worst: {algoInfo[selectedAlgorithm]?.time?.worst}</li>
            </ul>
            <p><strong>Space Complexity:</strong> {algoInfo[selectedAlgorithm]?.space}</p>
            <p><strong>Pros:</strong> {algoInfo[selectedAlgorithm]?.pros?.join(", ")}</p>
            <p><strong>Cons:</strong> {algoInfo[selectedAlgorithm]?.cons?.join(", ")}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Visualizer;
