import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome, {session?.user?.name}</h1>
      <p>This is your dashboard.</p>
    </div>
  );
}
