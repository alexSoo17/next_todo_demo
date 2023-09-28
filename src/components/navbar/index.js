import Link from "next/link";
import styles from "./style.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
function NavBar(props) {
  const router = useRouter();
  const path = router.pathname;
  const [title, setTitle] = useState("All the todos");

  useEffect(() => {
    if (path !== "/") {
      setTitle("Back");
    } else {
      setTitle("All the todos");
    }
  }, [path]);

  const handleRedirect = () => {
    if (path !== "/") {
      router.push("/");
    } else {
      router.push("/todo-list");
    }
  };

  return (
    <>
      <div className={styles.navbar}>
        <h2 onClick={handleRedirect}>{title}</h2>
        <Link href="checked-todo">
          <h2> Check for Done</h2>
        </Link>
      </div>
      {props.children}
    </>
  );
}
export default NavBar;
