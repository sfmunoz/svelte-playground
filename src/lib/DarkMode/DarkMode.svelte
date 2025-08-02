<script lang="ts">
  import { Sun, Moon, Monitor, type Icon as IconType } from "@lucide/svelte";
  type Theme = "Light" | "Dark" | "System";
  const t: string | null = localStorage.getItem("theme") || "System";
  let theme: Theme = $state(
    t === "Light" ? "Light" : t === "Dark" ? "Dark" : "System"
  );
  type SysTheme = "Light" | "Dark" | "Unknown";
  let sysTheme: SysTheme = $state("Unknown");
  let dataTheme: string = $derived.by(() => {
    const lightDT = "lemonade";
    const darkDT = "luxury";
    return theme === "Light"
      ? lightDT
      : theme === "Dark"
        ? darkDT
        : sysTheme === "Dark"
          ? darkDT
          : lightDT;
  });
  $effect(() => localStorage.setItem("theme", theme));
  $effect(() => document.documentElement.setAttribute("data-theme", dataTheme));
  $effect(() => {
    const d = window.matchMedia("(prefers-color-scheme: dark)");
    const l = window.matchMedia("(prefers-color-scheme: light)");
    sysTheme =
      d.matches == l.matches ? "Unknown" : d.matches ? "Dark" : "Light";
    const ftheme = (e: MediaQueryListEvent, t: SysTheme) => {
      if (!e.matches) return;
      sysTheme = t;
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
  type MenuItem = {
    theme: Theme;
    icon: typeof IconType;
  };
  const menuItems: MenuItem[] = [
    { theme: "Light", icon: Sun },
    { theme: "System", icon: Monitor },
    { theme: "Dark", icon: Moon },
  ];
</script>

<div class="join join-vertical lg:join-horizontal">
  {#each menuItems as item}
    {@const Icon = item.icon}
    <button
      id={item.theme}
      class="btn btn-sm join-item"
      disabled={theme === item.theme}
      onclick={() => (theme = item.theme)}><Icon /></button
    >
  {/each}
</div>
