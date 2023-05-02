import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useRef, useState } from "react";
import { addNewTodo } from "@/utils/fetchApi/todo";

export default function AddDialog(props) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    const postData = {
      name: todoName.current.value,
      category: todoCategory.current.value,
      deadline: todoDeadline.current.value,
      progress: "0%",
      done: false,
    };
    const sendData = async () => {
      try {
        setIsLoading(true);
        await addNewTodo(postData);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    sendData();
    setIsLoading(false);

    !isLoading && props.handleClose();
    props.handleSuccessAlert();
  };

  const todoName = useRef(null);
  const todoCategory = useRef(null);
  const todoDeadline = useRef(null);
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      maxWidth="xs"
      fullWidth={true}
    >
      <DialogTitle>Add new task</DialogTitle>
      <DialogContent>
        <DialogContentText>Set your new todo task now!</DialogContentText>
        <TextField
          inputRef={todoName}
          autoFocus
          margin="dense"
          id="name"
          label="Todo name"
          fullWidth
          variant="standard"
        />
        <TextField
          inputRef={todoCategory}
          autoFocus
          margin="dense"
          id="category"
          label="category"
          fullWidth
          variant="standard"
        />
        <TextField
          inputRef={todoDeadline}
          autoFocus
          margin="dense"
          id="deadline"
          label="deadline"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}
