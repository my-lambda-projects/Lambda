{/* <script language="javascript" type="text/javascript"> */}
    $(function() {
        $('a').click(function() {
            var originalSize = $('p').css('font-size'); // get the font size 
            var number = parseFloat(originalSize, 10); // that method will chop off any integer from the specified variable "originalSize"
            var unitOfMeasure = originalSize.slice(-2);// store the unit of measure, Pixle or Inch

            $('p').css('font-size', number / 1.2 + unitOfMeasure);
            if(this.id == 'larger'){$('p').css('font-size', number * 1.2 + unitOfMeasure);}// figure out which element is triggered
         });        
     });

//----------------------------------------------------------------------------------
