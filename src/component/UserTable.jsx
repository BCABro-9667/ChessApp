import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import './stylesheet/global.css';
import loader from '../component/img/spinner.gif';

const UserTable = ({ users }) => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  useEffect(() => {
    if (users.length > 0) {
      setLoading(false);
    }
  }, [users]);

  const totalPages = Math.ceil(users.length / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = users.slice(indexOfFirstRecord, indexOfLastRecord);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRecordsPerPageChange = (event) => {
    setRecordsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(users);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Users');
    XLSX.writeFile(wb, 'chess_Player.xlsx');
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
        <h2 className="text-center">Registered Users</h2>
      </div>

      <div className="d-flex justify-content-between align-items-center range-container">
        <div className="range">
          <label htmlFor="recordsPerPage" className="mr-2">Rows per page:</label>
          <select
            id="recordsPerPage"
            value={recordsPerPage}
            onChange={handleRecordsPerPageChange}
            className="form-control w-auto"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
            <option value={50}>50</option>
          </select>
        </div>
        <button className="btn btn-success" onClick={exportToExcel}>
          Export to Excel
        </button>
      </div>

      <table className="table mt-3 border">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Course</th>
            <th scope="col">College</th>
            <th scope="col">Phone</th>
            <th scope="col">Email ID</th>
            <th scope="col">Chess.com</th>
            <th scope="col">Rating</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((user, index) => (
            <tr key={user._id}>
              <td>{indexOfFirstRecord + index + 1}</td>
              <td>{user.username}</td>
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
            </tr>
          ))}
        </tbody>
      </table>

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
