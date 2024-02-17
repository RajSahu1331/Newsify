import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(5),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    outline: "none",
    overflow: "scroll",
    height: "60%",
  },
  infoContainer: {
    display: "flex",
    alignItems: "flex-start", // Adjust alignment to prevent overflow
    padding: "25px 0",
    flexWrap: "wrap", // Allow flex items to wrap
  },
  chipContainer: {
    display: "flex",
    flexWrap: "wrap",
    paddingLeft: "25px",
    maxWidth: "50%", // Set maximum width to control the expansion
  },
  trySaying: {
    marginBottom: "25px",
    wordWrap: "break-word", // Enable word wrapping
    maxWidth: "100%", // Adjust maximum width to prevent overflow
  },
  chip: {
    margin: "5px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center form items
    width: "100%", // Use full width
    "& > *": {
      marginBottom: theme.spacing(2), // Add spacing between form elements
    },
  },
}));
