<script lang="ts">
  import NavBar from '../components/navigation.svelte';
  import Hamburger from '../components/hamburger.svelte';
  import ScrollToTop from '../components/scrollToTop.svelte';
  import {NotificationDisplay} from '@beyonk/svelte-notifications';

  import PageTransition from "$lib/components/PageTransition.svelte";

  export let key;

  let open = false;
  let y;
</script>
<script context="module">
  export const load = async ({url, params}) => ({
    props: {
      key: url,
    },
  })
</script>

<svelte:head>
  <meta lang="en"/>
  <meta name="description" content="JavaScript wizard, chaotic good">
  <meta name="keyword" content="portfolio, javascript, developer">

  <meta property="og:title" content="Walter Sajtos | Full Stack Developer"/>
  <meta property="og:description" content="JavaScript wizard, chaotic good" />
  <meta property="og:url" content="https://waltersajtos.com" />
  <meta property="og:type" content="website" />
</svelte:head>

<Hamburger bind:open/>
<NavBar bind:open/>

<NotificationDisplay/>

<PageTransition refresh={key} bind:open>
  <div class="page"
       class:open>
    <slot/>
  </div>
</PageTransition>

<ScrollToTop visible={y > 1300}/>

<svelte:window bind:scrollY={y}/>

<style global lang="scss">
  @import '../styles/styles.scss';

  .page.open {
    max-height: calc(100vh - 2 * #{$page-padding});
    overflow-y: hidden;
  }
</style>
