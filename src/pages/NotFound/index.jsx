import { Grid, Typography } from "@material-ui/core"
import { useStyles } from "./style"

const NotFound = () => {

    const classes = useStyles()

    return (
        <Grid container className={classes.container}>
            <Grid item className={classes.image} ></Grid>
            <Grid item className={classes.text}>
                <Typography variant="h2">404 Not Found</Typography>
                <Typography variant="h4">Esta pagina não Exite</Typography>
            </Grid>
        </Grid>
    )
}

export default NotFound;
