<script lang="ts">
  import Header from "../lib/Header";
  import Footer from "../lib/Footer";
  import Counter from "../lib/Counter";
  import TodoList from "../lib/TodoList";
  import version from "./version.txt?raw";
</script>

<Header />

<main>
  <div class="flex flex-row max-w-200 m-5 gap-5 justify-around items-center">
    <Counter />
    <TodoList />
  </div>

  <button class="btn btn-info">This button does nothing</button>

  <div role="alert" class="alert alert-info m-4">
    <pre>{version}</pre>
  </div>
</main>

<Footer />
