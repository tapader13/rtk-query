import { useCreateUserMutation } from '../services/Crud';

function CreateUser() {
  const [createUser, { isLoading, isError, isSuccess }] =
    useCreateUserMutation(6);
  const data = {
    id: 5,
    username: 'miftah',
    email: 'mitapader0@gmail.com',
    password: '123456qQ',
  };
  const handleCrt = () => {
    createUser(data);
  };
  return (
    <div>
      <>
        <h1 style={{ color: 'green' }}>Create specific data</h1>
        <button onClick={() => handleCrt()}>Create</button>
        {isSuccess ? <p>success! and data is {data.email} </p> : null}
        {isError ? <p>err!</p> : null}
      </>
    </div>
  );
}

export default CreateUser;
