username($name, $lastname, $array){
    $abc = 'abcdefghijklmnopqrstuvwxyz';
    $username = strtolower($lastname . $name[0]);
    $initialUserName=$username;
    $iterations=[0];
    $exist = false;

    do{
      $add = '';
      $exist = false;

      for($i = 0; $i<count($iterations); $i++){
        $add .= $abc[$iterations[$i]];
      }

      if(count($iterations)<2){
        // Comprobacion de existencia: -----------------------
        $exist = false;
        foreach($array as $value){
          if(strtolower($value) === $username) $exist = true;
        }

        if(!$exist) return $username;
        // ---------------------------------------------------
      }

      $username = $initialUserName . $add;

      for($i=0; $i<26; $i++){
        $username[strlen($username)-1] = $abc[$i];

        // Comprobacion de existencia: -----------------------
        $exist = false;
        foreach($array as $value){
          if(strtolower($value) === $username) $exist = true;
        }

        if(!$exist) return $username;
        // ---------------------------------------------------

        //$username = $initialUserName;

        if(count($iterations)>1){
          for($j = count($iterations); $j>0; $j--){
            if($iterations[$j-1]<25){
              $iterations[$j-1]++;
							break;
            }else{
              $iterations[$j-1]=0;
							if($j-1==0){
								array_push($iterations, 0);
								break;
							}
            }
          }
        }else{
          array_push($iterations, 0);
        }
      }
    }while($exist===true);
  }
