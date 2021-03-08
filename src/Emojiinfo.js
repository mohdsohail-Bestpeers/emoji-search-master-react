import React, { Component, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import copy from 'copy-to-clipboard';

// export default class Emojiinfo extends Component {
    
//     render() {
//         console.log(window.location)
//         console.log()
//         const urldata = window.location.pathname.slice(1)
//         return (
//             <div>
//                 <h1>hello {urldata}</h1>
//             </div>
//         )
//     }
// }

// const Emojiinfo = ({match}) => {
//     return <h1> hello {match.params.title}</h1>
// }

const Emojiinfo = () => {

     const handleClick = () => {
        console.log("btn clicked")
        copy(data)
    }
    
    const {title} = useParams()
    const data = "hello " + title
    return(
    <>
    <h1> {data}</h1>
    <button onClick={handleClick}>Copy Text</button>
    </>
    )

}

export default Emojiinfo