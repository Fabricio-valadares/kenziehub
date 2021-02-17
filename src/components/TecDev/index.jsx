import { Grid, Typography } from "@material-ui/core"
import { useStyles } from "./style"

const TecDev = ({ tec }) => {
    const classes = useStyles()


    return (
        <>
            {tec.map((ele, index) => (
                        <Grid key={index} className={classes.tecs}>
                            <div>
                                <Typography>{ele.title}</Typography>
                            </div>
                            <div>
                                <Typography>{ele.status}</Typography>
                            </div>
                        </Grid>
            ))}
        </>
    )
}

export default TecDev;