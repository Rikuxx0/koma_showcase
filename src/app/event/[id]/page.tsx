"use client"

import { useState } from "react"
import { ArrowLeft, Heart, Share2, MapPin, Clock, Users, Mail, Calendar, Star, Ticket, AlertCircle } from "lucide-react"
import Link from "next/link"

// サンプルデータ
const eventData = {
  1: {
    id: 1,
    name: "春季プログラミングコンテスト",
    type: "コンテスト",
    description: "学内最大のプログラミングコンテスト。個人またはチームで参加し、プログラミングスキルを競い合います。",
    fullDescription: `春季プログラミングコンテストは、毎年恒例の学内最大規模のプログラミング競技会です。初心者から上級者まで、すべてのレベルの学生が参加できるよう、複数の部門を設けています。

    イベントの特徴：
    • 個人戦とチーム戦の両方を開催
    • 初心者部門から上級者部門まで幅広いレベルに対応
    • 実際の企業課題をベースにした実践的な問題
    • 豪華賞品と賞金を用意
    • 企業スポンサーによる特別講演
    • ネットワーキングセッション

    このコンテストは、技術力の向上だけでなく、同じ志を持つ仲間との出会いや、企業との接点を作る貴重な機会でもあります。過去の参加者からは「就職活動に大いに役立った」「新しい技術に触れるきっかけになった」といった声をいただいています。`,
    tags: ["コンテスト", "プログラミング", "賞金あり", "初心者歓迎", "チーム戦", "企業連携"],
    date: "2023年5月15日（月）",
    time: "10:00-17:00",
    location: "情報棟大講義室",
    organizer: "情報学部プログラミング研究会",
    contact: "contest@komatech.ac.jp",
    capacity: 100,
    currentParticipants: 67,
    registrationDeadline: "2023年5月10日",
    fee: "無料",
    requirements: ["ノートPC持参必須", "プログラミング基礎知識", "学生証"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    rating: 4.9,
    schedule: [
      { time: "09:30-10:00", activity: "受付・開場" },
      { time: "10:00-10:30", activity: "開会式・ルール説明" },
      { time: "10:30-12:00", activity: "第1ラウンド（個人戦）" },
      { time: "12:00-13:00", activity: "昼食・ネットワーキング" },
      { time: "13:00-15:30", activity: "第2ラウンド（チーム戦）" },
      { time: "15:30-16:00", activity: "企業特別講演" },
      { time: "16:00-17:00", activity: "結果発表・表彰式" },
    ],
    prizes: [
      { rank: "優勝", prize: "賞金10万円 + トロフィー", description: "個人戦・チーム戦それぞれ" },
      { rank: "準優勝", prize: "賞金5万円 + 盾", description: "個人戦・チーム戦それぞれ" },
      { rank: "3位", prize: "賞金3万円 + メダル", description: "個人戦・チーム戦それぞれ" },
      { rank: "特別賞", prize: "企業賞品", description: "最も創意工夫に富んだ解答" },
    ],
    sponsors: ["株式会社テックイノベーション", "AI Solutions Inc.", "クラウドシステムズ"],
    pastEvents: [
      { year: "2022年", participants: 85, winner: "田中チーム" },
      { year: "2021年", participants: 72, winner: "佐藤 太郎" },
      { year: "2020年", participants: 58, winner: "山田チーム" },
    ],
  },
}

interface EventDetailPageProps {
  params: {
    id: string
  }
}

export default function EventDetailPage({ params }: EventDetailPageProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedImage, setSelectedImage] = useState(0)

  const event = eventData[Number.parseInt(params.id) as keyof typeof eventData]

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">イベントが見つかりません</h1>
          <Link href="/" className="text-purple-800 hover:text-purple-900">
            ホームに戻る
          </Link>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: "overview", label: "概要" },
    { id: "schedule", label: "スケジュール" },
    { id: "prizes", label: "賞品・特典" },
    { id: "history", label: "過去の開催" },
  ]

  const participationRate = (event.currentParticipants / event.capacity) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              戻る
            </Link>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <Heart className={`w-5 h-5 ${isFavorite ? "text-red-500 fill-red-500" : "text-gray-400"}`} />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <Share2 className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* メイン情報セクション */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* 画像ギャラリー */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="aspect-video bg-gray-100">
                <image
                  src={event.images[selectedImage] || "/placeholder.svg"}
                  alt={event.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex space-x-2 overflow-x-auto">
                  {event.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
                        selectedImage === index ? "border-purple-800" : "border-gray-200"
                      }`}
                    >
                      <image
                        src={image || "/placeholder.svg"}
                        alt={`${event.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 基本情報 */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium border border-red-200">
                  {event.type}
                </span>
                <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-lg border border-yellow-200">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                  <span className="text-sm font-medium text-yellow-700">{event.rating}</span>
                </div>
              </div>

              <h1 className="text-2xl font-bold text-gray-900 mb-4">{event.name}</h1>
              <p className="text-gray-600 mb-6">{event.description}</p>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-3 text-purple-800" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-3 text-purple-800" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-3 text-purple-800" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-3 text-purple-800" />
                  <span>定員: {event.capacity}人</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Ticket className="w-4 h-4 mr-3 text-purple-800" />
                  <span>参加費: {event.fee}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 mr-3 text-purple-800" />
                  <span>{event.contact}</span>
                </div>
              </div>

              {/* 参加状況 */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">参加申込状況</span>
                  <span className="text-sm text-gray-600">
                    {event.currentParticipants}/{event.capacity}人
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-800 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${participationRate}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">申込締切: {event.registrationDeadline}</p>
              </div>

              {/* 参加条件 */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">参加条件・持参物</h4>
                <ul className="space-y-1">
                  {event.requirements.map((req, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-600">
                      <AlertCircle className="w-3 h-3 mt-1 mr-2 text-orange-500 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <button className="w-full py-3 bg-purple-800 text-white rounded-lg font-medium hover:bg-purple-900 transition-colors duration-200">
                  参加申し込み
                </button>
                <button className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200">
                  詳細問い合わせ
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* タブセクション */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* タブナビゲーション */}
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                    activeTab === tab.id
                      ? "text-purple-800 border-b-2 border-purple-800"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* タブコンテンツ */}
          <div className="p-6">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">イベント詳細</h3>
                  <div className="prose prose-gray max-w-none">
                    {event.fullDescription.split("\n").map((paragraph, index) => (
                      <p key={index} className="text-gray-600 mb-3">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="text-md font-semibold text-blue-900 mb-3">主催者情報</h4>
                  <p className="text-blue-800 text-sm mb-2">主催: {event.organizer}</p>
                  <p className="text-blue-800 text-sm">お問い合わせ: {event.contact}</p>
                </div>

                {event.sponsors.length > 0 && (
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">協賛企業</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {event.sponsors.map((sponsor, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                          <span className="text-sm font-medium text-gray-700">{sponsor}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === "schedule" && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">当日のスケジュール</h3>
                <div className="space-y-4">
                  {event.schedule.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="bg-purple-800 text-white px-3 py-1 rounded-lg text-sm font-medium min-w-fit">
                        {item.time}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{item.activity}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "prizes" && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">賞品・特典</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {event.prizes.map((prize, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200"
                    >
                      <div className="flex items-center mb-3">
                        <Star className="w-6 h-6 text-yellow-500 fill-yellow-500 mr-2" />
                        <h4 className="text-lg font-bold text-gray-900">{prize.rank}</h4>
                      </div>
                      <p className="text-gray-800 font-medium mb-2">{prize.prize}</p>
                      <p className="text-gray-600 text-sm">{prize.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "history" && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">過去の開催実績</h3>
                <div className="space-y-4">
                  {event.pastEvents.map((pastEvent, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-gray-900">{pastEvent.year}</h4>
                          <p className="text-gray-600 text-sm">参加者数: {pastEvent.participants}人</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">優勝者</p>
                          <p className="font-medium text-gray-900">{pastEvent.winner}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
