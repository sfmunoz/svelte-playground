<script>
  let todos = $state([]);
  let input = $state();
  let all = $derived(todos.length);
  let done = $derived(todos.filter((todo) => todo.done).length);
  function handleKey(e) {
    if (e.key === "Enter") {
      todos.push({ text: input.value, done: false });
      input.value = "";
    }
  }
</script>

<span style:font-size="20px" style:font-weight="bold">Todo List</span>
{done}/{all}<br />
{#each todos as { text, done }, index}
  <input type="checkbox" bind:checked={todos[index].done} name={text} />
  <label for={text} style:text-decoration-line={done ? "line-through" : ""}
    >{text}</label
  >
  <br />
{/each}
<br />
<label for="input">Add todo</label>
<br />
<input type="text" name="input" bind:this={input} onkeypress={handleKey} />
