"use client";

import Link from 'next/link';
import { useEffect } from 'react';

export default function LegalNoticePage() {
  useEffect(() => {
    document.title = '特定商取引法に基づく表記 | ScriptYou';
  }, []);

  return (
    <>
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            特定商取引法に基づく表記
          </h1>
          <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <div className="space-y-8">
            
            {/* 販売業者の名称 */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">販売業者の名称</h2>
              <p className="text-gray-700 text-lg">Luke株式会社</p>
            </div>

            {/* 所在地 */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">所在地</h2>
              <p className="text-gray-700 text-lg">
                〒530-0001<br />
                大阪府大阪市北区梅田1-1-3大阪駅前第3ビル 29階　1-1-1号室
              </p>
            </div>

            {/* 電話番号 */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">電話番号</h2>
              <p className="text-gray-700 text-lg">
                050-3186-3633<br />
                <span className="text-sm text-gray-600">受付時間: 平日 10:00-18:00（土日祝を除く）</span>
              </p>
            </div>

            {/* メールアドレス */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">メールアドレス</h2>
              <p className="text-gray-700 text-lg">
                <a href="mailto:luke2023ds@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                  luke2023ds@gmail.com
                </a>
              </p>
            </div>

            {/* 運営統括責任者 */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">運営統括責任者</h2>
              <p className="text-gray-700 text-lg">樋口　流雲（代表取締役）</p>
            </div>

            {/* 販売価格 */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">販売価格</h2>
              <div className="text-gray-700 text-lg space-y-2">
                <p>・基本プラン: 無料</p>
                <p>・プレミアムプラン: 月額1,000円（税込）</p>
                <p>・ビジネスプラン: 月額3,000円（税込）</p>
                <p className="text-sm text-gray-600">※価格は予告なく変更する場合があります</p>
              </div>
            </div>

            {/* 受け付け可能な決済手段 */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">受け付け可能な決済手段</h2>
              <div className="text-gray-700 text-lg space-y-2">
                <p>・クレジットカード決済（Visa、MasterCard、JCB、American Express、Diners Club）</p>
                <p>・銀行振込</p>
              </div>
            </div>

            {/* 決済期間 */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">決済期間</h2>
              <div className="text-gray-700 text-lg space-y-2">
                <p>・クレジットカード決済: ただちに処理されます</p>
                <p>・銀行振込: 注文から3日以内にお振り込みください</p>
              </div>
            </div>

            {/* 引渡時期（サービス提供時期） */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">引渡時期</h2>
              <p className="text-gray-700 text-lg">
                お支払い確認後、即時サービスをご利用いただけます
              </p>
            </div>

            {/* 追加手数料等の追加料金 */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">追加手数料等の追加料金</h2>
              <div className="text-gray-700 text-lg space-y-2">
                <p>・銀行振込手数料: お客様負担</p>
                <p>・その他手数料: 特にありません</p>
              </div>
            </div>

            {/* 交換および返品（返金ポリシー） */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">交換および返品（返金ポリシー）</h2>
              <div className="text-gray-700 text-lg space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">お客様都合による返品・交換の場合</h3>
                  <p>デジタルサービスの特性上、サービス開始後の返品・交換は原則として承っておりません。サービス開始前のキャンセルについては、お客様サポートセンター（電話番号: 050-3186-3633）にご連絡いただければ対応いたします。</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">サービスに不具合がある場合</h3>
                  <p>当社の責任によるシステム障害や重大な不具合の場合、お客様サポートセンター（電話番号: 050-3186-3633）にご連絡ください。調査の上、当社判断により、サービスの修正、代替サービスの提供、または返金対応をいたします。</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">月額サービスの解約について</h3>
                  <p>月額サービスはお客様ご自身でいつでも解約いただけます。解約のお申し出をいただいた翌月以降の課金を停止いたします。当月分の日割り返金は行っておりません。</p>
                </div>
              </div>
            </div>

            {/* ソフトウェアの動作環境 */}
            <div className="pb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">ソフトウェアの動作環境</h2>
              <div className="text-gray-700 text-lg space-y-2">
                <p>・Webブラウザ: Chrome（推奨）、Firefox、Safari、Edge（最新版）</p>
                <p>・インターネット接続: 安定したブロードバンド接続</p>
                <p>・JavaScript: 有効にしてください</p>
                <p>・モバイルデバイス: iOS 12以降、Android 8.0以降</p>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Navigation */}
        <div className="text-center mt-12">
          <div className="space-y-4 sm:space-y-0 sm:space-x-8 sm:flex sm:justify-center">
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              前のページに戻る
            </Link>
            
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-orange-400 text-white text-base font-medium rounded-xl hover:bg-orange-500 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              ホームへ
            </Link>
          </div>
        </div>

        {/* Last Updated */}
        <div className="text-center mt-8 text-sm text-gray-500">
          最終更新日: 2025年1月14日
        </div>
      </div>
    </div>
    </>
  );
}