import React from 'react';

export default function Achievements() {
  return (
    <div className="max-w-3xl mx-auto p-8 mt-10">
      <h1 className="text-4xl font-bold mb-6">الإنجازات</h1>
      <ul className="list-disc list-inside text-lg space-y-3">
        <li>تطوير منصة DTU التعليمية التي تدعم جميع التخصصات الهندسية.</li>
        <li>توفير محتوى تعليمي عالي الجودة ومتجدد باستمرار.</li>
        <li>تمكين آلاف الطلاب والمهنيين من تحسين مهاراتهم التقنية.</li>
        <li>التعاون مع خبراء ومختصين في المجالات الهندسية والتقنية.</li>
      </ul>
      <p className="mt-8 text-gray-600">
        نحن نفخر بما حققناه ونسعى دائماً لتقديم الأفضل.
      </p>
    </div>
  );
}
