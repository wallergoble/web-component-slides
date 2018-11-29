import hopscotch from 'react-syntax-highlighter/styles/prism/hopscotch'
import { future } from 'mdx-deck/themes'

export default {
    ...future,
    prism: {
        style: hopscotch,
    }
}