<html>
<body>
<h2>Jersey RESTful Web Application! blala </h2>
<p><a href="webresources/myresource">Jersey resource</a>
<p>Visit the <a href="http://jersey.java.net">Project Jersey website</a>
for more information on Jersey!

<%@ page import ="org.mehdi.project.datastore.dao.CarDAO" %>

<% 
  CarDAO c = new CarDAO();
  String S = c.createCar(10, "license", 88);
  System.out.println(c.readCar(10).getLicense());
%>
</body>
</html>
