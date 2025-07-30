<script lang="ts">
  let count: number = $state(0);
  const increment = () => {
    count += 1;
  };
</script>

<div>
  <p>Counter</p>
  <button onclick={increment}>count = {count}</button>
</div>

<style>
  p {
    font-weight: bold;
  }
  button {
    white-space: nowrap;
  }
</style>
