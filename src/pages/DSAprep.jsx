import React, { useState } from "react";
import {
  Book,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";

const dsaTopics = [
  {
    id: 1,
    title: "Arrays & Hashing",
    problems: [
      { name: "Two Sum", difficulty: "Easy", link: "https://leetcode.com/problems/two-sum/" },
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

const DSAPrep = () => {
  const [expanded, setExpanded] = useState(1);
  const [completed, setCompleted] = useState({});

  const toggleComplete = (problemName) => {
    setCompleted((prev) => ({
      ...prev,
      [problemName]: !prev[problemName],
    }));
  };

  return (
    <div className="container animate-fade mt-8">
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>DSA Mastery Sheet</h1>
      <p className="text-muted mb-8">
        Systematic preparation for product company interviews.
      </p>

      <div className="flex flex-col gap-4">
        {dsaTopics.map((topic) => (
          <div
            key={topic.id}
            className="card glass-card mb-4"
            style={{ padding: "0" }}
          >
            <button
              onClick={() => setExpanded(expanded === topic.id ? null : topic.id)}
              className="w-full flex justify-between items-center"
              style={{
                background: "transparent",
                padding: "1.5rem",
                color: "var(--text)",
              }}
              type="button"
            >
              <div className="flex items-center gap-4">
                <div
                  style={{
                    padding: "0.5rem",
                    background: "var(--surface-light)",
                    borderRadius: "0.5rem",
                  }}
                >
                  <Book size={20} color="var(--primary)" />
                </div>
                <h3 style={{ fontSize: "1.25rem" }}>{topic.title}</h3>
                <span className="badge">{topic.problems.length} Problems</span>
              </div>
              {expanded === topic.id ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>

            {expanded === topic.id && (
              <div
                style={{
                  padding: "0 1.5rem 1.5rem",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <table
                  className="w-full mt-4"
                  style={{ borderCollapse: "collapse" }}
                >
                  <thead>
                    <tr
                      className="text-muted"
                      style={{
                        textAlign: "left",
                        borderBottom: "1px solid var(--border)",
                      }}
                    >
                      <th style={{ padding: "1rem" }}>Status</th>
                      <th style={{ padding: "1rem" }}>Problem</th>
                      <th style={{ padding: "1rem" }}>Difficulty</th>
                      <th style={{ padding: "1rem" }}>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topic.problems.map((problem) => (
                      <tr
                        key={problem.name}
                        style={{ borderBottom: "1px solid var(--border)" }}
                      >
                        <td style={{ padding: "1rem" }}>
                          <CheckCircle
                            size={20}
                            style={{
                              cursor: "pointer",
                              color: completed[problem.name]
                                ? "var(--success)"
                                : "var(--text-muted)",
                              transition: "color 0.2s ease",
                            }}
                            onClick={() => toggleComplete(problem.name)}
                          />
                        </td>
                        <td style={{ padding: "1rem", fontWeight: 600 }}>
                          {problem.name}
                        </td>
                        <td style={{ padding: "1rem" }}>
                          <span
                            className={`badge ${
                              problem.difficulty === "Easy"
                                ? "badge-success"
                                : "badge-primary"
                            }`}
                          >
                            {problem.difficulty}
                          </span>
                        </td>
                        <td style={{ padding: "1rem" }}>
                          <a
                            href={problem.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-primary flex items-center gap-1"
                          >
                            Solve <ExternalLink size={14} />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DSAPrep;
