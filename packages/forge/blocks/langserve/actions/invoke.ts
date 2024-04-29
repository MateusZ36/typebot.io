import { createAction, option } from '@typebot.io/forge'
import { baseOptions } from '../baseOptions'
import { isDefined, sendRequest } from '@typebot.io/lib'
import axios from 'axios'
import { z } from '@typebot.io/forge/zod'
import objectPath from 'object-path'

export const invoke = createAction({
  name: 'Invoke',
  baseOptions,
  options: option.object({
    chain: option.string.layout({
      placeholder: 'Select a chain',
      label: 'Chain',
      isRequired: true,
      fetcher: 'fetchChains',
    }),
    input: option.string.layout({
      accordion: 'Chain arguments',
      label: 'Input',
      inputType: 'code',
      placeholder: '{}',
    }),
    config: option.string.layout({
      accordion: 'Chain arguments',
      label: 'Config',
      inputType: 'code',
      placeholder: '{}',
    }),
    kwargs: option.string.layout({
      accordion: 'Chain arguments',
      label: 'Kwargs',
      inputType: 'code',
      placeholder: '{}',
    }),
  }),
  fetchers: [
    {
      'id': 'fetchChains',
      dependencies: ['baseUrl'],
      fetch: async ({ options }) => {
        return ['1', '2', '3', '4']
      },
    },
  ],
})

