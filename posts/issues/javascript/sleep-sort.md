---
sidebar_position: 1
title: Sleep Sort
comment: true
tags:
  - Javascript
  - sort
date: '2023-10-14'
---

```js
async function sleepSort(arr) {
  const r = [];

  const promises = arr.map(
    (n) =>
      new Promise((resolve) =>
        setTimeout(() => {
          r.push(n);
          resolve(null);
        }, n),
      ),
  );

  await Promise.all(promises);

  return r;
}
```
