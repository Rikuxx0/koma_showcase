"use client"

import { useState } from "react"
import {
  ArrowLeft,
  Heart,
  Share2,
  MapPin,
  Clock,
  Users,
  Mail,
  Wrench,
  Star,
  Calendar,
  Wifi,
  Monitor,
  Coffee,
} from "lucide-react"
import Link from "next/link"

// サンプルデータ
const facilityData = {
  1: {
    id: 1,
    name: "メディアラボ",
    type: "実習施設",
    description: "最新の映像・音響機材を備えたメディア制作施設。学生のクリエイティブな活動をサポートします。",
    fullDescription: `メディアラボは2022年に新設された最新鋭のメディア制作施設です。プロフェッショナルレベルの機材を完備し、学生の創造的な活動を全面的にサポートしています。

    施設の特徴：
    • 4K対応の撮影機材とスタジオ設備
    • プロ仕様の音響録音・編集機材
    • 最新のPC・ソフトウェア環境
    • グリーンスクリーンスタジオ
    • 防音完備の録音ブース
    • 24時間利用可能（要予約）

    この施設では、映像制作、音楽制作、ポッドキャスト収録、ライブ配信など、様々なメディアコンテンツの制作が可能です。専門スタッフによる機材の使用指導も行っており、初心者でも安心して利用できます。`,
    tags: ["映像制作", "音響", "編集", "機材貸出", "スタジオ", "24時間利用"],
    capacity: 20,
    openingHours: "24時間（要予約）",
    location: "メディア棟1F",
    contact: "medialab@komatech.ac.jp",
    phone: "03-1234-5679",
    manager: "佐藤 美咲（メディア学部准教授）",
    reservationRequired: true,
    fee: "学生無料（一般利用者は有料）",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    rating: 4.7,
    equipment: [
      {
        category: "撮影機材",
        items: [
          "4Kビデオカメラ × 5台",
          "一眼レフカメラ × 8台",
          "ドローン × 2台",
          "三脚・ジンバル各種",
          "照明機材セット",
        ],
      },
      {
        category: "音響機材",
        items: [
          "プロ仕様ミキサー",
          "コンデンサーマイク × 10本",
          "ワイヤレスマイク × 6セット",
          "モニタースピーカー",
          "ヘッドフォン各種",
        ],
      },
      {
        category: "編集環境",
        items: ["Mac Studio × 10台", "4K対応モニター × 20台", "Adobe Creative Suite", "Final Cut Pro", "Logic Pro"],
      },
      {
        category: "スタジオ設備",
        items: [
          "グリーンスクリーン",
          "防音録音ブース × 3室",
          "ライブ配信セット",
          "プロジェクター × 2台",
          "ホワイトボード",
        ],
      },
    ],
    amenities: [
      { icon: <Wifi className="w-5 h-5" />, name: "高速Wi-Fi", description: "1Gbps対応" },
      { icon: <Monitor className="w-5 h-5" />, name: "大型モニター", description: "65インチ × 2台" },
      { icon: <Coffee className="w-5 h-5" />, name: "ドリンクサーバー", description: "コーヒー・お茶無料" },
      { icon: <Users className="w-5 h-5" />, name: "ミーティングスペース", description: "6人用 × 2室" },
    ],
    rules: [
      "利用前に必ず予約を取ること",
      "機材の使用前に講習を受けること",
      "利用後は清掃・片付けを行うこと",
      "機材の破損・紛失は弁償の対象",
      "商用利用は事前申請が必要",
      "深夜利用時は静粛を保つこと",
    ],
    reservationInfo: {
      method: "オンライン予約システム",
      advance: "最大2週間前から予約可能",
      duration: "最大8時間まで連続利用可能",
      cancellation: "利用日前日まで可能",
    },
    workshops: [
      {
        title: "映像制作基礎講座",
        date: "毎月第2土曜日",
        time: "13:00-17:00",
        instructor: "田中 映像（映像制作会社代表）",
      },
      {
        title: "音響録音・編集ワークショップ",
        date: "毎月第4土曜日",
        time: "10:00-15:00",
        instructor: "山田 音響（レコーディングエンジニア）",
      },
    ],
    usageStats: [
      { month: "4月", users: 156, hours: 892 },
      { month: "3月", users: 142, hours: 756 },
      { month: "2月", users: 128, hours: 634 },
    ],
  },
}

interface FacilityDetailPageProps {
  params: {
    id: string
  }
}

export default function FacilityDetailPage({ params }: FacilityDetailPageProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedImage, setSelectedImage] = useState(0)

  const facility = facilityData[Number.parseInt(params.id) as keyof typeof facilityData]

  if (!facility) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">施設が見つかりません</h1>
          <Link href="/" className="text-purple-800 hover:text-purple-900">
            ホームに戻る
          </Link>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: "overview", label: "概要" },
    { id: "equipment", label: "設備・機材" },
    { id: "reservation", label: "予約・利用" },
    { id: "workshops", label: "講座・イベント" },
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
                  src={facility.images[selectedImage] || "/placeholder.svg"}
                  alt={facility.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex space-x-2 overflow-x-auto">
                  {facility.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
                        selectedImage === index ? "border-purple-800" : "border-gray-200"
                      }`}
                    >
                      <image
                        src={image || "/placeholder.svg"}
                        alt={`${facility.name} ${index + 1}`}
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
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium border border-orange-200">
                  {facility.type}
                </span>
                <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-lg border border-yellow-200">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                  <span className="text-sm font-medium text-yellow-700">{facility.rating}</span>
                </div>
              </div>

              <h1 className="text-2xl font-bold text-gray-900 mb-4">{facility.name}</h1>
              <p className="text-gray-600 mb-6">{facility.description}</p>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-3 text-purple-800" />
                  <span>最大収容: {facility.capacity}人</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-3 text-purple-800" />
                  <span>{facility.openingHours}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-3 text-purple-800" />
                  <span>{facility.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 mr-3 text-purple-800" />
                  <span>{facility.contact}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">予約</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      facility.reservationRequired
                        ? "bg-red-100 text-red-800 border border-red-200"
                        : "bg-green-100 text-green-800 border border-green-200"
                    }`}
                  >
                    {facility.reservationRequired ? "要予約" : "予約不要"}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">利用料金:</span> {facility.fee}
                </div>
              </div>

              {/* アメニティ */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">設備・アメニティ</h4>
                <div className="grid grid-cols-2 gap-3">
                  {facility.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center text-xs text-gray-600">
                      <span className="text-purple-800 mr-2">{amenity.icon}</span>
                      <div>
                        <div className="font-medium">{amenity.name}</div>
                        <div className="text-gray-500">{amenity.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {facility.tags.map((tag) => (
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
                  予約する
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">施設詳細</h3>
                  <div className="prose prose-gray max-w-none">
                    {facility.fullDescription.split("\n").map((paragraph, index) => (
                      <p key={index} className="text-gray-600 mb-3">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="text-md font-semibold text-blue-900 mb-3">管理者情報</h4>
                  <p className="text-blue-800 text-sm">施設管理者: {facility.manager}</p>
                </div>

                <div>
                  <h4 className="text-md font-semibold text-gray-900 mb-3">利用規則</h4>
                  <ul className="space-y-2">
                    {facility.rules.map((rule, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "equipment" && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">利用可能機材・設備</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {facility.equipment.map((category, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Wrench className="w-4 h-4 mr-2 text-purple-800" />
                        {category.category}
                      </h4>
                      <ul className="space-y-1">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-sm text-gray-600">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "reservation" && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">予約・利用方法</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-3">予約方法</h4>
                    <div className="space-y-2 text-sm text-purple-800">
                      <div>
                        <span className="font-medium">予約システム:</span> {facility.reservationInfo.method}
                      </div>
                      <div>
                        <span className="font-medium">予約可能期間:</span> {facility.reservationInfo.advance}
                      </div>
                      <div>
                        <span className="font-medium">利用時間:</span> {facility.reservationInfo.duration}
                      </div>
                      <div>
                        <span className="font-medium">キャンセル:</span> {facility.reservationInfo.cancellation}
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-green-900 mb-3">利用統計</h4>
                    <div className="space-y-3">
                      {facility.usageStats.map((stat, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <span className="text-green-800">{stat.month}</span>
                          <div className="text-green-700">
                            <span className="font-medium">{stat.users}人</span>
                            <span className="mx-2">•</span>
                            <span>{stat.hours}時間</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <h4 className="font-semibold text-yellow-900 mb-2">注意事項</h4>
                  <p className="text-yellow-800 text-sm">
                    初回利用時は機材講習の受講が必要です。講習は毎週火曜日・金曜日の16:00から実施しています。
                  </p>
                </div>
              </div>
            )}

            {activeTab === "workshops" && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">定期講座・ワークショップ</h3>
                <div className="space-y-4">
                  {facility.workshops.map((workshop, index) => (
                    <div key={index} className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
                      <h4 className="font-semibold text-indigo-900 mb-3">{workshop.title}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-indigo-800">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {workshop.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {workshop.time}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {workshop.instructor}
                        </div>
                      </div>
                      <div className="mt-4">
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors duration-200">
                          申し込む
                        </button>
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
