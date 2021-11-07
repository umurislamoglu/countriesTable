import React, { useState } from "react";

const Search = ({ setCountryData, resetData }) => {
  const [keyword, setKeyword] = useState("");
  const [keywordCapital, setKeywordCapital] = useState("");

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  const onChangebyCapital = (e) => {
    setKeywordCapital(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setCountryData(resetData);
    if (keyword.trim()) {
      let filteredArr = [];
      resetData.forEach((country) => {
        if (
          country.capitalCity &&
          (country.name.toLowerCase().search(keyword.toLowerCase().trim()) >=
            0 ||
            country.region.toLowerCase().search(keyword.toLowerCase().trim()) >=
              0 ||
            country.capitalCity
              .toLowerCase()
              .search(keyword.toLowerCase().trim()) >= 0)
        ) {
          filteredArr.push(country);
        }
        if (!country.capitalCity) {
          if (
            country.name.toLowerCase().search(keyword.toLowerCase().trim()) >=
              0 ||
            country.region.toLowerCase().search(keyword.toLowerCase().trim()) >=
              0
          ) {
            filteredArr.push(country);
          }
        }
      });

      setCountryData(filteredArr);
    }
  };

  const onSubmitbyCapital = (e) => {
    e.preventDefault();
    setCountryData(resetData);
    if (keywordCapital.trim()) {
      let filteredArr = [];
      resetData.forEach((country) => {
        if (
          country.capitalCity &&
          
            country.capitalCity
              .toLowerCase()
              .search(keywordCapital.toLowerCase().trim()) >= 0
        ) {
          filteredArr.push(country);
        }
      });

      setCountryData(filteredArr);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="mb-2 mt-5">
        <div className="d-flex flex-row justify-content-center mt-3">
          <input
            type="text"
            value={keyword}
            className="form-control w-50 rounded-pill"
            placeholder="Search by All"
            onChange={onChange}
          />
          <div className="input-group-append"></div>
        </div>
      </form>
      <form onSubmit={onSubmitbyCapital} className="mb-5">
        <div className="d-flex flex-row justify-content-center mt-3">
          <input
            type="text"
            value={keywordCapital}
            className="form-control w-50 rounded-pill"
            placeholder="Search by Capital"
            onChange={onChangebyCapital}
          />
          <div className="input-group-append"></div>
        </div>
      </form>
    </div>
  );
};

export default Search;
