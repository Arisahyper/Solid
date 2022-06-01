import { Link } from "solid-app-router";

const Root = () => {
  return (
    <div class="text-sky-600">
      <Link href="/">Root</Link>
      <Link href="/user">User</Link>
    </div>
  );
};

export { Root };
