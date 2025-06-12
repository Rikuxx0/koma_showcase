"use client"

import { ArrowLeft, Users, Search, Calendar, Mail, Phone, Award, Target, Heart } from "lucide-react"
import Link from "next/link"

export default function About() {
  const features = [
    {
      icon: <Search className="w-8 h-8 text-purple-800" />,
      title: "簡単検索",
      description: "キーワードやカテゴリから、あなたにぴったりの活動を素早く見つけられます。",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "豊富な情報",
      description: "サークル、ゼミ、施設、イベントなど、大学生活に関するあらゆる情報を網羅。",
    },
    {
      icon: <Calendar className="w-8 h-8 text-green-600" />,
      title: "リアルタイム更新",
      description: "最新のイベント情報や活動状況を常に更新し、正確な情報を提供します。",
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "お気に入り機能",
      description: "興味のある活動をお気に入りに登録して、いつでも簡単にアクセスできます。",
    },
  ]

  const stats = [
    { number: "150+", label: "登録サークル数" },
    { number: "80+", label: "ゼミ・研究室" },
    { number: "50+", label: "利用可能施設" },
    { number: "200+", label: "年間イベント数" },
  ]

  const team = [
    {
      name: "田中 太郎",
      role: "プロジェクトリーダー",
      department: "情報学部4年",
      description: "システム設計とプロジェクト管理を担当",
    },
    {
      name: "佐藤 花子",
      role: "UI/UXデザイナー",
      department: "デザイン学部3年",
      description: "ユーザーインターフェースとユーザー体験の設計",
    },
    {
      name: "山田 次郎",
      role: "フロントエンド開発",
      department: "情報学部3年",
      description: "Webアプリケーションのフロントエンド開発",
    },
    {
      name: "鈴木 美咲",
      role: "データ管理",
      department: "経営学部4年",
      description: "データベース設計とコンテンツ管理",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200">
            <ArrowLeft className="w-5 h-5 mr-2" />
            ホームに戻る
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* ヒーローセクション */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Koma-Showcase</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            学生生活をより豊かにするため情報まとめサイトです。
            Web上で手軽に、サークル、ゼミ、施設、イベントなど、大学内のあらゆる情報を一箇所で見つけれます。
          </p>
        </div>

        {/* ミッション */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <Target className="w-12 h-12 text-purple-800 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">このサイトでできること</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">学生生活の充実</h3>
              <p className="text-gray-600">
                大学生活は一度きり。多様な活動や出会いを通じて、学生一人ひとりが充実した大学生活を送れるよう支援します。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">情報の透明性</h3>
              <p className="text-gray-600">
                正確で最新の情報を提供し、学生が自分に最適な活動を見つけられる環境を整備します。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">コミュニティの活性化</h3>
              <p className="text-gray-600">
                学生同士のつながりを促進し、活発で多様なコミュニティの形成をサポートします。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">継続的な改善</h3>
              <p className="text-gray-600">
                ユーザーフィードバックを基に、常にサービスの向上と新機能の開発に取り組みます。
              </p>
            </div>
          </div>
        </div>

        {/* 主な機能 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">主な機能</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 統計情報 */}
        <div className="bg-gradient-to-r from-purple-800 to-indigo-600 rounded-2xl shadow-lg p-8 mb-16 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">数字で見るKoma-Showcase</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-purple-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* チーム */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">チーム</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-purple-800 font-medium mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm mb-3">{member.department}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 今後の展望 */}
        {/* <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <Award className="w-12 h-12 text-purple-800 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">今後の展望</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI機能の強化</h3>
              <p className="text-gray-600">機械学習を活用した個人向けレコメンデーション機能の実装</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">モバイルアプリ</h3>
              <p className="text-gray-600">より便利なモバイル体験を提供するネイティブアプリの開発</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">他大学との連携</h3>
              <p className="text-gray-600">プラットフォームを他大学にも展開し、大学間交流の促進</p>
            </div>
          </div>
        </div> *}

        {/* お問い合わせ */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">お問い合わせ</h2>
          <p className="text-gray-600 mb-6">ご質問、ご要望など、お気軽にお問い合わせください。</p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center text-gray-600">
              <Mail className="w-5 h-5 mr-2" />
              <span>contact@mediamap.komatech.ac.jp</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Phone className="w-5 h-5 mr-2" />
              <span>03-1234-5678</span>
            </div>
          </div>
          <div className="mt-6">
            <button className="px-8 py-3 bg-purple-800 text-white rounded-lg font-medium hover:bg-purple-900 transition-colors duration-200">
              お問い合わせフォーム
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

