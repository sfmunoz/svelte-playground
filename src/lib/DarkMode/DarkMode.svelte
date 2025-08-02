<script lang="ts">
  import { Sun, Moon, Monitor, type Icon as IconType } from "@lucide/svelte";
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
      onclick={() => setTheme(item.theme)}><Icon /></button
    >
  {/each}
</div>
