import { useState, useEffect } from "react"
import api from "../../services/api"
import { Grid, Paper, Typography, Avatar, Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles } from "./style"
import NewTecs from "../../components/NewTecs"

const Home = () => {

    const classes = useStyles()

    const [user, setUser] = useState({})
    const [tec, setTec] = useState([{title: "React", status: "Avançado"}, {title: "JavaScript", status: "Iniciante"}])

    const [token, setToken] = useState(() => {
        const localToken = localStorage.getItem("token") || ""
        return JSON.parse(localToken)
    })

    useEffect(() => {
        api.get("/profile", {
            headers: { Authorization: `Bearer ${token}` }
        }).then(response => {
            setUser(response.data)
        }).catch(error => console.log(error))
    }, [])

    return (
        <Grid container xs={12} sm={12} md={12} className={classes.primary}>
            <Grid className={classes.container} item xs={12} sm={12} md={7}>
                <Paper elevation={3} item className={classes.blockOne}>
                    <Grid>
                        <Avatar className={classes.img}></Avatar>
                    </Grid>
                    <Grid className={classes.data}>
                        <Typography variant="h6">Nome: {user.name}</Typography>
                        <Typography variant="h6">Modulo do curso: {user.course_module}</Typography>
                    </Grid>
                </Paper>
                <Paper elevation={3} item className={classes.blockData}>
                    <Typography variant="h6">Biografia :</Typography>
                    <Typography>{user.bio}</Typography>
                </Paper>
                <Paper elevation={3} item className={classes.blockData}>
                    <Typography variant="h6">Tecnologias de estudo:</Typography>
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
                </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={5} className={classes.newTecs}>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography className={classes.heading}>Adcionar novas tecnologias</Typography>
                </AccordionSummary>
                    <AccordionDetails>
                        <NewTecs />
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>    
    )
}

export default Home;
