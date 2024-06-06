<script lang="ts">
  import { Separator } from '$lib/components/ui/separator/index.js'

  type NavLink = {
    name: string
    href: string
  }

  export let navLinks: NavLink[] = []
</script>

<nav class="main-nav bg-gray-800 text-white p-4">
  <ul class="flex items-center space-x-4">
    <!-- <li class="font-bold logo">BraveMoney</li> -->
    {#each navLinks as link}
      <li>
        <a href={link.href} class="hover:underline">{link.name}</a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  nav {
    background-color: #000; /* Tailwind's bg-gray-800 */
    color: #fff;
    padding: 0.5rem;
    font-size: 0.8rem;
  }
  ul {
    display: flex;
    gap: 1rem;
    align-items: center; /* Ensure items are centered vertically */
  }
  a:hover {
    text-decoration: underline;
  }
</style>
