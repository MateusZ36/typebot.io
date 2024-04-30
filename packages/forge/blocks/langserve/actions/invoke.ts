import { createAction, option } from '@typebot.io/forge'
import { baseOptions } from '../baseOptions'
import axios from 'axios'

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
        const url = `${options.baseUrl}/openapi.json`

        function getInvokeChains(data: any): string[] {
          let firstSegments = new Set<string>()
          Object.keys(data).forEach(key => {
            const parts = key.split('/').filter(part => part) // Removes any empty strings from split
            if (parts[1] === 'invoke') {
              firstSegments.add(parts[0]) // Add the first segment to the Set
            }
          })
          return Array.from(firstSegments) // Convert Set to Array to return unique first segments
        }

        const response = await axios.get(url)
        console.log('='.repeat(50))
        console.log(url)
        console.log('='.repeat(50))

        return getInvokeChains(response.data.paths)
      },
    },
  ],
})

