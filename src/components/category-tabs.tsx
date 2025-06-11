"use client"

import { useState } from "react"
import { CircleList } from "@/components/lists/circle-list"
import { SeminarList } from "@/components/lists/seminar-list"
import { FacilityList } from "@/components/lists/facility-list"
import { EventList } from "@/components/lists/event-list"
import { ClubList } from "@/components/lists/club-list"

export function CategoryTabs() {
  const [activeTab, setActiveTab] = useState("circle")

  const tabs = [
    { id: "circle", label: "サークル" },
    { id: "seminar", label: "ゼミ" },
    { id: "facility", label: "施設" },
    { id: "event", label: "イベント" },
    { id: "club", label: "部活動" },
  ]

  return (
    <div className="space-y-6">
      {/* タブバー */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-1">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-0 px-6 py-3 text-center font-medium transition-all duration-200 rounded-lg ${
                activeTab === tab.id
                  ? "bg-purple-800 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <span className="hidden sm:inline">{tab.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* タブコンテンツ */}
      <div className="min-h-[500px]">
        {activeTab === "circle" && <CircleList />}
        {activeTab === "seminar" && <SeminarList />}
        {activeTab === "facility" && <FacilityList />}
        {activeTab === "event" && <EventList />}
        {activeTab === "club" && <ClubList />}
      </div>
    </div>
  )
}
