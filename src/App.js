// import React, { useState } from "react";
// import axios from "axios";
import "./App.css";

// export default function App() {
//   const [name, setName] = useState("");
//   const [weather, setweather] = useState(null);
//   const apiKey = "bce529d51e65c325a427436fbeeb3596";
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${apiKey}`;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.get(url).then((res) => {
//       setweather(res.data);
//     });
//     console.log(name);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="allPage">
//       <div className="searchLine">
//         <input
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           type="search"
//           className="search"
//         />
//         <input type="submit" value="Search" />
//       </div>
//       {weather && (
//         <>
//           <p>
//             {weather.name.toUpperCase()}, {weather.sys.country}
//           </p>
//           <p>
//             {weather.main.temp}&deg;
//             <br />
//             {weather.weather[0].main.toUpperCase()}
//             <br />
//             feels like {weather.main.feels_like}&deg;
//           </p>
//         </>
//       )}
//     </form>
//   );
// }

import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      weather: null,
    };
    this.apiKey = "secret";
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.name}&units=metric&appid=${this.apiKey}`;
    e.preventDefault();
    axios.get(url).then((res) => {
      this.setState({ weather: res.data });
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="allPage">
        <div className="searchLine">
          <input
            value={this.state.name}
            onChange={(e) =>
              this.setState({ ...this.state, name: e.target.value })
            }
            type="search"
            className="search"
          />
          <input type="submit" value="Search" />
        </div>
        {this.state.weather && (
          <>
            <p>
              {this.state.weather.name.toUpperCase()},{" "}
              {this.state.weather.sys.country}
            </p>
            <p>
              {this.state.weather.main.temp}&deg;
              <br />
              {this.state.weather.weather[0].main.toUpperCase()}
              <br />
              feels like {this.state.weather.main.feels_like}&deg;
            </p>
          </>
        )}
      </form>
    );
  }
}

export default App;
