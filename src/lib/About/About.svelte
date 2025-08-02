<script lang="ts">
  import version from "./version.txt?raw";
</script>

<div class="card w-96 bg-base-100 shadow-sm shadow-slate-700">
  <div class="card-body">
    <div class="flex justify-between">
      <h2 class="text-3xl font-bold">About</h2>
    </div>
    <div>
      <pre>{version}</pre>
    </div>
  </div>
</div>
