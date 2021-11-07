import React from 'react'

const CountryRow = ({country}) => {
    return (
        <>
        {
            country &&   <tr><td className="cell">{country.name}</td><td className="cell">{country.capitalCity}</td><td className="cell">{country.region}</td><td className="cell"><img src={country.flagUrl} alt={`${country.name} Flag`}  loading="lazy" className="flag"/></td></tr>
      }  
      </>
      
    )
}

export default CountryRow
