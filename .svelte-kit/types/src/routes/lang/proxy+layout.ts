// @ts-nocheck
// src/routes/[lang]/+layout.ts
import type { LayoutLoad } from './$types';
import { loadTranslations } from '$lib/i18n';

const supportedLocales = ['ja', 'en', 'ko'];

export const load = async ({ params }: Parameters<LayoutLoad>[0]) => {
  const { lang } = params;
  
  // サポートされている言語かチェック
  if (!supportedLocales.includes(lang)) {
    throw error(404, 'Language not supported');
  }
  
  // 翻訳ファイルを読み込み
  await loadTranslations(lang);
  
  return {
    lang
  };
};
