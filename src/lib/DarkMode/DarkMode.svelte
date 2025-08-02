<script lang="ts">
  import { Sun, Moon, Monitor } from "@lucide/svelte";
  const lightDataTheme = "lemonade";
  const darkDataTheme = "luxury";
  type Theme = "Light" | "Dark" | "System";
  let theme: Theme = $state("System");
  const setTheme = (t: Theme) => {
    theme = t;
    localStorage.setItem("theme", t);
    if (t === "Light") {
      document.documentElement.setAttribute("data-theme", lightDataTheme);
      return;
    }
    if (t === "Dark") {
      document.documentElement.setAttribute("data-theme", darkDataTheme);
      return;
    }
    // const l = window.matchMedia("(prefers-color-scheme: light)").matches;
    const d = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.setAttribute(
      "data-theme",
      d ? darkDataTheme : lightDataTheme
    );
  };

  $effect(() => {
    const t: string | null = localStorage.getItem("theme") || "System";
    setTheme(t === "Light" ? "Light" : t === "Dark" ? "Dark" : "System");
  });
</script>

<div class="join join-vertical lg:join-horizontal">
  <button
    id="lightMode"
    class="btn btn-sm join-item"
    disabled={theme === "Light"}
    onclick={() => setTheme("Light")}><Sun /></button
  >
  <button
    id="systemMode"
    class="btn btn-sm join-item"
    disabled={theme === "System"}
    onclick={() => setTheme("System")}><Monitor /></button
  >
  <button
    id="darkMode"
    class="btn btn-sm join-item"
    disabled={theme === "Dark"}
    onclick={() => setTheme("Dark")}><Moon /></button
  >
</div>
