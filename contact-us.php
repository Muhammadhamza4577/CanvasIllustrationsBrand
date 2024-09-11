<?php include 'include/header.php';?>
    <div class="container-fluid hero-sec srvc-hero-sec">
        <div class="container">
            <div class="left">
                <!-- <h3></h3> -->
                <h1>Contact Us</h1>
                <p>Excited about what you see? Join our vibrant and creative illustration community today! Contact us now to start creating your exciting new illustrations.</p>
            </div>
            <div class="right">
                <div class="banner-gifboxs">
                    <div class="gifbox-column">
                        <div class="bnr-srvc ">
                            <img src="assets/images/contct.png" alt="" class="img-fluid" style="box-shadow:none;" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid contact-sec">
        <div class="container">
            <div class="left">
                <h1 class="main-heading">Contact Info</h1>
                <div class="contact-info-box">
                    <i class="fa-solid fa-phone mr-2"></i>
                    <span><a href="tel: 866-605-0889">Toll Free: 866-605-0889	</a></span>
                </div>
                <div class="contact-info-box">
                    <i class="fa-solid fa-envelope mr-2"></i>
                    <span><a href="mailto: info@canvasillustrations.com"><span>info@canvasillustrations.com</span></a></span>
                </div>
                <div class="contact-info-box">
                    <i class="fa-solid fa-location-dot mr-2"></i>
                    <span><a href="javascript:void(0)">13209 Kirkglen Dr Austin, TX 78727, USA</a></span>
                </div>
            </div>
            <div class="right">
                <h1 class="main-heading">Fill Out The Form</h1>
                <form action="sendmail.php" method="POST">
                    <div class="formrow">
                        <div class="form-group">
                            <input type="text" name="cn" placeholder="First Name" id="" required="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="lname" placeholder="Last Name" id="" />
                        </div>
                    </div>
                    <div class="formrow">
                        <div class="form-group">
                            <input type="email" name="em" placeholder="Email" id="" required="" />
                        </div>
                        <div class="form-group">
                            <input type="number" name="pn" placeholder="Phone" id="" required="" />
                        </div>
                    </div>
                    <div class="form-group">
                        <input type="text" name="msg" placeholder="Message" id="" required="" />
                    </div>
                    <button class="thm-btn2" type="submit">Send Message</button>

                    <input type="hidden" name="lead_area" value="for $Lead" />
                    <input type="hidden" name="lead_org_price" value="Lead" />
                    <input type="hidden" name="send" value="1" />
                    <input type="hidden" name="msg_op">


                    <!-- Email Source -->


                    <!--<input type="hidden" name="service_id"      value="5791" class="service_id">-->
                    <input type="hidden" name="lb_source" value="" />
                    <input type="hidden" name="lb_medium" value="" />
                    <input type="hidden" name="lb_campaign" value="" />
                    <input type="hidden" name="lb_source_off" value="" />
                    <input type="hidden" name="lb_source_cat" value="" />
                    <input type="hidden" name="lb_source_nam" value="" />
                    <input type="hidden" name="lb_source_ema" value="" />
                    <input type="hidden" name="lb_source_pho" value="" />
                    <input type="hidden" name="lb_source_con" value="" />
                    <input type="hidden" name="lb_gclid" value="" />
                    <input type="hidden" name="lb_utmid" value="" />

                    <!-- ip2Location -->


                    <input type="hidden" name="ip2loc_ip" value="2400:adc1:175:2b00:7460:ced3:2439:184d" />
                    <input type="hidden" name="ip2loc_isp" value="Cyber Internet Services (Private) Limited" />
                    <input type="hidden" name="ip2loc_org" value="Cyber Internet Services (Private) Limited" />
                    <input type="hidden" name="ip2loc_country" value="Pakistan" />
                    <input type="hidden" name="ip2loc_region" value="Sindh" />
                    <input type="hidden" name="ip2loc_city" value="Karachi" />
                    <input type="hidden" name="_csrf_token_" value="b9676f57540b9b4c36dbe791190a3bf8" />

                    <!-- Customer Info -->
                    <input type="hidden" name="fullpageurl" value="contact-us.html" />
                    <input type="hidden" name="pageurl" value="index.html" />
                </form>
            </div>
        </div>
    </div>

    <br /><br />

    <div class="container-fluid cta3">
        <div class="container">
            <div class="left">
                <lottie-player src="assets/js/ntMOdDqDeE.json" background="transparent.html" speed="1"
                    style="width: 300px; height: 300px;" loop autoplay></lottie-player>
            </div>
            <div class="right">
                <h1>Get In Touch</h1>
                <h3>Explore, Imagine, Create – Your Artistic Journey Begins Here!</h3>
                <a class="thm-btn1 popup-thm-btn" onclick="order_now_value(this)" name="for $Lead"
                    href="javascript:;">Contact Us Today!</a>
            </div>
        </div>
    </div>
    
    <script type='text/javascript' src='assets/assets/js/javascript1bf6.js?r=1779130712'></script>

    <?php include 'include/footer.php';?>