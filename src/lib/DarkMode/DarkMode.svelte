<script lang="ts">
  import { Sun, Moon, Monitor, CircleQuestionMark } from "@lucide/svelte";
  type UsrTheme = "light" | "dark" | "system";
  type SysTheme = "light" | "dark" | "unknown";
  const t: string | null = localStorage.getItem("theme");
  let usrTheme: UsrTheme = $state(t === "light" || t === "dark" ? t : "system");
  let lightMedia: boolean = $state(false);
  let darkMedia: boolean = $state(false);
  let sysTheme: SysTheme = $derived(
    lightMedia === darkMedia ? "unknown" : darkMedia ? "dark" : "light"
  );
  const lightDT = "lemonade";
  const darkDT = "luxury";
  let dataTheme: string = $derived(
    usrTheme === "light"
      ? lightDT
      : usrTheme === "dark"
        ? darkDT
        : sysTheme === "dark"
          ? darkDT
          : lightDT
  );
  $effect(() => localStorage.setItem("theme", usrTheme));
  $effect(() => document.documentElement.setAttribute("data-theme", dataTheme));
  $effect(() => {
    const l = window.matchMedia("(prefers-color-scheme: light)");
    const d = window.matchMedia("(prefers-color-scheme: dark)");
    lightMedia = l.matches;
    darkMedia = d.matches;
    const fl = (e: MediaQueryListEvent) => (lightMedia = e.matches);
    const fd = (e: MediaQueryListEvent) => (darkMedia = e.matches);
    d.addEventListener("change", fd);
    l.addEventListener("change", fl);
    return () => {
      d.removeEventListener("change", fd);
      l.removeEventListener("change", fl);
    };
  });
  const usrThemes: UsrTheme[] = ["light", "system", "dark"];
  const overC =
    "absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[58%] scale-60 z-10";
</script>

{#snippet icon(t: UsrTheme)}
  {#if t === "light"}
    <Sun />
  {:else if t === "dark"}
    <Moon />
  {:else if t === "system"}
    <Monitor />
    {#if sysTheme === "light"}
      <Sun class={overC} />
    {:else if sysTheme === "dark"}
      <Moon class={overC} />
    {:else}
      <CircleQuestionMark class={overC} />
    {/if}
  {/if}
{/snippet}

<div class="join join-vertical lg:join-horizontal">
  {#each usrThemes as t (t)}
    <button
      id={t}
      class="btn btn-sm join-item"
      disabled={usrTheme === t}
      onclick={() => (usrTheme = t)}>{@render icon(t)}</button
    >
  {/each}
</div>
