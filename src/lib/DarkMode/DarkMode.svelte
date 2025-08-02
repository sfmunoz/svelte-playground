<script lang="ts">
  import { Sun, Moon, Monitor, type Icon as IconType } from "@lucide/svelte";
  type UsrTheme = "light" | "dark" | "system";
  type SysTheme = "light" | "dark" | "unknown";
  const t: string | null = localStorage.getItem("theme");
  let usrTheme: UsrTheme = $state(t === "light" || t === "dark" ? t : "system");
  let sysTheme: SysTheme = $state("unknown");
  let dataTheme: string = $derived.by(() => {
    const lightDT = "lemonade";
    const darkDT = "luxury";
    return usrTheme === "light"
      ? lightDT
      : usrTheme === "dark"
        ? darkDT
        : sysTheme === "dark"
          ? darkDT
          : lightDT;
  });
  $effect(() => localStorage.setItem("theme", usrTheme));
  $effect(() => document.documentElement.setAttribute("data-theme", dataTheme));
  $effect(() => {
    const d = window.matchMedia("(prefers-color-scheme: dark)");
    const l = window.matchMedia("(prefers-color-scheme: light)");
    sysTheme =
      d.matches == l.matches ? "unknown" : d.matches ? "dark" : "light";
    const ftheme = (e: MediaQueryListEvent, t: SysTheme) => {
      if (e.matches) sysTheme = t;
    };
    const fl = (e: MediaQueryListEvent) => ftheme(e, "light");
    const fd = (e: MediaQueryListEvent) => ftheme(e, "dark");
    d.addEventListener("change", fd);
    l.addEventListener("change", fl);
    return () => {
      d.removeEventListener("change", fd);
      l.removeEventListener("change", fl);
    };
  });
  type MenuItem = {
    theme: UsrTheme;
    icon: typeof IconType;
  };
  const menuItems: MenuItem[] = [
    { theme: "light", icon: Sun },
    { theme: "system", icon: Monitor },
    { theme: "dark", icon: Moon },
  ];
</script>

<div class="join join-vertical lg:join-horizontal">
  {#each menuItems as item}
    {@const Icon = item.icon}
    <button
      id={item.theme}
      class="btn btn-sm join-item"
      disabled={usrTheme === item.theme}
      onclick={() => (usrTheme = item.theme)}><Icon /></button
    >
  {/each}
</div>
