import React from "react";
import { Editor } from "./editor";

type Props = {
  params: Promise<{ documentId: string }>;
};

const DocumentPage = async ({ params }: Props) => {
  const { documentId } = await params;
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Editor />
    </div>
  );
};

export default DocumentPage;
