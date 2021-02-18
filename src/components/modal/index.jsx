import { useState } from 'react';
import { useStyles } from "./style"
import { Modal, TextField, Typography, Button} from '@material-ui/core';
import { FaEdit } from "react-icons/fa"
import api from "../../services/api"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"


const ModalCreate = ({ dataTecs, setTec, tec }) => {
  const classes = useStyles();
  
  const [textSuccess, setTextSuccess] = useState(false)
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState(() => {
      const tokenUpdate = localStorage.getItem("token") || ""
      return JSON.parse(tokenUpdate)
  })

  const handleOpen = () => {
    setOpen(true);
    setTextSuccess(false)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const schema = yup.object().shape({
      status: yup.string().required("Campo obrigatório")
  })

  const { register, handleSubmit, errors, reset } = useForm({
      resolver: yupResolver(schema)
  })

  const updateTec = (data) => {
      api.put(`/users/techs/${dataTecs.id}`, data, { headers: { Authorization: `Bearer ${token}` } })
      .then(response => {
          reset()
          tec.forEach((ele) => (ele.id === dataTecs.id) && (ele.status = `${data.status}`))
       
         setTec(tec)

         setTextSuccess(true)

        })  
      .catch(error => console.log(error))
  }

  return (
    <div>
      <FaEdit type="button" onClick={handleOpen} className={classes.cursor} size={20} />
        
      <Modal open={open}  onClose={handleClose} >
      {!textSuccess ? (
        <form onClick={handleSubmit(updateTec)} className={classes.paper}>
            <Typography>{`Alterar o nivel da tecnologia: ${dataTecs.title}`}</Typography>
            <TextField name="status" inputRef={register} error={!!errors.status} helperText={errors.status?.message} variant="outlined" label="Nivel" />
            <Button type="submit" color="primary" variant="contained">Alterar</Button>
     </form>) : (

            <form onClick={handleSubmit(updateTec)} className={classes.paper}>
                <h2>Alteração realizada com sucesso !</h2>
            </form>
        
        )}
      </Modal>
    </div>
  );
}

export default ModalCreate;