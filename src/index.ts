import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import Typography from '@tiptap/extension-typography';
import BubbleMenu from '@tiptap/extension-bubble-menu';

new Editor({
  editorelement: document.querySelector('.editor'),
  extensions: [
    StarterKit,
    Typography,
    BubbleMenu.configure({
      element: document.querySelector('.editor-menu'),
  ],
  content: '<p>Hello World!</p>',
});
