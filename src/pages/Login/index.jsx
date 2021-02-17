import { Grid, TextField, Button, Typography } from "@material-ui/core"
import { useStyles } from "./style"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useHistory } from "react-router-dom"
import api from "../../services/api"

const Login = () => {
    const history = useHistory()
    const classes = useStyles();

    const schema = yup.object().shape({
        email: yup.string().email("Formato de E-mail inválido").required("Campo obrigatório"),
        password: yup.string().required("Campo obrigatório")
    })

    const { register, handleSubmit, errors, reset } = useForm({
        resolver: yupResolver(schema)
    });


    const dataForm = (data) => {
        api.post("/sessions", data)
            .then(response => {
                localStorage.clear()
                localStorage.setItem("token", JSON.stringify(response.data.token))
                reset()
                history.push("/home")
            })
            .catch(error => console.log(error))
    }


    return (
        <Grid className={classes.root} container justify="center" alignItems="center">
            <Grid item>
                <form onClick={handleSubmit(dataForm)} className={classes.containerForm} >
                    <TextField name="email" inputRef={register} error={!!errors.email} helperText={errors.email?.message} label="E-mail" variant="outlined" />
                    <TextField name="password" inputRef={register} error={!!errors.password} helperText={errors.password?.message} label="Senha" variant="outlined" />
                    <Button type="submit" variant="contained" color="primary">Entrar</Button>
                    <Typography className={classes.register} onClick={() => history.push("/register")}>Registrar</Typography>
                </form>
            </Grid>
        </Grid>
    )
}

export default Login;