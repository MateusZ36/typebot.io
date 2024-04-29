import { createBlock, option } from '@typebot.io/forge'
import { LangserveLogo } from './logo'
import { baseOptions } from './baseOptions'
import { invoke } from './actions/invoke'

export const langserveBlock = createBlock({
  id: 'langserve',
  name: 'LangServe',
  tags: [],
  LightLogo: LangserveLogo,
  options: baseOptions,
  actions: [invoke],
})
