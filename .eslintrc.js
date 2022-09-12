module.exports = {
	// 현재 폴더 위치를 기준으로 하위의 파일에 린트를 적용 (상위 폴더에는 적용하지 않음)
	root: true,
	env: {
		node: true
	},
	// 린트 기본 문법 검사 규칙 이외에 추가적인 규칙들을 적용
	extends: [
		'eslint:recommended',
		'plugin:vue/essential',
		'prettier',
		'plugin:prettier/recommended'
	],
	// NPM으로 설치하여 사용할 수 있는 확장 규칙. (ex. 코드 정리 플러그인 추가)
	plugins: ['prettier'],
	// 사용자가 임의로 규칙을 추가하여 검사에서 제외 또는 추가하는 속성
	rules: {
		'prettier/prettier': [
			'error',
			// 아래 규칙들은 개인 선호에 따라 prettier 문법 적용
			// https://prettier.io/docs/en/options.html
			{
				singleQuote: true,
				semi: false,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'none',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid'
			}
		],
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off'
	}
}
