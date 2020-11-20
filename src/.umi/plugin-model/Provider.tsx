// @ts-nocheck
import React from 'react';
import initialState from '/Users/jackliao/ant-design/ant-design-pro-hello-world/src/.umi/plugin-initial-state/models/initialState';

// @ts-ignore
import Dispatcher from '/Users/jackliao/ant-design/ant-design-pro-hello-world/node_modules/_@umijs_plugin-model@2.5.6@@umijs/plugin-model/lib/helpers/dispatcher';
// @ts-ignore
import Executor from '/Users/jackliao/ant-design/ant-design-pro-hello-world/node_modules/_@umijs_plugin-model@2.5.6@@umijs/plugin-model/lib/helpers/executor';
// @ts-ignore
import { UmiContext } from '/Users/jackliao/ant-design/ant-design-pro-hello-world/node_modules/_@umijs_plugin-model@2.5.6@@umijs/plugin-model/lib/helpers/constant';

export const models = { '@@initialState': initialState,  };

export type Model<T extends keyof typeof models> = {
  [key in keyof typeof models]: ReturnType<typeof models[T]>;
};

export type Models<T extends keyof typeof models> = Model<T>[T]

const dispatcher = new Dispatcher!();
const Exe = Executor!;

export default ({ children }: { children: React.ReactNode }) => {

  return (
    <UmiContext.Provider value={dispatcher}>
      {
        Object.entries(models).map(pair => (
          <Exe key={pair[0]} namespace={pair[0]} hook={pair[1] as any} onUpdate={(val: any) => {
            const [ns] = pair as [keyof typeof models, any];
            dispatcher.data[ns] = val;
            dispatcher.update(ns);
          }} />
        ))
      }
      {children}
    </UmiContext.Provider>
  )
}