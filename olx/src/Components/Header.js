// import React from "react";
// import { Link } from "react-router-dom";

// function Header() {
//   const nav = [
//     { ID: 1, label: "Cars" },
//     { ID: 2, label: "Motorcycles" },
//     { ID: 3, label: "Mobile Phones" },
//     { ID: 4, label: "For Sale: Houses & Apartments" },
//     { ID: 5, label: "OLX Renew(Mobile)" },
//     { ID: 6, label: "Scooters" },
//     { ID: 7, label: "Commercial & Other Vehicles" },
//     { ID: 8, label: "For Rent: Houses & Apartments" },
//   ];
//   return (
//     <React.Fragment>
//       <div className="header fixed flex aic">
//         <div className="logo">
//           <img src={require("../UI/olxlogo.png")} alt="olx logo" />
//           {/*LOGO ERROR HERE  */}
//         </div>

//         <div className="location rel flex aic">
//           <div className="icon-search ico s24" />
//           <input
//             className="label s15 font"
//             value="INDIA"
//             placeholder="Your Location"
//           />

//           <button className="icon-chevron-down arrow s24" />
//         </div>

//         <div className="search flex aic">
//           <input
//             type="text"
//             placeholder="Find cars, Mobiles Phones and more..."
//             className=" font s15"
//           />

//           <button className="icon-search go s24 cfff" />
//         </div>

//         <div className="actions flex aic">
//           <Link to="/account/signin" className="color fontb s16 noulh noul">
//             Sign In
//           </Link>

//           <button className="sell flex color aic">
//             <div className="icon-plus ico s24" />
//             <h2 className="s18 font">Sell</h2>
//           </button>
//         </div>
//       </div>
//       {/* SUB-HEADER - ALL CATEGORIES */}
//       <div className="hnav fixed flex aic">
//         <button className="view-cates flex aic color">
//           <h2 className="s18 font">All Categories</h2>

//           <button className="icon-chevron-down arrow s24" />
//         </button>
//         {nav.map((item) => {
//           return (
//             <Link
//               to={"/browser/" + item.ID}
//               className="noul noulh color bl font s15"
//             ></Link>
//           );
//         })}
//       </div>

//       <div className="hclr" />
//     </React.Fragment>
//   );
// }

// export default Header;
