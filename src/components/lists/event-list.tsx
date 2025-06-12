"use client"

import { useState } from "react"
import { Clock, MapPin, Calendar, Users } from "lucide-react"
import Link from "next/link"

// サンプルデータ
const sampleEvents = [
  {
    id: 1,
    name: "春季プログラミングコンテスト",
    type: "コンテスト",
    description: "学内最大のプログラミングコンテスト。個人またはチームで参加し、プログラミングスキルを競い合います。",
    tags: ["コンテスト", "プログラミング", "賞金あり", "初心者歓迎"],
    date: "2023年5月15日",
    time: "10:00-17:00",
    location: "情報棟大講義室",
    organizer: "情報学部",
    contact: "contest@komatech.ac.jp",
    capacity: 100,
    registration: true,
    color: "bg-green-500",
  },
  {
    id: 2,
    name: "就活対策セミナー",
    type: "セミナー",
    description: "就職活動に向けた実践的なセミナー。エントリーシートの書き方から面接対策まで幅広くカバーします。",
    tags: ["就活", "キャリア", "セミナー", "実践"],
    date: "2023年5月20日",
    time: "13:00-16:00",
    location: "キャリアセンター",
    organizer: "キャリアセンター",
    contact: "career@komatech.ac.jp",
    capacity: 50,
    registration: true,
    color: "bg-blue-500",
  },
  {
    id: 3,
    name: "学園祭実行委員会説明会",
    type: "説明会",
    description:
      "今年の学園祭の企画・運営に携わる実行委員の説明会。様々な役割があり、あなたの力を活かせる場所があります。",
    tags: ["学園祭", "ボランティア", "運営", "説明会"],
    date: "2023年5月10日",
    time: "16:30-18:00",
    location: "学生会館大ホール",
    organizer: "学生自治会",
    contact: "festival@komatech.ac.jp",
    capacity: 200,
    registration: false,
    color: "bg-pink-500",
  },
  {
    id: 4,
    name: "留学体験報告会",
    type: "報告会",
    description:
      "海外留学を経験した先輩たちによる体験報告会。留学先での学びや生活、準備のアドバイスなどを聞くことができます。",
    tags: ["留学", "国際交流", "体験談", "Q&A"],
    date: "2023年5月25日",
    time: "15:00-17:00",
    location: "国際交流センター",
    organizer: "国際交流センター",
    contact: "international@komatech.ac.jp",
    capacity: 40,
    registration: true,
    color: "bg-purple-500",
  },
]

const eventTypes = ["全て", "コンテスト", "セミナー", "説明会", "報告会", "ワークショップ", "その他"]

export function EventList() {
  const [selectedType, setSelectedType] = useState("全て")
  
  const filteredEvents = sampleEvents.filter((event) => selectedType === "全て" || event.type === selectedType)



  return (
    <div className="space-y-6">
      {/* Material Design Filter Chips */}
      <div className="flex flex-wrap gap-2">
        {eventTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedType === type
                ? "bg-purple-800 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Material Design Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            {/* Card Header with Color Accent - すべて紫に統一 */}
            <div className="h-2 bg-purple-800" />

            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                      {event.type}
                    </span>
                    {event.registration ? (
                      <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                        要申込
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        申込不要
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>

              {/* Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  {event.date}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  {event.time}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  {event.location}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-2" />
                  定員: {event.capacity}人
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {event.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons - 紫に変更 */}
                <Link href={`/event/${event.id}`}>
                  <button className="w-full py-3 bg-purple-800 text-white rounded-xl font-medium hover:bg-purple-900 transition-colors">
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
