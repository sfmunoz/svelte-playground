<script lang="ts">
  let count: number = $state(0);
  const increment = () => {
    count += 1;
  };
</script>

<div class="flex flex-col items-center gap-1">
  <div class="font-bold underline">Counter</div>
  <button onclick={increment}>count = {count}</button>
</div>
