<script lang="ts">
  import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';
  import { createEventDispatcher } from 'svelte';

  export let status;
  export let name;
  export let location;
  export let crypto;

  const missingProp = !name || !location || !crypto;

  const dispatch = createEventDispatcher();

  let skillPoint = 0;

  $: dispatch('onPointChange', skillPoint);

  function decrement() {
    skillPoint -= 1;
  }

  function increment() {
    skillPoint += 1;
  }

  onMount(() => {
    console.log('Mounted');
  });

  onDestroy(() => {
    console.log('Destroyed');
  });

  beforeUpdate(() => {
    console.log('Before update');
  });

  afterUpdate(() => {
    console.log('After update');
  });
</script>

<div class="component">
  <h2 class:missingProp>Component: {status}</h2>

  <p>This is an imported component</p>

  <p>Skill points: {skillPoint}</p>

  <pre>
    <p>{name}</p>
    <p>{location}</p>
    <p>{crypto}</p>
  </pre>

  <button class="btn-update" on:click={decrement}>Delete Points</button>
  <button class="btn-update" on:click={increment}>Add Points</button>
</div>

<style>
  h2 {
    font-size: 1.5rem;
  }
  pre {
    background: #2d2d2d;
    color: #f8f8f2;
    padding: 10px;
    border-radius: 5px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 14px;
    overflow: auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    line-height: 0.5;
  }
  .missingProp {
    color: red;
  }
  .btn-update {
    padding: 1rem;
    border: 2px solid #ccc;
    border-radius: 1rem;
    background: #ccc;
  }
  .component {
    border: 1px solid #ccc;
    padding: 1rem;
    margin-top: 1rem;
  }
</style>
