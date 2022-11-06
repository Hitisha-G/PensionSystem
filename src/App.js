import React, { Component } from "react";
import web3 from "./web3";
import lottery from "./pension";

import {Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'react-bootstrap';
import Register from "./pages/Register"
import Home from "./pages/Home"
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
    <Navbar />
     <Routes>
        <Route exact path="/register" element={<Register/>}/>
        {/* <Route exact path="/StateRoute/:id" element={<StateMap/>}/> */}
        {/* <Route exact path="/block" element={<Block/>}/> */}
        <Route exact path="/" element={<Home />}/>
    </Routes>
    </div>
  )
}

export default App;



// export default class App extends Component {
//   state = {
//     manager: "",
//     account: '',
//     balance: "",
//     players: [],
//     message: "",
//     name:'',
//     email:"",
//     number:"",
//     password:""
//   };
//   // async componentDidMount() {
//   //   const account = await window.ethereum.request({
//   //     method: "eth_requestAccounts",
//   //   });
//   //   // const manager = await lottery.methods.manager().call();
//   //   const storedData = await lottery.methods.Org_details(account[0]).call();
//   //   // const storedData = await lottery.methods.set(20).send({
//   //   //   from: account[0],
     
//   //   // });
//   //   // const players = await lottery.methods.getPlayers().call();
//   //   // const balance = await web3.eth.getBalance(lottery.options.address);
//   //   this.setState({ account: account[0]
//   //     // , manager, players, balance
//   //    });
//   //   console.log(storedData,account,web3.utils.toWei("20","ether"))
//   // }


//   render() {
//     return (
//       <div>
//         <h2>Lottery Contract</h2>
//         <p>
//           This contract is managed by {this.state.manager} .There are currently{" "}
//           {this.state.players.length} players entered, competing to win{" "}
//           {web3.utils.fromWei(this.state.balance, "ether")} ether!
//         </p>
//         <hr />
//         <form
//           onSubmit={async (e) => {
//             e.preventDefault();
//             this.setState({ message: "Waiting for transaction success" });
//             const {name , email, password, number} = this.state
//             const register =    await lottery.methods.RegisterO(name,number,email,password).send({
//               from: this.state.account,
//               // value: web3.utils.toWei(this.state.value, "ether"),
//             });
//             console.log({register})
//             this.setState({ message: "You have been entered" });
//           }}
//         >
//           <h4>Want to try your luck?</h4>
//           <div>
//             <label>Amount of ether to enter</label>
//             <input
//               type="text"
//               value={this.state.value}
//               onChange={(e) => this.setState({ name: e.target.value })}
//             />
//             <input
//               type="email"
//               value={this.state.value}
//               onChange={(e) => this.setState({ email: e.target.value })}
//             />
//             <input
//               type="number"
//               value={this.state.value}
//               onChange={(e) => this.setState({ number: e.target.value })}
//             />
//             <input
//               type="password" 
//               value={this.state.value}
//               onChange={(e) => this.setState({ password: e.target.value })}
//             />
//           </div>
//           <button>Enter</button>
//         </form>
//         <h4>Ready to pick a winner?</h4>
//         <button
//           onClick={async () => {
//             this.setState({ message: "Waiting for transaction success" });
//             await lottery.methods
//               .pickWinner()
//               .send({ from: this.state.account });
//             this.setState({ message: "A winner has been picked" });
//           }}
//         >
//           Pick a winner!
//         </button>
//         <hr />
//         <h2>{this.state.message}</h2>
//       </div>
//     );
//   }
// }


