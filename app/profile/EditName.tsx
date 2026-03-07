"use client";

import { FaEdit } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { useState, useRef } from "react";

function EditName({
  updateName,
}: {
  updateName: (email: string, name: string) => Promise<void>;
}) {
  const [editing, setEditing] = useState<boolean>(false);
  const { data: session } = authClient.useSession();
  const displayNameRef = useRef<HTMLSpanElement>(null);

  function handleEdit() {
    setTimeout(() => {
      displayNameRef.current?.focus();
    }, 10);
    setEditing(true);
  }

  function handleSave() {
    const newName = displayNameRef.current?.textContent;
    if (newName?.trim().length == 0) {
      displayNameRef.current!.textContent = "";
      handleEdit();
      return;
    }
    updateName(session!.user.email, displayNameRef.current!.textContent);
    setEditing(false);
  }

  return (
    <h2 className="text-white text-2xl font-bold flex items-center gap-x-5">
      <span
        contentEditable={editing}
        onBlur={handleSave}
        ref={displayNameRef}
        suppressContentEditableWarning
        className="focus:border-2 focus:rounded-lg focus:border-zinc-800 focus:outline-none focus:px-3 focus:py-1"
      >
        {session?.user.name}
      </span>
      {!editing && (
        <FaEdit
          size={20}
          onClick={handleEdit}
          className="cursor-pointer text-zinc-300"
          title="Edit name"
        />
      )}
    </h2>
  );
}

export default EditName;
