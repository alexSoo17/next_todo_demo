import { CircularProgress } from "@mui/material";
import styles from "./style.module.scss";

function LoadingBox() {
  return (
    <div className={styles.loadingBox}>
      loading...
      <CircularProgress
        color="inherit"
        style={{ width: "60px", height: "60px" }}
      />
    </div>
  );
}
export default LoadingBox;
