<script>
  import '../css/app.css';
</script>

<div class="bg-primary text-primary-foreground">
  <nav>
    <a href="/">home</a>
    <a href="/about">about</a>
  </nav>
  <slot></slot>
</div>

<style>
  a {
    color: blue;
    &:hover {
      color: purple;
      text-decoration: underline;
    }
  }
</style>
