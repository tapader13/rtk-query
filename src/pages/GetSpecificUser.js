import { useGetSpecificUserQuery } from '../services/Crud';

function GetSpecificUser() {
  const { data, isLoading, isError } = useGetSpecificUserQuery(9489);
  console.log(data);
  return (
    <div>
      <>
        <h1 style={{ color: 'green' }}>Get specific data</h1>
        {isLoading ? (
          <p>loading...</p>
        ) : isError ? (
          <p>Error!</p>
        ) : (
          <div>
            {' '}
            <h1 key={data.id}>{data.email}</h1>
          </div>
        )}
      </>
    </div>
  );
}

export default GetSpecificUser;
