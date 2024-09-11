<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="images/favicon.png" rel="icon">
    <title>Thank you</title>

</head>

<body>

    <style>
        * {
            box-sizing: border-box;
            /* outline:1px solid ;*/
        }

        body {
            background: linear-gradient(to bottom, #ffffff 0%, #e1e8ed 100%);
            margin: 0;
            background-repeat: no-repeat;
            background-attachment: fixed;
            
        }

        .wrapper-1 {
            width: 100%;
            height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .wrapper-2 {
            padding: 30px;
            text-align: center;
        }

        h1 {
        font-family: 'Kaushan Script', cursive;
        font-size: 4em;
        letter-spacing: 3px;
        color: #7c2be6;
        margin: 0;
        margin-bottom: 20px;
        }

        .wrapper-2 p {
            margin: 0;
            font-size: 1.3em;
            color: #aaa;
            font-family: 'Source Sans Pro', sans-serif;
            letter-spacing: 1px;
        }

        .go-home {
            color: #fff;
            background: linear-gradient(315deg, #04bdce 0%, #7c2be6 74%);
            border: none;
            padding: 10px 50px;
            margin: 30px 0;
            border-radius: 30px;
            text-transform: capitalize;
            box-shadow: 0 10px 16px 1px rgba(174, 199, 251, 1);
            text-decoration: none;
            font-family: 'Kaushan Script';
        }
        .footer-like {
            margin-top: auto;
            background: #232f3f47;
            padding: 6px;
            text-align: center;
        }
        .footer-like p {
            margin: 0;
            padding: 4px;
            color: #232f3f;
            font-family: 'Source Sans Pro', sans-serif;
            letter-spacing: 1px;
        }
        p.recvie {
                margin-bottom: 30px;
            }
        .footer-like p a {
            text-decoration: none;
            color: #232f3f;
            font-weight: 600;
        }

        @media only screen and (min-width: 300px) and (max-width: 519px) {
            body{
                overflow-x: hidden;
            }
            h1 {
                font-size: 3.5em;
            }
            dotlottie-player {
                width: 350px !important;
                height: 350px !important;
            }
            .go-home {
                margin-bottom: 20px;
            }
        }

        @media (min-width:600px) {
            .content {
                max-width: 1000px;
                margin: 0 auto;
            }

            .wrapper-1 {
                height: initial;
                max-width: 620px;
                margin: 0 auto;
                margin-top: 50px;
                /* box-shadow: 4px 8px 40px 8px rgba(88, 146, 255, 0.2); */
            }

        }
    </style>


    <div class=content>
        <div class="wrapper-1">
            <div class="wrapper-2">
            <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> <dotlottie-player src="https://lottie.host/0bb61129-6da5-4e55-8940-69097b98dd5a/9iWQ5gdDDt.json" background="transparent" speed="1" style="width: 550px; height: 300px;" loop autoplay></dotlottie-player>
                


                <h1>Thank you !</h1>
                <!--<p>Thanks for subscribing to our news letter. </p>-->
                <!--<p class="recvie">you should receive a confirmation email soon </p>-->
                <a class="go-home" href="https://canvasillustrations.com/">
                    go home
                </a>
            </div>
            
        </div>
    </div>



    <link href="https://fonts.googleapis.com/css?family=Kaushan+Script|Source+Sans+Pro" rel="stylesheet">
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    <script>
                function setButtonURL(){
                //CUGICHelper.bubbleChat.toggle();
                $zopim.livechat.window.toggle();
                //LC_API.open_chat_window();
                // Tawk_API.toggle();
                //tidioChatApi.open();
                }
                
            </script> 
            
<script>
    zE(function() {
        $zopim.livechat.setOnUnreadMsgs(function(numUnread){
    
         if(numUnread > 0 && !$zopim.livechat.window.getDisplay()) {
          $zopim.livechat.window.show();
        }
      })
    });
</script>
</body>

</html>