import { Grid, TextField, Paper, Button, Typography } from "@material-ui/core"
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
        <Grid xs={12} sm={12} md={12}  container justify="center" alignItems="center">
            <Grid xs={12} sm={12} md={5} item className={classes.form} >
                <Paper elevation={2} className={classes.containerForm}>
                <form onClick={handleSubmit(dataForm)} className={classes.formItems}>
                    <TextField name="email" inputRef={register} error={!!errors.email} helperText={errors.email?.message} label="E-mail" variant="outlined" />
                    <TextField type="password" name="password" inputRef={register} error={!!errors.password} helperText={errors.password?.message} label="Senha" variant="outlined" />
                    <Button type="submit" size="medium" variant="contained" color="primary">Entrar</Button>
                    <Typography className={classes.register} onClick={() => history.push("/register")}>Registrar</Typography>
                </form>
                </Paper>
            </Grid>
            <Grid display={{xs: "none", sm: "none"}} md={7} item className={classes.image} >
            </Grid>
        </Grid>
    )
}

export default Login;