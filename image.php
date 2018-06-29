<?php 
    class Response{
        function response(){
            $this->file = "";
            $this->title = "";
        }
    }

    function moveImage($dir, $id){
        if($dir == 0){
            $ports = glob("portfolio/".$id."/*", GLOB_ONLYDIR);
            return count($ports);
        } else{
            return 1;
        }
    }


    $id = $_GET['id'];
    $img = $_GET['img'];
    $dir = $_GET['dir'];

    $resp = new Response();

    if(isset($dir)){
        if($dir == 0){
            $img --;
        } else{
            $img ++;
        }    
    }
    
    $check = true;
    while($check){
        $portfolios = glob("portfolio/".$id."/".$img."/large.*");
        if(count($portfolios) > 0){
            if(file_exists("portfolio/".$id."/".$img."/title")){
                $contents = file_get_contents("portfolio/".$id."/".$img."/title");
                $resp->title = $contents." (".$img."/".count(glob("portfolio/".$id."/*", GLOB_ONLYDIR)).")";
            } else{
                $resp->title = "(".$img."/".count(glob("portfolio/".$id."/*", GLOB_ONLYDIR)).")";
            }
            $resp->file = $portfolios[0];
            $check = false;
        } else{
            $img = moveImage($dir, $id);
        }
    }


    header('Content-Type: application/json');
    echo json_encode($resp);



?>