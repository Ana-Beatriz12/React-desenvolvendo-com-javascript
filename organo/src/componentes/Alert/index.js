
import { Alert, AlertTitle, Button } from "@mui/material";

import "./Alert.css";

const AlertPage = ({ confirmar, cancelar, nome }) => {
  return (
    <div className="alert-notification">
      <div className="card-notification">
        <Alert severity="warning">
          <AlertTitle>Excluir Card</AlertTitle>
          Tem certeza que deseja excluir este Card ?
        </Alert>

        <div className="buttons">
          <Button variant="contained" onClick={confirmar} color="success">
            Excluir
          </Button>
          <Button variant="contained" onClick={cancelar} color="error" >
            Não Excluir
          </Button>
        </div>
      </div>
    </div>
  );
};
export default AlertPage;
