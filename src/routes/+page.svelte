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

  let value = '';

  function onPointChange(event: CustomEvent<number>) {
    console.log('Point changed', event.detail);
  }

  // function onInput(event: Event) {
  //   const input = event.target as HTMLInputElement;
  //   value = input.value;
  //   console.log('value', value);
  // }
</script>

<h1>BraveMoney</h1>
<h2>Your Investment Life Dashboard</h2>

<!-- <input class="my-input" on:input={onInput} bind:value /> -->
<input class="my-input" bind:value />

<div>{value}</div>

<Column status="first" {...obj} on:onPointChange={onPointChange} />

<Column status="second" {...obj2} />

<style>
  h1 {
    font-size: 4rem;
  }

  .my-input {
    padding: 1rem;
    border: 1px solid #333;
    border-radius: 1rem;
  }
</style>
