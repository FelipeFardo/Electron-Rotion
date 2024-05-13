import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import Placeholder from '@tiptap/extension-placeholder'
import Document from '@tiptap/extension-document'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

interface EditorProps {
  content: string
}

export function Editor({ content }: EditorProps) {
  const editor = useEditor({
    extensions: [
      Document.extend({
        content: 'heading block*',
      }),
      StarterKit.configure({
        document: false,
      }),
      Highlight,
      Typography,
      Placeholder.configure({
        placeholder: 'Untitled',
        emptyEditorClass:
          'before:content-[attr(data-placeholder)] before:h-0 before:text-gray-500 before:float-left before:pointer-events-none',
      }),
    ],
    content,
    autofocus: 'end',
    editorProps: {
      attributes: {
        class: 'focus:outline-none prose prose-invert',
      },
    },
  })
  return <EditorContent className="w-[65ch]" editor={editor} />
}
