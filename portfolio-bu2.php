<?php 
    function getInfo($info){
        $info = trim($info, '"');
        $info = str_replace("\n", "<br /><br />", $info);
        return $info;
    }
    
    $id = $_GET['id'];
    $page_id = $id + 3;
    

    $dir = "portfolio/".$id;

    $port_imgs = "";
    $ports = glob($dir."/*", GLOB_ONLYDIR);

    if(!file_exists($dir)){
        echo "done";
        return;
    }

    echo "<div id=\"trigger_".$page_id."\" class=\"trigger\"></div>";

    for($i = 0; $i<count($ports); $i++){
        if($i == 4){
            break;
        }
        $imgs = glob($ports[$i]."/small*");
        $port_imgs .= "<div class=\"col-md-6 col-sm-12 portfolio-showcase-wrapper\">
                            <picture>
                                <source media=\"(min-width: 768px)\" srcset=\"".$imgs[0]."\">
                                <img class=\"small-showcase\" src=\"".$imgs[1]."\"/>
                            </picture>
                        </div>";
    }


    $contents = file_get_contents($dir."/data");
    $fields = preg_split('/(?:"[^"]*"|)\K\s*(,\s*|$)/', $contents);

    $year = $fields[0];
    $title = trim($fields[1], '"');
    $lang = trim($fields[2], '"');
    $member = trim($fields[3], '"');
    $link = trim($fields[4], '"');

    $info = getInfo(file_get_contents($dir."/info"));        
    

    if($id % 2 == 0){
        $order = "<div class=\"col-md-8 col-sm-12\">
                    <div class=\"row\">
                        <div class=\"col-md-6 col-sm-12 my-2 portfolio-showcase\">
                            <div class=\"row\">".$port_imgs."</div>
                        </div>
                        <div class=\"col-md-6 col-sm-12 my-2 portfolio-detail portfolio-right\">";
        if(!empty($link)){
        $order .="Github: <a href=\"" . $link . "\">Link</a>
                <br/>
                <br/>";
        }
        $order .= " Built with: " . $lang . "
                    <br/>
                    <br/>";
        
        if(!empty($member)){
            $order .= "Collaborators: " . $member . "
                    <br/>
                    <br/>";
        }
        $order .= $info;
        $order .= "</div>
            </div>
        </div>";
    } else{
        $order = "<div class=\"col-md-8 col-sm-12\">
                    <div class=\"row\">
                        <div class=\"col-md-6 col-sm-12 my-2 portfolio-detail portfolio-left text-right\">";
        if(!empty($link)){
            $order .="Github: <a href=\"" . $link . "\">Link</a>
                    <br/>
                    <br/>";
        }
        $order .= "Built with: " . $lang . "
                    <br/>
                    <br/>";
        if(!empty($member)){
            $order .= "Collaborators: " . $member . "
                    <br/>
                    <br/>";
        }
        $order .= $info;
        $order .= "</div>
                        <div class=\"col-md-6 col-sm-12 my-2 portfolio-showcase\">
                            <div class=\"row\">".$port_imgs."</div>
                        </div>
                    </div>
                </div>";
    }



    $div = "<div class=\"content portfolio full-content animation1 align-items-center d-flex\" id=\"content_".$page_id."\">
                <div class=\"my-auto\">
                    <div class=\"hidden port-id\">" . $id . "</div>
                    <div class=\"align-self-center h-100\">
                        <div class=\"row justify-content-center align-items-center mb-3 mt-3\">
                            <div class=\"col-md-8 col-sm-12\">
                                <p class=\"h1 text-left\">
                                    ." . $title . " - " . $year . "
                                </p>
                            </div>
                        </div>
                        <div class=\"row justify-content-center my-2\">"
                            .$order.
                        "</div>
                    </div>
                </div>
            </div>";

    echo $div;        

?>