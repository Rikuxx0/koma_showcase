"use client"　

import { useState } from "react"
import { Clock, MapPin, Users, Heart, Trophy } from "lucide-react"

// サンプルデータ
const sampleClubs = [
  {
    id: 1,
    name: "バスケットボール部",
    category: "体育会系",
    description: "バスケットボールを通じて体力向上と仲間づくりを行っています。初心者も大歓迎です。",
    tags: ["バスケットボール", "スポーツ", "初心者歓迎", "体力向上"],
    memberCount: 24,
    meetingTime: "毎週火・木・土曜日 19:00-21:00",
    location: "体育館",
    contact: "basketball@komatech.ac.jp",
    achievements: ["関東大学リーグ3位", "全国大会出場経験あり"],
    practiceLevel: "中級〜上級",
    color: "bg-orange-500",
  },
  {
    id: 2,
    name: "茶道部",
    category: "文化系",
    description: "日本の伝統文化である茶道を学び、心を落ち着かせる時間を提供しています。",
    tags: ["茶道", "伝統文化", "和文化", "礼儀作法"],
    memberCount: 12,
    meetingTime: "毎週水曜日 16:00-18:00",
    location: "和室",
    contact: "tea@komatech.ac.jp",
    achievements: ["全国学生茶道大会入賞", "学園祭でのお茶会開催"],
    practiceLevel: "初級〜中級",
    color: "bg-green-500",
  },
  {
    id: 3,
    name: "サッカー部",
    category: "体育会系",
    description: "サッカーを通じてチームワークと技術を磨きます。週3回の練習で着実にスキルアップを目指します。",
    tags: ["サッカー", "チームワーク", "大会参加", "運動"],
    memberCount: 30,
    meetingTime: "毎週月・水・金曜日 17:00-19:00",
    location: "グラウンド",
    contact: "soccer@komatech.ac.jp",
    achievements: ["地区大会優勝", "全国大会出場"],
    practiceLevel: "中級〜上級",
    color: "bg-blue-500",
  },
  {
    id: 4,
    name: "吹奏楽部",
    category: "文化系",
    description: "様々な楽器を演奏し、コンサートや大会に出場しています。音楽を通じて感動を共有しましょう。",
    tags: ["吹奏楽", "音楽", "演奏", "コンサート"],
    memberCount: 35,
    meetingTime: "毎週火・木・土曜日 16:00-19:00",
    location: "音楽棟",
    contact: "band@komatech.ac.jp",
    achievements: ["コンクール金賞", "定期演奏会開催"],
    practiceLevel: "初級〜上級",
    color: "bg-purple-500",
  },
]

const clubCategories = ["全て", "体育会系", "文化系", "学術系"]

export function ClubList() {
  const [selectedCategory, setSelectedCategory] = useState("全て")
  const [favorites, setFavorites] = useState<number[]>([])

  const filteredClubs = sampleClubs.filter((club) => selectedCategory === "全て" || club.category === selectedCategory)

  const toggleFavorite = (clubId: number) => {
    setFavorites((prev) => (prev.includes(clubId) ? prev.filter((id) => id !== clubId) : [...prev, clubId]))
  }

  return (
    <div className="space-y-6">
      {/* Material Design Filter Chips */}
      <div className="flex flex-wrap gap-2">
        {clubCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === category
                ? "bg-purple-800 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Material Design Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClubs.map((club) => (
          <div
            key={club.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            {/* Card Header with Color Accent - すべて紫に統一 */}
            <div className="h-2 bg-purple-800" />

            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{club.name}</h3>
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">
                      {club.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-1" />
                      {club.memberCount}人
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => toggleFavorite(club.id)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  {favorites.includes(club.id) ? (
                    <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                  ) : (
                    <Heart className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{club.description}</p>

              {/* Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  {club.meetingTime}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  {club.location}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Trophy className="w-4 h-4 mr-2" />
                  {club.achievements[0]}
                </div>
              </div>

              {/* Practice Level */}
              <div className="mb-4">
                <span className="text-xs text-gray-500">練習レベル: </span>
                <span className="text-xs font-medium text-gray-700">{club.practiceLevel}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {club.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Button - 紫に変更 */}
              <button className="w-full py-3 bg-purple-800 text-white rounded-xl font-medium hover:bg-purple-900 transition-colors">
                詳細を見る
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
