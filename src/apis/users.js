export default async function getUsers(setUsers) {
  await fetch("https://reqres.in/api/users/")
    .then((res) => res.json())
    .then((data) => setUsers(data.data));
}
