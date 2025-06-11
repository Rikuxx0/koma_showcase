"use client"

import type React from "react"
import { useState } from "react"
import { Search } from "lucide-react"

export function SearchContainer() {
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("all")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("検索:", searchTerm, "カテゴリ:", category)
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <form onSubmit={handleSearch} className="p-8">
        {/* タイトル */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">気になることから検索してみよう！</h2>
          <p className="text-gray-600">キーワードやカテゴリから簡単に見つけられます</p>
        </div>

        {/* 検索フィールド */}
        <div className="relative mb-8">
          <div className="flex items-center bg-gray-50 rounded-xl px-6 py-4 border border-gray-200 focus-within:border-purple-300 focus-within:ring-2 focus-within:ring-purple-100 transition-all duration-200">
            <Search className="text-gray-400 mr-4" size={20} />
            <input
              type="text"
              placeholder="例: プログラミング、音楽、スポーツ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-500"
            />
            
          </div>
        </div>

        {/* カテゴリチップ */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {[
            { value: "all", label: "すべて" },
            { value: "circle", label: "サークル" },
            { value: "seminar", label: "ゼミ" },
            { value: "facility", label: "施設" },
            { value: "event", label: "イベント" },
            { value: "club", label: "部活動" },
          ].map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setCategory(cat.value)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                category === cat.value
                  ? "bg-purple-800 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 検索ボタン */}
        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 bg-purple-800 text-white rounded-xl font-medium shadow-md hover:bg-purple-900 hover:shadow-lg transition-all duration-200"
          >
            検索する
          </button>
        </div>
      </form>
    </div>
  )
}
