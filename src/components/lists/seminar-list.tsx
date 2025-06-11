"use client"

import { useState } from "react"
import { Clock, MapPin, Users, GraduationCap } from "lucide-react"
import Link from "next/link"

// サンプルデータ
const sampleSeminars = [
  {
    id: 1,
    name: "メディア情報学ゼミ",
    faculty: "グローバル・メディア・スタディーズ学部",
    professor: "山田 太郎",
    description: "最新のメディア技術と情報学の研究を行うゼミです。実践的なプロジェクトを通じて専門知識を深めます。",
    tags: ["メディア", "情報学", "研究", "プロジェクト"],
    studentCount: 12,
    schedule: "火曜日 3-4限",
    location: "メディア棟2F",
    contact: "yamada@komatech.ac.jp",
    researchAreas: ["メディアデザイン", "情報可視化", "ユーザーインターフェース"],
    color: "bg-purple-500",
  },
  {
    id: 2,
    name: "AIと社会ゼミ",
    faculty: "グローバル・メディア・スタディーズ学部",
    professor: "佐藤 花子",
    description: "AIの社会的影響と倫理的課題について研究するゼミ。技術と社会の関係性を多角的に考察します。",
    tags: ["AI", "倫理", "社会学", "政策"],
    studentCount: 8,
    schedule: "木曜日 3-4限",
    location: "人文棟3F",
    contact: "sato@komatech.ac.jp",
    researchAreas: ["AI倫理", "テクノロジーアセスメント", "社会政策"],
    color: "bg-red-500",
  },
  {
    id: 3,
    name: "経営戦略ゼミ",
    faculty: "経営学部",
    professor: "鈴木 一郎",
    description: "企業の経営戦略を分析し、ケーススタディを通じて実践的な経営知識を身につけます。",
    tags: ["経営", "戦略", "ケーススタディ", "マーケティング"],
    studentCount: 15,
    schedule: "月曜日 5-6限",
    location: "経営学棟4F",
    contact: "suzuki@komatech.ac.jp",
    researchAreas: ["競争戦略", "マーケティング戦略", "組織論"],
    color: "bg-blue-500",
  },
  {
    id: 4,
    name: "環境科学ゼミ",
    faculty: "グローバル・メディア・スタディーズ学部",
    professor: "田中 誠",
    description: "環境問題の科学的アプローチと持続可能な解決策について研究します。フィールドワークも重視しています。",
    tags: ["環境", "科学", "持続可能性", "フィールドワーク"],
    studentCount: 10,
    schedule: "水曜日 3-4限",
    location: "理工学棟2F",
    contact: "tanaka@komatech.ac.jp",
    researchAreas: ["環境アセスメント", "再生可能エネルギー", "生態系保全"],
    color: "bg-green-500",
  },
]

const faculties = ["全て", "グローバル・メディア・スタディーズ学部", "仏教学部", "経営学部", "経済学部", "文学部", "法学部", "医療健康科学部"]
export function SeminarList() {
  const [selectedFaculty, setSelectedFaculty] = useState("全て")

  const filteredSeminars = sampleSeminars.filter(
    (seminar) => selectedFaculty === "全て" || seminar.faculty === selectedFaculty,
  )

  return (
    <div className="space-y-6">
      {/* Material Design Filter Chips */}
      <div className="flex flex-wrap gap-2">
        {faculties.map((faculty) => (
          <button
            key={faculty}
            onClick={() => setSelectedFaculty(faculty)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedFaculty === faculty
                ? "bg-purple-800 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            {faculty}
          </button>
        ))}
      </div>

      {/* Material Design Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSeminars.map((seminar) => (
          <div
            key={seminar.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            {/* Card Header with Color Accent - すべて紫に統一 */}
            <div className="h-2 bg-purple-800" />

            <div className="p-6">
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{seminar.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                    {seminar.faculty}
                  </span>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-1" />
                    {seminar.studentCount}人
                  </div>
                </div>
              </div>

              {/* Professor */}
              <div className="flex items-center mb-3 text-sm text-gray-600">
                <GraduationCap className="w-4 h-4 mr-2" />
                {seminar.professor}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{seminar.description}</p>

              {/* Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  {seminar.schedule}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  {seminar.location}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {seminar.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <Link href={`/seminar/${seminar.id}`}>
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
