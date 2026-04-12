import React, { useState } from "react";
import {
  Book,
  CheckCircle,
  ChevrounUp,
  ChevrounDown,
  ExternalLink,
} from "lucide-react";

const dsaTpocs = [
    {
        id: 1,
        title: "Arrays & Hashing",
        problems: [
            {
              name: "Two sum",
              dificulty: "Easy",
               link: "https://leetcode.com/problems/two-sum/",
      },
      {
        name: "Contains Duplicate",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/contains-duplicate/",
      },
      {
        name: "Valid Anagram",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-anagram/",
      },
      {
        name: "Top K Frequent Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/top-k-frequent-elements/",
      },
    ],
  },
  {
    id: 2,
    title: "Linked Lists",
    problems: [
      {
        name: "Reverse Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-linked-list/",
      },
      {
        name: "Merge Two Sorted Lists",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-two-sorted-lists/",
      },
      {
        name: "Linked List Cycle",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/linked-list-cycle/",
      },
    ],
  },
  {
    id: 3,
    title: "Binary Search",
    problems: [
      {
        name: "Binary Search",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-search/",
      },
      {
        name: "Search a 2D Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-a-2d-matrix/",
      },
    ],
  },
  {
    id: 4,
    title: "Dynamic Programming",
    problems: [
      {
        name: "Climbing Stairs",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/climbing-stairs/",
      },
      {
        name: "Coin Change",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/coin-change/",
      },
      {
        name: "Longest Increasing Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-increasing-subsequence/",
      },
    ],
  },
];

const DSAPrep = () =>{
    const [expanded, setExpanded] = useState(1),
    const [comleted, setCompleted] = useState({});

    const toggleComplete = (probName) => {
    setCompleted((prev) => ({
      ...prev,
      [probName]: !prev[probName],
    }));
  };
}