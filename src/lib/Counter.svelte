<script lang="ts">
  let count: number = $state(0);
  const increment = () => {
    count += 1;
  };
</script>

<h2>Counter</h2>

<button onclick={increment}>count = {count}</button>
