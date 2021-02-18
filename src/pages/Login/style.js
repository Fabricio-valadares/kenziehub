import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
    root: {
        
    },
    image: {
        backgroundImage: "url(./assets/Rangitikei.png)",
        backgroundSize: "contain",
        height: "100vh"
    },
    form: {
        [theme.breakpoints.down("sm")]: {
            backgroundImage: "url(./assets/Rangitikei.png)",
            backgroundSize: "contain",
        },
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
    },
    formItems: {
        display: "flex",
        flexDirection: "column",
        width: "275px",
        textAlign: "center",
        height: "521px",
        justifyContent: "space-between",       
    },
    containerForm: {
        backgroundImage: "linear-gradient(#fafafa, #eee)",
        height: "500px",
        borderRadius: "13px",
        minWidth: "326px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "131px 0",
    },
    register: {
        cursor: "pointer"
    }
}));