"use client";
import { useState, useEffect } from "react";
import { X, Calendar, Gift, Megaphone } from "lucide-react"; // lucide-react install kar lena (npm i lucide-react)

export default function AdmissionPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Page load hone ke 1.5 seconds baad popup dikhega
    const timer = setTimeout(() => setShowPopup(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg overflow-hidden bg-white rounded-3xl shadow-2xl animate-in fade-in zoom-in duration-300">
        
        {/* Top Decorative Header */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-6 text-white text-center">
          <button 
            onClick={() => setShowPopup(false)}
            className="absolute top-4 right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
          <div className="flex justify-center mb-2 text-yellow-300">
            <Megaphone size={40} className="animate-bounce" />
          </div>
          <h2 className="text-2xl font-black uppercase tracking-tight">New Session 2026-27</h2>
        </div>

        <div className="p-8 text-center">
          {/* Main Announcement */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 mb-4 text-sm font-bold text-blue-700 bg-blue-50 rounded-full">
              <Calendar size={16} />
              SCHOOL RE-OPENING
            </div>
            <h3 className="text-4xl font-extrabold text-gray-900 mb-2">9<span className="text-xl">th</span> March, 2026</h3>
            <p className="text-gray-600 font-medium italic">Rise & Shine with Blue Skies School!</p>
          </div>

          {/* Offer Box */}
          <div className="relative p-6 border-2 border-dashed border-red-500 bg-red-50 rounded-2xl mb-6">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase flex items-center gap-1">
              <Gift size={14} /> Limited Offer
            </div>
            <h4 className="text-2xl font-black text-red-600 mb-1 leading-tight">
              FREE ADMISSION
            </h4>
            <p className="text-red-700 font-semibold text-sm">
              Available only until 9th March!
            </p>
          </div>

          {/* Action Button */}
          <div className="flex flex-col gap-3">
            <a 
              href="/admission" 
              onClick={() => setShowPopup(false)}
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all transform active:scale-95 flex items-center justify-center gap-2"
            >
              Apply for Admission Now
            </a>
            <button 
              onClick={() => setShowPopup(false)}
              className="text-gray-400 text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Maybe later
            </button>
          </div>
        </div>

        {/* Footer Info */}
        <div className="bg-gray-50 p-4 border-t text-xs text-gray-500 flex justify-center gap-4">
           <span>📍 Pipra Purani Chowk</span>
           <span>📞 8882165021</span>
        </div>
      </div>
    </div>
  );
}