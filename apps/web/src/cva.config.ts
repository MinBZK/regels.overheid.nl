import { defineConfig } from 'cva';
import { twMerge } from 'tailwind-merge';

export const { cva, cx } = defineConfig({
  hooks: { onComplete: twMerge },
});

export type { VariantProps } from 'cva';
