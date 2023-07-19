// import { useEffect, useState } from "react";
// import { Box, Grid, TextField, Button, Container, Paper} from "@mui/material";
// import { styled } from '@mui/material/styles';
// import { useAuth0 } from "@auth0/auth0-react";
// import axios from "axios";
// import EditIcon from "@mui/icons-material/Edit";
// const Item = styled(Paper)(({ theme }) => ({
//   // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// const Rightbar = () => {
//   const { user, isAuthenticated, isLoading } = useAuth0();
//   const [formData, setFormData] = useState({
//     gender: "",
//     dob: "",
//     contact: "",
//   });

//   const handleChange = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   let  it=false
//   const handleEdit=()=>
//   {
//    it=true;
//   }
//   const handleSubmit = () => {
//     // Make a POST request to save user data
//     axios
//       .post("http://localhost:5000/sendemail", {
//         name: isAuthenticated ? user.name : "",
//         email: isAuthenticated ? user.email : "",
//         gender: formData.gender,
//         dob: formData.dob,
//         contact: formData.contact,
//       })
//       .then((response) => {
//         console.log(response.data.message);
//         // Add any additional logic here after the data is saved
//       })
//       .catch((error) => {
//         console.error("Error saving user data:", error);
//         // Handle error cases
//       });
//   };

//   if (isLoading) {
//     return <div>Loading ...</div>;
//   }

//   return (
//     <Box sx={{ marginTop: "50px", marginLeft: "150px" }}>
//       <Grid container spacing={5} justifyContent="center" direction="row">
//         <Grid item xs={15} md={4} marginLeft="100px">
//           <TextField
//             fullWidth
            
//             className="dobby"
//             label={isAuthenticated ? user.name : "First Name"}
//             variant="outlined"
//           />
//         </Grid>
//         <Grid item xs={15} md={4}>
//           <TextField
//             fullWidth
//             id="outlined-basic"
//             className="dobby"
//             label={isAuthenticated ? user.email : "Email"}
//             variant="outlined"
//             disabled={isAuthenticated}
//           />
//         </Grid>
//         <Grid item xs={15} md={4} marginLeft="100px" marginTop={"20px"}>
//           <TextField
//             fullWidth
//             className="dobby"
//             label="Contact"
//             variant="outlined"
//             name="contact"
//             value={formData.contact}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={15} md={4} marginLeft={"0px"} marginTop={"20px"}>
//           <TextField
//             fullWidth
//             id="outlined-basic"
//             className="dobby"
//             label="Date of Birth"
//             variant="outlined"
//             name="dob"
//             value={formData.dob}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid
//           item
//           xs={15}
//           md={4}
//           marginRight="2px"
//           marginLeft={"120px"}
//           marginTop={"20px"}
//         >
//           <TextField
//             fullWidth
//             className="dobby"
//             label="Gender"
//             variant="outlined"
//             name="gender"
//             disabled={it=false?"false":"true"}
//             value={formData.gender}
//             onChange={handleChange}
//           />
//         </Grid>
//         {/* <Grid item direction={"row"} xs={6} md={8} style={{ marginLeft: "670px", marginTop: "10px"}}>
//           <Button
//             sx={{ width: '90', maxWidth: "200%" }}
//             justifyContent="center"
//             variant="contained"
//             onClick={handleSubmit}
//           >
//             Proceed
//           </Button>
//           </Grid>
//           <Grid item direction={"row"} xs={6} md={8} style={{ marginLeft: "670px", marginTop: "10px"}}>
//           <Button justifyContent="center" variant="contained" startIcon={<EditIcon/>}></Button>
//           </Grid> */}
//         <Grid container rowSpacing={1} marginTop="50px" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//           <Grid item xs={6}>
//             <Item><Button
//             sx={{ width: '90', maxWidth: "200%" }}
//             justifyContent="center"
//             variant="contained"
//             onClick={handleSubmit}
//           >
//             Proceed
//           </Button></Item>
//           </Grid>
//           <Grid item xs={6}>
//             <Item><Button justifyContent="center" variant="contained" onClick={handleEdit} startIcon={<EditIcon/>}></Button></Item>
//           </Grid>
         
//           </Grid>
//         </Grid>

//     </Box>
//   );
// };

// export default Rightbar;
import { useEffect, useState } from "react";
import { Box, Grid, TextField, Button, Container, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Rightbar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [formData, setFormData] = useState({
    gender: "",
    dob: "",
    contact: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleEdit = () => {
    // Enable editing fields
    setIsEditing(true);
  };

  const handleSubmit = () => {
    // Make a POST request to save user data
    axios
      .post("http://localhost:5000/sendemail", {
        name: isAuthenticated ? user.name : "",
        email: isAuthenticated ? user.email : "",
        gender: formData.gender,
        dob: formData.dob,
        contact: formData.contact,
      })
      .then((response) => {
        console.log(response.data.message);
        // Add any additional logic here after the data is saved
      })
      .catch((error) => {
        console.error("Error saving user data:", error);
        // Handle error cases
      });
  };

  useEffect(() => {
    if (isAuthenticated && user && user.email) { // Add null checks for user and user.email
      // Make a GET request to retrieve user data
      axios
        .get(`http://localhost:5000/user/${user.email}`)
        .then((response) => {
          const userData = response.data; // Assuming the response is an object with user data
          if (userData) {
            setFormData({
              gender: userData.gender,
              dob: userData.dob,
              contact: userData.contact,
            });
          }
        })
        .catch((error) => {
          console.error("Error retrieving user data:", error);
          // Handle error cases
        });
    }
  }, [isAuthenticated, user]); 

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <Box sx={{ marginTop: "50px", marginLeft: "150px" }}>
      <Grid container spacing={5} justifyContent="center" direction="row">
        <Grid item xs={15} md={4} marginLeft="100px">
          <TextField
            fullWidth
            className="dobby"
            disabled={!isEditing}
            label={isAuthenticated ? user.name : "First Name"}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={15} md={4}>
          <TextField
            fullWidth
            id="outlined-basic"
            className="dobby"
            label={isAuthenticated ? user.email : "Email"}
            variant="outlined"
            disabled={isAuthenticated}
          />
        </Grid>
        <Grid item xs={15} md={4} marginLeft="100px" marginTop={"20px"}>
          <TextField
            fullWidth
            className="dobby"
            label="Contact"
            disabled={!isEditing}
            variant="outlined"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={15} md={4} marginLeft={"0px"} marginTop={"20px"}>
          <TextField
            fullWidth
            id="outlined-basic"
            className="dobby"
            label="Date of Birth"
            variant="outlined"
            disabled={!isEditing}
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={15}
          md={4}
          marginRight="2px"
          marginLeft={"120px"}
          marginTop={"20px"}
        >
          <TextField
            fullWidth
            className="dobby"
            label="Gender"
            variant="outlined"
            name="gender"
            disabled={!isEditing}
            value={formData.gender}
            onChange={handleChange}
          />
        </Grid>
        <Grid container rowSpacing={1} marginTop="50px" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>
              <Button
                sx={{ width: '90', maxWidth: "200%" }}
                justifyContent="center"
                variant="contained"
                onClick={handleSubmit}
              >
                Proceed
              </Button>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Button
                justifyContent="center"
                variant="contained"
                onClick={handleEdit}
                startIcon={<EditIcon />}
              ></Button>
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Rightbar;
