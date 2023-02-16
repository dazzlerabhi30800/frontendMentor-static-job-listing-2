import React from "react";
import JobComp from "./JobComp";

const JobListing = ({ handleFilter, jobData, filteredJobs }) => {
  return (
    <main>
      <div className="job--container">
        {jobData.length === 0 ? (
          <p>Jobs are Fetching</p>
        ) : (
          filteredJobs.map((data, i) => (
            <JobComp data={data} handleFilter={handleFilter} key={i} />
          ))
        )}
      </div>
    </main>
  );
};

export default JobListing;
