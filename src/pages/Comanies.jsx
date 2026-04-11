import React from "react";


const companyData = [
    {
        name: "Google",
        pattern: "Aptitude (Numberical, Verbal, Reasoning) + Coding",
        syllabus: "Quants: Profit & Loss, Time & Work. Coding: Basic Logic, Sting Handling.",
        eligibility: "60% throughout in 10th, 12th & Gradution. 1 Backlog allowed",
        color: "#eb1c24",
    },
    {
        name: "Jay P. Morgan",
        pattern: "QA (2 Coding + Behaviour) + 3 Technical Round + Bar Raiser",
        syllabus: "DSA: Tree, Graphs, DP.",
        eligibility: "Consistency in acadimics. Strong Problem sloving skills."
        color: "#12decd",
    },
    {
        name: "Adobe",
        pattern: "OA (Aptitude + CS Fundamentals + Coding) + 3-4 Interviews",
        syllabus: "OS, DBMS, OOPS, DSA. Frontend system design for UI roles.",
        eligibility: "Minimum 7.5 CGPA preferred.",
        color: "#ed1c23b6",
    },
    {
        name: " Congizent ",
        pattern: "Aptitude + Logical + Technical + HR",
        eligibility: "No active backlog. 60% in degree."
        color: "rgba(23, 226, 155, 0.81)"
    },
];




const Companies = () => {
    return(
        <div className="container animate-fade mt-8">
            <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                Company Hiring Prosesses
            </h1>
            <p className="text-muted mb-12">
                Stay update with the latest exam patterns and eligibility criteria.
            </p>
        </div>
    )
}