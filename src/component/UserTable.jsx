import React, { useState, useEffect } from 'react';
import './stylesheet/global.css';
import loader from '../component/img/spinner.gif';

const UserTable = ({ users }) => {
  const [loading, setLoading] = useState(true); // State for loading
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10); // State for records per page

  useEffect(() => {
    if (users.length > 0) {
      setLoading(false); // Set loading to false when data is available
    }
  }, [users]);

  // Calculate the number of pages
  const totalPages = Math.ceil(users.length / recordsPerPage);

  // Determine the records to display on the current page
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = users.slice(indexOfFirstRecord, indexOfLastRecord);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle records per page change
  const handleRecordsPerPageChange = (event) => {
    setRecordsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1); // Reset to the first page whenever the records per page change
  };

  // Display loader while data is fetching
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
        <h2 className="text-center">Registered Users</h2>
      </div>

      {/* Dropdown to select the number of rows per page */}
      <div className="d-flex  align-items-center range-container" >
        <div className="range">
          <label htmlFor="recordsPerPage" className="mr-2">Rows per page:</label>
          <select
            id="recordsPerPage"
            value={recordsPerPage}
            onChange={handleRecordsPerPageChange}
            className="form-control w-auto"
          >
            <option value={10}>10 + </option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>

      <table className="table mt-3 border">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            {/* <th scope="col">Age</th> */}
            <th scope="col">Course</th>
            <th scope="col">College</th>
            <th scope="col">Phone</th>
            <th scope="col">Email ID</th>
            <th scope="col">Chess.com</th>
            <th scope="col">Rating</th>
            {/* <th scope="col">Tran_ID</th> */}
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((user, index) => (
            <tr key={user._id}>
              <td>{indexOfFirstRecord + index + 1}</td>
              <td>{user.username}</td>
              {/* <td>{user.age}</td> */}
              <td>{user.course}</td>
              <td>{user.college}</td>
              <td>+91 {user.phone}</td>
              <td>{user.email}</td>
              <td>
                <a href={`https://www.chess.com/member/${user.chess_id}`} target="_blank" rel="noopener noreferrer">
                  {user.chess_id}
                </a>
              </td>
              <td>{user.rating}</td>
              {/* <td>{user.transaction_id}</td> */}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index + 1}
              className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
            >
              <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UserTable;
