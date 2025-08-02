<script lang="ts">
  import { Sun, Moon, Monitor } from "@lucide/svelte";
  const lightDT = "lemonade";
  const darkDT = "luxury";
  type Theme = "Light" | "Dark" | "System";
  let theme: Theme = $state("System");
  type SysTheme = "Light" | "Dark" | "Unknown";
  let sysTheme: SysTheme = $state("Unknown");

  const setTheme = (t: Theme | null) => {
    if (t) theme = t;
    else t = theme;
    localStorage.setItem("theme", t);
    document.documentElement.setAttribute(
      "data-theme",
      t === "Light"
        ? lightDT
        : t === "Dark"
          ? darkDT
          : sysTheme === "Dark"
            ? darkDT
            : lightDT
    );
  };

  const t: string | null = localStorage.getItem("theme") || "System";
  setTheme(t === "Light" ? "Light" : t === "Dark" ? "Dark" : "System");

  $effect(() => {
    const d = window.matchMedia("(prefers-color-scheme: dark)");
    const l = window.matchMedia("(prefers-color-scheme: light)");
    sysTheme =
      d.matches == l.matches ? "Unknown" : d.matches ? "Dark" : "Light";
    const ftheme = (e: MediaQueryListEvent, t: SysTheme) => {
      if (!e.matches) return;
      sysTheme = t;
      setTheme(null);
    };
    const fl = (e: MediaQueryListEvent) => ftheme(e, "Light");
    const fd = (e: MediaQueryListEvent) => ftheme(e, "Dark");
    d.addEventListener("change", fd);
    l.addEventListener("change", fl);
    return () => {
      d.removeEventListener("change", fd);
      l.removeEventListener("change", fl);
    };
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
