import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./style";
import ModalCreate from "../../components/modal";
import ModalCreateClose from "../../components/Close";

const TecDev = ({ tec, newTecs, setTec }) => {
  const classes = useStyles();

  return (
    <>
      {tec.map((ele, index) => (
        <Grid key={index} className={classes.tecs}>
          <div>
            <Typography>{ele.title}</Typography>
          </div>
          <div>
            <div className={classes.icons}>
              <Typography className={classes.text}>{ele.status}</Typography>
              <div className={classes.iconsSpace}>
                <ModalCreateClose
                  className={classes.cursor}
                  title={ele.title}
                  elemento={ele.id}
                  tec={tec}
                  setTec={setTec}
                  size={20}
                />
                <ModalCreate tec={tec} newTecs={newTecs} dataTecs={ele} />
              </div>
            </div>
          </div>
        </Grid>
      ))}
    </>
  );
};

export default TecDev;
