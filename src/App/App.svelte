<script lang="ts">
  import Nav from "../lib/Nav";
  import Counter from "../lib/Counter";
  import TodoList from "../lib/TodoList";
  import version from "./version.txt?raw";
</script>

<header>
  <Nav />
  <div class="m-3">
    <h1 class="font-bold underline">Svelte playground</h1>
    <p>
      <a href="https://svelte.dev" class="text-blue-500">Svelte</a>
      playground
    </p>
  </div>
</header>

<main>
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
</main>

<footer>
  <p class="m-3 text-blue-500">
    <a href="https://github.com/sfmunoz/svelte-playground"
      >https://github.com/sfmunoz/svelte-playground</a
    >
  </p>
</footer>
