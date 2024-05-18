<script lang="ts">
  import Navbar from '@/components/Navbar.svelte';
  import '../css/app.css';

  const navLinks = [
    {
      name: 'Net Worth',
      href: '/',
    },
    {
      name: 'Crypto',
      href: '/crypto',
    },
    {
      name: 'Stocks',
      href: '/stocks',
    },
    {
      name: 'Options Trading',
      href: '/options-trading',
    },
    {
      name: 'Debt',
      href: '/debt',
    },
  ];
</script>

<Navbar {navLinks} />

<div class="bg-primary text-primary-foreground">
  <slot></slot>
</div>

<style>
</style>
