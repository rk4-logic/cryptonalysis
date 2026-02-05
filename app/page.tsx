import Categories from "@/components/home/Categories";
import CoinOverview from "@/components/home/CoinOverview";
import { CoinOverviewFallback, TrendingCoinsFallback } from "@/components/home/fallback";
import TrendingCoins from "@/components/home/TrendingCoins";
import { Suspense } from "react";


export default async function Home() {

  return (
    <main className="main-container">
      <section className="home-grid">
        <Suspense fallback={<div><CoinOverviewFallback /></div>}>
          <CoinOverview />
        </Suspense>
        <Suspense fallback={<div><TrendingCoinsFallback /></div>}>
          <TrendingCoins />
        </Suspense>
      </section>

      <section className="w-full mt-7 space-y-4">
        <Suspense fallback={<div><TrendingCoinsFallback /></div>}>
          <Categories />
        </Suspense>
      </section>
    </main>
  );
}
