<script lang="ts">
  let count: number = $state(0);
  const increment = () => {
    count += 1;
  };
</script>

<div class="card min-w-96 bg-base-100 shadow-sm shadow-slate-700 pt-6">
  <div class="card-body">
    <div class="flex justify-between">
      <h2 class="text-3xl font-bold">Counter</h2>
    </div>
    <div class="mt-5 ml-3">
      <button class="btn btn-info" onclick={increment}>count = {count}</button>
    </div>
  </div>
</div>
