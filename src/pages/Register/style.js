import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        backgroundImage: "url(./assets/Kander.png)",
        backgroundSize: "contain",
        height: "100vh"
    },
    formItems: {
        backgroundImage: "linear-gradient(#fafafa, #eee)",
        height: "600px",
        borderRadius: "13px",
        minWidth: "326px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        padding: "30px 30px",       
    },
    styleForm: {
        height: "523px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
    },
    form: {
        [theme.breakpoints.down("sm")]: {
            backgroundImage: "url(./assets/Kander.png)",
            backgroundSize: "contain",
        },
        backgroundImage: "linear-gradient(#eee, #fafafa)",
        height: "100vh",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
    },
}));
