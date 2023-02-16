import React, { useState } from "react";
import JobComp from "./JobComp";
import data from "./data.jsx";

const JobListing = () => {
  const [jobData, setJobData] = useState(data);
  const jobComp = jobData.map((data, i) => {
    return <JobComp data={data} key={i} />;
  });
  return (
    <main>
      <div className="job--container">{jobComp}</div>
    </main>
  );
};

export default JobListing;
