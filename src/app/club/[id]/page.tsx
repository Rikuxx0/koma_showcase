"use client"

import { useState } from "react"
import { ArrowLeft, Heart, Share2, MapPin, Clock, Users, Mail, Trophy, Star, Calendar, Target } from "lucide-react"
import Link from "next/link"

// サンプルデータ
const clubData = {
  1: {
    id: 1,
    name: "バスケットボール部",
    category: "体育会系",
    description: "バスケットボールを通じて体力向上と仲間づくりを行っています。初心者も大歓迎です。",
    fullDescription: `バスケットボール部は1985年に創部された歴史ある体育会系部活動です。現在24名のメンバーが在籍し、週3回の練習を通じて技術向上と体力づくりに励んでいます。

    部活動の特徴：
    • 初心者から経験者まで幅広いレベルに対応
    • 個人技術とチーム戦術の両方を重視した指導
    • 関東大学リーグ戦への参加
    • 年2回の合宿による集中練習
    • OB・OGとの交流イベント
    • 地域の中学・高校との交流試合

    私たちは「努力・協調・向上心」をモットーに、バスケットボールを通じて人間的な成長も目指しています。部員同士の絆は非常に強く、卒業後も続く生涯の友人関係を築くことができます。`,
    tags: ["バスケットボール", "スポーツ", "初心者歓迎", "体力向上", "チームワーク", "大会参加"],
    memberCount: 24,
    meetingTime: "毎週火・木・土曜日 19:00-21:00",
    location: "第1体育館",
    contact: "basketball@komatech.ac.jp",
    coach: "鈴木 一郎（元実業団選手）",
    captain: "田中 太郎（経営学部3年）",
    founded: "1985年",
    practiceLevel: "初級〜上級",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    rating: 4.6,
    achievements: [
      { year: "2023年", tournament: "関東大学リーグ", result: "3位" },
      { year: "2022年", tournament: "全国大学選手権", result: "ベスト16" },
      { year: "2021年", tournament: "関東大学リーグ", result: "優勝" },
      { year: "2020年", tournament: "新人戦", result: "準優勝" },
    ],
    weeklySchedule: [
      { day: "月曜日", activity: "休み" },
      { day: "火曜日", activity: "基礎練習・シューティング（19:00-21:00）" },
      { day: "水曜日", activity: "休み" },
      { day: "木曜日", activity: "戦術練習・ゲーム形式（19:00-21:00）" },
      { day: "金曜日", activity: "休み" },
      { day: "土曜日", activity: "総合練習・体力トレーニング（14:00-17:00）" },
      { day: "日曜日", activity: "試合または休み" },
    ],
    upcomingMatches: [
      {
        date: "2023年5月20日",
        opponent: "東京工科大学",
        venue: "東京工科大学体育館",
        type: "練習試合",
      },
      {
        date: "2023年5月27日",
        opponent: "関東学院大学",
        venue: "第1体育館",
        type: "リーグ戦",
      },
    ],
    requirements: [
      "週3回の練習に参加できること",
      "チームワークを重視できること",
      "向上心を持って取り組めること",
      "健康状態が良好であること",
    ],
    benefits: [
      "体力・技術の向上",
      "チームワークとリーダーシップの習得",
      "生涯の友人関係",
      "大会出場の経験",
      "OB・OGネットワーク",
    ],
    expenses: [
      { item: "部費", amount: "月額 3,000円" },
      { item: "ユニフォーム", amount: "15,000円（入部時）" },
      { item: "合宿費", amount: "年2回 各20,000円" },
      { item: "遠征費", amount: "実費" },
    ],
  },
}

interface ClubDetailPageProps {
  params: {
    id: string
  }
}

export default function ClubDetailPage({ params }: ClubDetailPageProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedImage, setSelectedImage] = useState(0)

  const club = clubData[Number.parseInt(params.id) as keyof typeof clubData]

  if (!club) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">部活動が見つかりません</h1>
          <Link href="/" className="text-purple-800 hover:text-purple-900">
            ホームに戻る
          </Link>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: "overview", label: "概要" },
    { id: "schedule", label: "練習スケジュール" },
    { id: "achievements", label: "実績・試合" },
    { id: "expenses", label: "費用・条件" },
  ]

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
                  src={club.images[selectedImage] || "/placeholder.svg"}
                  alt={club.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex space-x-2 overflow-x-auto">
                  {club.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
                        selectedImage === index ? "border-purple-800" : "border-gray-200"
                      }`}
                    >
                      <image
                        src={image || "/placeholder.svg"}
                        alt={`${club.name} ${index + 1}`}
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
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium border border-indigo-200">
                  {club.category}
                </span>
                <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-lg border border-yellow-200">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                  <span className="text-sm font-medium text-yellow-700">{club.rating}</span>
                </div>
              </div>

              <h1 className="text-2xl font-bold text-gray-900 mb-4">{club.name}</h1>
              <p className="text-gray-600 mb-6">{club.description}</p>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-3 text-purple-800" />
                  <span>部員数: {club.memberCount}人</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-3 text-purple-800" />
                  <span>{club.meetingTime}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-3 text-purple-800" />
                  <span>{club.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 mr-3 text-purple-800" />
                  <span>{club.contact}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Target className="w-4 h-4 mr-3 text-purple-800" />
                  <span>レベル: {club.practiceLevel}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">指導体制</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">監督・コーチ:</span> {club.coach}
                  </div>
                  <div>
                    <span className="font-medium">主将:</span> {club.captain}
                  </div>
                  <div>
                    <span className="font-medium">創部:</span> {club.founded}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {club.tags.map((tag) => (
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
                  入部申し込み
                </button>
                <button className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200">
                  見学申し込み
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">部活動詳細</h3>
                  <div className="prose prose-gray max-w-none">
                    {club.fullDescription.split("\n").map((paragraph, index) => (
                      <p key={index} className="text-gray-600 mb-3">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">入部条件</h4>
                    <ul className="space-y-2">
                      {club.requirements.map((req, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <span className="w-2 h-2 bg-purple-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">得られるもの</h4>
                    <ul className="space-y-2">
                      {club.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "schedule" && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">週間練習スケジュール</h3>
                <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                  {club.weeklySchedule.map((schedule, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">{schedule.day}</h4>
                      <p className="text-sm text-gray-600">{schedule.activity}</p>
                    </div>
                  ))}
                </div>

                {club.upcomingMatches.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">今後の試合予定</h3>
                    <div className="space-y-4">
                      {club.upcomingMatches.map((match, index) => (
                        <div key={index} className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold text-blue-900 mb-1">vs {match.opponent}</h4>
                              <div className="space-y-1 text-sm text-blue-800">
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-2" />
                                  {match.date}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-2" />
                                  {match.venue}
                                </div>
                              </div>
                            </div>
                            <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded text-xs font-medium">
                              {match.type}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === "achievements" && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">主な実績</h3>
                <div className="space-y-4">
                  {club.achievements.map((achievement, index) => (
                    <div key={index} className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-yellow-900">{achievement.tournament}</h4>
                          <p className="text-yellow-800 text-sm">{achievement.year}</p>
                        </div>
                        <div className="flex items-center">
                          <Trophy className="w-5 h-5 text-yellow-600 mr-2" />
                          <span className="font-bold text-yellow-900">{achievement.result}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "expenses" && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">必要費用</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {club.expenses.map((expense, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">{expense.item}</span>
                        <span className="text-gray-700 font-semibold">{expense.amount}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <p className="text-blue-800 text-sm">
                    ※ 費用は年度により変動する場合があります。詳細は部活動までお問い合わせください。
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
