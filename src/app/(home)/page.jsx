import { Button } from "@mui/material";
import Link from "next/link";
const Home = () => {
  return (
    <main className="w-full flex justify-center items-center mt-20">
      <Link href="/dashboard/default">
        <Button variant="contained">go to dashboard</Button>
      </Link>
    </main>
  );
};

export default Home;
