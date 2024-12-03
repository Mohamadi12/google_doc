"use client";

import { useMutation } from "convex/react";
import { Id } from "../../convex/_generated/dataModel";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { api } from "../../convex/_generated/api";
import { useState } from "react";

interface RemoveDialogProps {
  documentId: Id<"documents">;
  children: React.ReactNode;
}

export const RemoveDialog = ({ children, documentId }: RemoveDialogProps) => {
    const remove = useMutation(api.documents.removeById)
    const [isRemoving, setIsRemoving] = useState(false)

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent onClick={(e) => e.stopPropagation()}>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action be undone. This will permanently delete you document.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
                 disabled={isRemoving}
                 onClick={(e) =>{
                    e.stopPropagation()
                    setIsRemoving(true)
                    remove({id: documentId})
                    .finally(() =>setIsRemoving(false))
                 }}
          >
               Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
