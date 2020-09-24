<script lang="ts">
  import "./styles/main.css"
  const message: string = "Learn Svelte with Typescript"
</script>

<style lang="postcss">
  :global(body) {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 5rem;
    height: 90vh;
    display: flex;
    background-color: azure;
  }
  .app {
    @apply grid items-center justify-center w-full;
  }

  .app_header {
    @apply flex w-full flex-col;
  }

  .app_logo {
    @apply max-w-lg mx-auto;
  }
</style>

<div class="app">
  <header class="app_header">
    <img src="logo.svg" class="app_logo" alt="logo" />
    <p>Edit <code>src/App.svelte</code> and save to reload.</p>
    <a
      class="App-link"
      href="https://svelte.dev"
      target="_blank"
      rel="noopener noreferrer">
      {message}
    </a>
  </header>
</div>
