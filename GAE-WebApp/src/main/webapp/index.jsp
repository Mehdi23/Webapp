<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
  <title>Ma page</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://code.jquery.com/mobile/1.1.0/jquery.mobile-1.1.0.min.css" />
  <script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
  <script src="http://code.jquery.com/mobile/1.1.0/jquery.mobile-1.1.0.min.js"></script>
</head>
<div data-role=page id=home>
  <div data-role=header>
    <h1>Home</h1>
  </div>
  <div data-role=content>
    <h1> New Car : </h1>  
    <div data-role="fieldcontain" class="ui-hide-label">
	   <label for="carId">Car identifier:</label>
	   <input type="text" name="CarId" id="carId" value="" placeholder="Car identifier"/>
    </div>
    <div data-role="fieldcontain" class="ui-hide-label">
	   <label for="username">license:</label>
	   <input type="text" name="carLicense" id="carLicense" value="" placeholder="License"/>
    </div>
    <div data-role="fieldcontain" class="ui-hide-label">
	   <label for="username">color:</label>
	   <input type="text" name="carColor" id="carColor" value="" placeholder="Color"/>
    </div>
  </div>
  <div data-role=footer>
    <h1>Home</h1>  
  </div>
</div>
</body>
</html>
</html>
<script src="/js/custom-scripting.js"></script>