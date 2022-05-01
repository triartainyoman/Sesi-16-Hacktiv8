import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../store/action";

function FunctionalCounter() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const decrement = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  const customIncrement = () => {
    dispatch({
      type: "INCREMENT",
      payload: 10,
    });
  };

  const handleFetchUsers = () => {
    dispatch(fetchUsers());
  };

  return (
    <div>
      <h1>Functional Component Counter</h1>
      <h1 id="counter">{state.counter}</h1>
      <button id="decrement" onClick={decrement}>
        -
      </button>
      <button id="increment" onClick={increment}>
        +
      </button>
      <button id="decrement" onClick={customIncrement}>
        +10
      </button>
      <hr />
      <button onClick={handleFetchUsers}>Get Users</button>
      <br />
      <br />
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {state.users.map((user, idx) => {
            return (
              <tr key={idx}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default FunctionalCounter;
