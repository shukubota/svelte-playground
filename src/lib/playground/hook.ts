
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const _fetch = async () => {
  await wait(1000);
  return {
    data: {
      randomNumber: Math.random(),
    }
  }
}
const usePlayground = () => {
  const useFetchData = async () => {
    const data = await _fetch();
    return {
      randomNumber: data.data.randomNumber,
    }
  }
  return {
    useFetchData,
  }
}
