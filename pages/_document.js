import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="css/basic.css" />
                <link rel="stylesheet" href="css/layout.css" />
                <link rel="stylesheet" href="css/blogs.css" />
                <link rel="stylesheet" href="css/ionicons.css" />
                <link rel="stylesheet" href="css/magnific-popup.css" />
                <link rel="stylesheet" href="css/animate.css" />
                <link rel="stylesheet" href="css/gradient.css" />
                <link rel="stylesheet" href="css/giang-cv/skin.css" />
                <link rel="stylesheet" href="css/demos/demo-8-colors.css" />
                <link rel="stylesheet" href="css/giang-cv/bg.css" />
                <link rel="shortcut icon" href="images/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />

                {/* Hoa mai tết trang trí */}
                <div id='snowflakeContainer'>
                    <p className='snowflake'><img style={{ width: "20px" }} src="https://1.bp.blogspot.com/-CXx9jt2JMRk/Vq-Lh5fm88I/AAAAAAAASwo/XivooDn_oSY/s1600/hoamai.png" /></p>
                </div>
            </body>
        </Html>
    )
}