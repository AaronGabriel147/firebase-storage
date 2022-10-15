import React from 'react'
// import little from '../little.png'


export default function Footer() {

    return (
        <>
            <div className="footer">
                <h2 id="footer-txt">
                    Built with React & Firebase by Aaron Gabriel
                </h2>
                {/* <img id="little" src={little} alt="lurking man in the dark" /> */}
            </div>
        </>
    )
}


// .footer {
//     margin-top: auto;
//     border-top: solid rgba(200, 200, 200, 0.356) 1px;
//     min-width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     /* flex-direction: column; */
//     background-color: #6f00ff;
//     min-height: 80px;
//     word-spacing: 2px;
//     position: relative;
//   }
  
//   #little {
//     width: 70px;
//     right: 0;
//     bottom: 0;
//     /* border: solid rgb(226, 81, 81); */
//     position: absolute;
//   }
  
//   #footer-txt {
//     /* color: rgb(184, 184, 184); */
//     color: black;
//     font-weight: 500;
//     font-size: 1.05rem;
//     cursor: pointer;
//   }