<script>
	import Header from './components/Header.svelte';
	import Main from './components/Main.svelte';

	import './styles.css';
</script>

<Header />
<Main>
	<slot />
</Main>
