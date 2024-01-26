import { useUpdateUserMutation } from '../services/Crud';

function UpdateUser() {
  const [updateUser, { data, isLoading, isError, isSuccess }] =
    useUpdateUserMutation();
  const dt = {
    id: '9489',
    username: 'marjan',
    email: 'marzantapader0@gmail.com',
    password: '123456qQ',
  };
  const handleUpdate = () => {
    updateUser(dt);
  };
  return (
    <div>
      <>
        <h1 style={{ color: 'green' }}>Update specific data</h1>
        <button onClick={() => handleUpdate()}>Update</button>
        {isSuccess ? <p>success! and data is {data.email}</p> : null}
        {isError ? <p>err!</p> : null}
      </>
    </div>
  );
}

export default UpdateUser;
