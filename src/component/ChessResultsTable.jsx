import React, { useState, useEffect } from 'react';
import './stylesheet/global.css';
import './stylesheet/chess_result.css';
import loader from '../component/img/spinner.gif';


const ChessResultsTable = () => {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('name');
  const [order, setOrder] = useState('asc');
  const [loading, setLoading] = useState(false); // Initialize loading as false
  const [timeoutId, setTimeoutId] = useState(null); // For handling delayed loader

  const fetchResults = async () => {
    try {
      // Clear any existing timeout before fetching new data
      if (timeoutId) clearTimeout(timeoutId);

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
    setLoading(false); // Reset loading to false initially

    // Only show the loader if the request takes longer than 500ms
    const id = setTimeout(() => {
      setLoading(true);
    }, 500);
    
    setTimeoutId(id); // Store timeout ID

    fetchResults();

    // Clear timeout on cleanup
    return () => clearTimeout(id);
  }, [search, sort, order]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSortChange = (field) => {
    setSort(field);
    setOrder(order === 'asc' ? 'desc' : 'asc'); // Toggle order
  };

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
      
      {loading ? (
        <div className="loader-container">
          <img src={loader} alt="Loading..." height={80} />
          <h3>Loading data...</h3>
        </div>
      ) : (
          <div>
               {/* <div className='caption'>
                      <h5>Points System</h5>
                      <div className="point-container">
                      <div className="win">
                      <div className="win-box"></div>
                      Win = 2
                    </div>

                    <div className="draw">
                      <div className="draw-box"></div>
                      Draw = 1
                    </div>

                    <div className="lose">
                      <div className="lose-box"></div>
                      Lose = 0
                    </div>
                      </div>
                    </div> */}

                    <table className="table mt-3 table-bordered">
          
                 

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
              <th scope="col" onClick={() => handleSortChange('totalPoints')}>
                Total Win Points {sort === 'totalPoints' && (order === 'asc' ? '▲' : '▼')}
              </th>
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
      
      )}
    </div>
  );
};

export default ChessResultsTable;
