import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <title>Martin Template</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content />
                <meta name="keywords" content />
                <meta name="author" content />
                {/* Facebook and Twitter integration */}
                <meta property="og:title" content />
                <meta property="og:image" content />
                <meta property="og:url" content />
                <meta property="og:site_name" content />
                <meta property="og:description" content />
                <meta name="twitter:title" content />
                <meta name="twitter:image" content />
                <meta name="twitter:url" content />
                <meta name="twitter:card" content />
                {/* Place favicon.ico and apple-touch-icon.png in the root directory */}
                <link rel="shortcut icon" href="favicon.ico" />
                <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800" rel="stylesheet" />
                {/* Animate.css */}
                <link rel="stylesheet" href="css/animate.css" />
                {/* Icomoon Icon Fonts*/}
                <link rel="stylesheet" href="css/icomoon.css" />
                {/* Bootstrap  */}
                <link rel="stylesheet" href="css/bootstrap.css" />
                {/* Owl Carousel */}
                <link rel="stylesheet" href="css/owl.carousel.min.css" />
                <link rel="stylesheet" href="css/owl.theme.default.min.css" />
                {/* Magnific Popup */}
                <link rel="stylesheet" href="css/magnific-popup.css" />
                <link rel="stylesheet" href="css/style.css" />
                {/* Modernizr JS */}
                <script src="../public/js/modernizr-2.6.2.min.js"></script>

                {/* FOR IE9 below */}
                {/*[if lt IE 9]>
	
	<![endif]*/}
            </div>


        )
    }
}