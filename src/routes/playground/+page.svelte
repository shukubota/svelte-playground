<script>
  // import { usePlayground } from "$lib/playground/hook.js";

  const name = "hoge";
  console.log("playground");
  // const { useFetchData } = usePlayground();
  // const data = useFetchData();
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const _fetch = async () => {
    await wait(1000);
    return {
      data: {
        randomNumber: Math.random(),
      }
    }
  }

  const data = _fetch()

  console.log({ data });
</script>
<h1>playground</h1>
<p>{name}</p>
<p>{data}</p>
<div>
  {#await data}
    <p>loading...</p>
  {:then data}
    {data.data.randomNumber}
  {:catch error}
    {error.message}
  {/await}

</div>
