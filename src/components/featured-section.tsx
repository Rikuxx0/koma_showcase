"use client"

import type React from "react"
import { useState } from "react"
import { Clock, MapPin, Users, Calendar, Star } from "lucide-react"

export function FeaturedSection() {
  const [activeTab, setActiveTab] = useState<FeaturedCardCategory>("popular")

  const tabs: { id: FeaturedCardCategory; label: string }[] = [
    { id: "popular", label: "人気" },
    { id: "new", label: "新着" },
    { id: "upcoming", label: "近日開催" },
  ]

  //仮データ
  type FeaturedCardCategory = "popular" | "new" | "upcoming";
  
  //FeaturedCardCategoryの型定義はProps吐き出しの関係上、FeaturedSection()の下に記入
  type FeaturedCardDataMap = {
    popular: FeaturedCardProps[];
    new: FeaturedCardProps[];
    upcoming: FeaturedCardProps[];
  };



  //　人気・新着・近日開催のデータ
  const featuredCardData: FeaturedCardDataMap = {
  popular: [
    {
      title: "プログラミング研究会",
      category: "サークル",
      description: "プログラミングスキルを向上させ、様々なプロジェクトに取り組む研究会です。初心者から上級者まで歓迎！",
      tags: ["プログラミング", "Web開発", "AI"],
      info: [
        { icon: <Users className="h-4 w-4" />, text: "45人" },
        { icon: <Clock className="h-4 w-4" />, text: "毎週水曜日 18:00-20:00" },
        { icon: <MapPin className="h-4 w-4" />, text: "情報棟3F" },
      ],
      rating: 4.8,
      color: "bg-blue-100",
      borderColor: "border-blue-200",
    },
    {
      title: "メディア情報学ゼミ",
      category: "ゼミ",
      description: "最新のメディア技術と情報学の研究を行うゼミです。実践的なプロジェクトを通じて専門知識を深めます。",
      tags: ["メディア", "情報学", "研究"],
      info: [
        { icon: <Users className="h-4 w-4" />, text: "12人" },
        { icon: <Clock className="h-4 w-4" />, text: "火曜日 3-4限" },
        { icon: <MapPin className="h-4 w-4" />, text: "メディア棟2F" },
      ],
      rating: 4.5,
      color: "bg-purple-100",
      borderColor: "border-purple-200",
    },
    {
      title: "春季プログラミングコンテスト",
      category: "イベント",
      description: "学内最大のプログラミングコンテスト。個人またはチームで参加し、プログラミングスキルを競い合います。",
      tags: ["コンテスト", "プログラミング", "賞金あり"],
      info: [
        { icon: <Calendar className="h-4 w-4" />, text: "2023年5月15日" },
        { icon: <Clock className="h-4 w-4" />, text: "10:00-17:00" },
        { icon: <MapPin className="h-4 w-4" />, text: "情報棟大講義室" },
      ],
      rating: 4.9,
      color: "bg-green-100",
      borderColor: "border-green-200",
    },
  ],
  new: [
    {
      title: "データサイエンス研究会",
      category: "サークル",
      description: "データ分析と機械学習を学ぶ新設サークル。実データを用いた分析プロジェクトに取り組みます。",
      tags: ["データ分析", "機械学習", "Python"],
      info: [
        { icon: <Users className="h-4 w-4" />, text: "15人" },
        { icon: <Clock className="h-4 w-4" />, text: "毎週金曜日 17:00-19:00" },
        { icon: <MapPin className="h-4 w-4" />, text: "情報棟2F" },
      ],
      rating: 4.2,
      color: "bg-orange-100",
      borderColor: "border-orange-200",
      isNew: true,
    },
    {
      title: "AIと社会ゼミ",
      category: "ゼミ",
      description: "AIの社会的影響と倫理的課題について研究する新設ゼミ。技術と社会の関係性を多角的に考察します。",
      tags: ["AI", "倫理", "社会学"],
      info: [
        { icon: <Users className="h-4 w-4" />, text: "8人" },
        { icon: <Clock className="h-4 w-4" />, text: "木曜日 3-4限" },
        { icon: <MapPin className="h-4 w-4" />, text: "人文棟3F" },
      ],
      rating: 4.0,
      color: "bg-red-100",
      borderColor: "border-red-200",
      isNew: true,
    },
    {
      title: "メディアラボ",
      category: "施設",
      description: "最新の映像・音響機材を備えた新設メディア制作施設。学生のクリエイティブな活動をサポートします。",
      tags: ["映像制作", "音響", "編集"],
      info: [
        { icon: <Clock className="h-4 w-4" />, text: "平日 9:00-20:00" },
        { icon: <MapPin className="h-4 w-4" />, text: "メディア棟1F" },
        { icon: <Users className="h-4 w-4" />, text: "最大収容20人" },
      ],
      rating: 4.7,
      color: "bg-indigo-100",
      borderColor: "border-indigo-200",
      isNew: true,
    },
  ],
  upcoming: [
    {
      title: "学園祭実行委員会説明会",
      category: "イベント",
      description: "今年の学園祭の企画・運営に携わる実行委員の説明会。様々な役割があり、あなたの力を活かせる場所があります。",
      tags: ["学園祭", "ボランティア", "運営"],
      info: [
        { icon: <Calendar className="h-4 w-4" />, text: "2023年5月10日" },
        { icon: <Clock className="h-4 w-4" />, text: "16:30-18:00" },
        { icon: <MapPin className="h-4 w-4" />, text: "学生会館大ホール" },
      ],
      rating: 4.3,
      color: "bg-pink-100",
      borderColor: "border-pink-200",
    },
    {
      title: "就活対策セミナー",
      category: "イベント",
      description: "就職活動に向けた実践的なセミナー。エントリーシートの書き方から面接対策まで幅広くカバーします。",
      tags: ["就活", "キャリア", "セミナー"],
      info: [
        { icon: <Calendar className="h-4 w-4" />, text: "2023年5月20日" },
        { icon: <Clock className="h-4 w-4" />, text: "13:00-16:00" },
        { icon: <MapPin className="h-4 w-4" />, text: "キャリアセンター" },
      ],
      rating: 4.6,
      color: "bg-teal-100",
      borderColor: "border-teal-200",
    },
    {
      title: "オープンキャンパスボランティア募集",
      category: "イベント",
      description: "オープンキャンパスの運営をサポートするボランティアを募集しています。高校生に大学の魅力を伝える貴重な機会です。",
      tags: ["ボランティア", "オープンキャンパス", "広報"],
      info: [
        { icon: <Calendar className="h-4 w-4" />, text: "2023年6月10日" },
        { icon: <Clock className="h-4 w-4" />, text: "9:00-17:00" },
        { icon: <MapPin className="h-4 w-4" />, text: "大学本部" },
      ],
      rating: 4.4,
      color: "bg-cyan-100",
      borderColor: "border-cyan-200",
    },
  ],
};



  // データベースが存在するため、データの統一化が必要
  return (
    <div className="space-y-6">
      {/* セクションヘッダー */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">おすすめ情報</h2>

        {/* タブ */}
        <div className="flex bg-gray-100 rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id ? "bg-white text-purple-800 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* フィーチャードカード */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredCardData[activeTab]?.map((card, index) => (
          <FeaturedCard key={index} {...card} />
        ))}
      </div>
    </div>
  )
}

interface FeaturedCardProps {
    title: string
    category: string
    description: string
    tags: string[]
    info: { icon: React.ReactNode; text: string }[]
    rating: number
    color: string
    borderColor: string
    isNew?: boolean
  }

function FeaturedCard({
  title,
  category,
  description,
  tags,
  info,
  rating,
  color,
  borderColor,
  isNew,
}: FeaturedCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
      {/* カラーアクセント */}
      <div className={`h-3 ${color}`} />

      <div className="p-6">
        {/* ヘッダー */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
            <div className="flex items-center space-x-2">
              <span className={`px-3 py-1 ${color} ${borderColor} border rounded-full text-xs font-medium`}>
                {category}
              </span>
              {isNew && (
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium border border-green-200">
                  NEW
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-lg border border-yellow-200">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
            <span className="text-sm font-medium text-yellow-700">{rating}</span>
          </div>
        </div>

        {/* 説明 */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

        {/* 詳細情報 */}
        <div className="space-y-2 mb-4">
          {info.map((item, index) => (
            <div key={index} className="flex items-center text-sm text-gray-500">
              <span className="text-purple-800 mr-2">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* タグ */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md border border-gray-200">
              {tag}
            </span>
          ))}
        </div>

        {/* アクションボタン */}
        <button className="w-full py-3 bg-purple-800 text-white rounded-lg font-medium hover:bg-purple-900 transition-colors duration-200">
          詳細を見る
        </button>
      </div>
    </div>
  )
}
