import { useStyles } from "./style"
import { Grid, Button, TextField, Paper } from "@material-ui/core"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useHistory } from "react-router-dom"
import api from "../../services/api"

const Register = () => {
    const history = useHistory();
    const classes = useStyles();

    const schema = yup.object().shape({
        name: yup.string().required("Campo obrigatório"),
        email: yup.string().email("Formato de E-mail inválido").required("Campo obrigatório"),
        password: yup.string().min(6, "Senha deve conter no mínimo 6 caractere").required("Campo obrigatório"),
        bio: yup.string().required("Campo obrigatório"),
        contact: yup.string().required("Campo obrigatório"),
        course_module: yup.string().required("Campo obrigatório"),
    })

    const { register, handleSubmit, errors, reset } = useForm({
        resolver: yupResolver(schema)
    })

    const dataFormRegister = (data) => {
        api.post("/users", data).then(response => {
            reset()
            history.push("/")
        }).catch(error => console.log(error))
    }

    return (
        <Grid className={classes.root} container>
            <Grid display={{xs: "none", sm: "none"}} md={7} item className={classes.image} >
            </Grid>
            <Grid xs={12} sm={12} md={5} item className={classes.form}>
                <Paper elevation={2} className={classes.formItems}>
                    <form onClick={handleSubmit(dataFormRegister)} className={classes.styleForm}>
                        <TextField name="name" inputRef={register} error={!!errors.name} helperText={errors.name?.message} variant="outlined" label="nome"/>
                        <TextField name="email" inputRef={register} error={!!errors.email} helperText={errors.email?.message} variant="outlined" label="E-mail"/>
                        <TextField type="password" name="password" inputRef={register} error={!!errors.password} helperText={errors.password?.message} variant="outlined" label="senha"/>
                        <TextField name="bio" inputRef={register} error={!!errors.bio} helperText={errors.bio?.message} variant="outlined" label="bio"/>
                        <TextField name="contact" inputRef={register} error={!!errors.contact} helperText={errors.contact?.message} variant="outlined" label="contato"/>
                        <TextField name="course_module" inputRef={register} error={!!errors.course_module} helperText={errors.course_module?.message} variant="outlined" label="modulo do curso"/>
                        <Button type="submit" color="primary" variant="contained">Registrar</Button>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Register;