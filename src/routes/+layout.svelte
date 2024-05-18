<script>
  import '../css/app.css';
</script>

<nav>
  <a href="/">home</a>
  <a href="/about">about</a>
</nav>

<slot></slot>

<style>
  a {
    color: blue;
    &:hover {
      color: purple;
      text-decoration: underline;
    }
  }
</style>
