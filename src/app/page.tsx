"use client"
import { SearchContainer } from "@/components/search-container"
import { CategoryTabs } from "@/components/category-tabs"
import { FeaturedSection } from "@/components/featured-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50">
      {/* 背景の装飾的な要素 - より控えめに */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-20"></div>
      </div>

      {/* ヘッダー - より落ち着いたデザイン */}
      <header className="relative bg-purple-900  text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-bold text-white">Koma-Showcase</h1>
              <p className="text-purple-100 text-lg max-w-2xl leading-relaxed">
                サークル、ゼミ、施設など、大学内のあらゆる情報を簡単検索
              </p>
            </div>
            {/** ヘッダーの項目リスト */}
            <div className="hidden md:flex items-center space-x-3">
              <Button className="flex bg-transparent text-white hover:bg-purple-900 text-3lg font-bold gap-x-13">
                <Link href="/about">
                  Koma-Showcaseとは
                </Link>
                <Link href="https://www.komazawa-u.ac.jp/">
                  駒澤大学をもっと知りたい方へ
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="relative container mx-auto px-4 py-10 space-y-10">
        <SearchContainer />
        <CategoryTabs />
        <FeaturedSection />
        <Footer />
      </main>
    </div>
  )
}
