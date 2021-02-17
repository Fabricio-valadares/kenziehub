import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        height: "100vh",
        width: "70vw"
    },
    blockData: {
        backgroundColor: "yellow",
        maxWidth: "51vw",
        minWidth: "51vw",
        padding: "20px",
    },
    primary: {
        display: "flex"
    },
    newTecs: {
        padding: "11px 42px 0 0"
    },
    data: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
    },
    tecs: {
        display: "flex",
        justifyContent: "space-between",
        margin: "20px 0"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        height: "80vh"
    },
    blockOne: {
        backgroundColor: "yellow",
        display: "flex",
        padding: "20px",
        maxWidth: "51vw",
        minWidth: "51vw",
    },
    img: {
        width: theme.spacing(20),
        height: theme.spacing(20),
      },
}))