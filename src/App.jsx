import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import JobListing from "./Components/JobListing";
import data from "./Components/data.jsx";

function App() {
  const [filterTags, setFilterTags] = useState([]);
  const [jobData, setJobData] = useState(data);

  const handleFilter = (tag) => {
    if (filterTags.indexOf(tag) === -1) {
      setFilterTags((prevState) => [...prevState, tag]);
    }
  };

  const filterFunc = ({ role, level, tools, languages }) => {
    if (filterTags.length === 0) {
      return true;
    }

    const tags = [role, level];

    if (tools) {
      tags.push(...tools);
    }
    if (languages) {
      tags.push(...languages);
    }
    return filterTags.every((filter) => tags.includes(filter));
  };

  const filteredJobs = jobData.filter(filterFunc);

  const removeTag = (tag) => {
    setFilterTags(filterTags.filter((item) => item !== tag));
  };

  const handleClear = () => {
    setFilterTags([]);
    console.log(filterTags);
  };
  return (
    <div className="App">
      <Header
        filterTags={filterTags}
        removeTag={removeTag}
        handleClear={handleClear}
      />
      <JobListing
        jobData={jobData}
        filteredJobs={filteredJobs}
        handleFilter={handleFilter}
      />
    </div>
  );
}

export default App;
