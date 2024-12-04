"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";

export function Room({ children }: { children: ReactNode }) {
    const params = useParams()

  return (
    <LiveblocksProvider publicApiKey={"pk_dev_TwEW2mqXCbVHIUr0QeAs1Q1LV7lR7RLJVs3whxkQyHUX5lk-9kwXuc6B_ht8pWGT"}>
      <RoomProvider id={params.documentId  as string}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}