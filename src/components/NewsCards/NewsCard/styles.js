import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: theme.spacing(2), // Use theme spacing for consistent margins
    height: "100%",
    position: "relative",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
    borderBottom: `10px solid ${theme.palette.primary.main}`, // Use theme palette for colors
    [theme.breakpoints.down("xs")]: {
      borderBottom: `5px solid ${theme.palette.primary.main}`, // Adjust for smaller screens
    },
  },
  activeCard: {
    borderBottom: `10px solid ${theme.palette.secondary.main}`, // Use theme palette for colors
    [theme.breakpoints.down("xs")]: {
      borderBottom: `5px solid ${theme.palette.secondary.main}`, // Adjust for smaller screens
    },
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: theme.spacing(2), // Use theme spacing for consistent margins
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(1), // Adjust for smaller screens
    },
  },
  title: {
    padding: `0 ${theme.spacing(2)}`, // Use theme spacing for consistent padding
    [theme.breakpoints.down("xs")]: {
      padding: `0 ${theme.spacing(1)}`, // Adjust for smaller screens
    },
  },
  cardActions: {
    padding: `0 ${theme.spacing(2)} ${theme.spacing(1)} ${theme.spacing(2)}`, // Use theme spacing for consistent padding
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      padding: `0 ${theme.spacing(1)} ${theme.spacing(1)} ${theme.spacing(1)}`, // Adjust for smaller screens
    },
  },
}));
