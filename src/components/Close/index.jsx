import { useState } from 'react';
import { useStyles } from "./style"
import { Modal, Typography, Button } from '@material-ui/core';
import { FaTrashAlt } from "react-icons/fa"
import api from "../../services/api"

const ModalCreateClose = ({ tec, setTec, elemento, title }) => {
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
  }

const handleExit = (itemId) => {
    api.delete(`/users/techs/${itemId}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
            const result = tec.filter((ele) => ele.id !== itemId && ele)

            setTec(result)
            setTextSuccess(true)

        })
        .catch(error => console.log(error))
}

  return (
    <div>
      <FaTrashAlt type="button" onClick={handleOpen} className={classes.cursor} size={20} />
        
      <Modal open={open}  onClose={handleClose} >
      {!textSuccess ? (
        <div  className={classes.paper}>
            <Typography align="center">{`Excluir: ${title}`}</Typography>

            <Button onClick={() => handleExit(elemento)} type="submit" color="primary" variant="contained">Excluir</Button>
     </div>) : (

            <div className={classes.paper}>
                <h2 className={classes.subTitle}>Tecnologia excluida com sucesso !</h2>
            </div>
        
        )}
      </Modal>
    </div>
  );
}

export default ModalCreateClose;