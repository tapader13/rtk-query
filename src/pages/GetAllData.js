import { useEffect } from 'react';
import { useGetAllUsersQuery } from '../services/Crud';

function GetAllData() {
  const { data, isLoading, isError } = useGetAllUsersQuery();
  console.log(data);

  return (
    <div>
      <>
        <h1 style={{ color: 'green' }}>Get all data</h1>
        {isLoading ? (
          <p>loading...</p>
        ) : isError ? (
          <p>Error!</p>
        ) : (
          <div> {data && data.map((d, i) => <h1 key={i}>{d.email}</h1>)}</div>
        )}
      </>
    </div>
  );
}

export default GetAllData;
