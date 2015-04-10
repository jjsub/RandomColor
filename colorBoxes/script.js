/* Let the ramdon color begins */

var element     = document.querySelectAll(""),
    chroma      = [],
    nowChroma   = [],
    i;

    setTimeout(function(){
      
      for(i = 0; i < element.length; i ++){
          if( i == element.length-1){
              nowChroma[i] = chroma[0];
              chroma       = nowChroma;
          }

          else{

              nowChroma[i] = chroma[i+1];

          }
          
        element[i].style.color = nowChroma[i];
      }

    }, 1000);
