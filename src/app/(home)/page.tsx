"use client"

import React from "react";
import { Navbar } from "./navbar";
import { TemplateGallery } from "./templates-gallery";
import { usePaginatedQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { DocumentsTable } from "./documents-table";

const Home = () => {
  // Get all information of document
  // const documents = useQuery(api.documents.get)

  // if(documents === undefined){
  //   return (
  //     <p>Loading...</p>
  //   )
  // }

  const {results, status, loadMore} = usePaginatedQuery(api.documents.get, {}, { initialNumItems: 5 })

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplateGallery/>
        {/* {documents?.map((document) =>(
          <span key={document._id}>{document.title}</span>
        ))} */}
        <DocumentsTable 
               documents={results}
               loadMore={loadMore}
               status={status}
        />
      </div>
    </div>
  );
};

export default Home;
