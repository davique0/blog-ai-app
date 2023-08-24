import { Editor, useCurrentEditor, EditorProvider } from '@tiptap/react'
import React from 'react'
import ListItem from '@tiptap/extension-list-item'
import StarterKit from '@tiptap/starter-kit'
import { AiOutlineOrderedList, AiOutlineUnorderedList, AiOutlineUndo, AiOutlineRedo } from "react-icons/ai";

type Props = {
  editor: Editor | null;
}

const EditorMenuBar = ({ editor }: Props) => {
  // const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-4'>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={editor.isActive('bold') ? 'bg-wh-500 text-wh-50 p-1 rounded-md' : 'p-1'}
        >
          <b>B</b>
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={editor.isActive('italic') ? 'bg-wh-500 text-wh-50 font-mono p-1 rounded-md' : 'font-mono p-1'}
        >
          <i>I</i>
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleStrike()
              .run()
          }
          className={editor.isActive('strike') ? 'bg-wh-500 text-wh-50 p-1 rounded-md' : 'p-1'}
        >
          <s>S</s>
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'bg-wh-500 text-wh-50 p-1 rounded-md' : 'p-1'}
        >
          paragraph
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'bg-wh-500 text-wh-50 p-1 rounded-md' : 'p-1'}
        >
          h1
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'bg-wh-500 text-wh-50 p-1 rounded-md' : 'p-1'}
        >
          h2
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'bg-wh-500 text-wh-50 p-1 rounded-md' : 'p-1'}
        >
          h3
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'bg-wh-500 text-wh-50 p-1 rounded-md' : 'p-1'}
        >
          <AiOutlineUnorderedList size={25} />
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'bg-wh-500 text-wh-50 p-1 rounded-md' : 'p-1'}
        >
          <AiOutlineOrderedList size={25} />
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleCode()
              .run()
          }
          className={editor.isActive('code') ? 'bg-wh-500 text-wh-50 p-1 rounded-md' : 'p-1'}
        >
          code
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'bg-wh-500 text-wh-50 p-1 rounded-md' : 'p-1'}
        >
          code block
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className='p-1'
        >
          horizontal rule
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().undo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .undo()
              .run()
          }
          className='p-1'
        >
          <AiOutlineUndo size={25} />
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().redo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .redo()
              .run()
          }
          className='p-1'
        >
          <AiOutlineRedo size={25} />
        </button>
      </div>
    </div>
  )
}

export default EditorMenuBar