<script lang="ts">
  type Todo = {
    text: string;
    done: boolean;
  };

  let input: HTMLInputElement | undefined = $state();
  const todos: Todo[] = $state([]);
  const all = $derived(todos.length);
  const done = $derived(todos.filter((todo) => todo.done).length);
  const handleKey = (e: KeyboardEvent) => {
    if (!input) return;
    if (e.key === "Enter") {
      todos.push({ text: input.value, done: false });
      input.value = "";
    }
  };
</script>

<div class="flex flex-col items-center gap-1">
  <div class="font-bold underline">TodoList: {done}/{all}</div>

  {#each todos as { text, done }, index}
    <div>
      <input type="checkbox" bind:checked={todos[index].done} name={text} />
      <label for={text} style:text-decoration-line={done ? "line-through" : ""}
        >{text}</label
      >
    </div>
  {/each}

  <label for="input">Add todo</label>

  <input
    class="bg-slate-200 border border-slate-400 rounded-md"
    type="text"
    name="input"
    bind:this={input}
    onkeypress={handleKey}
  />
</div>
