import React from "react";

const Experiences = ({ repo }) => {
  return (
    <>
      <form>
        <select>
          {repo && repo.map((repository, index) => (
            <option key={index} value={repository.name}>
              {repository.name}
            </option>
          ))}
        </select>
      </form>
    </>
  );
};

export default Experiences;
