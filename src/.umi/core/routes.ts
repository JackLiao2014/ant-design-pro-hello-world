// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/jackliao/ant-design/ant-design-pro-hello-world/node_modules/_@umijs_runtime@3.2.27@@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/components/PageLoading/index';

export function getRoutes() {
  const routes = [
  {
    "path": "/user",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__UserLayout' */'/Users/jackliao/ant-design/ant-design-pro-hello-world/src/layouts/UserLayout'), loading: LoadingComponent}),
    "routes": [
      {
        "name": "login",
        "path": "/user/login",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__login' */'/Users/jackliao/ant-design/ant-design-pro-hello-world/src/pages/user/login'), loading: LoadingComponent}),
        "exact": true
      }
    ]
  },
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BlankLayout' */'/Users/jackliao/ant-design/ant-design-pro-hello-world/src/layouts/BlankLayout'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BlankLayout' */'/Users/jackliao/ant-design/ant-design-pro-hello-world/src/layouts/BlankLayout'), loading: LoadingComponent}),
        "authority": [
          "admin",
          "user"
        ],
        "routes": [
          {
            "path": "/index.html",
            "redirect": "/welcome",
            "exact": true
          },
          {
            "path": "/",
            "redirect": "/welcome",
            "exact": true
          },
          {
            "path": "/welcome",
            "name": "welcome",
            "icon": "smile",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Welcome' */'/Users/jackliao/ant-design/ant-design-pro-hello-world/src/pages/Welcome'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/jackliao/ant-design/ant-design-pro-hello-world/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/jackliao/ant-design/ant-design-pro-hello-world/src/pages/404'), loading: LoadingComponent}),
        "exact": true
      }
    ]
  },
  {
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/jackliao/ant-design/ant-design-pro-hello-world/src/pages/404'), loading: LoadingComponent}),
    "exact": true
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
