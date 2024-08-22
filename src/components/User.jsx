import { useEffect, useState } from "react";

const User = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setError(null);
        const responce = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        const data = await responce.json();
        setUsers(
          data.map((user) => {
            return { name: user.name, id: user.id };
          })
        );
      } catch (error) {
        setError("error fetching user");
      }
    };
    fetchUser();
  }, []);
  return (
    <div>
      <h1>users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default User;
