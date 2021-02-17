import { useState, useEffect } from "react"
import api from "../../services/api"
import { Grid, Paper, Typography, Avatar, Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles } from "./style"
import NewTecs from "../../components/NewTecs"
import TecDev from "../../components/TecDev"

const Home = () => {

    const classes = useStyles()

    const [user, setUser] = useState({})
    const [tec, setTec] = useState([])

    const [token, setToken] = useState(() => {
        const localToken = localStorage.getItem("token") || ""
        return JSON.parse(localToken)
    })

    useEffect(() => {
        api.get("/profile", {
            headers: { Authorization: `Bearer ${token}` }
        }).then(response => {
            setUser(response.data)
            setTec(response.data.techs)
        }).catch(error => console.log(error))
        
    }, [])

    return (
        <Grid container xs={12} sm={12} md={12} className={classes.primary}>
            <Grid className={classes.container} item xs={12} sm={12} md={7}>
                <Paper elevation={1} item className={classes.blockOne}>
                    <Grid>
                        <Avatar className={classes.img}></Avatar>
                    </Grid>
                    <Grid className={classes.data}>
                        <Typography variant="h6">Nome: {user.name}</Typography>
                        <Typography variant="h6">Modulo do curso: {user.course_module}</Typography>
                    </Grid>
                </Paper>
                <Paper elevation={1} item className={classes.blockData}>
                    <Typography variant="h6">Biografia :</Typography>
                    <Typography>{user.bio}</Typography>
                </Paper>
                <Paper elevation={1} item className={classes.blockData}>
                    <Typography variant="h6">Tecnologias de estudo:</Typography>
                    <TecDev tec={tec} setTec={setTec} />
                </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={5} className={classes.newTecs}>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Adcionar novas tecnologias</Typography>
                </AccordionSummary>
                    <AccordionDetails>
                        <NewTecs tecs={tec} listTecs={setTec} />
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>    
    )
}

export default Home;
