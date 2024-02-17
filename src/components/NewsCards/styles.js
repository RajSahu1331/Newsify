import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    minHeight: "200px",
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    color: "white",
    backgroundColor: "#4caf50", // Green as default color, modify as needed
    transition: "background-color 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#388e3c", // Darker green on hover
    },
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    backgroundColor: "", // Red as default color, modify as needed
    color: "white",
    transition: "background-color 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "", // Darker red on hover
    },
  },
  container: {
    padding: "0",
    width: "100%",
    margin: "0",
    [theme.breakpoints.down("sm")]: {
      padding: "0 2%",
    },
  },
  title: {
    marginBottom: theme.spacing(1),
    fontSize: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },
  info: {
    marginBottom: theme.spacing(1),
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  text: {
    fontSize: "0.9rem",
    overflowWrap: "break-word",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.7rem",
    },
  },
  interactiveContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    backgroundColor: "#2196f3", // Blue as default color, modify as needed
    color: "white",
    transition: "background-color 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#1976d2", // Darker blue on hover
    },
  },
  interactiveText: {
    fontSize: "1rem",
    textAlign: "center",
    maxWidth: "80%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
}));
