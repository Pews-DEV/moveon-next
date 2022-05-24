import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	:root {
		--white: #fff;
		--background: #f2f3f5;
		--gary-line: #dcdde0;
		--text: #666;
		--text-highlight: #b3b9ff;
		--title: #2e384d;
		--red: #e83f5b;
		--green: #4cd62b;
		--blue: #5965e0;
		--blue-dark: #4953b8;
		--blue-twitter: #2aa9e0;
	}
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}


	@media(max-width: 1080px) {
		html {
			font-size: 93.75%;
		}
	}

	@media(max-width: 720px) {
		html {
			font-size: 87.5%;
		}
	}

	body {
		background: var(--background);
		color: var(--text);
	}

	body, input, textarea, button {
		font: 400 1rem "Inter", sans-serif;
	}

	body {
		cursor: pointer;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	.container {
		height: 100vh;
		max-width: 992;
		margin: 0 auto;
		padding: 2.5rem 2rem;

		display: flex;
		flex-direction: column;
	}
`
export default GlobalStyles
