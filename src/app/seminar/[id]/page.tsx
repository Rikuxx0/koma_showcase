"use client"

import { useState } from "react"
import { ArrowLeft, Heart, Share2, MapPin, Clock, Users, Mail, GraduationCap, Star, BookOpen } from "lucide-react"
import Link from "next/link"

// サンプルデータ
const seminarData = {
  1: {
    id: 1,
    name: "メディア情報学ゼミ",
    faculty: "情報学部",
    professor: "山田 太郎",
    professorTitle: "教授",
    description: "最新のメディア技術と情報学の研究を行うゼミです。実践的なプロジェクトを通じて専門知識を深めます。",
    fullDescription: `メディア情報学ゼミでは、急速に発展するメディア技術と情報学の最新動向を研究しています。理論と実践のバランスを重視し、学生が主体的に研究テーマを選択し、深く探求することを目指しています。

    研究分野：
    • メディアデザインとユーザーエクスペリエンス
    • 情報可視化とデータサイエンス
    • ヒューマンコンピュータインタラクション
    • バーチャルリアリティとAR技術
    • ソーシャルメディア分析

    ゼミでは毎週の研究発表、論文輪読、プロジェクト実習を通じて、研究スキルとプレゼンテーション能力を向上させます。また、学会発表や企業との共同研究にも積極的に取り組んでいます。`,
    tags: ["メディア", "情報学", "研究", "プロジェクト", "UI/UX", "データサイエンス"],
    studentCount: 12,
    schedule: "火曜日 3-4限（13:00-16:10）",
    location: "メディア棟2F ゼミ室A",
    contact: "yamada@komatech.ac.jp",
    researchAreas: ["メディアデザイン", "情報可視化", "ユーザーインターフェース", "VR/AR技術"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    rating: 4.5,
    syllabus: {
      objectives: [
        "メディア技術の理論的基礎を理解する",
        "実践的なプロジェクトを通じて応用力を身につける",
        "研究発表とディスカッション能力を向上させる",
        "最新の技術動向を把握し、批判的に評価する能力を養う",
      ],
      schedule: [
        { week: "1-2週", content: "ゼミ概要とメンバー紹介、研究テーマ設定" },
        { week: "3-6週", content: "文献調査と先行研究の理解" },
        { week: "7-10週", content: "研究計画の立案と中間発表" },
        { week: "11-14週", content: "プロジェクト実装と実験" },
        { week: "15週", content: "最終発表と成果報告" },
      ],
      evaluation: [
        { item: "研究発表", weight: "40%" },
        { item: "プロジェクト成果", weight: "30%" },
        { item: "ディスカッション参加", weight: "20%" },
        { item: "レポート", weight: "10%" },
      ],
    },
    requirements: ["情報学部3年生以上", "プログラミング基礎知識", "研究への強い意欲", "チームワークを重視する姿勢"],
    recentProjects: [
      {
        title: "VRを活用した教育コンテンツの開発",
        student: "田中 花子",
        year: "2023年",
        description: "バーチャルリアリティ技術を用いた効果的な学習環境の構築",
      },
      {
        title: "SNSデータを用いた感情分析システム",
        student: "佐藤 太郎",
        year: "2023年",
        description: "機械学習を活用したソーシャルメディアの感情分析",
      },
    ],
  },
}

interface SeminarDetailPageProps {
  params: {
    id: string
  }
}

export default function SeminarDetailPage({ params }: SeminarDetailPageProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedImage, setSelectedImage] = useState(0)

  const seminar = seminarData[Number.parseInt(params.id) as keyof typeof seminarData]

  if (!seminar) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">ゼミが見つかりません</h1>
          <Link href="/" className="text-purple-600 hover:text-purple-700">
            ホームに戻る
          </Link>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: "overview", label: "概要" },
    { id: "syllabus", label: "シラバス" },
    { id: "projects", label: "研究事例" },
    { id: "professor", label: "教員情報" },
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
                  src={seminar.images[selectedImage] || "/placeholder.svg"}
                  alt={seminar.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex space-x-2 overflow-x-auto">
                  {seminar.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
                        selectedImage === index ? "border-purple-500" : "border-gray-200"
                      }`}
                    >
                      <image
                        src={image || "/placeholder.svg"}
                        alt={`${seminar.name} ${index + 1}`}
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
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium border border-purple-200">
                  {seminar.faculty}
                </span>
                <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-lg border border-yellow-200">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                  <span className="text-sm font-medium text-yellow-700">{seminar.rating}</span>
                </div>
              </div>

              <h1 className="text-2xl font-bold text-gray-900 mb-4">{seminar.name}</h1>
              <p className="text-gray-600 mb-6">{seminar.description}</p>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <GraduationCap className="w-4 h-4 mr-3 text-purple-500" />
                  <span>
                    {seminar.professor} {seminar.professorTitle}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-3 text-purple-500" />
                  <span>履修者数: {seminar.studentCount}人</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-3 text-purple-500" />
                  <span>{seminar.schedule}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-3 text-purple-500" />
                  <span>{seminar.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 mr-3 text-purple-500" />
                  <span>{seminar.contact}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">研究分野</h4>
                <div className="flex flex-wrap gap-2">
                  {seminar.researchAreas.map((area) => (
                    <span
                      key={area}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md border border-gray-200"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <button className="w-full py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200">
                  履修申請
                </button>
                <button className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200">
                  教員に問い合わせ
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
                      ? "text-purple-600 border-b-2 border-purple-600"
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">ゼミ詳細</h3>
                  <div className="prose prose-gray max-w-none">
                    {seminar.fullDescription.split("\n").map((paragraph, index) => (
                      <p key={index} className="text-gray-600 mb-3">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-md font-semibold text-gray-900 mb-3">履修条件</h4>
                  <ul className="space-y-2">
                    {seminar.requirements.map((req, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "syllabus" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">学習目標</h3>
                  <ul className="space-y-2">
                    {seminar.syllabus.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <BookOpen className="w-4 h-4 mt-0.5 mr-3 text-purple-500 flex-shrink-0" />
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">授業スケジュール</h3>
                  <div className="space-y-3">
                    {seminar.syllabus.schedule.map((item, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <div className="font-medium text-gray-900 mb-1">{item.week}</div>
                        <div className="text-sm text-gray-600">{item.content}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">評価方法</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {seminar.syllabus.evaluation.map((item, index) => (
                      <div key={index} className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-purple-900">{item.item}</span>
                          <span className="text-purple-700 font-bold">{item.weight}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "projects" && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">最近の研究事例</h3>
                <div className="space-y-4">
                  {seminar.recentProjects.map((project, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold text-gray-900 text-lg">{project.title}</h4>
                        <span className="text-sm text-gray-500 bg-white px-2 py-1 rounded">{project.year}</span>
                      </div>
                      <p className="text-gray-600 mb-3">{project.description}</p>
                      <div className="text-sm text-gray-500">研究者: {project.student}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "professor" && (
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">担当教員</h3>
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 bg-gray-300 rounded-full flex-shrink-0"></div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">
                        {seminar.professor} {seminar.professorTitle}
                      </h4>
                      <p className="text-gray-600 mb-3">{seminar.faculty}</p>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
                          {seminar.contact}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
