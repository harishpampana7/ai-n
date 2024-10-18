// import React from "react";
// import {
//   Container,
//   Grid,
//   Typography,
//   Box,
//   TextField,
//   Button,
//   MenuItem,
// } from "@mui/material";
// import Navbar from "./Navbar/Navbar";
// import HeroSection from "./HeroSection";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import CourseAccordion from "./Modules";
// import Projects from "./Projects";
// import "./style.css";
// import { Link } from "react-router-dom";

// const DataSciencePage = () => {
//   return (
//     <>
//       <div>
//         <Navbar />

//         <div
//           style={{
//             maxWidth: "100%",
//             backgroundColor: "#1c1c28",
//             color: "#fff",
//             padding: "50px",
//           }}>
//           {/* Course Details Section */}
//           <Grid container spacing={4} style={{ width: "80%", margin: "auto" }}>
//             <Grid item xs={12} md={6}>
//             <Typography variant="body2" gutterBottom>
//       {/* Home link */}
//       <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
//         <span role="img" aria-label="home">🏠</span> Homek
//       </Link>
      
//       {" > "} 

//       {/* Courses link */}
//       <Link to="/coursedetails" style={{ color: "#fff", textDecoration: "none" }}>
//         Courses
//       </Link>
      
//       {" > "} 

//       {/* Data Science link (stays on the same page, so no Link needed) */}
//       <span style={{ color: "#fff" }}>Data Science</span>
//     </Typography>
//               <Typography variant="h3" gutterBottom>
//                 Data Science Masters Pro 2024
//               </Typography>
//               <Typography variant="body1" gutterBottom>
//                 Dive deep into the world of data science with our comprehensive
//                 course. Learn advanced techniques, tools, and algorithms to
//                 analyze data, gain insights, and make informed decisions.
//                 Elevate your skills and embark on a rewarding career in data
//                 science.
//               </Typography>
//               <Typography variant="h4" gutterBottom>
//                 ₹8000.00{" "}
//                 <span style={{ textDecoration: "line-through", color: "#aaa" }}>
//                   10000.00
//                 </span>{" "}
//                 <span style={{ color: "green" }}>20% Discount</span>
//               </Typography>
//               <Grid conatiner>
//                 <Grid item xs={6} sm={3}>
//                   <Button
//                     variant="contained"
//                     style={{
//                       marginTop: "20px",
//                       backgroundColor: "#fff",
//                       color: "#000",
//                       width: "100%",
//                     }}>
//                     Sharekkk
//                   </Button>
//                 </Grid>
//               </Grid>
//             </Grid>
//           </Grid>

//           {/* Footer Section - Align items in a row */}
//           {/* <Grid
//           container
//           justifyContent="center"
//           spacing={1}
//           style={{ marginTop: "70px", width: "80%", margin: "auto" }}>
//           <Grid item xs={12} sm={3}>
//             <Box
//               style={{
//                 backgroundColor: "#f3f4f6",
//                 padding: "10px",
//                 textAlign: "center",
//                 borderRadius: "10px",
//               }}>
//               <Typography variant="h6" color="black">
//                 29th Apr'24
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Start Date
//               </Typography>
//             </Box>
//           </Grid>
//           <Grid item xs={12} sm={3}>
//             <Box
//               style={{
//                 backgroundColor: "#f3f4f6",
//                 padding: "10px",
//                 textAlign: "center",
//                 borderRadius: "10px",
//               }}>
//               <Typography variant="h6" color="black">
//                 Hinglish
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Language
//               </Typography>
//             </Box>
//           </Grid>
//           <Grid item xs={12} sm={3}>
//             <Box
//               style={{
//                 backgroundColor: "#f3f4f6",
//                 padding: "10px",
//                 textAlign: "center",
//                 borderRadius: "10px",
//               }}>
//               <Typography variant="h6" color="black">
//                 4-5 Month
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Duration
//               </Typography>
//             </Box>
//           </Grid>
//           <Grid item xs={12} sm={3}>
//             <Box
//               style={{
//                 backgroundColor: "#f3f4f6",
//                 padding: "10px",
//                 textAlign: "center",
//                 borderRadius: "10px",
//               }}>
//               <Typography variant="h6" color="black">
//                 7-10 PM IST WED
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Doubt Class Timing
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid> */}

//           <div className="dt-container" style={{paddingBottom:"20px"}}>
//             <div className="dt-content">
//               <div className="dt-item">
//                 <h3 className="dt-heading">29th Apr'24</h3>
//                 <p className="dt-subheading">Start Date</p>
//               </div>
//               <div className="dt-item">
//                 <h3 className="dt-heading">Hinglish</h3>
//                 <p className="dt-subheading">Language</p>
//               </div>
//               <div className="dt-item">
//                 <h3 className="dt-heading">4-5 Month</h3>
//                 <p className="dt-subheading">Duration</p>
//               </div>
//               <div className="dt-item">
//                 <h3 className="dt-heading">7 -10 PM IST WED</h3>
//                 <p className="dt-subheading">Doubt Class Timing</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div style={{ marginTop: "300px" }}>
//         <CourseAccordion />
//         <Projects />
//       </div>
//     </>
//   );
// };

// export default DataSciencePage;
