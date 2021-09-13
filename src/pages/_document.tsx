import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang="pt-BR">
				<Head>
					<meta charSet="utf-8" />

					<link
						href="https://fonts.googleapis.com/css?family=Roboto:wgh@400;700;900t&display=swap"
						rel="stylesheet"
					/>

					<link rel="favicon icon" href="favicon.png" type="image/png" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
