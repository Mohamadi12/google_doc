import React from 'react'

type Props = {
  params: Promise<{documentId: string}>
}

const DocumentPage = async({params}: Props) => {
  const { documentId } = await params
  return (
    <div>
      Document ID: {documentId}
    </div>
  )
}

export default DocumentPage