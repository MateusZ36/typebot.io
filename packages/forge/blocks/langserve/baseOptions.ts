import { option } from '@typebot.io/forge'
import { defaultBaseUrl } from './constants'

export const baseOptions = option.object({
  baseUrl: option.string.layout({
    label: 'Base URL',
    placeholder: 'http://localhost:8000',
    defaultValue: defaultBaseUrl,
    accordion: 'Configuration',
  }),
})
