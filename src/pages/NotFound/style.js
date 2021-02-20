import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles({
    conatiner: {
        width: "100vw",
        height: "100vh"
    },
    image: {
        width: "100vw",
        height: "30vh",
        backgroundImage: "url(./assets/Reuss.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    },
    text: {
        backgroundColor: "#fff",
        textAlign: "center",
        paddingTop: "50px",
        width: "100vw",
        height: "70vh"      
    }
})