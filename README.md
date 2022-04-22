# client-suspense [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/eolme/client-suspense/blob/master/LICENSE) [![BundlePhobia](https://img.shields.io/bundlephobia/min/client-suspense)](https://bundlephobia.com/package/client-suspense)

> ClientSuspense component (client-only Suspense)

A component that suspends only on the client side.

## Usage

For example, if you use [nextjs with streaming related APIs](https://nextjs.org/docs/advanced-features/react-18/streaming), [Suspense](https://reactjs.org/docs/react-api.html#reactsuspense) will be suspended on the server side.
To avoid this you can use ClientSuspense like this:

```tsx
import { ClientSuspense } from 'client-suspense';

export const App = () => {
  return (
    <div>
      <ClientSuspense
        fallback={(
          <Spinner />
        )}
      >
        <OtherComponent />
      </ClientSuspense>
    </div>
  );
};
```

And that's all it takes!

## Installation

Recommend to use [yarn](https://classic.yarnpkg.com/en/docs/install/) for dependency management:

```shell
yarn add client-suspense
```

## License

client-suspense is [MIT licensed](./LICENSE).
