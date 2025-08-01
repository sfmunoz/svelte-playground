<script lang="ts">
  import Counter from "../lib/Counter";
  import TodoList from "../lib/TodoList";
  import version from "./version.txt?raw";
</script>

<hr class="m-2 max-w-200 text-slate-300" />

<div class="flex flex-row max-w-200 m-5 gap-5 justify-around items-center">
  <Counter />
  <TodoList />
</div>

<hr class="m-2 max-w-200 text-slate-300" />

<button class="btn btn-info">This button does nothing</button>

<div role="alert" class="alert alert-info m-4">
  <pre>{version}</pre>
</div>
