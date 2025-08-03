<script lang="ts">
  import DarkMode from "../DarkMode";
  import ghWhiteSvgOrig from "./github-mark-white.svg?raw";
  import ghSvgOrig from "./github-mark.svg?raw";
  const svgScale = (buf: string): string => {
    const doc = new DOMParser().parseFromString(buf, "application/xml");
    const svg = doc.getElementsByTagName("svg")[0];
    const w = svg.getAttribute("width");
    const h = svg.getAttribute("height");
    svg.setAttribute("viewBox", "0 0 " + w + " " + h);
    svg.setAttribute("width", "25");
    svg.setAttribute("height", "24");
    return new XMLSerializer().serializeToString(doc);
  };
  const ghWhiteSvg = svgScale(ghWhiteSvgOrig);
  const ghSvg = svgScale(ghSvgOrig);
</script>

<header>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="flex-1">
      <a
        href="https://sfmunoz.com/svelte-playground"
        class="btn btn-ghost text-xl">Svelte playground</a
      >
    </div>
    <ul class="menu menu-horizontal px-8">
      <li><DarkMode /></li>
      <li>
        <div class="avatar">
          <div class="w-6 rounded-xl">
            <a href="https://sfmunoz.com/">
              <img
                src="https://avatars.githubusercontent.com/u/46285520"
                alt="avatar"
              />
              Home</a
            >
          </div>
        </div>
      </li>
      <li>
        <a href="https://github.com/sfmunoz/svelte-playground">
          <div class="hidden dark:block">
            {@html ghWhiteSvg}
          </div>
          <div class="block dark:hidden">
            {@html ghSvg}
          </div>
          GitHub</a
        >
      </li>
      <li>
        <details>
          <summary>More</summary>
          <ul class="bg-base-100 rounded-t-none p-2">
            <li><a href="https://sfmunoz.com/logit/">Logit</a></li>
            <li>
              <a href="https://sfmunoz.com/hugo-playground/">Hugo playground</a>
            </li>
            <li>
              <a href="https://sfmunoz.com/jekyll-playground/"
                >Jekyll playground</a
              >
            </li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</header>
