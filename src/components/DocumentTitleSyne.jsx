import { useState, useEffect } from 'react';

export default function DocumentTitleSync() {
    const [unreadCount, setUnreadCount] = useState(0);

    // 1. Timer បង្កើនចំនួន unreadCount រៀងរាល់ 1 វិនាទី រហូតដល់ 10
    useEffect(() => {
        const interval = setInterval(() => {
            setUnreadCount((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return prev;
                }
                return prev + 2;
            });
        }, 1000);

        // សម្អាត Timer ពេល component unmount ដើម្បីកុំឱ្យ memory leak
        return () => clearInterval(interval);
    }, []);

    // 2. កែប្រែចំណងជើង Tab Browser តាម unreadCount
    useEffect(() => {
        if (unreadCount > 0) {
            document.title = `(${unreadCount}) សារថ្មី`;
        } else {
            document.title = 'ទំព័រដើម';
        }
    }, [unreadCount]);
  return (
        <div className="max-w-sm mx-auto p-6 bg- dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 text-center">
            <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2">
                ប្តូរចំណងជើង Browser Tab
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                មើលចំណងជើង Tab លើ Browser របស់អ្នកពេលចុចប៊ូតុង៖
            </p>

            <div className="flex justify-center items-center gap-3">
                <button
                    onClick={() => setUnreadCount((c) => Math.max(0, c - 1))}
                    className="px-3.5 py-2 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl font-bold text-sm hover:bg-slate-200 transition"
                >
                    − Start
                </button>

                <span className="font-black text-2xl text-blue-600 dark:text-blue-400 w-10">
                    {unreadCount}
                </span>

                <button
                    onClick={() => setUnreadCount((c) => c + 1)}
                    className="px-3.5 py-2 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition shadow"
                >
                    + Stop
                </button>
            </div>
        </div>
    );
}