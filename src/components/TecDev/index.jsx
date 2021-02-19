import { useState } from "react"
import { Grid, Typography } from "@material-ui/core"
import { useStyles } from "./style"
import { FaTrashAlt } from "react-icons/fa"
import api from "../../services/api"
import ModalCreate from "../../components/modal"


const TecDev = ({ tec, setTec }) => {

    const [token, setToken] = useState(() => {
        const storageToken = localStorage.getItem("token") || ""
        return JSON.parse(storageToken)
    })
    const classes = useStyles()

    const handleExit = (itemId) => {
        api.delete(`/users/techs/${itemId}`, { headers: { Authorization: `Bearer ${token}` } })
            .then(response => {
                const result = tec.filter((ele) => ele.id !== itemId && ele)

                setTec(result)

            })
            .catch(error => console.log(error))
    }

    return (
        <>
            {tec.map((ele, index) => (
                        <Grid key={index} className={classes.tecs}>
                            <div>
                                <Typography>{ele.title}</Typography>
                            </div>
                            <div>
                                <div className={classes.icons}>
                                    <Typography className={classes.text} >{ele.status}</Typography>
                                    <div className={classes.iconsSpace}>
                                        <FaTrashAlt className={classes.cursor} onClick={() => handleExit(ele.id)} size={20}/>
                                        <ModalCreate tec={tec} setTec={setTec} dataTecs={ele} />
                                    </div>
                                </div>
                            </div>
                        </Grid>
            ))}
        </>
    )
}

export default TecDev;