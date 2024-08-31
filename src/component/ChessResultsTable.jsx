import React, { useState, useEffect } from 'react';
import './stylesheet/global.css';
import loader from '../component/img/spinner.gif';

const ChessResultsTable = () => {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('name');
  const [order, setOrder] = useState('asc');
  const [loading, setLoading] = useState(true); // State for loading

  const fetchResults = async () => {
    try {
      // const response = await fetch(`http://localhost:3000/chess-results?search=${search}&sort=${sort}&order=${order}`);
      const response = await fetch(`https://chesscheckmate.onrender.com/chess-results?search=${search}&sort=${sort}&order=${order}`);
      if (!response.ok) {
        throw new Error(`Error fetching chess results: ${response.statusText}`);
      }
      const data = await response.json();
      setResults(data);
      setLoading(false); // Set loading to false when data is available
    } catch (error) {
      console.error("Error fetching chess results:", error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    setLoading(true); // Show loader when fetching starts
    fetchResults();
  }, [search, sort, order]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSortChange = (field) => {
    setSort(field);
    setOrder(order === 'asc' ? 'desc' : 'asc'); // Toggle order
  };

  if (loading) {
    return (
      <div className="loader-container">
        <img src={loader} alt="Loading..." height={80} />
        <h3>Re-Fresh Page...</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="heading">
        <h2 className="text-center mb-4">Chess Results</h2>
      </div>
      <div className="mb-3">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Search by name..." 
          value={search} 
          onChange={handleSearchChange} 
        />
      </div>
      
      <table className="table mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th scope="col" onClick={() => handleSortChange('name')}>
              Name {sort === 'name' && (order === 'asc' ? '▲' : '▼')}
            </th>
            <th scope="col" onClick={() => handleSortChange('rating')}>
              Rating {sort === 'rating' && (order === 'asc' ? '▲' : '▼')}
            </th>
            <th scope="col">1st Round</th>
            <th scope="col">2nd Round</th>
            <th scope="col">3rd Round</th>
            <th scope="col">4th Round</th>
            <th scope="col">5th Round</th>
            <th scope="col">6th Round</th>
            <th scope="col">Total Win Points</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={result._id}>
              <td>{index + 1}</td>
              <td>{result.name}</td>
              <td>{result.rating}</td>
              <td className='row1'>{result.results["1st"]}</td>
              <td className='row1'>{result.results["2nd"]}</td>
              <td className='row1'>{result.results["3rd"]}</td>
              <td className='row1'>{result.results["4th"]}</td>
              <td className='row1'>{result.results["5th"]}</td>
              <td className='row1'>{result.results["6th"]}</td>
              <td className='row1'>{result.totalPoints || 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChessResultsTable;
