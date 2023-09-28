import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { addNewTodo, updateTodo } from "@/utils/fetchApi/todo";
import { useRouter } from "next/navigation";

export default function AddDialog(props) {
  const { open, handleClose, prevFormData, setUpdated } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: prevFormData?.name || "",
    category: prevFormData?.category || "",
    deadline: prevFormData?.deadline || "",
    progress: prevFormData?.progress || 0,
    done: prevFormData?.done || false,
  });
  const router = useRouter();

  const handleSubmit = () => {
    const sendData = async () => {
      try {
        setIsLoading(true);
        prevFormData
          ? (async () => {
              await updateTodo(formData, prevFormData.id);
              setUpdated((prev) => !prev);
            })()
          : await addNewTodo(formData);
      } catch (error) {
        throw new Error(error);
      } finally {
        setIsLoading(false);
        !isLoading && handleClose();
        router.push("/todo-list");
      }
    };
    sendData();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth={true}>
      <DialogTitle>Add new task</DialogTitle>
      <DialogContent>
        <DialogContentText>Set your new todo task now!</DialogContentText>
        <TextField
          value={formData.name}
          autoFocus
          margin="dense"
          id="name"
          label="Todo name"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          value={formData.category}
          autoFocus
          margin="dense"
          id="category"
          label="category"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          value={formData.deadline}
          autoFocus
          margin="dense"
          id="deadline"
          label="deadline"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
        {prevFormData && (
          <TextField
            value={formData.progress}
            autoFocus
            margin="dense"
            id="progress"
            label="progress"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        )}
        {prevFormData && (
          <TextField
            value={formData.done}
            autoFocus
            margin="dense"
            id="done"
            label="done"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>
          {prevFormData ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
