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
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around"
    },
    cursor: {
        cursor: "pointer"
    },
  }));