import Navbar from "@/components/Navbar";
import { createClient } from "@/prismicio";

export default async function Header() {

  const client = createClient();
  const settings = await client.getSingle('settings')

  return (
    <div>
      <Navbar settings={settings} />
    </div>
  );
}
