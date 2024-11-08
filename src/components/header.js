import { auth } from "../../auth";

export default async function Header(){
    const session = await auth();
    console.log("session", session);
    return(
        <div className="w-full bg-black">
            <h1 className="text-white">Hello World</h1>
            <button>Login</button>

        </div>
    )
}