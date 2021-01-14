import './Navbar.css'
import React from 'react'
import { unstable_concurrentAct } from 'react-dom/test-utils'



function Navbar() {


    const Accueil = () => {
        console.log("Accueil")
    }

    const Galerie = () => {
        console.log("Galerie");
    }

    const Contact = () => {
        console.log(("Contact"));
    }

    return (
        <div className="containerNavbar">
            <nav>
                <ul>
                    <a onClick={ () => Accueil() }>Link 1</a>
                    <a onMouseOver={ () => Galerie() }>Link 2</a>
                    <a onDoubleClick={ () => Contact() }>Link 3</a>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar

// import './Navbar.css'
// import React, { Component } from 'react'


// export class Navbar extends Component {
    
//     Acceuil = () => {
//         console.log("Acceuil");
//     }


//     render() {
//         return (
//             <div className="containerNavbar">
//                 <nav>
//                     <ul>
//                         <a onClick={this.Acceuil}>Link 1</a>
//                         <a>Link 2</a>
//                         <a>Link 3</a>
//                     </ul>
//                 </nav>
//             </div>
//         )
//     }
// }

// export default Navbar;