<script lang="ts">
  let count: number = $state(0);
  const increment = () => {
    count += 1;
  };
</script>

<div class="card w-96 bg-base-100 shadow-sm">
  <div class="card-body">
    <div class="flex justify-between">
      <h2 class="text-3xl font-bold">Counter</h2>
    </div>
    <div>
      <button class="btn btn-info" onclick={increment}>count = {count}</button>
    </div>
  </div>
</div>
