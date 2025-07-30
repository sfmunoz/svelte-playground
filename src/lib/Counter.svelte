<script lang="ts">
  let count: number = $state(0);
  const increment = () => {
    count += 1;
  };
</script>

<div>
  <div class="title">Counter</div>
  <button onclick={increment}>count = {count}</button>
</div>

<style>
  div.title {
    font-weight: bold;
  }
  button {
    white-space: nowrap;
  }
</style>
