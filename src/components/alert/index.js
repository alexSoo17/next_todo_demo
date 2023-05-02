import { Alert } from "@mui/material";

function AlertBox(props) {
  setTimeout(props.handleAlertClose, 1500);
  return props.success ? (
    <Alert
      severity="success"
      sx={{
        width: 400,
        zIndex: 1,
        marginBottom: 10,
      }}
    >
      Has already add to TodoList — check it out!
    </Alert>
  ) : (
    <></>
  );
}
export default AlertBox;
