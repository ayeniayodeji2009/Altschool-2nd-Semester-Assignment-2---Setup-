import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
// import ReactPagination from 'react-paginate';



function Users() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(`https://randomuser.me/api?page=${page}&results=10`)
    // .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setUsers(data.results);
    });
  }, [page]);

  console.log('users here: ', users);
  return (
    <section>
      <Navigation />
          <h1>Users Page</h1>
          <p>This is the users page</p>  
        <table>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
          </tr>
          {users?.length > 0 && users.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.gendar}</td>
                <td>{item.email}</td>
              </tr>
            )
          })}
        </table>

      <h3>Pagination Below;</h3>
      <button
        className="pagination_btn"
        onClick={() => {
          const newPage = page+1;
          setPage(newPage)
        }}
        >
        Previous
      </button>
      
      <button 
        className="pagination_btn"
        onClick={() => {
          const newPage = page-1;
          setPage(newPage)
        }}
        disabled={page < 1}
      >
        Next
      </button>
    </section>
  )
}




export default Users;