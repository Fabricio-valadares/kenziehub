import { useState } from "react"
import { TextField, Button } from "@material-ui/core"
import { useStyles } from "./style"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import api from "../../services/api"

const NewTecs = ({ tecs, listTecs }) => {

    const classes = useStyles()

    const [token, setToken] = useState(() => {
        const localToken = localStorage.getItem("token") || ""
        return JSON.parse(localToken)
    })

    const schema = yup.object().shape({
        title: yup.string().required("Campo Obrigatório"),
        status: yup.string().required("Campo Obrigatório")
    })

    const { register, handleSubmit, errors, reset } = useForm({
        resolver: yupResolver(schema)
    })

    const handleFormData = (data) => {

        api.post("/users/techs", data, { headers: { Authorization: `Bearer ${token}` } })
            .then(response => {
                reset()
                const { id, title, status, created_at, updated_at } = response.data

                listTecs([...tecs, {id, title, status, created_at, updated_at}])
            }).catch(error => console.log(error))
    }

    return (
        <form className={classes.form} onClick={handleSubmit(handleFormData)}>
            <TextField name="title" inputRef={register} error={!!errors.title} helperText={errors.title?.message} variant="outlined" label="Titulo"/>
            <TextField name="status" inputRef={register} error={!!errors.status} helperText={errors.status?.message} variant="outlined" label="Status" />
            <Button type="submit" variant="contained" color="primary">Adcionar</Button>
        </form>
    )
}

export default NewTecs;

