import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  CircularProgress,
  Snackbar,
  Alert,
  Typography,
  Box,
} from "@mui/material";

const UsersDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [counter,setCounter] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Fetch users from API
  useEffect(() => {
    axios
      .get("/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [counter]);

  // Handle delete user
  const handleDelete = (userId) => {
    // Optimistically update UI
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    setSnackbarOpen(true);

    // Make delete request
    axios
      .delete(`/users/${userId}`).then((res)=>{
        setCounter(counter+1);
      })
      .catch((err) => {
        setError("Failed to delete user.");
        console.error(err);
      });
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom sx={{ fontWeight: "bold", color: "primary.main" }}>
        Dashboard
      </Typography>
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        {loading ? (
          <CircularProgress sx={{ display: "block", margin: "20px auto" }} />
        ) : error ? (
          <Alert severity="error" sx={{ margin: 2 }}>
            {error}
          </Alert>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>Email</strong></TableCell>
                <TableCell><strong>Actions</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user._id} hover>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert onClose={() => setSnackbarOpen(false)} severity="success">
            User deleted successfully.
          </Alert>
        </Snackbar>
      </TableContainer>
    </Box>
  );
};

export default UsersDashboard;
