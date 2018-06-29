<?php 

    function getInfo($info){
        $info = trim($info, '"');
        $info = str_replace("\n", "<br /><br />", $info);
        return $info;
    }

    $portfolios = glob("portfolio/[0-9]", GLOB_ONLYDIR);

    for ($i = 1; $i <= count($portfolios); $i++) {
        $trigger = $i+3;
        $order;
        $dir = "portfolio/".$i;
        echo "<div id=\"trigger_".$trigger."\" class=\"trigger\"></div>";

        $contents = file_get_contents($dir."/data");
        $fields = preg_split('/(?:"[^"]*"|)\K\s*(,\s*|$)/', $contents);

        $year = $fields[0];
        $title = trim($fields[1], '"');
        $lang = trim($fields[2], '"');
        $member = trim($fields[3], '"');

        $info = getInfo(file_get_contents($dir."/info"));
        
        
        // echo $year;
        // echo $title;
        // echo $lang;
        // echo $member;

        if($i % 2 == 0){
            $order = "<div class=\"col-8\">
                        <div class=\"row\">
                            <div class=\"col-6 portfolio-showcase\">
                                <div class=\"row\">
                                    <div class=\"col-6 portfolio-showcase-wrapper\">
                                        <picture>
                                            <source media=\"(min-width: 768px)\" srcset=\"portfolio/".$i."/1-small-lg.jpg\">
                                            <img class=\"small-showcase\" src=\"portfolio/".$i."/1-small-s.jpg\" />
                                        </picture>
                                    </div>
                                    <div class=\"col-6 portfolio-showcase-wrapper\">
                                        <picture>
                                            <source media=\"(min-width: 768px)\" srcset=\"portfolio/".$i."/2-small-lg.jpg\">
                                            <img class=\"small-showcase\" src=\"portfolio/".$i."/2-small-s.jpg\" />
                                        </picture>
                                    </div>
                                    <div class=\"col-6 portfolio-showcase-wrapper\">
                                        <picture>
                                            <source media=\"(min-width: 768px)\" srcset=\"portfolio/".$i."/3-small-lg.jpg\">
                                            <img class=\"small-showcase\" src=\"portfolio/".$i."/3-small-s.jpg\" />
                                        </picture>
                                    </div>
                                    <div class=\"col-6 portfolio-showcase-wrapper\">
                                        <picture>
                                            <source media=\"(min-width: 768px)\" srcset=\"portfolio/".$i."/4-small-lg.jpg\">
                                            <img class=\"small-showcase\" src=\"portfolio/".$i."/4-small-s.jpg\" />
                                        </picture>
                                    </div>
                                </div>
                            </div>
                            <div class=\"col-6 portfolio-detail portfolio-right\">
                                Built with: " . $lang . "
                                <br/>
                                <br/>";
            
            if(!empty($member)){
                $order .= "Members: " . $member . "
                        <br/>
                        <br/>";
            }
            $order .= $info;
            $order .= "</div>
                </div>
            </div>";
        } else{
            $order = "<div class=\"col-8\">
                        <div class=\"row\">
                            <div class=\"col-6 portfolio-detail portfolio-left text-right\">
                                Built with: " . $lang . "
                                <br/>
                                <br/>";
            if(!empty($member)){
                $order .= "Members: " . $member . "
                        <br/>
                        <br/>";
            }
            $order .= $info;
            $order .= "</div>
                            <div class=\"col-6 portfolio-showcase\">
                                <div class=\"row\">
                                    <div class=\"col-6 portfolio-showcase-wrapper\">
                                        <picture>
                                            <source media=\"(min-width: 768px)\" srcset=\"portfolio/".$i."/1-small-lg.jpg\" alt=\"large thumb\">
                                            <img class=\"small-showcase\" src=\"portfolio/".$i."/1-small-s.jpg\" alt=\"small thumb\" />
                                        </picture>
                                    </div>
                                    <div class=\"col-6 portfolio-showcase-wrapper\">
                                        <picture>
                                            <source media=\"(min-width: 768px)\" srcset=\"portfolio/".$i."/2-small-lg.jpg\">
                                            <img class=\"small-showcase\" src=\"portfolio/".$i."/2-small-s.jpg\" />
                                        </picture>
                                    </div>
                                    <div class=\"col-6 portfolio-showcase-wrapper\">
                                        <picture>
                                            <source media=\"(min-width: 768px)\" srcset=\"portfolio/".$i."/3-small-lg.jpg\">
                                            <img class=\"small-showcase\" src=\"portfolio/".$i."/3-small-s.jpg\" />
                                        </picture>
                                    </div>
                                    <div class=\"col-6 portfolio-showcase-wrapper\">
                                        <picture>
                                            <source media=\"(min-width: 768px)\" srcset=\"portfolio/".$i."/4-small-lg.jpg\">
                                            <img class=\"small-showcase\" src=\"portfolio/".$i."/4-small-s.jpg\" />
                                        </picture>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>";
        }



        $div = "<div class=\"content portfolio full-content animation1 align-items-center d-flex\" id=\"content_".$trigger."\">
                    <div class=\"hidden port-id\">" . $i . "</div>
                    <div class=\"align-self-center h-100\">
                        <div class=\"row justify-content-center align-items-center\">
                            <div class=\"col-8\">
                                <p class=\"h1 text-left\">
                                    ." . $title . " - " . $year . "
                                </p>
                            </div>
                        </div>
                        <div class=\"row justify-content-center\">"
                            .$order.
                        "</div>
                    </div>
                </div>";

        echo $div;        
    }
