<script lang="ts">
  import Counter from "./lib/Counter.svelte";
  import TodoList from "./lib/TodoList.svelte";
</script>

<table>
  <tbody>
    <tr>
      <td>
        <Counter />
      </td>
      <td>
        <TodoList />
      </td>
    </tr>
  </tbody>
</table>

<style>
  table,
  td {
    border-style: none;
  }
  td {
    padding: 0rem 6rem;
  }
</style>
