<script lang="ts">
  import Column from '../components/Column.svelte';
  import '../css/app.css';

  let obj = {
    name: 'Svelte',
    location: 'Austin, TX',
    crypto: 'Bitcoin',
  };

  let obj2 = {
    name: 'hi',
    location: 'Dallas, TX',
    crypto: '',
  };

  function onPointChange(event: any) {
    console.log('Point changed', event.detail);
  }
</script>

<h1>BraveMoney</h1>
<h2>Your Investment Life Dashboard</h2>

<Column status="first" {...obj} on:onPointChange={onPointChange} />

<Column status="second" {...obj2} />

<style>
  h1 {
    font-size: 4rem;
  }
</style>
