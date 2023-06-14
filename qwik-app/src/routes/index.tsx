import { component$ } from '@builder.io/qwik';
import {
  type DocumentHead,
} from '@builder.io/qwik-city';
import { Todo } from "../components/todo/todo";


export default component$(() => {
  return (
    <>
      <Todo client:load></Todo>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Todo List',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
