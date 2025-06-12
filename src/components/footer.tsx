"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Clock  } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { label: "サークル一覧", href: "/#circles" },
    { label: "ゼミ一覧", href: "/#seminars" },
    { label: "施設一覧", href: "/#facilities" },
    { label: "イベント一覧", href: "/#events" },
    { label: "部活動一覧", href: "/#clubs" },
  ]

  const categories = [
    {
      title: "サークル",
      items: [
        { label: "技術系", href: "/circles?category=tech" },
        { label: "文化系", href: "/circles?category=culture" },
        { label: "体育系", href: "/circles?category=sports" },
        { label: "学術系", href: "/circles?category=academic" },
      ],
    },
    {
      title: "施設",
      items: [
        { label: "実習施設", href: "/facilities?type=lab" },
        { label: "学習施設", href: "/facilities?type=study" },
        { label: "会議施設", href: "/facilities?type=meeting" },
        { label: "スポーツ施設", href: "/facilities?type=sports" },
      ],
    },
    {
      title: "イベント",
      items: [
        { label: "コンテスト", href: "/events?type=contest" },
        { label: "セミナー", href: "/events?type=seminar" },
        { label: "説明会", href: "/events?type=info" },
        { label: "ワークショップ", href: "/events?type=workshop" },
      ],
    },
  ]

  const supportLinks = [
    { label: "よくある質問", href: "/faq" },
    { label: "利用規約", href: "/terms" },
    { label: "プライバシーポリシー", href: "/privacy" },
    { label: "お問い合わせ", href: "/contact" },
    { label: "サイトマップ", href: "/sitemap" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* メインフッターコンテンツ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* サイト情報 */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Koma-Showcase</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              学生生活をより豊かにするため情報まとめサイトです。
              Web上で手軽に、サークル、ゼミ、施設、イベントなど、大学内のあらゆる情報を一箇所で見つけ出し、直接、連絡もできます。
            </p>

            {/* 連絡先情報 */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <span className="text-sm">koma@komazawa-u.ac.jp</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <span className="text-sm">03-3418-9111</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span className="text-sm">東京都世田谷区駒沢 駒澤大学</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="w-4 h-4 mr-3" />
                <span className="text-sm">営業時間 月曜日～金曜日 9：00～17：00 / 土曜日 9：00～12：00</span>
              </div>
            </div>
          </div>

          {/* クイックリンク */}
          <div>
            <h4 className="text-lg font-semibold mb-4">クイックリンク</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  このサイトについて
                </Link>
              </li>
            </ul>
          </div>

          {/* カテゴリ別リンク */}
          {categories.map((category, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{category.title}</h4>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* サポートリンク */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-4">サポート</h4>
          <div className="flex flex-wrap gap-6">
            {supportLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* ソーシャルメディアとコピーライト */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300 text-sm">© 2025 Komatech プログラミング研究会一員 Koma-Showcase. All rights reserved.</p>
            </div>

            {/* ソーシャルメディアリンク */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <h3>X</h3>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <h3>Instagram</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
