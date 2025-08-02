<script lang="ts">
  type Todo = {
    text: string;
    done: boolean;
  };

  let input: HTMLInputElement | undefined = $state();
  const todos: Todo[] = $state([
    { text: "Wash clothes", done: true },
    { text: "Feed pets", done: false },
    { text: "Water plants", done: false },
  ]);
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

<div class="card w-96 bg-base-100 shadow-sm shadow-slate-700">
  <div class="card-body">
    <span class="badge badge-xs badge-success">Simple TODO list</span>
    <div class="flex justify-between">
      <h2 class="text-3xl font-bold">TodoList</h2>
      <span class="text-xl">{done}/{all}</span>
    </div>
    <ul class="mt-6 flex flex-col gap-2 text-xs">
      {#each todos as { text, done }, index}
        <li class={done ? "opacity-50" : ""}>
          <input
            type="checkbox"
            bind:checked={todos[index].done}
            name={text}
            class="checkbox checkbox-sm ml-4 mr-2"
          />
          <span class={done ? "line-through" : ""}>{text}</span>
        </li>
      {/each}
    </ul>
    <input
      type="text"
      placeholder="Write TODO and press <ENTER>"
      class="input mt-8"
      bind:this={input}
      onkeypress={handleKey}
    />
  </div>
</div>
