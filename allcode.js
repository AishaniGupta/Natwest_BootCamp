//Task 1- Table with names

// import './App.css';
// function App() {
//   return (
//     <div>
//       <table id="table">
//         <th>Name</th>
//         <th>Language</th>
//         <tbody>
//           <tr>
//             <td>Muskan</td>
//             <td>React Js</td>
//           </tr>
//           <tr>
//             <td>Gudia</td>
//             <td>React Js</td>
//           </tr>
//           <tr>
//             <td>Ishita</td>
//             <td>React Js</td>
//           </tr>
//           <tr>
//             <td>Manori</td>
//             <td>React Js</td>
//           </tr>
//           <tr>
//             <td>Sukanya</td>
//             <td>React Js</td>
//           </tr>
//           <tr>
//             <td>Subadra</td>
//             <td>React Js</td>
//           </tr>
//           <tr>
//             <td>Trupti</td>
//             <td>React Js</td>
//           </tr>
//           <tr>
//             <td>Deepshikha</td>
//             <td>React Js</td>
//           </tr>
//           <tr>
//             <td>Anusha</td>
//             <td>React Js</td>
//           </tr>
//           <tr>
//             <td>Simran</td>
//             <td>React Js</td>
//           </tr>
//           <tr>
//             <td>Jyoti</td>
//             <td>React Js</td>
//           </tr>
//           <tr>
//             <td>Prachi</td>
//             <td>React Js</td>
//           </tr>
//           <tr>
//             <td>Saloni</td>
//             <td>React Js</td>
//           </tr>
//           <tr>
//             <td>Sheetal</td>
//             <td>React Js</td>
//           </tr>
//           <tr>
//             <td>Aarti</td>
//             <td>React Js</td>
//           </tr>
//           <tr>
//             <td>Aishani</td>
//             <td>React Js</td>
//           </tr>
//           <tr>
//             <td>Shivani</td>
//             <td>React Js</td>
//           </tr>
//           <tr>
//             <td>Ashwini Di</td>
//             <td>React Js</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;


//Task 2- increase decrese likes

// import React,{useState} from "react"
// import './App.css';

// function App() {
//     const [num1,setnum1]=useState(0);
//   return (
//     <div>
//       <h1>{num1}</h1>
//       <button onClick={()=>{
//         setnum1(num1+1)
//       }}>INCREASE</button>
//       <button onClick={()=>{
//         if(num1<1){
//           setnum1(0)
//         }
//         else{
//           setnum1(num1-1)
//         }
//       }}>DECREASE</button>
      
//     </div>
//   );
// }

// export default App;


//Task3- use of buttons

// import React,{useState} from "react"
// import './App.css';

// function App() {
//     const [firstName,setfirstName]=useState("");
//     const [campusName,setcampusName]=useState("");
//   return (
//     <div>
//       <input type="text" placeholder="Enter your Name" onChange={(e)=>{
//         setfirstName(e.target.value)
//       }}/>
//       <input type="text" placeholder="Enter your Campus" onChange={(f)=>{
//         setcampusName(f.target.value)
//       }} />
//       <button onClick={()=>{
//         console.log(firstName,campusName)
//         setfirstName("")
//         setcampusName("")
//       }}>Enter</button>
//       </div>
//   );
// }

// export default App;


//Task 4- print tables

// import React,{useState} from "react"
// import './App.css';

// function App() {
//     const [table,settable]=useState(0);
//     const [list,setlist]=useState([]);
//   return (
//     <div id="table">
//       <input type="number" placeholder="Enter your Number" onChange={(e)=>{
//         settable(e.target.value)
//       }}/>
//       <button onClick={()=>{
//           let newList=[]
//         for(let i=1;i<11;i++){
//           newList.push([table," ","X"," ",i," ","="," ",table*i])
//         }
//         setlist(newList)
//       }}>Enter</button>
//       {
//         list.map((item,index)=>{
//           return(
//             <div>
//               <h4>{item}</h4>
//             </div>
//           )
//         })
//       }
//       </div>
//   );
// }

// export default App;


//Task 5- To do list with delete button

// import React,{useState} from "react"
// import './App.css';

// function App() {
//     const [table,settable]=useState(0);
//     const [list,setlist]=useState([]);
//     const deleteItem=(index)=>{
//       const newArr=[...list]
//       newArr.splice(index,1)
//       setlist(newArr)
//     }
//   return (
//     <div id="table">
//       <input type="text" placeholder="Enter your ToDo" onChange={(e)=>{
//         settable(e.target.value)
//       }}/>

//       <button onClick={()=>{
//         let newList=[...list]
//         newList.push(table)
//         setlist(newList)
        
//       }}> Enter </button>

//       {
//         list.map((item,index)=>{
//           return(
//             <div key={index}>
//               <h4>{item}</h4>
//               <button onClick={()=>{deleteItem(index)}}>Delete</button>
//             </div>
//           )
//         })
//       }
//       </div>
//   );
// }

// export default App;

//Task 6- To do list with edit and delete button

// import React,{useState} from "react"
// import './App.css';

// function App() {
//     const [table,settable]=useState(0);
//     const [list,setlist]=useState([]);
//     const deleteItem=(index)=>{
//       const newArr=[...list]
//       newArr.splice(index,1)
//       setlist(newArr)
//     }
//     const editItem=(index)=>{
//       const newList=[...list]
//       let editText=prompt("Enter the edited value")
//       newList[index]=editText
//       setlist(newList)

//     }
//   return (
//     <div id="table">
//       <input type="text" placeholder="Enter your ToDo" onChange={(e)=>{
//         settable(e.target.value)
//       }}/>

//       <button onClick={()=>{
//         let newList=[...list]
//         newList.push(table)
//         setlist(newList)
//         }}> Enter </button>

//       {
//         list.map((item,index)=>{
//           return(
//             <div key={index}>
//               <h4>{item}</h4>
//               <button onClick={()=>{deleteItem(index)}}>Delete</button>
//               <button onClick={()=>{editItem(index)}}>Edit</button>
//             </div>
//           )
//         })
//       }
//       </div>
//   );
// }

// export default App;

//Task 7

// import React,{useState} from "react"
// import './App.css';

// function App() {
//     const [table,settable]=useState("");
//     const [list,setlist]=useState([]);
//     const deleteItem=(index)=>{
//       const newArr=[...list]
//       newArr.splice(index,1)
//       setlist(newArr)
//     }
//     const editItem=(index)=>{
//       const newList=[...list]
//       let editText=prompt("Enter the edited value")
//       if (editText.trim().length>0){
//       newList[index]=editText
//       setlist(newList)}

//     }
//     const completeItem=(index)=>{
//       let newArr=[...list]
//       newArr[index]=<strike>{newArr[index]}</strike>
//       setlist(newArr)     
//     }

//   return (
//     <div id="table">
//       <h2>ToDo List</h2>
//       <input type="text" placeholder="Enter your ToDo" value={table} onChange={(e)=>{
//         settable(e.target.value)
//       }}/>

//       <button onClick={()=>{
//         let newList=[...list]
//         if (table.trim().length>0){
//         newList.push(table)
//         setlist(newList)}
//         settable("")
//         }}> Enter </button>

//       {
//         list.map((item,index)=>{
//           return(
//             <div key={index}>
//               <h4>{item}</h4>
//               <button onClick={()=>{deleteItem(index)}}>Delete</button>
//               <button onClick={()=>{editItem(index)}}>Edit</button>
//               <button onClick={()=>{completeItem(index)}}>Complete</button>
//             </div>
//           )
//         })
//       }
//       </div>
//   );
// }

// export default App;


//Task 8- Search bar over a data

// import React,{useState} from "react"
// import './App.css';

// function App() {
//     const [searchInput, setSearchInput] = useState("");
//     const allData=[
//     {name:"Virat Kohli", nationality:"India"},
//     {name:"Kagiso Rabada", nationality:"South Africa"},
//     {name:"AB de Velliers", nationality:"South Africa"},
//     {name:"Shreyas Iyer", nationality:"India"},
//     {name:"Joe Root", nationality:"England"},
//     {name:"KL Rahul", nationality:"India"},
//     {name:"Prithvi Shaw", nationality:"India"},
//     {name:"Ben Stokes", nationality:"England"},
//     {name:"Rohit Sharma", nationality:"India"},
//     {name:"Rishab Pant", nationality:"India"},
// ]
// const inputChange = (e) => {
//     setSearchInput(e.target.value);
//   };

//   return(
//       <div>
//         <input type="search" placeholder="Search here" onChange={inputChange} value={searchInput} />
//     <table> 
//     {
//     allData.filter((item)=>{
//         if (searchInput.length<4){
//             return item
//         }
//         else(item.nationality.toLowerCase().includes(searchInput.toLowerCase()));
//         {
//             return item
//         }
//     })
//     .map((item,index) =>{
//          return <div><tr>
//             <td>{item.name},</td>
//             <td>{item.nationality}</td>
//         </tr></div>
//     })
//     }
//     </table>

//     </div>
     
//     )
// }
// export default App;


//Task 9- Rendering

// import React,{useState} from "react";

// export default function App(){
//     const [firstName,setFirstName] = useState("")
//     const [lastName,setLastName]=useState("")
//     const [allData,setAllData] =useState([]);
//     const [searchItem,setSearchItem] =useState("")
//     const searchFunction=()=>{
//         if (searchItem.length>3){

//         }
//     }

//     return(
//         <div>
//             <div><input type="text" placehoder="Search" ocChange={(e)=>{
//                 setSearchItem(e.target.value)
//                 searchFunction()
//             }} /></div>
//             <input type="text" placeholder="firstName" onChange={(e)=>{
//                 setFirstName(e.target.value)
//             }} />
//                <input type="text" placeholder="lastname" onChange={(e)=>{
//                 setLastName(e.target.value)
//             }} />
//             <button onClick={()=>{
//                let tempObj={
//                 firstName:firstName,
//                 lastName:lastName,
//                }
//                console.log(tempObj)
//                setAllData([...allData,tempObj])
//                console.log(allData)
//             }}>Submit</button>
//              {
//             allData.map((item,index)=>{
//                 return(
//                     <div>
//                     <table>
//                         <tr>
//                             <td>{item.firstName}</td>
//                             <td>{item.lastName}</td>
//                         </tr>
//                     </table>
//                     </div>
                    
//                 )
                
//             })
//         }

//         </div>
       
//         )
// }


