import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import BigButton from "@/components/ui/button";
import AddDialog from "@/components/addDialog";
import { useState } from "react";
import AlertBox from "@/components/alert";

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleDialogOpen = () => setOpen(true);

  const [success, setSuccess] = useState(false);
  const handleAlertClose = () => setSuccess(false);

  const handleDialogClose = () => setOpen(false);

  const handleSuccessAlert = () => setSuccess(true);

  return (
    <>
      <Head>
        <title>Todo Manager</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <AlertBox success={success} handleAlertClose={handleAlertClose} />
        <h1>Todo Manager</h1>
        <AddDialog
          open={open}
          handleClose={handleDialogClose}
          handleSuccessAlert={handleSuccessAlert}
        />
        <BigButton handleClick={handleDialogOpen}>Add Todo</BigButton>
      </div>
    </>
  );
}
