import { useDeleteUserMutation } from '../services/Crud';

function DeleteUser() {
  const [deleteUser, { isLoading, isError, isSuccess }] =
    useDeleteUserMutation();

  const handleDlt = (data) => {
    deleteUser(data);
  };
  return (
    <div>
      <>
        <h1 style={{ color: 'green' }}>Delete specific data</h1>
        <button onClick={() => handleDlt(9439)}>Delete</button>
        {isSuccess ? <p>success!</p> : null}
        {isError ? <p>err!</p> : null}
      </>
    </div>
  );
}

export default DeleteUser;
