<script lang="ts">
  type NavLink = {
    name: string;
    href: string;
  };

  export let navLinks: NavLink[] = [];
</script>

<nav class="bg-gray-800 text-white p-4">
  <ul class="flex space-x-4">
    {#each navLinks as link}
      <li><a href={link.href} class="hover:underline">{link.name}</a></li>
    {/each}
  </ul>
</nav>

<style>
  nav {
    background-color: #1f2937; /* Tailwind's bg-gray-800 */
    color: #fff;
    padding: 1rem;
  }
  ul {
    display: flex;
    gap: 1rem;
  }
  a:hover {
    text-decoration: underline;
  }
</style>
