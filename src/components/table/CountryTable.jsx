import React from "react";
import { useContext , useState , useEffect } from "react";
import Loading from "./../loading/loading";
import CountryContext from "../../contexts/CountryContext";
import CountryRow from "./CountryRow";
import Search from "./Search"

const CountryTable = () => {

  const [countryData, setCountryData] = useState([])
  const [resetData, setResetData] = useState([])
  

  const { countries } = useContext(CountryContext);


  useEffect(() => {

    let tempArr= [];
    let resetArr = [];
    countries.forEach((country)=>{
      let tempObj ={
        name:country.name,
        capitalCity:country.capital,
        region:country.region,
        flagUrl:country.flags.png
      }
      tempArr.push(tempObj)
      resetArr.push(tempObj)

    })
    
    setCountryData(tempArr)
    setResetData(resetArr)
  }, [countries])



  return (
    <div className="container">
      <Search setCountryData = {setCountryData} resetData={resetData}/>
      {countries.length === 0 ? (
        <Loading />
      ) : countryData.length>0 ? (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Capital City</th>
              <th scope="col">Region</th>
              <th scope="col">Flag</th>
            </tr>
          </thead>

          <tbody>
            {countryData.map((country, idx) => {
              return <CountryRow key={idx} country={country} />;
            })}
          </tbody>
        </table>
      ):
      <div className="alert alert-warning" role="alert">
  There is no such country with this criteria
</div>
      }
    </div>
  );
};

export default CountryTable;
