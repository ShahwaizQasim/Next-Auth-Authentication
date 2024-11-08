import { redirect } from "next/navigation";
import { auth, signIn } from "../../../../auth"

 
export default async function SignIn() {
    const session = await auth();
    if (session) {
        return redirect('/');
    }
  return (
    <div className=" h-screen flex justify-center items-center ">

    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit" className="border py-2 px-4 border-blue-400">Continue with Google</button>
    </form>
    </div>

  )
} 