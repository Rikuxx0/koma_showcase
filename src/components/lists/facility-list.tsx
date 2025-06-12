"use client"

import { useState } from "react"
import { Clock, MapPin, Users, Wrench } from "lucide-react"
import Link from "next/link"

// サンプルデータ
const sampleFacilities = [
  {
    id: 1,
    name: "メディアラボ",
    type: "実習施設",
    description: "最新の映像・音響機材を備えたメディア制作施設。学生のクリエイティブな活動をサポートします。",
    tags: ["映像制作", "音響", "編集", "機材貸出"],
    capacity: 20,
    openingHours: "平日 9:00-20:00",
    location: "メディア棟1F",
    contact: "medialab@komatech.ac.jp",
    equipment: ["4Kカメラ", "録音機材", "編集用PC", "スタジオ"],
    reservationRequired: true,
    color: "bg-orange-500",
  },
  {
    id: 2,
    name: "自習スペース",
    type: "学習施設",
    description: "24時間利用可能な自習スペース。Wi-Fi完備、電源も豊富にあります。",
    tags: ["自習", "24時間", "Wi-Fi", "静か"],
    capacity: 100,
    openingHours: "24時間",
    location: "図書館別館1F",
    contact: "library@komatech.ac.jp",
    equipment: ["Wi-Fi", "電源", "自動販売機"],
    reservationRequired: false,
    color: "bg-blue-500",
  },
  {
    id: 3,
    name: "プレゼンテーションルーム",
    type: "会議施設",
    description: "プレゼンテーションや小規模なイベントに最適な多目的ルーム。プロジェクターやホワイトボードを完備。",
    tags: ["プレゼン", "会議", "イベント", "設備充実"],
    capacity: 30,
    openingHours: "平日 9:00-21:00、土曜 10:00-17:00",
    location: "総合棟3F",
    contact: "facility@komatech.ac.jp",
    equipment: ["プロジェクター", "スクリーン", "ホワイトボード", "音響設備"],
    reservationRequired: true,
    color: "bg-green-500",
  },
  {
    id: 4,
    name: "コンピュータ演習室",
    type: "実習施設",
    description: "最新のPCを完備した演習室。プログラミングや各種ソフトウェアの実習に利用できます。",
    tags: ["PC", "プログラミング", "ソフトウェア", "実習"],
    capacity: 50,
    openingHours: "平日 8:30-22:00、土曜 9:00-18:00",
    location: "情報棟2F",
    contact: "complab@komatech.ac.jp",
    equipment: ["デスクトップPC", "プリンター", "スキャナー", "プロジェクター"],
    reservationRequired: false,
    color: "bg-purple-500",
  },
]

const facilityTypes = ["全て", "実習施設", "学習施設", "会議施設", "スポーツ施設", "その他"]

export function FacilityList() {
  const [selectedType, setSelectedType] = useState("全て")

  const filteredFacilities = sampleFacilities.filter(
    (facility) => selectedType === "全て" || facility.type === selectedType,
  )

  return (
    <div className="space-y-6">
      {/* Material Design Filter Chips */}
      <div className="flex flex-wrap gap-2">
        {facilityTypes.map((type) => (
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
        {filteredFacilities.map((facility) => (
          <div
            key={facility.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            {/* Card Header with Color Accent */}
            <div className="h-2 bg-purple-800" />

            <div className="p-6">
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{facility.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                    {facility.type}
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-1" />
                      最大{facility.capacity}人
                    </div>
                    {facility.reservationRequired ? (
                      <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">要予約</span>
                    ) : (
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        予約不要
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{facility.description}</p>

              {/* Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  {facility.openingHours}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  {facility.location}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Wrench className="w-4 h-4 mr-2" />
                  設備: {facility.equipment.slice(0, 2).join(", ")}
                  {facility.equipment.length > 2 ? " など" : ""}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {facility.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
                <Link href={`/facility/${facility.id}`}>
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
