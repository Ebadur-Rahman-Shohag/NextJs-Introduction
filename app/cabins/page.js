import Counter from "../components/Counter";
export default async function Page() {
  // res.json(): Parses the response body as JSON and returns a Promise that resolves with the parsed data.
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();
  // console.log(data);
  return (
    <div>
      <h1>Cabins Page</h1>
      {data.map((element) => {
        return <p key={element.id}>{element.name}</p>;
      })}
      <Counter users={data} />
    </div>
  );
}
//*******************Data Fetching**************************
//In Next.js we should fetch data in React Server Component. This component is a React server component. So here we can fetch data.

//*********************Data Passing**************************************
//We can pass data from React Server Component to React Client Component via props.
// Ex: Here we passing the users data from this component to Counter Component. Counter Component is a React Client Component.
// We can not use React Hooks in React Server Component