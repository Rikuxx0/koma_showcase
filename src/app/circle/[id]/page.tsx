"use client"

import { useState } from "react"
import { ArrowLeft, Heart, Share2, MapPin, Clock, Users, Mail, Phone, Calendar, Star } from "lucide-react"
import Link from "next/link"

// サンプルデータ
const circleData = {
  1: {
    id: 1,
    name: "プログラミング研究会",
    category: "技術系",
    description:
      "プログラミングスキルを向上させ、様々なプロジェクトに取り組む研究会です。初心者から上級者まで歓迎しています。Web開発、AI、ゲーム開発など幅広い分野をカバーし、実践的なスキルを身につけることができます。",
    fullDescription: `プログラミング研究会は、2015年に設立された技術系サークルです。現在45名のメンバーが在籍し、初心者から上級者まで幅広いレベルの学生が活動しています。

    主な活動内容：
    • Web開発プロジェクト（React、Next.js、Node.js等）
    • AI・機械学習の研究と実装
    • ゲーム開発（Unity、Unreal Engine）
    • 競技プログラミング
    • ハッカソンへの参加
    • 技術勉強会の開催

    年間を通じて様々なプロジェクトに取り組み、学園祭では自作のWebアプリケーションやゲームを展示しています。また、企業との連携プロジェクトも積極的に行っており、実際のビジネス課題に取り組む機会もあります。`,
    tags: ["プログラミング", "Web開発", "AI", "初心者歓迎", "ハッカソン", "競技プログラミング"],
    memberCount: 45,
    meetingTime: "毎週水曜日 18:00-20:00",
    location: "情報棟3F コンピュータ室",
    contact: "programming@komatech.ac.jp",
    phone: "03-1234-5678",
    president: "田中 太郎（情報学部3年）",
    founded: "2015年",
    website: "https://prog-circle.komatech.ac.jp",
    socialMedia: {
      twitter: "@prog_komatech",
      instagram: "prog_komatech",
      discord: "プログラミング研究会サーバー",
    },
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    rating: 4.8,
    reviews: [
      {
        id: 1,
        author: "山田 花子",
        rating: 5,
        comment: "初心者でも丁寧に教えてもらえて、すぐにプログラミングが楽しくなりました！",
        date: "2023年4月15日",
      },
      {
        id: 2,
        author: "佐藤 次郎",
        rating: 4,
        comment: "ハッカソンに参加できて、実践的なスキルが身につきました。",
        date: "2023年3月20日",
      },
    ],
    upcomingEvents: [
      {
        title: "春の新歓ハッカソン",
        date: "2023年5月20日",
        time: "10:00-18:00",
        location: "情報棟大講義室",
      },
      {
        title: "AI勉強会",
        date: "2023年5月25日",
        time: "18:00-20:00",
        location: "情報棟3F",
      },
    ],
    requirements: ["プログラミング経験は不問", "学習意欲があること", "チームワークを大切にできること"],
    benefits: [
      "最新技術を学べる環境",
      "企業との連携プロジェクト",
      "就職活動でのアピールポイント",
      "同じ興味を持つ仲間との出会い",
    ],
  },
}

interface CircleDetailPageProps {
  params: {
    id: string
  }
}

export default function CircleDetailPage({ params }: CircleDetailPageProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedImage, setSelectedImage] = useState(0)

  const circle = circleData[Number.parseInt(params.id) as keyof typeof circleData]

  if (!circle) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">サークルが見つかりません</h1>
          <Link href="/" className="text-purple-800 hover:text-purple-900">
            ホームに戻る
          </Link>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: "overview", label: "概要" },
    { id: "activities", label: "活動内容" },
    { id: "events", label: "イベント" },
    { id: "reviews", label: "レビュー" },
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
                  src={circle.images[selectedImage] || "/placeholder.svg"}
                  alt={circle.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex space-x-2 overflow-x-auto">
                  {circle.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
                        selectedImage === index ? "border-purple-800" : "border-gray-200"
                      }`}
                    >
                      <image
                        src={image || "/placeholder.svg"}
                        alt={`${circle.name} ${index + 1}`}
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
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200">
                  {circle.category}
                </span>
                <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-lg border border-yellow-200">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                  <span className="text-sm font-medium text-yellow-700">{circle.rating}</span>
                </div>
              </div>

              <h1 className="text-2xl font-bold text-gray-900 mb-4">{circle.name}</h1>
              <p className="text-gray-600 mb-6">{circle.description}</p>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-3 text-purple-800" />
                  <span>メンバー数: {circle.memberCount}人</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-3 text-purple-800" />
                  <span>{circle.meetingTime}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-3 text-purple-800" />
                  <span>{circle.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 mr-3 text-purple-800" />
                  <span>{circle.contact}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="w-4 h-4 mr-3 text-purple-800" />
                  <span>{circle.phone}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {circle.tags.map((tag) => (
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
                  お問い合わせ
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">詳細説明</h3>
                  <div className="prose prose-gray max-w-none">
                    {circle.fullDescription.split("\n").map((paragraph, index) => (
                      <p key={index} className="text-gray-600 mb-3">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">参加条件</h4>
                    <ul className="space-y-2">
                      {circle.requirements.map((req, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <span className="w-2 h-2 bg-purple-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">メリット</h4>
                    <ul className="space-y-2">
                      {circle.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-md font-semibold text-gray-900 mb-3">基本情報</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">代表者:</span>
                      <span className="ml-2 text-gray-900">{circle.president}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">設立年:</span>
                      <span className="ml-2 text-gray-900">{circle.founded}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">ウェブサイト:</span>
                      <a href={circle.website} className="ml-2 text-purple-800 hover:text-purple-900">
                        {circle.website}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "activities" && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">主な活動内容</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">Web開発プロジェクト</h4>
                    <p className="text-blue-800 text-sm">
                      React、Next.js、Node.jsを使用した実践的なWebアプリケーション開発
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-green-900 mb-2">AI・機械学習</h4>
                    <p className="text-green-800 text-sm">Python、TensorFlowを使った機械学習モデルの研究と実装</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">ゲーム開発</h4>
                    <p className="text-purple-800 text-sm">Unity、Unreal Engineを使用したゲーム制作</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <h4 className="font-semibold text-orange-900 mb-2">競技プログラミング</h4>
                    <p className="text-orange-800 text-sm">AtCoder、Codeforcesなどの競技プログラミングへの参加</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "events" && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">今後のイベント</h3>
                <div className="space-y-4">
                  {circle.upcomingEvents.map((event, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{event.title}</h4>
                          <div className="space-y-1 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2" />
                              {event.date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-2" />
                              {event.time}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2" />
                              {event.location}
                            </div>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-purple-800 text-white rounded-lg text-sm font-medium hover:bg-purple-900 transition-colors duration-200">
                          参加申込
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">メンバーレビュー</h3>
                  <button className="px-4 py-2 bg-purple-800 text-white rounded-lg text-sm font-medium hover:bg-purple-900 transition-colors duration-200">
                    レビューを書く
                  </button>
                </div>
                <div className="space-y-4">
                  {circle.reviews.map((review) => (
                    <div key={review.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center mb-1">
                            <span className="font-medium text-gray-900 mr-2">{review.author}</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
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
