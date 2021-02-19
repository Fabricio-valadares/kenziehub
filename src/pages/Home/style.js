import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        width: "70vw",
    },
    name: {
        fontSize: "2.125em",
        marginBottom: "10px"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    blockData: {
        backgroundColor: "#fff",
        margin: "25px 40px 0 40px",
        padding: "20px",
    },
    primary: {
        display: "flex",
        backgroundColor: "#fafafa",
        paddingBottom: "35px"
    },
    newTecs: {
        padding: "25px 40px 0 40px"
    },
    data: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "440px",
        textAlign: "center"
    },
    tecs: {
        display: "flex",
        justifyContent: "space-between",
        margin: "20px 0"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
    },
    blockOne: {
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "center",
        },
        backgroundColor: "#fafafa",
        display: "flex",
        margin: "25px 40px 0 40px",
        padding: "20px",
    },
    img: {
        [theme.breakpoints.down("sm")]: {
            marginBottom: "10px"
        },
        width: theme.spacing(20),
        height: theme.spacing(20),
      },
}))