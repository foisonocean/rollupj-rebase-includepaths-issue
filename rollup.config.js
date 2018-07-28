import path from 'path';

import includePaths from 'rollup-plugin-includepaths';
import rebasePlugin from 'rollup-plugin-rebase';

export default {
    input: 'src/index.js',

    output: {
        file: 'dist/bundle.js',
        format: 'es'
    },

    plugins: [
        includePaths({
            paths: [path.resolve(__dirname, './src')],
            extensions: ['.js', '.json']
        }),
        rebasePlugin(),
    ]
}
