export const ROUTES = {
  ROOT: '/',
  SIGN_IN: '/auth/sign-in',
  SIGN_UP: '/auth/sign-up',

  UI_KIT: '/ui-kit',
} as const;

const PATHS = [...Object.values(ROUTES)] as const;

export type ExtractRouteParams<T> = string extends T
  ? Record<string, any>
  : // eslint-disable-next-line @typescript-eslint/no-unused-vars
  T extends `${infer _Start}:${infer Param}/${infer Rest}`
  ? { [k in Param | keyof ExtractRouteParams<Rest>]: any }
  : // eslint-disable-next-line @typescript-eslint/no-unused-vars
  T extends `${infer _Start}:${infer Param}`
  ? { [k in Param]: any }
  : // eslint-disable-next-line @typescript-eslint/ban-types
    {};

type TypedPaths = typeof PATHS;

export type RoutesPath = TypedPaths[number];

export type PathParams<P extends RoutesPath> = ExtractRouteParams<P>;

export const buildUrl = <P extends RoutesPath>(path: P, params?: PathParams<P>): string => {
  let ret: string = path;

  // Upcast `params` to be used in string replacement.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (params) {
    const paramObj: { [i: string]: any } = params;

    for (const key of Object.keys(paramObj)) {
      ret = ret?.replace(`:${key}`, paramObj[key]);
    }
  }

  return ret;
};
