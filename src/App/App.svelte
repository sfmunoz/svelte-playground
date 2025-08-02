<script lang="ts">
  import Header from "../lib/Header";
  import Footer from "../lib/Footer";
  import Counter from "../lib/Counter";
  import TodoList from "../lib/TodoList";
  import About from "../lib/About";
</script>

<Header />

<main>
  <div class="flex flex-col m-5 gap-5 justify-around items-center">
    <div class="flex flex-row max-w-200">
      <Counter />
      <div class="divider divider-horizontal"></div>
      <TodoList />
    </div>
    <div class="divider"></div>
    <About />
  </div>
</main>

<Footer />
