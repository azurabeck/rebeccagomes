import { describe, expect, it } from 'vitest';
import en from './en.json';
import es from './es.json';
import pt from './pt.json';

/** Flattens nested messages into dotted key paths: { a: { b: '' } } -> ['a.b']. */
function keyPaths(value: unknown, prefix = ''): string[] {
  if (typeof value !== 'object' || value === null) return [prefix];
  return Object.entries(value).flatMap(([key, child]) =>
    keyPaths(child, prefix ? `${prefix}.${key}` : key),
  );
}

describe('translation files', () => {
  it.each([
    ['pt', pt],
    ['es', es],
  ])('%s has exactly the same keys as en', (_locale, messages) => {
    expect(keyPaths(messages).sort()).toEqual(keyPaths(en).sort());
  });
});
