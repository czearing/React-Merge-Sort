import React from "react";
import "./styles.css";

let data = [1, 3, 4, 5, 7, 8, 4];
function mergeSort(data) {
  if (data.length === 1) {
    return data;
  }

  const length = data.length;
  const middle = Math.floor(length / 2);
  const left = data.slice(0, middle);
  const right = data.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  console.log(left, right);

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

mergeSort(data);
export default function App() {
  return <div className="App" />;
}
