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

<div class="title">TodoList: {done}/{all}</div>

<div>
  {#each todos as { text, done }, index}
    <div>
      <input type="checkbox" bind:checked={todos[index].done} name={text} />
      <label for={text} style:text-decoration-line={done ? "line-through" : ""}
        >{text}</label
      >
    </div>
  {/each}
</div>

<div>
  <label for="input">Add todo</label>
  <input type="text" name="input" bind:this={input} onkeypress={handleKey} />
</div>

<style>
  div.title {
    font-weight: bold;
  }
</style>
