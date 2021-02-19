import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 500,
      height: 250,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: "27vh",
      left: "27vw",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      outline: "none",
      justifyContent: "space-around"
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    cursor: {
        cursor: "pointer"
    },
  }));