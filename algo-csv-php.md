```
/**
* @Var $fileType
**/
$_form_upload = $this->createFormBuilder()->add('file', FileType::class)->getForm();

$your_big_array = array();
$_file = _form_upload['file']->getData();

/**
* Check if file
**/
if (($h = fopen("{$_file}", "r")) !== FALSE) {
   while (($data = fgetcsv($h, 1000, ",")) !== FALSE) {
     // set data equals to your init array
     $your_big_array[] = $data;
  }
  
  /**
  * Shift the first array if not needed
  **/
  array_shift($the_big_array);
  foreach ($the_big_array as $value) {
    // Your own logique to set data
    
    for ($a = 0; $a < count($the_big_array); $a++) {
      // your own logique to insert data
    }
  }
}

```
