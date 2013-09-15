package org.mehdi.project.datastore.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.mehdi.project.datastore.dao.CarDAO;
import org.mehdi.project.datastore.entities.Car;


/**
 * Example resource class hosted at the URI path "/myresource"
 */
@Path("/myresource")
public class CarResource {

	CarDAO carDAO = new CarDAO();

	/**
	 * Method processing HTTP GET requests, producing "text/plain" MIME media
	 * type.
	 * 
	 * @return String that will be send back as a response of type "text/plain".
	 */
	@GET
	@Produces(MediaType.TEXT_HTML)
	public String sayHtmlHello() {
	    return "<html> " + "<title>" + "Hello Jersey" + "</title>"
	        + "<body><h1>" + "Hello Jersey" + "</body></h1>" + "</html> ";
	}

	@GET @Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public  Car findCarById(@PathParam("id") long id) {
		return carDAO.readCar(id);
	}

	@POST
	@Path("post")
	@Consumes("text/plain")
	public String addCar(@FormParam("id") long id,
			@FormParam("license") String license, @FormParam("color") int color) {
		try {
			CarDAO c = new CarDAO();
			return c.createCar(id, license, color);

		} catch (Exception e) {
			throw new WebApplicationException(e,
					Response.Status.INTERNAL_SERVER_ERROR);
		}
	}
}
