<?php
	/* Why we need this?
	 * create a error log to print what I get from the file
	 * */
	//$callBackLogFile = '/gt/savantcare.com/code/runenv-config/monitoring/from-test-callback.txt'; // for testing log
	//$output = "Accessed at: " . date('l jS \of F Y h:i:s A') . "\n";

	/* Write a php script that will fetch all the content from js file */
	//For multiple dir
    $output = "";
    $mainDir = "one-time";
    $fileInDir = scandir($mainDir);
    foreach($fileInDir as $singleDir){
        if( $singleDir != "." && $singleDir != ".."){
            $dir = $mainDir . "/" . $singleDir;
            if(is_dir($dir)){
                // For a single dir
                //$dir = "one-time/ehr";
                // check file exists or not
                if(file_exists($dir)){
                    /*
                     * scandir() scan the dir and returns the file name which exits on that directory
                     * return array
                     * */
                    $fileInDir = scandir($dir);
                    $mainResultSet = array();
                    foreach($fileInDir as $singleFile){
                        if( $singleFile != "." && $singleFile != ".."){
                            /*
                             * regular expression for fetching data which start with describe
                             * file get contents read the file and return data into string
                             * preg match return the data in an array
                             * */
                            $reForDescribe = "/describe\\('(.*?)'\\,\\s?+function\\(\\)/";
                            $strForDescribe = file_get_contents($dir."/".$singleFile);
                            preg_match_all($reForDescribe, $strForDescribe, $matchesForDescribe);

                            /*
                             * regular expression for fetching data which start with it
                             * file get contents read the file and return data into string
                             * preg match return the data in an array
                             * */
                            $reForIt = "/it\\('(.*?)'\\,\\s?+function\\(\\)/";
                            $strForIt = file_get_contents($dir."/".$singleFile);
                            preg_match_all($reForIt, $strForIt, $matchesForIt);
                            //print_r($matchesForIt);

                            $arResultOutput = array();

                            /*
                             * To create the main array
                             * return $mainResultSet
                             * */
                            foreach($matchesForIt[1] as $outputData){
                                $arResultOutput[$matchesForDescribe[1][0]][] = $outputData;
                            }
                            $mainResultSet[$singleDir][] = $arResultOutput;
                        }
                    }
                    $mainDirResult[] = $mainResultSet;
                }
            }

        }
    }

//print_r($mainDirResult);
/*
 * This section
 * Break the array into the string and replace it in a file.
 * */
$outResult = "";
foreach($mainDirResult as $mainDirResultSet){
    foreach($mainDirResultSet as $folderNameAsKey =>$mainResultSet){
        $outResult .= "##" . ucfirst($folderNameAsKey) . " portal<br>\n";
        foreach($mainResultSet as $mainResult){
            foreach($mainResult as $key => $value ){
                $outResult .= "####".$key."<br>\n";
                foreach($value as $k => $text){
                    $outResult .= $text."<br>\n";
                }
            }
        }
    }
}

//file_put_contents($callBackLogFile, $outResult); for testing log

$droneInManualCallbackUrl = "/gt/savantcare.com/sc-issues.wiki/manual/Chapter-5.5-Drone-Automated-Tests.md";
file_put_contents($droneInManualCallbackUrl, $outResult);


