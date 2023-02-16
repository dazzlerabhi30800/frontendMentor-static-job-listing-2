import React from "react";

const JobComp = ({ data, handleFilter }) => {
  const tags = [data.role, data.level];
  if (data.tools) {
    tags.push(...data.tools);
  }
  if (data.languages) {
    tags.push(...data.languages);
  }
  return (
    <div className="job">
      <div className="info--container">
        <img src={data.logo} alt="account" aria-hidden="true" />
        <div className="info--wrapper">
          <div className="company">
            <span>{data.company}</span>
            {data.new && <span>New!</span>}
            {data.featured && <span>featured</span>}
          </div>
          <h1 className="role">{data.position}</h1>
          <div className="add--info">
            {data.postedAt} . {data.contract} . {data.location}
          </div>
        </div>
      </div>
      <div className="filter--card--wrapper">
        {tags.map((tag, i) => {
          return (
            <div className="card" key={i} onClick={() => handleFilter(tag)}>
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobComp;
