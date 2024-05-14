import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/user_list")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Containerization Class</h1>
          <div class="container">
            {users.map(user=> (
              <div class="card" key={user.id}>
                  <div class="card2">
                    <div>
                      {
                        user.Name
                      }
                    </div>
                    <div>
                      {
                        user.Work
                      }
                    </div>
                  </div>
              </div>
            ))}
          </div>
      </header>
    </div>
  );
}

export default App;
