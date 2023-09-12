<nav class="navbar">
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/blog">Blog</a>
</nav>

<slot />

<style>
	.navbar {
		display: flex;
		gap: 4em;
	}
	a {
		text-decoration: none;
		text-emphasis-color: red;
	}
</style>
