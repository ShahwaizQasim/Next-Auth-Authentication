import Link from "next/link";
import { auth, signOut } from "../../auth";

export default async function Header() {
  const session = await auth();
  console.log("session", session);
  return (
    <div className="w-full flex justify-between px-4 items-center bg-black py-4">
      <h1 className="text-white text-2xl">Hello World</h1>
      {session ? (
        <div className="flex gap-4 items-center">
          <h2 className="text-white">{session?.user?.email}</h2>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button
              type="submit"
              className="h-10 w-28 text-dark bg-white rounded"
            >
              LogOut
            </button>
          </form>
        </div>
      ) : (
        <Link href={'/Login'}>
        <button className="h-10 w-28 text-dark bg-white rounded">Login</button>
         </Link>
      )}
    </div>
  );
}
