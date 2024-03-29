import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import Typography from '@tiptap/extension-typography';
import BubbleMenu from '@tiptap/extension-bubble-menu';

const editorElement = document.querySelector('.editor');
const menuElement = document.querySelector('.editor-menu');

new Editor({
  editorElement,
  extensions: [
    StarterKit,
    Typography,
    BubbleMenu.configure({
      element: menuElement,
    }),
  ],
  content: '<p>Hello World!</p>',
});
