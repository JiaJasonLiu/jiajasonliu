<script>
  let { children } = $props();
  import "../app.css";

</script>
<nav>
	<a href="/">home</a>
	<a href="/blog">blog</a>
</nav>

{@render children()}

