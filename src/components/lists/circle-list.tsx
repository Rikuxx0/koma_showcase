"use client"

import { useState } from "react"
import { Clock, MapPin, Users } from "lucide-react"
import Link from "next/link"


// サンプルデータ
const sampleCircles = [
  {
    id: 1,
    name: "プログラミング研究会",
    category: "技術系",
    description: "プログラミングスキルを向上させ、様々なプロジェクトに取り組む研究会です。初心者から上級者まで歓迎！",
    tags: ["プログラミング", "Web開発", "AI", "初心者歓迎"],
    memberCount: 45,
    meetingTime: "毎週水曜日 18:00-20:00",
    location: "情報棟3F",
    contact: "programming@komatech.ac.jp",
    color: "bg-blue-100",
    borderColor: "border-blue-200",
  },
  {
    id: 2,
    name: "軽音楽部",
    category: "文化系",
    description: "バンド活動を通じて音楽の楽しさを共有しています。ライブ活動も積極的に行っています。",
    tags: ["音楽", "バンド", "ライブ", "楽器"],
    memberCount: 32,
    meetingTime: "毎週火・金曜日 17:00-19:00",
    location: "学生会館B1F",
    contact: "keion@komatech.ac.jp",
    color: "bg-pink-100",
    borderColor: "border-pink-200",
  },
  {
    id: 3,
    name: "ロボット研究会",
    category: "技術系",
    description: "ロボット製作を通じて工学の実践的な知識を学びます。競技会への参加も行っています。",
    tags: ["ロボット", "工学", "競技会", "製作"],
    memberCount: 28,
    meetingTime: "毎週月・木曜日 18:30-21:00",
    location: "工学棟1F実験室",
    contact: "robot@komatech.ac.jp",
    color: "bg-green-100",
    borderColor: "border-green-200",
  },
  {
    id: 4,
    name: "写真部",
    category: "文化系",
    description: "写真撮影の技術向上と作品制作を行っています。展示会も定期的に開催しています。",
    tags: ["写真", "撮影", "展示会", "アート"],
    memberCount: 18,
    meetingTime: "毎週土曜日 14:00-17:00",
    location: "芸術棟2F",
    contact: "photo@komatech.ac.jp",
    color: "bg-orange-100",
    borderColor: "border-orange-200",
  },
]

const categories = ["全て", "技術系", "文化系", "体育系", "学術系"]

export function CircleList() {
  const [selectedCategory, setSelectedCategory] = useState("全て")
  

  const filteredCircles = sampleCircles.filter(
    (circle) => selectedCategory === "全て" || circle.category === selectedCategory,
  )


  return (
    <div className="space-y-6">
      {/* フィルターチップ */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedCategory === category
                ? "bg-purple-800 text-white shadow-sm"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* カードグリッド */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCircles.map((circle) => (
          <div
            key={circle.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group"
          >
            {/* カードヘッダー */}
            <div className={`h-3 ${circle.color}`} />

            <div className="p-6">
              {/* ヘッダー */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{circle.name}</h3>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <span
                      className={`px-3 py-1 ${circle.color} ${circle.borderColor} border rounded-full text-xs font-medium`}
                    >
                      {circle.category}
                    </span>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {circle.memberCount}人
                    </div>
                  </div>
                </div>
              </div>

              {/* 説明 */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{circle.description}</p>

              {/* 詳細情報 */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  {circle.meetingTime}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  {circle.location}
                </div>
              </div>

              {/* タグ */}
              <div className="flex flex-wrap gap-2 mb-6">
                {circle.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* アクションボタン */}
              <Link href={`/circle/${circle.id}`}>
                <button className="w-full py-3 bg-purple-800 text-white rounded-lg font-medium hover:bg-purple-900 transition-colors duration-200">
                  詳細を見る
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
