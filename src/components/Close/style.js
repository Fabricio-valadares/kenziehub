import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
    paper: {
      [theme.breakpoints.down("sm")]: {
        top: "27vh",
        left: "10vw",
        width: "316px",
        height: "200px",
        display: "flex",
        textAlign: "center",
        padding: "0px",
    },
    [theme.breakpoints.between("sm", "md")]: {
        top: "27vh",
        left: "29vw",
        width: "316px",
        height: "200px",
        display: "flex",
        textAlign: "center",
        padding: "0px",
    },
      position: 'absolute',
      width: 500,
      height: 200,
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
    subTitulo: {
      [theme.breakpoints.down("sm")]: {
          textAlign: "center"
      },
      textAlign: "center"
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    cursor: {
        cursor: "pointer",
        marginRight: "11px"
    },
  }));
