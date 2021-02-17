import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: "linear-gradient(#33616b, #629ca6, #8eb6b8)",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    containerForm: {
        height: "50vh",
        padding: "40px 20px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around"
    },
    register: {
        cursor: "pointer"
    }
}));