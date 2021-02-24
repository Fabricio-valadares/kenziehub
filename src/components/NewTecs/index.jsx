import { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { Controller } from "react-hook-form";
import { useStyles } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";

const NewTecs = ({ tecs, listTecs }) => {
  const classes = useStyles();
  const [status, setStatus] = useState(" ");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const [token, setToken] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    return JSON.parse(localToken);
  });

  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
    status: yup.string().required("Campo Obrigatório"),
  });

  const { register, handleSubmit, errors, reset, control } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormData = (data) => {
    api
      .post("/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        reset();
        const { id, title, status, created_at, updated_at } = response.data;

        listTecs([...tecs, { id, title, status, created_at, updated_at }]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(handleFormData)}>
      <TextField
        name="title"
        inputRef={register}
        error={!!errors.title}
        helperText={errors.title?.message}
        variant="outlined"
        label="Titulo"
      />

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel>Status</InputLabel>
        <Controller
          error={!!errors.status}
          helperText={errors.status?.message}
          name="status"
          defaultValue=""
          control={control}
          as={
            <Select label="Status" value={status} onChange={handleChange}>
              <MenuItem value={"Iniciante"}>Iniciante</MenuItem>
              <MenuItem value={"Intermediário"}>Intermediário</MenuItem>
              <MenuItem value={"Avançado"}>Avançado</MenuItem>
            </Select>
          }
        ></Controller>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Adcionar
      </Button>
    </form>
  );
};

export default NewTecs;
