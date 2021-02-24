import { useState } from "react";
import { useStyles } from "./style";
import {
  Modal,
  FormControl,
  Typography,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { FaEdit } from "react-icons/fa";
import { Controller } from "react-hook-form";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ModalCreate = ({ dataTecs, newTecs, tec }) => {
  const classes = useStyles();

  const [status, setStatus] = useState();
  const [textSuccess, setTextSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState(() => {
    const tokenUpdate = localStorage.getItem("token") || "";
    return JSON.parse(tokenUpdate);
  });

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
    setTextSuccess(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const schema = yup.object().shape({
    status: yup.string().required("Campo obrigatório"),
  });

  const { handleSubmit, errors, reset, control } = useForm({
    resolver: yupResolver(schema),
  });

  const updateTec = (data) => {
    api
      .put(`/users/techs/${dataTecs.id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        reset();
        tec.forEach(
          (ele) => ele.id === dataTecs.id && (ele.status = `${data.status}`)
        );
        newTecs();

        setTextSuccess(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <FaEdit
        type="button"
        onClick={handleOpen}
        className={classes.cursor}
        size={20}
      />

      <Modal open={open} onClose={handleClose}>
        {!textSuccess ? (
          <form onSubmit={handleSubmit(updateTec)} className={classes.paper}>
            <Typography align="center">{`Alterar o nivel da tecnologia: ${dataTecs.title}`}</Typography>

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
            <Button type="submit" color="primary" variant="contained">
              Alterar
            </Button>
          </form>
        ) : (
          <form onClick={handleSubmit(updateTec)} className={classes.paper}>
            <h2>Alteração realizada com sucesso !</h2>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default ModalCreate;
