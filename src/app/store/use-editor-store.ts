import { create } from "zustand";
import { Editor } from "@tiptap/react";

interface EditorState {
  editor: Editor | null;
  setEditor: (editor: Editor | null) => void;
}

export const useEditorState = create<EditorState>((set) => ({
  editor: null,
  setEditor: (editor) => set({ editor }),
}));
