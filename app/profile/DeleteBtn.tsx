"use client";

import Btn from "@/components/ui/Btn";

function DeleteBtn({ handleDelete }: { handleDelete: () => Promise<void> }) {
  function handleClick() {
    if (
      confirm(
        "Are you sure you want to delete your LinguaLift account? This action cannot be undone.",
      )
    ) {
      handleDelete();
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }
  return <Btn text="Delete account" onclick={handleClick} />;
}

export default DeleteBtn;
