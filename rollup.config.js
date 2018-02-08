import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import includePaths from 'rollup-plugin-includepaths';

let includePathOptions = {
    include: {
		'sliderComponent': 'src/components/slider.js',
		'buttonComponent': 'src/components/button.js'
	},
    paths: ['src/components'],
    external: [],
    extensions: ['.js']
};

export default {
    input: 'src/main.js',
    output: {
        file: 'public/js/bundle.js',
        format: 'cjs'
    },
    plugins: [
		includePaths(includePathOptions),
        resolve(),
        babel({
            exclude: 'node_modules/**'
        })
    ],
    watch: {
        include: 'src/main.js'
    }
};
