import React, { useState, useContext } from "react";
import {UserContext} from "./App";
import {DishForm} from './DishForm';

const Toggle = () => {

    const [isToggled, setToggle]    = useState(false);
    const userInfo                  = useContext(UserContext);

    if (!userInfo.user) return null;

    return (
        <div>
            <button onClick={() => setToggle(!isToggled)}>
                Toggle Me
            </button>
            {isToggled && <DishForm setToggle={setToggle} />}
        </div>
    )
};

export default Toggle;
//
// export default class Refactor extends Component {
//     state = {
//         isToggled: false
//     };
//
//     toggle = () => {
//         this.setState(state => {
//             return { isToggled: !state.isToggled };
//         });
//     };
//
//     render() {
//         return (
//             <div>
//                 <button onClick={this.toggle}>Toggle</button>
//                 {this.state.isToggled && <h2>Hello!</h2>}
//             </div>
//         );
//     }