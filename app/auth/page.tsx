"use client";

import { useState } from "react";
import Link from 'next/link';

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // 機能無効化 - 何もしない
    alert("ログイン機能は無効化されています");
  };

  const handleGoogleLogin = async () => {
    // 機能無効化 - 何もしない
    alert("Google認証機能は無効化されています");
  };

  const handleQuickLogin = async () => {
    // 機能無効化 - 何もしない
    alert("デモログイン機能は無効化されています");
  };

  if (showLoginForm) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#f7f3e9' }}>
        <div className="w-full max-w-md px-4 sm:px-6">
          <div className="bg-white px-6 sm:px-10 py-8 sm:py-12 rounded-3xl shadow-2xl border border-gray-100">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">認証</h2>
              <p className="text-gray-600 text-base sm:text-lg">メールでログイン</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  メールアドレス
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-black bg-white text-base sm:text-lg"
                  placeholder="your@email.com"
                  disabled
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  パスワード
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-black bg-white text-base sm:text-lg"
                  placeholder="••••••••"
                  disabled
                />
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <p className="text-yellow-800 text-sm">
                  ⚠️ このページはデモ用です。実際のログイン機能は無効化されています。
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-400 text-white py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg cursor-not-allowed shadow-lg"
                disabled
              >
                ログイン（無効）
              </button>
            </form>

            <div className="mt-8 text-center">
              <button
                onClick={() => setShowLoginForm(false)}
                className="text-gray-600 text-lg hover:text-gray-800 transition-colors font-medium"
              >
                戻る
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row" style={{ backgroundColor: '#f7f3e9' }}>
      {/* Left side - Brand section */}
      <div className="flex-1 flex items-center justify-center px-6 sm:px-8 lg:px-12 py-8 lg:py-16">
        <div className="max-w-lg w-full text-center lg:text-left">
          {/* Brand Header */}
          <div className="mb-8 lg:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-orange-400 mb-4 tracking-tight">ScriptYou</h1>
            <div className="w-12 sm:w-16 h-1.5 bg-orange-400 rounded-full mx-auto lg:mx-0"></div>
          </div>
          
          {/* Main Content */}
          <div className="space-y-8 lg:space-y-12">
            <div className="animate-fade-in">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 leading-tight">
                あなたの文体で<br />
                プロフェッショナルな文章を
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
                AIがあなたの書き方を学習し、一貫性のある高品質な文章を瞬時に生成
              </p>
            </div>
            
            {/* Feature List */}
            <div className="space-y-4 sm:space-y-6 animate-fade-in-delay max-w-md mx-auto lg:mx-0">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-3 h-3 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
                  直感的な対話でプロフェッショナルな文章を作成
                </p>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-3 h-3 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
                  ビジネス文書からSNS投稿まで多様なフォーマットに対応
                </p>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-3 h-3 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
                  数秒で企業レベルの文章品質を実現
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login section */}
      <div className="flex-1 flex items-center justify-center px-6 sm:px-8 lg:px-12 py-8 lg:py-16">
        <div className="max-w-md w-full animate-fade-in-delay">
          {/* Call to Action Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 leading-tight">
              今すぐ始める
            </h2>
            
            {/* Action Buttons */}
            <div className="space-y-3 sm:space-y-4">
              {/* Google ログインボタン */}
              <button
                onClick={handleGoogleLogin}
                className="w-full bg-white text-gray-900 py-4 sm:py-5 px-6 sm:px-8 rounded-2xl font-bold text-base sm:text-lg border-2 border-gray-300 hover:border-gray-400 hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 shadow-lg flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Googleでログイン（無効）
              </button>

              <div className="text-center text-gray-500 font-medium text-sm sm:text-base">または</div>
              
              <button
                onClick={() => setShowLoginForm(true)}
                className="w-full bg-gray-100 text-gray-900 py-4 sm:py-5 px-6 sm:px-8 rounded-2xl font-bold text-base sm:text-lg border-2 border-gray-300 hover:border-gray-400 hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
              >
                メールでログイン（無効）
              </button>
              
              <button
                onClick={handleQuickLogin}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 sm:py-5 px-6 sm:px-8 rounded-2xl font-bold text-base sm:text-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
              >
                デモログイン（無効）
              </button>
            </div>
            
            {/* Warning Message */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-6">
              <p className="text-yellow-800 text-sm">
                ⚠️ このページはデモ用です。実際のログイン機能は無効化されています。
              </p>
            </div>
            
            {/* Subtitle */}
            <p className="text-gray-600 text-base sm:text-lg mt-8 sm:mt-12 leading-relaxed font-medium">
              プロフェッショナルな文章作成を始めましょう
            </p>
          </div>

          {/* Footer links */}
          <div className="text-center mt-8 sm:mt-16">
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-500">
              <a href="#" className="hover:text-gray-700 transition-colors text-base font-medium flex items-center justify-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>利用規約</span>
              </a>
              
              <a href="#" className="hover:text-gray-700 transition-colors text-base font-medium flex items-center justify-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
                <span>プライバシーポリシー</span>
              </a>

              <Link href="/business-info" className="hover:text-gray-700 transition-colors text-base font-medium flex items-center justify-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <span>特定商取引法に基づく表記</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}