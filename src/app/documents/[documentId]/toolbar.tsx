"use client"

import { useEditorState } from "@/app/store/use-editor-store"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LucideIcon, Undo2Icon } from "lucide-react"

interface ToolbarButtonProps{
    onClick?: () =>void
    isActive?: boolean
    icon: LucideIcon
}

const ToolbarButton = ({onClick, icon:Icon, isActive}:ToolbarButtonProps) =>{
    return(
        <Button onClick={onClick} className={cn(
            "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
            isActive && "bg-neutral-200/80"
        )}>
            <Icon className="size-4"/>
        </Button>
    )
}

export const Toolbar = () => {
    const {editor} =useEditorState()

    const sections: {label: string; icon: LucideIcon; onClick: () => void; isActive?: boolean}[][] = [
        [
            {
                label: "Undo",
                icon: Undo2Icon,
                onClick: () =>editor?.chain().focus().undo().run()
            }
        ]
    ]
  return (
    <div className='bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto'>
        {sections[0].map((item) =>(
            <ToolbarButton key={item.label} {...item}/>
        ))}
    </div>
  )
}

