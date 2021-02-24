import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  conatiner: {
    width: "100vw",
    height: "100vh",
  },
  image: {
    width: "100vw",
    height: "30vh",
    background:
      "linear-gradient(0deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  text: {
    backgroundColor: "#fff",
    textAlign: "center",
    paddingTop: "50px",
    width: "100vw",
    height: "70vh",
  },
});
