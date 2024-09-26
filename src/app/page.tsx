import Banner from "@/app/components/Banner";
import { Suspense } from 'react'
import Loader from "@/app/components/Loader";

export default function Home() {
  return (
    <Suspense fallback={<Loader/>}>
      <Banner/>
    </Suspense>
  );
}
