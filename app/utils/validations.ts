import type { FormKitNode } from '@formkit/core';

export const alphaSpacesOnly = (node: FormKitNode): boolean => {
  if (typeof node.value !== 'string') return false
  // RegEx matches only letters (uppercase/lowercase) and spaces
  const regex = /^[A-Za-z\s]+$/

  return regex.test(node.value)
};