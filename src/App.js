import "./App.css";
import Profile from "./Profile/Profile";

function App() {
  let fullName = "Atitallah Amani";
  let bio = 27;
  let profession = "Junior Developer";

  let handleName = (name) => {
    alert(name);
  };

  return (
    <div>
      <Profile name={fullName} age={bio} pro={profession} alrt={handleName} />
    </div>
  );
}

export default App;